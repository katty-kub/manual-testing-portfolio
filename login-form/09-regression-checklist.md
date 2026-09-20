# Regression Checklist – Login Form QA

## 1. Účel dokumentu

Regression checklist slouží k ověření, že změna aplikace nebo oprava chyby nepoškodila dříve fungující části.

Regresní testování se provádí například:

- po opravě nalezené chyby,
- po změně validace formuláře,
- po změně přihlašovací logiky,
- po úpravě uživatelského rozhraní,
- před vydáním nové verze aplikace.

## 2. Vstupní podmínky

- Nová nebo opravená verze aplikace je dostupná.
- Smoke test byl úspěšně dokončen.
- Testovací účet existuje.
- Testovací prostředí je připravené.
- Je známý rozsah provedených změn.

## 3. Regresní checklist

| ID | Kontrolovaná oblast | Související test cases | Očekávaný výsledek | Stav |
| --- | --- | --- | --- | --- |
| REG-001 | Zobrazení přihlašovacího formuláře | TC-001 | Stránka a všechny prvky formuláře se správně zobrazí. | Not Run |
| REG-002 | Validace povinných polí | TC-003, TC-004, TC-005 | Prázdná povinná pole jsou správně odmítnuta. | Not Run |
| REG-003 | Validace formátu e-mailu | TC-006 | E-mail v neplatném formátu je odmítnut. | Not Run |
| REG-004 | Minimální délka hesla | TC-007, TC-008 | Sedm znaků je odmítnuto a osm znaků je přijato. | Not Run |
| REG-005 | Maximální délka hesla | TC-009, TC-010 | Dvacet znaků je přijato a dvacet jedna znaků je odmítnuto. | Not Run |
| REG-006 | Skrytí znaků hesla | TC-011 | Zadané heslo není na obrazovce čitelné. | Not Run |
| REG-007 | Přihlášení platnými údaji | TC-002 | Uživatel je přihlášený a přesměrovaný na `/dashboard`. | Not Run |
| REG-008 | Neplatné přihlašovací údaje | TC-012, TC-013 | Přihlášení je odmítnuto a zobrazí se správná chybová zpráva. | Not Run |
| REG-009 | Odeslání formuláře klávesou Enter | TC-014 | Formulář lze odeslat klávesou Enter. | Not Run |
| REG-010 | Odhlášení uživatele | TC-015 | Uživatel je odhlášený a přesměrovaný na `/login`. | Not Run |
| REG-011 | Ochrana dashboardu | TC-016 | Nepřihlášený uživatel nemá přístup na `/dashboard`. | Not Run |
| REG-012 | Přístupnost a použitelnost | TC-017, TC-018, TC-019 | Formulář lze ovládat klávesnicí a jeho texty jsou srozumitelné. | Not Run |
| REG-013 | Mobilní zobrazení a výkon | TC-020, TC-021 | Formulář je použitelný při šířce 360 px a výsledek se zobrazí do 2 sekund. | Not Run |
| REG-014 | Microsoft Edge | TC-022 | Přihlašovací formulář se v Microsoft Edge správně zobrazí a funguje. | Not Run |

## 4. Výběr testů podle změny

| Změněná oblast | Minimální doporučené kontroly |
| --- | --- |
| Vzhled formuláře | REG-001, REG-006, REG-012, REG-013, REG-014 |
| Validace e-mailu nebo hesla | REG-002 až REG-008 |
| Přihlašovací logika | REG-007 až REG-011 |
| Dashboard nebo odhlášení | REG-007, REG-010, REG-011 |
| Obecná nebo rozsáhlá změna | Celý regresní checklist |

## 5. Kritéria úspěchu

Regresní test je úspěšný, pokud:

- všechny vybrané kontroly skončí stavem `Passed`,
- nebyla nalezena nová chyba v dříve fungující části,
- opravená chyba se znovu neprojevila,
- nebyla nalezena chyba se závažností Critical nebo High.

## 6. Souhrn výsledků

| Stav | Počet |
| --- | ---: |
| Celkem kontrol | 14 |
| Passed | 0 |
| Failed | 0 |
| Blocked | 0 |
| Not Run | 14 |

## 7. Aktuální stav

Regresní test zatím nebyl proveden. Výsledky budou doplněny po změně nebo opravě testované aplikace.