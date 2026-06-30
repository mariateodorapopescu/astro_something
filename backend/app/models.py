"""Modelele = tabelele din baza de date, descrise in Python.

Acesta e doar un exemplu ("Item") ca sa ai un punct de plecare.
Il poti sterge sau modifica dupa cum ai nevoie.
"""
from sqlalchemy import Column, Integer, String

from .database import Base


class Item(Base):
    __tablename__ = "items"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    description = Column(String, nullable=True)
