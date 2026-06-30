"""Calcule simple de numerologie pe baza datei de nastere si a numelui.

Nu e "magie" — sunt doar reduceri de cifre, deterministe. Scopul e sa ai
un calcul real care produce mereu acelasi rezultat pentru aceeasi intrare.
"""
from datetime import date

# Numerele "maestru" nu se reduc mai departe in numerologie clasica.
MASTER_NUMBERS = {11, 22, 33}


def reduce_number(n: int, keep_master: bool = True) -> int:
    """Reduce un numar la o singura cifra adunand cifrele (ex: 27 -> 9)."""
    while n > 9 and not (keep_master and n in MASTER_NUMBERS):
        n = sum(int(d) for d in str(n))
    return n


def _digit_sum(n: int) -> int:
    return sum(int(d) for d in str(abs(n)))


def life_path(d: date) -> int:
    """Numarul caii vietii = reducerea sumei tuturor cifrelor din data nasterii."""
    total = _digit_sum(d.day) + _digit_sum(d.month) + _digit_sum(d.year)
    return reduce_number(total)


# Valoarea numerologica a literelor (sistem pitagoreic): a=1, b=2, ... i=9, j=1, ...
def expression_number(name: str) -> int:
    """Numarul expresiei = reducerea sumei valorilor literelor din nume."""
    total = 0
    for ch in name.lower():
        if ch.isalpha():
            # 'a'=0 -> 1, apoi ciclu de 9 (1..9)
            total += (ord(ch) - ord("a")) % 9 + 1
    return reduce_number(total) if total else 0


# Interpretari scurte (generice) pentru fiecare numar redus.
MEANINGS = {
    1: "Leadership, independenta si initiativa.",
    2: "Diplomatie, sensibilitate si colaborare.",
    3: "Creativitate, comunicare si bucurie.",
    4: "Structura, munca si stabilitate.",
    5: "Libertate, schimbare si aventura.",
    6: "Grija, responsabilitate si armonie.",
    7: "Introspectie, analiza si spiritualitate.",
    8: "Ambitie, putere si abundenta materiala.",
    9: "Compasiune, idealism si finalizare.",
    11: "Intuitie inalta si inspiratie (numar maestru).",
    22: "Constructor maestru — vise mari, puse in practica.",
    33: "Invatator maestru — vindecare si daruire.",
}


def compatibility(name1: str, d1: date, name2: str, d2: date) -> dict:
    """Compatibilitatea a doua persoane pe baza cailor vietii lor."""
    lp1 = life_path(d1)
    lp2 = life_path(d2)

    # Scor determinist: cu cat caile vietii sunt mai apropiate, cu atat mai mare.
    diff = abs(lp1 - lp2)
    score = max(40, round(100 - diff * 7))
    if lp1 == lp2:
        score = 96

    if score >= 85:
        label = "Compatibilitate excelenta"
    elif score >= 70:
        label = "Compatibilitate buna"
    elif score >= 55:
        label = "Compatibilitate echilibrata"
    else:
        label = "Compatibilitate provocatoare"

    return {
        "life_path1": lp1,
        "life_path2": lp2,
        "score": score,
        "label": label,
        "summary": (
            f"{name1} (calea vietii {lp1}) si {name2} (calea vietii {lp2}): "
            f"{label.lower()} — scor {score}/100."
        ),
    }


# --- Human Design (simplificat, determinist) ---
HD_TYPES = [
    ("Generator", "Wait to respond", "Sacral", "~37% din populatie"),
    ("Manifesting Generator", "Wait to respond, then inform", "Sacral", "~33% din populatie"),
    ("Projector", "Wait for the invitation", "Splenic / Emotional", "~20% din populatie"),
    ("Manifestor", "Inform before you act", "Emotional / Splenic", "~8% din populatie"),
    ("Reflector", "Wait a full lunar cycle", "Lunar", "~1% din populatie"),
]


def human_design(name: str, birth_date: date) -> dict:
    """Alege un tip de energie pe baza datei nasterii (determinist, demonstrativ)."""
    idx = (
        _digit_sum(birth_date.day)
        + _digit_sum(birth_date.month)
        + _digit_sum(birth_date.year)
    ) % len(HD_TYPES)
    type_name, strategy, authority, share = HD_TYPES[idx]
    return {
        "type": type_name,
        "strategy": strategy,
        "authority": authority,
        "population": share,
        "summary": f"{name}, tipul tau de energie este {type_name} — strategie: {strategy.lower()}.",
    }


# --- Ascendent / rising sign (simplificat, determinist) ---
ZODIAC = [
    "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
    "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces",
]


def ascendant(birth_date: date, hour: int, place: str) -> dict:
    """Estimeaza semnul ascendent. Ascendentul se schimba ~la 2 ore,
    deci rotim prin cele 12 semne in functie de ora + luna (demonstrativ)."""
    idx = (birth_date.month - 1 + (max(0, min(23, hour)) // 2)) % 12
    sign = ZODIAC[idx]
    return {
        "sign": sign,
        "summary": (
            f"Pe baza datei si orei nasterii in {place or 'locul indicat'}, "
            f"ascendentul tau estimat este {sign}."
        ),
    }


def calculate(name: str, birth_date: date) -> dict:
    """Calculul complet returnat clientului."""
    lp = life_path(birth_date)
    expr = expression_number(name)
    day_energy = reduce_number(_digit_sum(birth_date.day))
    return {
        "life_path": lp,
        "life_path_meaning": MEANINGS.get(lp, ""),
        "expression": expr,
        "expression_meaning": MEANINGS.get(expr, ""),
        "day_energy": day_energy,
        "summary": (
            f"{name}, harta ta porneste de la numarul caii vietii {lp} — "
            f"{MEANINGS.get(lp, '').lower()}"
        ),
    }
