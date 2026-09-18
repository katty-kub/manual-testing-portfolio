# Test Plan – Login Form QA

## 1\. Základní informace

| Položka | Hodnota |
| --- | --- |
| ID dokumentu | TP-LOGIN-001 |
| Testovaný projekt | Login Form QA |
| Typ testování | Manuální testování |
| Verze dokumentu | 1.0 |
| Stav dokumentu | Rozpracováno |
| Tester | Katarína Kubašková |

## 2\. Cíl testování

Cílem je ověřit, že přihlašovací formulář, uživatelský dashboard a odhlášení fungují podle definovaných požadavků.

Testování se zaměří především na:

-   správné přihlášení uživatele,

-   zpracování neplatných údajů,

-   validaci formuláře,

-   ochranu dashboardu,

-   odhlášení uživatele,

-   základní použitelnost a přístupnost formuláře.

## 3\. Rozsah testování

### 3.1 Funkce zahrnuté do testování

Testování bude zahrnovat:

-   zobrazení přihlašovacího formuláře,

-   pole E-mail,

-   pole Heslo,

-   tlačítko Přihlásit se,

-   povinná pole,

-   validaci formátu e-mailu,

-   validaci délky hesla,

-   skrytí zadaného hesla,

-   přihlášení platnými údaji,

-   přihlášení neplatnými údaji,

-   odeslání formuláře klávesou Enter,

-   přesměrování na dashboard,

-   ochranu stránky `/dashboard`,

-   odhlášení uživatele,

-   ovládání formuláře pomocí klávesnice,

-   zobrazení na počítači a mobilním zařízení.

### 3.2 Funkce mimo rozsah testování

Testování nebude zahrnovat:

-   registraci uživatele,

-   obnovení zapomenutého hesla,

-   změnu hesla,

-   přihlášení prostřednictvím sociálních sítí,

-   dvoufázové ověření,

-   uživatelské role,

-   bezpečnostní penetrační testování,

-   zátěžové a výkonnostní testování.

## 4\. Testovací přístupy

Při testování budou použity následující přístupy:

| Přístup | Použití |
| --- | --- |
| Funkcionální testování | Ověření, že jednotlivé funkce odpovídají požadavkům |
| Pozitivní testování | Testování platnými a očekávanými vstupy |
| Negativní testování | Testování neplatnými, prázdnými nebo neočekávanými vstupy |
| Equivalence Partitioning | Rozdělení vstupních hodnot do skupin s podobným chováním |
| Boundary Value Analysis | Testování minimálních a maximálních povolených hodnot |
| Smoke testing | Rychlá kontrola nejdůležitějších funkcí |
| Regression testing | Kontrola, že úpravy nepoškodily dříve fungující části |
| Exploratory testing | Volné zkoumání aplikace mimo připravené test cases |
| Cross-browser testing | Kontrola základní funkčnosti ve více prohlížečích |

## 5\. Testovací prostředí

| Položka | Hodnota |
| --- | --- |
| Typ aplikace | Webová aplikace |
| Testovací adresa | `http://localhost:5173/login` |
| Primární prohlížeč | Google Chrome |
| Sekundární prohlížeč | Microsoft Edge |
| Desktopové prostředí | Windows |
| Mobilní zobrazení | Chrome DevTools, šířka 360 px |
| Vývojářské nástroje | Chrome DevTools |
| Evidence chyb | GitHub Markdown a screenshoty |

Verze prohlížečů budou před zahájením testování zaznamenány do závěrečného test reportu.

## 6\. Testovací data

Pro úspěšné přihlášení bude použit tento demonstrační účet:

| Údaj | Hodnota |
| --- | --- |
| Platný e-mail | `test@test.cz` |
| Platné heslo | `Heslo123` |

Pro negativní testování budou použita například tato data:

-   neplatný formát e-mailu,

-   neexistující e-mail,

-   nesprávné heslo,

-   prázdný e-mail,

-   prázdné heslo,

-   heslo kratší než 8 znaků,

-   heslo delší než 20 znaků,

-   mezery před a za hodnotou,

-   speciální znaky,

-   velmi dlouhý text.

## 7\. Vstupní podmínky

Testování může začít, pokud:

-   je aplikace dostupná,

-   je možné otevřít stránku `/login`,

-   jsou známé požadavky aplikace,

-   je vytvořený testovací účet,

-   je dostupný podporovaný prohlížeč,

-   je možné pořizovat screenshoty nalezených problémů.

## 8\. Výstupní podmínky

Testování bude považováno za dokončené, pokud:

-   budou provedeny všechny připravené test cases,

-   budou zaznamenány skutečné výsledky testů,

-   budou všechny nalezené chyby zdokumentovány,

-   nebude existovat nezdokumentovaná chyba blokující přihlášení,

-   bude proveden smoke checklist,

-   bude vytvořen závěrečný test report.

## 9\. Výstupy testování

Výsledkem testování budou:

-   dokument s požadavky,

-   test plan,

-   testovací scénáře,

-   test cases,

-   smoke checklist,

-   regression checklist,

-   bug reporty,

-   záznam exploratory testingu,

-   screenshoty nalezených chyb,

-   závěrečný test report.

## 10\. Rizika

| Riziko | Dopad | Opatření |
| --- | --- | --- |
| Aplikace nebude dostupná | Testování nebude možné provést | Zkontrolovat spuštění aplikace a adresu |
| Testovací účet nebude fungovat | Nebude možné ověřit úspěšné přihlášení | Zkontrolovat testovací data |
| Požadavky budou nejasné | Testy mohou mít nesprávný očekávaný výsledek | Upřesnit požadavek před vytvořením testu |
| Rozdílné chování prohlížečů | Chyba se nemusí projevit všude stejně | Otestovat aplikaci v Chrome a Edge |
| Změna aplikace během testování | Výsledky starších testů nemusí být platné | Zaznamenat testovanou verzi aplikace |

## 11\. Evidence chyb

Každá nalezená chyba bude obsahovat:

-   jednoznačné ID,

-   stručný název,

-   testované prostředí,

-   vstupní podmínky,

-   kroky pro reprodukci,

-   očekávaný výsledek,

-   skutečný výsledek,

-   severity,

-   priority,

-   screenshot nebo jinou dostupnou evidenci.

## 12\. Stav dokumentu

Tento test plan bude v průběhu projektu aktualizován podle změn aplikace, požadavků a výsledků testování.