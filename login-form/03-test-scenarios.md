# Testovací scénáře – Login Form QA

## 1\. Účel dokumentu

Tento dokument obsahuje přehled testovacích scénářů pro přihlašovací formulář, uživatelský dashboard a odhlášení.

Testovací scénáře stručně popisují, co bude testováno. Podrobné kroky, testovací data a očekávané výsledky budou uvedeny v samostatných test cases.

## 2\. Testovací scénáře

| ID | Testovací scénář | Typ testu | Priorita | Pokryté požadavky |
| --- | --- | --- | --- | --- |
| TS-001 | Ověřit dostupnost stránky `/login` | Pozitivní, smoke | Vysoká | FR-001 |
| TS-002 | Ověřit zobrazení polí E-mail a Heslo a tlačítka Přihlásit se | Pozitivní, smoke | Vysoká | FR-002 |
| TS-003 | Ověřit odeslání formuláře s oběma prázdnými poli | Negativní | Vysoká | FR-003 |
| TS-004 | Ověřit odeslání formuláře s prázdným e-mailem | Negativní | Vysoká | FR-003 |
| TS-005 | Ověřit odeslání formuláře s prázdným heslem | Negativní | Vysoká | FR-003 |
| TS-006 | Ověřit zadání e-mailu v neplatném formátu | Negativní | Vysoká | FR-004 |
| TS-007 | Ověřit heslo obsahující 7 znaků | Hraniční, negativní | Střední | FR-005 |
| TS-008 | Ověřit heslo obsahující přesně 8 znaků | Hraniční, pozitivní | Střední | FR-005 |
| TS-009 | Ověřit heslo obsahující přesně 20 znaků | Hraniční, pozitivní | Střední | FR-005 |
| TS-010 | Ověřit heslo obsahující 21 znaků | Hraniční, negativní | Střední | FR-005 |
| TS-011 | Ověřit skrytí znaků v poli Heslo | Pozitivní | Střední | FR-006 |
| TS-012 | Ověřit přihlášení platným e-mailem a heslem | Pozitivní, smoke | Vysoká | FR-007, FR-008 |
| TS-013 | Ověřit přihlášení neexistujícím e-mailem | Negativní | Vysoká | FR-009, FR-010 |
| TS-014 | Ověřit přihlášení platným e-mailem a nesprávným heslem | Negativní | Vysoká | FR-009, FR-010 |
| TS-015 | Ověřit odeslání formuláře kliknutím na tlačítko Přihlásit se | Pozitivní | Vysoká | FR-011 |
| TS-016 | Ověřit odeslání formuláře klávesou Enter | Pozitivní | Střední | FR-012 |
| TS-017 | Ověřit odhlášení přihlášeného uživatele | Pozitivní, smoke | Vysoká | FR-013, FR-014 |
| TS-018 | Ověřit přístup nepřihlášeného uživatele na `/dashboard` | Negativní | Vysoká | FR-015 |
| TS-019 | Ověřit ovládání formuláře pouze pomocí klávesnice | Přístupnost | Střední | NFR-001 |
| TS-020 | Ověřit srozumitelnost popisků formulářových polí | Přístupnost | Střední | NFR-002 |
| TS-021 | Ověřit čitelnost a srozumitelnost chybových zpráv | Použitelnost | Střední | NFR-003 |
| TS-022 | Ověřit zobrazení formuláře na mobilním zařízení o šířce 360 px | Responzivita | Střední | NFR-004 |
| TS-023 | Ověřit zobrazení výsledku přihlášení do 2 sekund | Výkon | Nízká | NFR-005 |
| TS-024 | Ověřit základní přihlášení v prohlížeči Microsoft Edge | Cross-browser | Střední | FR-007, NFR-004 |

## 3\. Rozdělení podle priority

### Vysoká priorita

Scénáře s vysokou prioritou ověřují hlavní funkce aplikace:

-   dostupnost přihlašovací stránky,

-   zobrazení formuláře,

-   povinná pole,

-   validaci e-mailu,

-   úspěšné a neúspěšné přihlášení,

-   odhlášení,

-   ochranu dashboardu.

### Střední priorita

Scénáře se střední prioritou ověřují:

-   hraniční hodnoty hesla,

-   skrytí hesla,

-   odeslání formuláře klávesou Enter,

-   přístupnost,

-   použitelnost,

-   responzivní a cross-browser zobrazení.

### Nízká priorita

Scénář s nízkou prioritou ověřuje základní požadavek na rychlost zobrazení výsledku přihlášení.

## 4\. Pokrytí požadavků

Každý funkční a nefunkční požadavek z dokumentu `01-requirements.md` je pokrytý alespoň jedním testovacím scénářem.

Propojení scénářů s požadavky umožňuje dohledat:

-   proč byl konkrétní scénář vytvořen,

-   který požadavek scénář ověřuje,

-   zda některý požadavek nezůstal bez testu.

## 5\. Další krok

Z vybraných testovacích scénářů budou vytvořeny podrobné test cases obsahující:

-   ID testu,

-   název,

-   vstupní podmínky,

-   testovací data,

-   jednotlivé kroky,

-   očekávaný výsledek,

-   skutečný výsledek,

-   stav testu.