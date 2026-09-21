# Manual Testing Portfolio – Login Form QA

Portfolio projekt zaměřený na návrh, provedení a dokumentaci manuálního testování vlastní jednoduché webové aplikace s přihlašovacím formulářem.

Projekt vznikl jako součást přípravy na první pozici Junior QA Tester. Ukazuje celý postup od analýzy požadavků přes návrh testů až po jejich provedení, zaznamenání skutečných výsledků a závěrečné vyhodnocení.

## Vznik projektu a testovaná aplikace

Pro účely projektu jsem vytvořila vlastní webovou aplikaci Login Form QA v Reactu a TypeScriptu pomocí Vite. Aplikace obsahuje:

- přihlašovací formulář,
- validaci e-mailu a hesla,
- přihlášení pomocí demo účtu,
- chráněný uživatelský dashboard,
- odhlášení uživatele.

Aplikaci a QA dokumentaci jsem vytvářela krok za krokem ve VS Code. ChatGPT jsem využila jako konzultační a výukovou podporu při návrhu struktury, formulacích a vysvětlení jednotlivých kroků. Aplikaci jsem sama spouštěla, kontrolovala a testovala a výsledky jsem zaznamenala podle jejího skutečného chování.

Přihlášení je pouze frontendová simulace. Aplikace nemá backend ani databázi a není určená pro produkční použití.

Zdrojový kód aplikace je ve složce [`test-app`](test-app/).

## Dokumentace projektu

| Dokument | Obsah |
| --- | --- |
| [01-requirements.md](login-form/01-requirements.md) | Funkční a nefunkční požadavky aplikace |
| [02-test-plan.md](login-form/02-test-plan.md) | Cíl, rozsah, testovací přístupy, prostředí a podmínky testování |
| [03-test-scenarios.md](login-form/03-test-scenarios.md) | Přehled 12 testovacích scénářů |
| [04-test-cases.md](login-form/04-test-cases.md) | Podrobné kroky, testovací data, očekávané a skutečné výsledky |
| [05-test-results.md](login-form/05-test-results.md) | Souhrn provedeného testování a závěrečné vyhodnocení |

Dokumenty jsou propojené pomocí ID požadavků, scénářů a test cases, aby byla zachovaná dohledatelnost mezi jednotlivými částmi testovací dokumentace.

## Rozsah testování

Projekt pokrývá:

- zobrazení přihlašovací stránky a jejích prvků,
- validaci povinných polí,
- validaci formátu e-mailu,
- minimální a maximální délku hesla,
- maskování zadaného hesla,
- přihlášení platnými a neplatnými údaji,
- odeslání formuláře tlačítkem a klávesou Enter,
- přesměrování na dashboard,
- odhlášení uživatele,
- omezení přístupu nepřihlášeného uživatele na `/dashboard`,
- ovládání formuláře klávesnicí a viditelný focus,
- responzivní zobrazení při šířce 320 px.

## Použité testovací přístupy

- funkční testování,
- pozitivní a negativní testování,
- Equivalence Partitioning,
- Boundary Value Analysis,
- smoke testování,
- testování přístupnosti pomocí klávesnice,
- testování použitelnosti a responzivity,
- dohledatelnost mezi požadavky, scénáři a test cases.

## Přehled projektu

| Položka | Počet |
| --- | ---: |
| Funkční požadavky | 9 |
| Nefunkční požadavky | 2 |
| Testovací scénáře | 12 |
| Test cases | 12 |
| Provedené testovací varianty | 22 |
| Passed | 12 |
| Failed | 0 |
| Blocked | 0 |
| Nalezené chyby | 0 |

## Výsledek testování

Všechny naplánované test cases byly provedeny v Google Chrome. Všech 12 test cases, zahrnujících celkem 22 testovacích variant, skončilo stavem `Passed`.

Úspěšnost testovacího běhu byla 100 %. V rámci stanoveného rozsahu a použitého prostředí nebyla nalezena žádná odchylka od definovaných požadavků.

Výsledek neznamená, že aplikace nemůže obsahovat chyby v netestovaných oblastech nebo v jiném prostředí.

## Testovací prostředí

- operační systém: Windows,
- prohlížeč: Google Chrome 153.0.8010.53, 64bitový,
- lokální server: Vite 8.3.0,
- testovací adresa: `http://localhost:5173/login`,
- mobilní zobrazení: Chrome DevTools, šířka 320 px.

## Testovací data

Pro úspěšné přihlášení slouží demonstrační účet:

| Údaj | Hodnota |
| --- | --- |
| E-mail | `test@test.cz` |
| Heslo | `Heslo123` |

Tyto údaje jsou součástí demonstrační frontendové aplikace a neslouží pro skutečný uživatelský účet.

## Spuštění aplikace

Po naklonování repozitáře otevřete terminál v kořenové složce projektu a spusťte:

```bash
cd test-app
npm install
npm run dev
```

Potom otevřete adresu:

```text
http://localhost:5173/login
```

Kontrolu zdrojového kódu a produkční sestavení lze spustit příkazy:

```bash
npm run lint
npm run build
```

Oba příkazy byly při dokončení projektu úspěšné.

## Omezení projektu

- Testování proběhlo pouze v Google Chrome na Windows.
- Mobilní zobrazení bylo simulované v Chrome DevTools.
- Aplikace nemá backend, databázi ani skutečné bezpečné ověřování uživatelů.
- Přihlášení se po obnovení stránky nezachovává.
- Nebylo provedeno penetrační, zátěžové ani výkonnostní testování.

## Možný další rozvoj

- cross-browser testování v Microsoft Edge a Mozilla Firefox,
- ověření na fyzickém mobilním zařízení,
- doplnění backendu, databáze a API testů,
- rozšíření kontroly přístupnosti,
- automatizace vybraných smoke a regresních scénářů pomocí Playwrightu.

## Autorka

## Autorka

**Katarína Kubašková**

Junior QA Engineer | Manual Testing | Automation Basics | JavaScript | TypeScript | Playwright

- [LinkedIn](https://www.linkedin.com/in/katkakubaskova)
- [GitHub](https://github.com/katty-kub)