"""Modelele = tabelele din baza de date, descrise in Python (SQLAlchemy)."""
from datetime import datetime

from sqlalchemy import Column, Date, DateTime, Integer, String

from .database import Base


class Calculation(Base):
    """Un calcul salvat: cine, ce data, ce numere au iesit."""
    __tablename__ = "calculations"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    birth_date = Column(Date, nullable=False)
    life_path = Column(Integer, nullable=False)
    expression = Column(Integer, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
