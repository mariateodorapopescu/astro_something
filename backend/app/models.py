"""Modelele = tabelele din baza de date, descrise in Python (SQLAlchemy)."""
from datetime import datetime

from sqlalchemy import Column, Date, DateTime, Integer, String

from .database import Base


class User(Base):
    """Un cont de utilizator. Parola e salvata DOAR ca hash, niciodata in clar."""
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    password_hash = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)


class Calculation(Base):
    """Un calcul salvat: cine, ce data, ce numere au iesit."""
    __tablename__ = "calculations"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    birth_date = Column(Date, nullable=False)
    life_path = Column(Integer, nullable=False)
    expression = Column(Integer, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)


class Partnership(Base):
    """Un calcul de compatibilitate intre doua persoane."""
    __tablename__ = "partnerships"

    id = Column(Integer, primary_key=True, index=True)
    name1 = Column(String, nullable=False)
    name2 = Column(String, nullable=False)
    score = Column(Integer, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)


class HumanDesignCalc(Base):
    """Un calcul de Human Design."""
    __tablename__ = "human_designs"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    energy_type = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)


class AscendantCalc(Base):
    """Un calcul de ascendent."""
    __tablename__ = "ascendants"

    id = Column(Integer, primary_key=True, index=True)
    sign = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)


class Subscriber(Base):
    """Un abonat la newsletter."""
    __tablename__ = "subscribers"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)


class ContactMessage(Base):
    """Un mesaj trimis prin formularul de contact."""
    __tablename__ = "contact_messages"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    subject = Column(String, nullable=False)
    message = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
