# ASTRA.app

Aplicatie web full-stack: **Angular** (frontend) + **FastAPI / Python** (backend) + **PostgreSQL** (baza de date).

Un calculator de "harta cosmica" (numerologie + astrologie): completezi data nasterii si primesti o analiza personala. Are si cont de utilizator cu autentificare reala.

Acest README e si un mic tutorial pentru cineva care n-a mai lucrat cu Angular, Python sau Postgres pana acum. Citeste pe rand, nu e nimic complicat. 🙂

> ⚠️ **Textul de pe pagini e generic (placeholder).** Inlocuieste-l cu continutul tau. Paginile legale (Privacy, Terms etc.) sunt sabloane, NU text legal real.

---

## Cuprins

1. [Ce e in proiect (structura)](#ce-e-in-proiect-structura)
2. [Pornire rapida (TL;DR)](#pornire-rapida-tldr)
3. [Frontend-ul Angular](#1-frontend-ul-angular-incepe-de-aici)
4. [Baza de date PostgreSQL](#2-baza-de-date-postgresql)
5. [Backend-ul Python (FastAPI)](#3-backend-ul-python-fastapi)
6. [Cum vorbesc intre ele (proxy)](#cum-vorbesc-frontend-ul-si-backend-ul)
7. [Autentificare (login / cont)](#4-autentificare-login--cont)
8. [Lista de pagini si de endpoint-uri](#lista-de-pagini-si-endpoint-uri)
9. [Cum adaugi un formular legat la backend](#cum-adaugi-un-formular-nou-legat-la-backend)
10. [Git — pe scurt](#git--pe-scurt)

---

## Ce e in proiect (structura)

```
astro_something/
├── frontend/                  → aplicatia Angular (interfata, ce vede userul)
│   ├── src/app/
│   │   ├── pages/             → o pagina = o ruta (home, login, account, blog…)
│   │   ├── sections/          → bucati reutilizabile (navbar, footer, hero…)
│   │   ├── app.routes.ts      → harta rutelor (ce pagina la ce adresa)
│   │   ├── app.config.ts      → configurarea aplicatiei (HttpClient, interceptor)
│   │   ├── api.service.ts     → apelurile catre backend (/api/calculate etc.)
│   │   ├── auth.service.ts    → login / register / logout / token
│   │   ├── auth.interceptor.ts→ ataseaza token-ul la cererile catre /api
│   │   ├── auth.guard.ts      → protejeaza rutele care cer cont
│   │   └── theme.service.ts   → tema light/dark (salvata)
│   └── proxy.conf.json        → trimite apelurile /api catre backend
├── backend/                   → API-ul in Python (FastAPI)
│   └── app/
│       ├── main.py            → punctul de pornire + toate endpoint-urile
│       ├── database.py        → conexiunea la Postgres (SQLAlchemy)
│       ├── models.py          → tabelele (User, Calculation, …)
│       ├── schemas.py         → forma datelor trimise/primite (Pydantic)
│       ├── numerology.py      → calculele reale (life path, compatibilitate…)
│       ├── auth.py            → bcrypt (parole) + JWT (token-uri)
│       └── config.py          → setarile (citite din .env)
├── docker-compose.yml         → porneste baza de date Postgres cu o comanda
└── README.md                  → fisierul asta
```

Cele trei parti sunt independente: poti lucra **doar la frontend** la inceput si adaugi backend + baza de date cand esti gata.

---

## Pornire rapida (TL;DR)

Daca vrei doar sa pornesti tot, deschide **3 terminale**:

```bash
# Terminal 1 — baza de date
docker compose up -d

# Terminal 2 — backend
cd backend
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
uvicorn app.main:app --reload

# Terminal 3 — frontend
cd frontend
npm install
npm start
```

Apoi deschide **http://localhost:4200**. (Pasii cu `venv`, `pip install`, `npm install` si `cp .env` se fac o singura data; data viitoare sari peste ei.)

> Vrei doar design, fara backend? Ruleaza doar Terminal 3. Aplicatia merge; doar formularele care cer backend vor da eroare blanda.

---

## 1. Frontend-ul Angular (incepe de aici)

### Ce e Angular, pe scurt
Angular e un framework pentru construit interfete web. Pagina e impartita in **componente** (bucati reutilizabile). Fiecare componenta are de obicei:
- `nume.ts`   → logica (TypeScript)
- `nume.html` → ce se afiseaza

In proiect, **paginile** sunt in `frontend/src/app/pages/` si **bucatile reutilizabile** (navbar, footer, sectiuni) in `frontend/src/app/sections/`.

> Folosim Angular modern: componente "standalone", **signals** pentru stare, si `@if` / `@for` direct in HTML. Stilizarea e cu **Tailwind CSS** (clasele scrise direct in HTML, ex. `class="rounded-xl bg-violet-600"`).

### Cum il pornesti

```bash
cd frontend
npm install          # o singura data, descarca librariile
npm start            # porneste aplicatia (port 4200)
```

Deschide **http://localhost:4200**. Cand modifici un fisier si salvezi, pagina se reincarca singura. ✨

### Comenzi utile

| Comanda | Ce face |
|---|---|
| `npm start` | porneste aplicatia in mod dezvoltare (port 4200) |
| `npm run build` | construieste varianta finala (in `frontend/dist/`) |
| `npx ng generate component pages/nume` | creeaza o pagina noua |

---

## 2. Baza de date PostgreSQL

Nu trebuie sa instalezi nimic manual — Docker se ocupa de tot.

```bash
# din folderul principal (astro_something/)
docker compose up -d      # porneste Postgres in fundal
docker compose down       # il opreste cand ai terminat
```

Date de conectare (deja configurate, in `docker-compose.yml` si `.env`):
- host: `localhost`, port: `5432`
- user: `app_user`, parola: `app_password`, baza: `app_db`

Tabelele se creeaza automat la pornirea backend-ului (din `models.py`). Datele se salveaza in `postgres-data/` (ignorat de git), deci nu le pierzi cand opresti containerul.

---

## 3. Backend-ul Python (FastAPI)

### Cum il pornesti

```bash
cd backend
python3 -m venv .venv              # creeaza un "mediu virtual" (o singura data)
source .venv/bin/activate          # il activezi (pe Windows: .venv\Scripts\activate)
pip install -r requirements.txt    # instaleaza librariile (o singura data)

cp .env.example .env               # creeaza fisierul cu setari (o singura data)

uvicorn app.main:app --reload      # porneste serverul
```

Backend-ul ruleaza pe **http://localhost:8000**, iar documentatia automata a API-ului (super utila, poti testa endpoint-urile direct din browser!) e la **http://localhost:8000/docs**.

> Inainte sa pornesti backend-ul, asigura-te ca baza de date ruleaza (`docker compose up -d`).

### Cum e organizat backend-ul
- **`main.py`** — defineste toate endpoint-urile (`/api/...`).
- **`models.py`** — tabelele din baza de date (clase SQLAlchemy).
- **`schemas.py`** — forma datelor de intrare/iesire (Pydantic; valideaza automat).
- **`numerology.py`** — calculele propriu-zise (numere, compatibilitate, etc.).
- **`auth.py`** — criptarea parolelor (bcrypt) si token-urile (JWT).
- **`config.py`** — setarile, citite din `.env`.

---

## Cum vorbesc frontend-ul si backend-ul?

In Angular faci un apel catre `/api/...` (vezi `frontend/src/app/api.service.ts`). Datorita fisierului `proxy.conf.json`, apelul ajunge automat la backend-ul de pe portul 8000 — fara sa scrii adresa completa nicaieri.

```
Browser  →  Angular (4200)  →  /api/...  ──proxy──►  FastAPI (8000)  →  Postgres (5432)
```

Pe pagina de start vezi **Backend: ok** cu verde cand totul e conectat.

---

## 4. Autentificare (login / cont)

Aplicatia are cont de utilizator cu securitate reala — nu doar de fatada.

**Cum e securizat:**
- Parolele se cripteaza cu **bcrypt** inainte sa fie salvate. In baza de date ajunge doar un hash (ex. `$2b$12$...`), **niciodata parola in clar**.
- La login primesti un **token JWT** semnat, cu expirare. Token-ul se pastreaza in `localStorage` (ramai logat dupa refresh).
- La fiecare cerere catre `/api`, `auth.interceptor.ts` ataseaza automat token-ul (`Authorization: Bearer <token>`).
- Rutele protejate (ex. `/api/me`) verifica token-ul pe server prin `get_current_user` din `auth.py`.
- Pagina `/account` e pazita de `auth.guard.ts`: daca nu esti logat, te trimite la `/login`.

**Cum curge totul:**
```
Register/Login  →  backend verifica  →  intoarce token + user  →  AuthService salveaza
       →  navbar arata "👋 Nume"  →  /account cheama /api/me  →  afiseaza datele de pe server
```

**De facut inainte de productie:** schimba `jwt_secret` din `backend/app/config.py` (ideal printr-o variabila de mediu in `.env`) cu un secret lung si aleatoriu. Valoarea actuala e doar pentru development.

---

## Lista de pagini si endpoint-uri

### Pagini (frontend)

| Ruta | Pagina |
|---|---|
| `/` | Individual Matrix (home, calculatorul principal) |
| `/partnership-matrix` | Compatibilitate in cuplu |
| `/child-matrix` | Harta pentru copil |
| `/human-design` | Human Design |
| `/pricing` | Preturi |
| `/horoscope` | Horoscop zilnic |
| `/ascendant-calculator` | Calculator ascendent |
| `/tarot` | Tarot online |
| `/knowledge` | Centru de cunostinte |
| `/blog`, `/blog/:slug` | Blog (lista + articol) |
| `/contact`, `/help` | Contact, Ajutor |
| `/login`, `/register` | Autentificare, Cont nou |
| `/account` | Contul meu (**protejat** — cere login) |
| `/about`, `/privacy-policy`, `/cookie-policy`, `/terms-of-service`, `/legal-disclaimer` | Pagini info / legale |

### Endpoint-uri (backend)

| Metoda | Ruta | Ce face |
|---|---|---|
| `GET` | `/api/health` | verifica daca backend-ul traieste |
| `POST` | `/api/register` | cont nou (201; 409 daca emailul exista deja) |
| `POST` | `/api/login` | autentificare (401 la date gresite) |
| `GET` | `/api/me` | datele userului curent (**cere token**) |
| `POST` | `/api/calculate` | calcul individual |
| `POST` | `/api/calculate-partnership` | compatibilitate cuplu |
| `POST` | `/api/human-design` | Human Design |
| `POST` | `/api/ascendant` | ascendent |
| `POST` | `/api/subscribe` | abonare newsletter |
| `POST` | `/api/contact` | mesaj din formularul de contact |
| `GET` | `/api/calculations` | ultimele calcule salvate |

> Toate sunt vizibile si testabile la **http://localhost:8000/docs**.

---

## Cum adaugi un formular nou legat la backend

Reteta scurta, urmand ce e deja in cod:

1. **Backend — un model** (daca vrei sa salvezi in baza): adauga o clasa in `backend/app/models.py`.
2. **Backend — forma datelor**: adauga schemele de request/response in `backend/app/schemas.py`.
3. **Backend — endpoint-ul**: adauga `@app.post("/api/ceva")` in `backend/app/main.py`.
4. **Frontend — apelul**: adauga o metoda in `frontend/src/app/api.service.ts` (`this.http.post('/api/ceva', date)`).
5. **Frontend — componenta**: injecteaza `ApiService`, leaga formularul (`[(ngModel)]`), si afiseaza rezultatul cu signals (`loading` / `error` / `result`).

Te poti uita la perechea `home` (frontend) ↔ `/api/calculate` (backend) ca exemplu complet.

---

## Ordinea recomandata cand pornesti la lucru

1. `docker compose up -d`  (baza de date)
2. intr-un terminal: `cd backend && source .venv/bin/activate && uvicorn app.main:app --reload`
3. in alt terminal: `cd frontend && npm start`
4. deschide http://localhost:4200

Daca vrei sa lucrezi doar la design, e suficient pasul 3 si 4.

---

## Git — pe scurt

```bash
git add .
git commit -m "descriere scurta a ce ai schimbat"
git push
```

Fisierele grele sau cu secrete (`node_modules/`, `.venv/`, `.env`, `postgres-data/`) sunt deja in `.gitignore`, deci nu ajung pe git. ✅
