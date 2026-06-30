"""Schemele Pydantic = forma datelor care intra si ies prin API."""
from datetime import date, datetime

from pydantic import BaseModel, Field


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


class PartnershipRequest(BaseModel):
    """Datele celor doua persoane pentru compatibilitate."""
    name1: str
    birth_date1: date
    name2: str
    birth_date2: date


class PartnershipResponse(BaseModel):
    life_path1: int
    life_path2: int
    score: int
    label: str
    summary: str


class HumanDesignRequest(BaseModel):
    name: str
    birth_date: date


class HumanDesignResponse(BaseModel):
    type: str
    strategy: str
    authority: str
    population: str
    summary: str


class AscendantRequest(BaseModel):
    birth_date: date
    hour: int = 0
    place: str = ""


class AscendantResponse(BaseModel):
    sign: str
    summary: str


class SubscribeRequest(BaseModel):
    email: str


class ContactRequest(BaseModel):
    name: str
    email: str
    subject: str
    message: str
    category: str = ""


class OkResponse(BaseModel):
    ok: bool
    message: str


class RegisterRequest(BaseModel):
    name: str
    email: str
    password: str = Field(min_length=8)


class LoginRequest(BaseModel):
    email: str
    password: str


class UserOut(BaseModel):
    """Datele publice ale unui user — FARA parola/hash."""
    id: int
    name: str
    email: str

    model_config = {"from_attributes": True}


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: UserOut


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
