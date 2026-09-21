# Testovací scénáře – Login Form QA

## 1. Účel dokumentu

Tento dokument obsahuje přehled testovacích scénářů pro přihlašovací formulář, dashboard a odhlášení.

Testovací scénáře stručně popisují, co bude testováno. Podrobné kroky, testovací data a očekávané výsledky budou uvedeny v dokumentu `04-test-cases.md`.

## 2. Testovací scénáře

| ID | Testovací scénář | Typ testu | Priorita | Pokryté požadavky |
| --- | --- | --- | --- | --- |
| TS-001 | Ověřit zobrazení přihlašovací stránky na `/login` včetně všech požadovaných prvků | Pozitivní, smoke | Vysoká | FR-001 |
| TS-002 | Ověřit povinnost polí E-mail a Heslo | Negativní | Vysoká | FR-002 |
| TS-003 | Ověřit přijetí platného a odmítnutí neplatného formátu e-mailu | Pozitivní, negativní | Vysoká | FR-003 |
| TS-004 | Ověřit minimální a maximální povolenou délku hesla | Hraniční | Střední | FR-004 |
| TS-005 | Ověřit maskování znaků zadaných do pole Heslo | Funkční | Střední | FR-004 |
| TS-006 | Ověřit odeslání formuláře tlačítkem Přihlásit se a klávesou Enter | Pozitivní | Vysoká | FR-005 |
| TS-007 | Ověřit přihlášení platnými údaji, přesměrování na `/dashboard` a zobrazení textu `Vítejte` | Pozitivní, smoke | Vysoká | FR-006 |
| TS-008 | Ověřit reakci na nesprávný e-mail nebo heslo | Negativní | Vysoká | FR-007 |
| TS-009 | Ověřit odhlášení přihlášeného uživatele | Pozitivní, smoke | Vysoká | FR-008 |
| TS-010 | Ověřit přístup nepřihlášeného uživatele na `/dashboard` | Negativní, bezpečnostní | Vysoká | FR-009 |
| TS-011 | Ověřit ovládání formuláře klávesnicí a viditelné zvýraznění aktivního prvku | Přístupnost | Střední | NFR-001 |
| TS-012 | Ověřit zobrazení přihlašovací stránky a dashboardu při šířce 320 px | Responzivita | Střední | NFR-002 |

## 3. Pokrytí požadavků a další krok

Každý funkční a nefunkční požadavek je pokrytý alespoň jedním testovacím scénářem. Sloupec Pokryté požadavky zajišťuje dohledatelnost mezi požadavky a scénáři.

Jeden testovací scénář může být rozpracován do jednoho nebo více test cases. Podrobné kroky, testovací data a očekávané výsledky budou vytvořeny v dokumentu `04-test-cases.md`.