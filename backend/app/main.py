"""Punctul de intrare al backend-ului FastAPI.

Porneste serverul cu:  uvicorn app.main:app --reload
Documentatia automata a API-ului:  http://localhost:8000/docs
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .config import settings
from .database import Base, engine

# Creeaza automat tabelele in baza de date (daca nu exista deja).
# Pentru proiecte mai serioase se folosesc "migrari" (ex: Alembic),
# dar pentru inceput asta e suficient.
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
