"""Schemele Pydantic = forma datelor care intra si ies prin API."""
from datetime import date, datetime

from pydantic import BaseModel


class CalculateRequest(BaseModel):
    """Ce trimite clientul ca sa calculeze."""
    name: str
    birth_date: date


class CalculateResponse(BaseModel):
    """Ce primeste clientul inapoi."""
    name: str
    birth_date: date
    life_path: int
    life_path_meaning: str
    expression: int
    expression_meaning: str
    day_energy: int
    summary: str


class CalculationItem(BaseModel):
    """Un calcul salvat (pentru lista cu cele recente)."""
    id: int
    name: str
    birth_date: date
    life_path: int
    expression: int
    created_at: datetime

    # Permite crearea direct dintr-un obiect SQLAlchemy.
    model_config = {"from_attributes": True}
