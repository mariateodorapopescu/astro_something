"""Punctul de intrare al backend-ului FastAPI.

Porneste serverul cu:  uvicorn app.main:app --reload
Documentatia automata a API-ului:  http://localhost:8000/docs
"""
from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from . import numerology
from .config import settings
from .database import Base, engine, get_db
from .models import Calculation, Partnership
from .schemas import (
    CalculateRequest,
    CalculateResponse,
    CalculationItem,
    PartnershipRequest,
    PartnershipResponse,
)

# Creeaza automat tabelele in baza de date (daca nu exista deja).
Base.metadata.create_all(bind=engine)

app = FastAPI(title="astro_something API")

# CORS = permite frontend-ului Angular (alt port) sa apeleze acest API.
app.add_middleware(
    CORSMiddleware,
    allow_origins=[o.strip() for o in settings.cors_origins.split(",")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/health")
def health():
    """Endpoint simplu ca sa verifici ca backend-ul traieste."""
    return {"status": "ok"}


@app.post("/api/calculate", response_model=CalculateResponse)
def calculate(req: CalculateRequest, db: Session = Depends(get_db)):
    """Calculeaza numerele din data nasterii, le salveaza si le returneaza."""
    result = numerology.calculate(req.name, req.birth_date)

    # Salveaza in baza de date.
    row = Calculation(
        name=req.name,
        birth_date=req.birth_date,
        life_path=result["life_path"],
        expression=result["expression"],
    )
    db.add(row)
    db.commit()

    return {"name": req.name, "birth_date": req.birth_date, **result}


@app.post("/api/calculate-partnership", response_model=PartnershipResponse)
def calculate_partnership(req: PartnershipRequest, db: Session = Depends(get_db)):
    """Calculeaza compatibilitatea a doua persoane, o salveaza si o returneaza."""
    result = numerology.compatibility(
        req.name1, req.birth_date1, req.name2, req.birth_date2
    )

    row = Partnership(name1=req.name1, name2=req.name2, score=result["score"])
    db.add(row)
    db.commit()

    return result


@app.get("/api/calculations", response_model=list[CalculationItem])
def list_calculations(db: Session = Depends(get_db)):
    """Ultimele 10 calcule salvate (cele mai noi primele)."""
    return (
        db.query(Calculation)
        .order_by(Calculation.created_at.desc())
        .limit(10)
        .all()
    )
