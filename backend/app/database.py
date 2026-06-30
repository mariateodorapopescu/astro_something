"""Configurarea conexiunii la baza de date cu SQLAlchemy."""
from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker

from .config import settings

# Unele platforme de hosting (ex. Render, Heroku) dau adresa bazei ca
# "postgres://...", insa SQLAlchemy modern cere "postgresql://...".
# Corectam automat ca sa mearga si local, si in productie.
database_url = settings.database_url
if database_url.startswith("postgres://"):
    database_url = database_url.replace("postgres://", "postgresql://", 1)

# "engine" = motorul care tine legatura cu PostgreSQL.
engine = create_engine(database_url, pool_pre_ping=True)

# Fiecare cerere care atinge baza de date deschide o "sesiune".
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Toate tabelele (modelele) vor mosteni din aceasta clasa.
Base = declarative_base()


def get_db():
    """Da o sesiune de baza de date si o inchide automat la final.

    Se foloseste in endpoint-uri asa: db = Depends(get_db)
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
