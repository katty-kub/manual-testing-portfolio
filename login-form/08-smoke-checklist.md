# Smoke Checklist – Login Form QA

## 1. Účel dokumentu

Smoke checklist slouží k rychlému ověření, že nejdůležitější funkce aplikace fungují a aplikace je připravená na podrobnější testování.

Smoke test se provádí například:

- po nasazení nové verze aplikace,
- před zahájením kompletního testovacího cyklu,
- po důležité opravě nebo změně.

## 2. Vstupní podmínky

- Aplikace je spuštěná.
- Přihlašovací stránka je dostupná.
- Testovací účet existuje.
- Testovací prostředí je připravené.

## 3. Testovací data

| Pole | Hodnota |
| --- | --- |
| Platný e-mail | `test@test.cz` |
| Platné heslo | `Heslo123` |
| Nesprávné heslo | `Spatne123` |

## 4. Smoke checklist

| ID | Kontrola | Související test case | Očekávaný výsledek | Stav |
| --- | --- | --- | --- | --- |
| SMK-001 | Otevření stránky `/login` a zobrazení formuláře | TC-001 | Přihlašovací formulář se správně zobrazí. | Not Run |
| SMK-002 | Odeslání formuláře s prázdnými poli | TC-003 | Formulář se neodešle a zobrazí se upozornění na povinná pole. | Not Run |
| SMK-003 | Přihlášení platnými údaji | TC-002 | Uživatel je přihlášený a přesměrovaný na `/dashboard`. | Not Run |
| SMK-004 | Přihlášení nesprávným heslem | TC-013 | Zobrazí se zpráva `Neplatný e-mail nebo heslo.` | Not Run |
| SMK-005 | Odhlášení přihlášeného uživatele | TC-015 | Uživatel je odhlášený a přesměrovaný na `/login`. | Not Run |
| SMK-006 | Přístup nepřihlášeného uživatele na `/dashboard` | TC-016 | Uživatel je přesměrovaný na `/login` a dashboard se nezobrazí. | Not Run |

## 5. Kritéria úspěchu

Smoke test je úspěšný, pokud:

- všechny položky mají stav `Passed`,
- hlavní funkce přihlášení a odhlášení fungují,
- nebyla nalezena chyba se závažností Critical nebo High.

Pokud některá důležitá položka skončí stavem `Failed` nebo `Blocked`, podrobné testování může být pozastaveno do odstranění problému.

## 6. Souhrn výsledků

| Stav | Počet |
| --- | ---: |
| Celkem kontrol | 6 |
| Passed | 0 |
| Failed | 0 |
| Blocked | 0 |
| Not Run | 6 |

## 7. Aktuální stav

Smoke test zatím nebyl proveden. Výsledky budou doplněny po spuštění testované aplikace.