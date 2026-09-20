# Manual Testing Portfolio – Login Form QA

Portfolio projekt zaměřený na návrh a dokumentaci manuálního testování jednoduché webové aplikace s přihlašovacím formulářem.

Projekt vznikl jako součást přípravy na první pozici Junior QA Tester. Ukazuje postup od analýzy požadavků přes návrh testů až po přípravu evidence výsledků, bug reportů a závěrečného vyhodnocení.

## Vznik projektu

Projekt jsem vytvořila jako součást přípravy na pozici Junior QA Tester. Při návrhu modelových požadavků jsem využila ChatGPT jako podpůrný nástroj. Na základě těchto požadavků jsem zpracovala test plan, testovací scénáře, test cases a další testovací dokumentaci.

Dokud test nebyl skutečně proveden, zůstává označený stavem `Not Run`.

## Testovaný projekt

**Login Form QA**

Jednoduchá webová aplikace obsahující:

- přihlašovací formulář,
- validaci e-mailu a hesla,
- chráněný uživatelský dashboard,
- přihlášení a odhlášení uživatele.

## Dokumentace projektu

| Dokument | Obsah |
| --- | --- |
| [01-requirements.md](login-form/01-requirements.md) | Funkční a nefunkční požadavky aplikace |
| [02-test-plan.md](login-form/02-test-plan.md) | Rozsah, cíle, přístup a prostředí testování |
| [03-test-scenarios.md](login-form/03-test-scenarios.md) | Přehled 24 testovacích scénářů |
| [04-test-cases.md](login-form/04-test-cases.md) | Podrobné kroky a očekávané výsledky 22 test cases |
| [05-bug-report-template.md](login-form/05-bug-report-template.md) | Šablona pro zaznamenávání nalezených chyb |
| [06-test-execution.md](login-form/06-test-execution.md) | Evidence skutečných výsledků testů |
| [07-test-summary-report.md](login-form/07-test-summary-report.md) | Souhrnná testovací zpráva |
| [08-smoke-checklist.md](login-form/08-smoke-checklist.md) | Rychlá kontrola hlavních funkcí aplikace |
| [09-regression-checklist.md](login-form/09-regression-checklist.md) | Kontroly prováděné po změně nebo opravě aplikace |
| [10-exploratory-testing.md](login-form/10-exploratory-testing.md) | Charter a záznam exploratory testing session |

## Rozsah testování

Projekt pokrývá:

- zobrazení přihlašovacího formuláře,
- validaci povinných polí,
- validaci formátu e-mailu,
- minimální a maximální délku hesla,
- skrytí zadaného hesla,
- platné a neplatné přihlašovací údaje,
- odeslání formuláře tlačítkem a klávesou Enter,
- odhlášení uživatele,
- ochranu stránky `/dashboard`,
- ovládání pomocí klávesnice,
- srozumitelnost popisků a chybových zpráv,
- responzivní zobrazení při šířce 360 px,
- základní kontrolu výkonu,
- základní cross-browser testování v Microsoft Edge.

## Použité testovací přístupy

- pozitivní testování,
- negativní testování,
- Equivalence Partitioning,
- Boundary Value Analysis,
- smoke testování,
- regresní testování,
- exploratory testing,
- testování přístupnosti,
- testování použitelnosti,
- responzivní testování,
- výkonnostní testování,
- cross-browser testování,
- dohledatelnost mezi požadavky, scénáři a test cases.

## Přehled projektu

| Položka | Počet |
| --- | ---: |
| Funkční požadavky | 15 |
| Nefunkční požadavky | 5 |
| Testovací scénáře | 24 |
| Test cases | 22 |
| Smoke kontroly | 6 |
| Regresní kontroly | 14 |
| Připravené exploratory sessions | 1 |
| Aktuálně provedené testy | 0 |

## Plánované testovací prostředí

- Windows
- Google Chrome
- Microsoft Edge
- mobilní rozlišení 360 × 800 px
- aplikace na adrese `http://localhost:5173`

## Aktuální stav

V repozitáři je připravená dokumentace pro plánovaný testovací cyklus.

Test cases, smoke test, regresní test a exploratory testing zatím nebyly skutečně provedeny. Jejich stav proto zůstává `Not Run`.

Testovaná aplikace zatím nebyla v rámci tohoto projektu spuštěna. Po zajištění testované aplikace budou doplněny skutečné výsledky, případné bug reporty a konečné vyhodnocení.

## Další kroky

1. Zkontrolovat a upřesnit modelové požadavky.
2. Zajistit a spustit testovanou aplikaci.
3. Provést smoke test.
4. Provést připravené test cases.
5. Zaznamenat skutečné výsledky.
6. Vytvořit bug reporty pouze pro skutečně nalezené chyby.
7. Provést exploratory testing session.
8. Aktualizovat souhrnnou testovací zprávu.
9. Vybrané scénáře automatizovat pomocí Playwrightu.

## Autorka

**Katarína Kubašková**  
Junior QA Engineer se znalostí JavaScriptu a základy automatizovaného testování

- [LinkedIn](https://www.linkedin.com/in/katkakubaskova)
- [GitHub](https://github.com/katty-kub)
 
