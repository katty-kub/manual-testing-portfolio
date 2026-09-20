# Souhrnná testovací zpráva – Login Form QA

## 1. Základní informace

| Položka | Hodnota |
| --- | --- |
| Projekt | Login Form QA |
| Testovací cyklus | EX-001 |
| Stav dokumentu | Pracovní verze |
| Datum testování | Zatím neprovedeno |
| Tester | Doplnit |
| Verze aplikace | Doplnit při provedení testů |

## 2. Cíl testování

Cílem testování je ověřit funkčnost, použitelnost a základní kvalitu přihlašovacího formuláře, chráněného dashboardu a odhlášení uživatele.

Testování zahrnuje pozitivní, negativní, hraniční, přístupnostní, responzivní, výkonnostní a cross-browser testy.

## 3. Rozsah testování

Do rozsahu testování patří:

- zobrazení přihlašovacího formuláře,
- validace povinných polí,
- validace formátu e-mailu,
- kontrola minimální a maximální délky hesla,
- skrytí zadaného hesla,
- úspěšné a neúspěšné přihlášení,
- odeslání formuláře tlačítkem a klávesou Enter,
- odhlášení uživatele,
- ochrana stránky `/dashboard`,
- ovládání pomocí klávesnice,
- srozumitelnost popisků a chybových zpráv,
- zobrazení na mobilní šířce 360 px,
- zobrazení výsledku přihlášení do 2 sekund,
- základní přihlášení v prohlížeči Microsoft Edge.

## 4. Testovací prostředí

| Položka | Hodnota |
| --- | --- |
| Operační systém | Windows |
| Hlavní prohlížeč | Google Chrome |
| Další prohlížeč | Microsoft Edge |
| Mobilní rozlišení | 360 × 800 px |
| Adresa aplikace | `http://localhost:5173` |

## 5. Pokrytí požadavků

| Oblast | Počet |
| --- | ---: |
| Funkční požadavky | 15 |
| Nefunkční požadavky | 5 |
| Testovací scénáře | 24 |
| Test cases | 22 |

Všechny definované funkční a nefunkční požadavky jsou pokryté alespoň jedním testovacím scénářem a test casem.

## 6. Výsledky testů

| Stav | Počet |
| --- | ---: |
| Celkem testů | 22 |
| Passed | 0 |
| Failed | 0 |
| Blocked | 0 |
| Not Run | 22 |

## 7. Nalezené chyby

Testy zatím nebyly provedeny, proto nebyly potvrzeny ani zaznamenány žádné skutečné chyby.

Pokud bude při provedení testů nalezena chyba, bude vytvořen samostatný bug report podle souboru `05-bug-report-template.md`.

## 8. Rizika a omezení

- Aplikace zatím nebyla v rámci tohoto testovacího cyklu otestována.
- Skutečné výsledky testů nejsou zatím dostupné.
- Výkon aplikace a chování v jednotlivých prohlížečích nebyly zatím změřeny.
- Bez provedení testů nelze posoudit připravenost aplikace k vydání.

## 9. Závěr

Testovací dokumentace je připravená a obsahuje požadavky, testovací plán, testovací scénáře, test cases, šablonu bug reportu a evidenci provedení testů.

Samotné testování aplikace zatím nebylo provedeno. Po dokončení testovacího cyklu bude tato zpráva aktualizována podle skutečných výsledků, nalezených chyb a případných rizik.