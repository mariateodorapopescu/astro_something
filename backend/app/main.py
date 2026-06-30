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
from .models import (
    AscendantCalc,
    Calculation,
    ContactMessage,
    HumanDesignCalc,
    Partnership,
    Subscriber,
)
from .schemas import (
    AscendantRequest,
    AscendantResponse,
    CalculateRequest,
    CalculateResponse,
    CalculationItem,
    ContactRequest,
    HumanDesignRequest,
    HumanDesignResponse,
    OkResponse,
    PartnershipRequest,
    PartnershipResponse,
    SubscribeRequest,
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


@app.post("/api/human-design", response_model=HumanDesignResponse)
def human_design(req: HumanDesignRequest, db: Session = Depends(get_db)):
    """Calculeaza tipul de energie Human Design, il salveaza si il returneaza."""
    result = numerology.human_design(req.name, req.birth_date)
    db.add(HumanDesignCalc(name=req.name, energy_type=result["type"]))
    db.commit()
    return result


@app.post("/api/ascendant", response_model=AscendantResponse)
def ascendant(req: AscendantRequest, db: Session = Depends(get_db)):
    """Estimeaza semnul ascendent, il salveaza si il returneaza."""
    result = numerology.ascendant(req.birth_date, req.hour, req.place)
    db.add(AscendantCalc(sign=result["sign"]))
    db.commit()
    return result


@app.post("/api/subscribe", response_model=OkResponse)
def subscribe(req: SubscribeRequest, db: Session = Depends(get_db)):
    """Salveaza un email la newsletter (ignora duplicatele)."""
    exists = db.query(Subscriber).filter(Subscriber.email == req.email).first()
    if not exists:
        db.add(Subscriber(email=req.email))
        db.commit()
    return {"ok": True, "message": "Te-ai abonat cu succes!"}


@app.post("/api/contact", response_model=OkResponse)
def contact(req: ContactRequest, db: Session = Depends(get_db)):
    """Salveaza un mesaj de contact."""
    db.add(ContactMessage(
        name=req.name, email=req.email, subject=req.subject, message=req.message,
    ))
    db.commit()
    return {"ok": True, "message": "Mesajul tau a fost trimis!"}


@app.get("/api/calculations", response_model=list[CalculationItem])
def list_calculations(db: Session = Depends(get_db)):
    """Ultimele 10 calcule salvate (cele mai noi primele)."""
    return (
        db.query(Calculation)
        .order_by(Calculation.created_at.desc())
        .limit(10)
        .all()
    )
