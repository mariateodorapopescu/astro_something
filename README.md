# astro_something

Aplicatie web cu **Angular** (frontend) + **FastAPI / Python** (backend) + **PostgreSQL** (baza de date).

Acest README e si un mic tutorial pentru cineva care n-a mai lucrat cu Angular, Python sau Postgres pana acum. Citeste pe rand. 🙂

---

## Ce e in proiect (structura)

```
astro_something/
├── frontend/            → aplicatia Angular (interfata, ce vede userul)
│   ├── src/app/         → codul tau (componente, servicii)
│   └── proxy.conf.json  → trimite apelurile /api catre backend
├── backend/             → API-ul in Python (FastAPI)
│   ├── app/main.py      → punctul de pornire al serverului
│   ├── app/database.py  → conexiunea la Postgres
│   └── requirements.txt → librariile Python necesare
├── docker-compose.yml   → porneste baza de date Postgres cu o comanda
└── README.md            → fisierul asta
```

Cele trei parti sunt independente: poti lucra **doar la frontend** la inceput, si adaugi backend + baza de date cand esti gata.

---

## 1. Frontend-ul Angular (incepe de aici)

### Ce e Angular, pe scurt
Angular e un framework pentru construit interfete web. Pagina e impartita in **componente** (bucati reutilizabile). Fiecare componenta are de obicei 3 fisiere:
- `nume.ts`   → logica (TypeScript)
- `nume.html` → ce se afiseaza
- `nume.scss` → cum arata (stiluri)

Fisierele principale sunt in `frontend/src/app/`. Pagina de start e in `app.html` / `app.ts` / `app.scss`.

### Cum il pornesti

```bash
cd frontend
npm install          # se ruleaza o singura data, descarca librariile
npm start            # porneste aplicatia
```

Apoi deschide in browser: **http://localhost:4200**
Cand modifici un fisier si salvezi, pagina se reincarca singura. ✨

### Comenzi utile

| Comanda | Ce face |
|---|---|
| `npm start` | porneste aplicatia in mod dezvoltare (port 4200) |
| `npm run build` | construieste varianta finala (in `frontend/dist/`) |
| `npm test` | ruleaza testele |
| `npx ng generate component nume` | creeaza o componenta noua |

### Cum adaugi o pagina noua (exemplu)
```bash
cd frontend
npx ng generate component pages/despre
```
Apoi o legi intr-o ruta in `src/app/app.routes.ts`:
```ts
import { Despre } from './pages/despre/despre';

export const routes: Routes = [
  { path: 'despre', component: Despre },
];
```
Si o accesezi la `http://localhost:4200/despre`.

---

## 2. Baza de date PostgreSQL (cu Docker)

Nu trebuie sa instalezi nimic manual — Docker se ocupa de tot.

```bash
# din folderul principal (astro_something/)
docker compose up -d      # porneste Postgres in fundal
docker compose down       # il opreste cand ai terminat
```

Date de conectare (deja configurate):
- host: `localhost`, port: `5432`
- user: `app_user`, parola: `app_password`, baza: `app_db`

Datele se salveaza in folderul `postgres-data/` (ignorat de git), deci nu le pierzi cand opresti containerul.

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

Backend-ul ruleaza pe **http://localhost:8000**, iar documentatia automata a API-ului (super utila!) e la **http://localhost:8000/docs**.

> Inainte sa pornesti backend-ul, asigura-te ca baza de date ruleaza (`docker compose up -d`).

### Cum vorbesc frontend-ul si backend-ul?
In Angular faci pur si simplu un apel catre `/api/...` (vezi `frontend/src/app/api.service.ts`). Datorita fisierului `proxy.conf.json`, apelul ajunge automat la backend-ul de pe portul 8000. Pe pagina de start vei vedea scris **Backend: ok** cu verde cand totul e conectat.

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
