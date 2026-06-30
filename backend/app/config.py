"""Citeste setarile aplicatiei din variabile de mediu / fisierul .env."""
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    # Adresa de conectare la baza de date PostgreSQL.
    # Format: postgresql://utilizator:parola@host:port/nume_baza
    database_url: str = "postgresql://app_user:app_password@localhost:5432/app_db"

    # De unde acceptam cereri (frontend-ul Angular ruleaza pe 4200).
    cors_origins: str = "http://localhost:4200"

    # Citeste automat din fisierul backend/.env daca exista.
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")


settings = Settings()
