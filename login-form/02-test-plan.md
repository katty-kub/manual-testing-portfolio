# Test Plan – Login Form QA

## 1. Základní informace

| Položka | Hodnota |
| --- | --- |
| ID dokumentu | TP-LOGIN-001 |
| Testovaný projekt | Login Form QA |
| Typ testování | Manuální testování |
| Verze dokumentu | 1.0 |
| Stav dokumentu | Dokončeno |
| Datum dokončení testování | 21. 9. 2026 |
| Tester | Katarína Kubašková |

## 2. Cíl a rozsah testování

Cílem je ověřit, že přihlašovací formulář, dashboard a odhlášení fungují podle definovaných funkčních a nefunkčních požadavků.

### Funkce zahrnuté do testování

- zobrazení přihlašovací stránky a jejích prvků,
- validace povinných polí, formátu e-mailu a délky hesla,
- maskování hesla,
- odeslání formuláře tlačítkem a klávesou Enter,
- přihlášení platnými a neplatnými údaji,
- přesměrování a ochrana stránky `/dashboard`,
- odhlášení uživatele,
- ovládání klávesnicí a zobrazení při šířce 320 px.

### Funkce mimo rozsah testování

- registrace, obnovení a změna hesla,
- backend, databáze a skutečné ověřování účtů,
- zachování přihlášení po obnovení stránky,
- sociální přihlášení, dvoufázové ověření a uživatelské role,
- penetrační, zátěžové a výkonnostní testování.

## 3. Testovací přístupy

| Přístup | Použití v projektu |
| --- | --- |
| Funkční testování | Ověření funkcí podle požadavků FR-001 až FR-009 |
| Pozitivní a negativní testování | Platné přihlášení a různé neplatné vstupy |
| Equivalence Partitioning | Rozdělení e-mailů a hesel do skupin platných a neplatných hodnot |
| Boundary Value Analysis | Ověření délky hesla na hodnotách 7, 8, 20 a 21 znaků |
| Testování použitelnosti a responzivity | Ovládání klávesnicí, viditelné zvýraznění aktivního prvku a zobrazení při šířce 320 px |

## 4. Testovací prostředí

| Položka | Hodnota |
| --- | --- |
| Typ aplikace | Webová aplikace |
| Testovací adresa | `http://localhost:5173/login` |
| Operační systém | Windows |
| Prohlížeč | Google Chrome 153.0.8010.53, 64bitový |
| Lokální server | Vite 8.3.0 |
| Mobilní zobrazení | Chrome DevTools, šířka 320 px |
| Evidence výsledků | Markdown dokumentace a screenshoty |

## 5. Testovací data

Pro úspěšné přihlášení bude použit tento demonstrační účet:

| Údaj | Hodnota |
| --- | --- |
| Platný e-mail | `test@test.cz` |
| Platné heslo | `Heslo123` |

Pro negativní a hraniční testy budou použity:

- prázdná pole,
- e-mail bez tečky v doméně,
- e-mail s více znaky `@`,
- e-mail obsahující mezeru,
- syntakticky platný, ale neexistující e-mail,
- nesprávné heslo,
- hesla o délce 7, 8, 20 a 21 znaků.

## 6. Vstupní a výstupní podmínky

### Vstupní podmínky

Testování může začít, pokud:

- aplikace běží na lokálním serveru,
- stránka `/login` je dostupná,
- požadavky a testovací data jsou připravené,
- test cases jsou vytvořené,
- testovací prohlížeč je dostupný.

### Výstupní podmínky

Testování je dokončené, pokud:

- byly provedeny všechny naplánované test cases,
- každý test case má zaznamenaný stav a skutečný výsledek,
- skutečně nalezené chyby jsou zdokumentované,
- žádná nezdokumentovaná blokující chyba nebrání dokončení testů,
- je aktualizovaný souhrn výsledků.

## 7. Rizika a evidence výsledků

### Rizika

| Riziko | Dopad | Opatření |
| --- | --- | --- |
| Lokální server nebude spuštěný | Testování nebude možné zahájit | Před testováním ověřit dostupnost aplikace |
| Požadavek nebude odpovídat aplikaci | Test může mít nesprávný očekávaný výsledek | Rozdíl vyjasnit a dokumentaci aktualizovat před testem |
| Aplikace se během testování změní | Starší výsledky nemusí být platné | Zaznamenat testovanou verzi a zopakovat ovlivněné testy |
| Testování proběhne pouze v Chrome | Chyba specifická pro jiný prohlížeč nemusí být odhalená | Omezení uvést ve výsledcích a případně doplnit další prohlížeč |

### Evidence a výstupy

Výsledkem testování budou:

- test cases se stavem a skutečným výsledkem,
- screenshoty neúspěšných testů,
- bug reporty pouze pro skutečně nalezené chyby,
- souhrnný dokument `05-test-results.md`.

Test plan bude aktualizován při změně požadavků, rozsahu, prostředí nebo způsobu testování.