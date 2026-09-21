# Test Results – Login Form QA

## 1. Základní informace

| Položka | Hodnota |
| --- | --- |
| ID dokumentu | TR-LOGIN-001 |
| Testovaný projekt | Login Form QA |
| Typ testování | Manuální testování |
| Datum testování | 21. 9. 2026 |
| Tester | Katarína Kubašková |
| Stav testování | Dokončeno |
| Operační systém | Windows |
| Prohlížeč | Google Chrome 153.0.8010.53, 64bitový |
| Lokální server | Vite 8.3.0 |
| Testovací adresa | `http://localhost:5173/login` |

## 2. Souhrn výsledků

| Výsledek | Počet |
| --- | ---: |
| Naplánované test cases | 12 |
| Provedené test cases | 12 |
| Provedené testovací varianty | 22 |
| Passed | 12 |
| Failed | 0 |
| Blocked | 0 |
| Not Run | 0 |
| Nalezené chyby | 0 |

Všechny naplánované test cases byly provedeny. Všech 12 test cases, zahrnujících celkem 22 konkrétních testovacích variant, skončilo stavem `Passed`.

Úspěšnost testovacího běhu byla 100 %. Během testování nebyla nalezena žádná odchylka skutečného chování aplikace od definovaných požadavků.

## 3. Přehled provedených testů

| Test case | Ověřovaná oblast | Požadavek | Počet variant | Výsledek |
| --- | --- | --- | ---: | --- |
| TC-001 | Zobrazení přihlašovací stránky | FR-001 | 1 | Passed |
| TC-002 | Povinná pole | FR-002 | 3 | Passed |
| TC-003 | Neplatný formát e-mailu | FR-003 | 5 | Passed |
| TC-004 | Hraniční hodnoty délky hesla | FR-004 | 4 | Passed |
| TC-005 | Maskování hesla | FR-004 | 1 | Passed |
| TC-006 | Přihlášení tlačítkem | FR-005, FR-006 | 1 | Passed |
| TC-007 | Přihlášení klávesou Enter | FR-005, FR-006 | 1 | Passed |
| TC-008 | Nesprávné přihlašovací údaje | FR-007 | 2 | Passed |
| TC-009 | Odhlášení uživatele | FR-008 | 1 | Passed |
| TC-010 | Přístup nepřihlášeného uživatele na dashboard | FR-009 | 1 | Passed |
| TC-011 | Ovládání klávesnicí a viditelný focus | NFR-001 | 1 | Passed |
| TC-012 | Zobrazení při šířce 320 px | NFR-002 | 1 | Passed |
| **Celkem** |  |  | **22** | **Passed** |

## 4. Nalezené chyby

Během testovacího běhu nebyla nalezena žádná chyba, která by způsobila nesplnění definovaného požadavku. Z tohoto důvodu nebyl vytvořen žádný bug report.

Tento výsledek platí pouze pro rozsah uvedený v testovacím plánu, použité testovací prostředí a provedené testovací varianty. Neznamená, že aplikace nemůže obsahovat chyby v netestovaných oblastech nebo v jiném prostředí.

## 5. Vyhodnocení výstupních podmínek

| Výstupní podmínka | Vyhodnocení |
| --- | --- |
| Byly provedeny všechny naplánované test cases | Splněno |
| Každý test case má zaznamenaný stav a skutečný výsledek | Splněno |
| Skutečně nalezené chyby jsou zdokumentované | Splněno – žádná chyba nebyla nalezena |
| Žádná nezdokumentovaná blokující chyba nebrání dokončení testování | Splněno |
| Souhrn výsledků je aktualizovaný | Splněno |

Všechny výstupní podmínky stanovené v testovacím plánu byly splněny.

## 6. Omezení testování

Testování mělo následující omezení:

- proběhlo pouze v prohlížeči Google Chrome na operačním systému Windows,
- aplikace byla spuštěná pouze na lokálním serveru,
- mobilní zobrazení bylo simulované pomocí Chrome DevTools a nebylo ověřené na fyzickém mobilním zařízení,
- aplikace nemá backend ani databázi a přihlášení je pouze demonstrační,
- nebylo testováno zachování přihlášení po obnovení stránky,
- nebylo provedeno penetrační, zátěžové ani výkonnostní testování,
- nebyla provedena kontrola v dalších prohlížečích.

Výsledky proto nepotvrzují připravenost aplikace pro produkční použití. Potvrzují pouze splnění požadavků stanovených pro tuto demonstrační verzi.

## 7. Doporučení pro další testování

Pro další rozvoj projektu doporučuji:

- zopakovat hlavní testy v prohlížečích Microsoft Edge a Mozilla Firefox,
- ověřit responzivitu na dalších šířkách a na fyzickém mobilním zařízení,
- po doplnění backendu otestovat API, databázi a skutečné ověřování uživatelů,
- doplnit testy zachování přihlášení a chování po obnovení stránky,
- rozšířit kontrolu přístupnosti,
- automatizovat stabilní smoke a regresní testy pomocí Playwrightu,
- spouštět automatizované testy při dalších změnách aplikace.

## 8. Závěrečné vyhodnocení

Testovací běh byl úspěšně dokončen. Všech 12 test cases, zahrnujících celkem 22 testovacích variant, bylo provedeno se stavem `Passed`. Nebyla nalezena žádná chyba a všechny výstupní podmínky testovacího plánu byly splněny.

Testovaná verze aplikace odpovídá definovaným funkčním a nefunkčním požadavkům v rámci stanoveného rozsahu a použitého testovacího prostředí.

Aplikaci lze považovat za připravenou pro demonstrační a studijní použití. Vzhledem k absenci backendu, databáze a skutečného bezpečného ověřování uživatelů není určená pro produkční použití.

| Celkové hodnocení | Výsledek |
| --- | --- |
| Stav testovacího běhu | Passed |
| Splnění požadavků | Ano |
| Doporučení | Připraveno pro demonstrační použití |
