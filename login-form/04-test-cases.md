# Test Cases – Login Form QA

## 1. Účel dokumentu

Tento dokument obsahuje podrobné test cases vytvořené z požadavků a testovacích scénářů projektu Login Form QA.

Každý test case obsahuje vazbu na scénář a požadavek, testovací data, kroky, očekávaný výsledek, skutečný výsledek a stav. Jeden test case může obsahovat více variant testovacích dat, pokud mají stejné kroky.

## 2. Společné vstupní podmínky

Pokud konkrétní test case nestanoví jinak:

-   aplikace běží na lokálním serveru,

-   testování probíhá v Google Chrome,

-   stránka `/login` je dostupná,

-   uživatel není přihlášený,

-   před každým test casem je formulář v počátečním stavu.

## 3. Používané stavy

| Stav | Význam |
| --- | --- |
| Not Run | Test zatím nebyl proveden |
| Passed | Skutečný výsledek odpovídá očekávanému výsledku |
| Failed | Skutečný výsledek neodpovídá očekávanému výsledku |
| Blocked | Test nebylo možné dokončit kvůli překážce |

## 4. Test cases

### TC-001 – Zobrazení přihlašovací stránky

| Položka | Hodnota |
| --- | --- |
| Testovací scénář | TS-001 |
| Požadavek | FR-001 |
| Typ testu | Pozitivní, smoke |
| Priorita | Vysoká |
| Stav | Passed |

**Testovací data:** Nejsou potřeba.

| Krok | Akce | Očekávaný výsledek |
| --- | --- | --- |
| 1 | Otevřít adresu `http://localhost:5173/login`. | Zobrazí se přihlašovací stránka. |
| 2 | Zkontrolovat nadpis stránky. | Zobrazí se nadpis `Přihlášení`. |
| 3 | Zkontrolovat obsah formuláře. | Formulář obsahuje pole E-mail, pole Heslo a tlačítko Přihlásit se. |

**Celkový očekávaný výsledek:** Přihlašovací stránka je dostupná na `/login` a obsahuje všechny požadované prvky.

**Skutečný výsledek:** Na adrese `/login` se zobrazila přihlašovací stránka s nadpisem `Přihlášení`, poli E-mail a Heslo a tlačítkem Přihlásit se.

**Výsledný stav:** Passed

---

### TC-002 – Kontrola povinných polí

| Položka | Hodnota |
| --- | --- |
| Testovací scénář | TS-002 |
| Požadavek | FR-002 |
| Typ testu | Negativní |
| Priorita | Vysoká |
| Stav | Passed |

**Testovací data:**

| Varianta | E-mail | Heslo |
| --- | --- | --- |
| A | Prázdné | Prázdné |
| B | Prázdné | `Heslo123` |
| C | `test@test.cz` | Prázdné |

Pro každou variantu zopakovat následující kroky:

| Krok | Akce | Očekávaný výsledek |
| --- | --- | --- |
| 1 | Otevřít nebo obnovit stránku `/login`. | Zobrazí se prázdný přihlašovací formulář. |
| 2 | Vyplnit pole podle testované varianty. | Zadané hodnoty se zobrazí v příslušných polích. |
| 3 | Kliknout na tlačítko Přihlásit se. | Formulář se neodešle a prohlížeč upozorní na první povinné nevyplněné pole. |
| 4 | Zkontrolovat aktuální adresu. | Uživatel zůstane na `/login`. |

**Celkový očekávaný výsledek:** Formulář nelze odeslat, pokud je pole E-mail nebo Heslo prázdné.

**Skutečný výsledek:** Ve variantách A a B prohlížeč upozornil na prázdné povinné pole E-mail. Ve variantě C upozornil na prázdné povinné pole Heslo. Ve všech variantách se formulář neodeslal a uživatel zůstal na `/login`.

**Výsledný stav:** Passed

---

### TC-003 – Validace neplatného formátu e-mailu

| Položka | Hodnota |
| --- | --- |
| Testovací scénář | TS-003 |
| Požadavek | FR-003 |
| Typ testu | Negativní, Equivalence Partitioning |
| Priorita | Vysoká |
| Stav | Passed |

**Testovací data:**

| Varianta | E-mail | Důvod neplatnosti |
| --- | --- | --- |
| A | `test@test` | Chybí tečka a koncovka domény |
| B | `test@@test.cz` | Obsahuje dva znaky `@` |
| C | `test @test.cz` | Obsahuje mezeru |
| D | `@test.cz` | Chybí část před znakem `@` |
| E | `test@test.` | Chybí koncovka za poslední tečkou |

Pro všechny varianty použít heslo `Heslo123` a zopakovat následující kroky:

| Krok | Akce | Očekávaný výsledek |
| --- | --- | --- |
| 1 | Otevřít nebo obnovit stránku `/login`. | Zobrazí se prázdný přihlašovací formulář. |
| 2 | Do pole E-mail zadat hodnotu testované varianty. | Hodnota se zobrazí v poli E-mail. |
| 3 | Do pole Heslo zadat `Heslo123`. | Heslo je zadané a jeho znaky jsou maskované. |
| 4 | Kliknout na tlačítko Přihlásit se. | Formulář se neodešle a prohlížeč upozorní na neplatný formát e-mailu. |
| 5 | Zkontrolovat aktuální adresu. | Uživatel zůstane na `/login`. |

**Celkový očekávaný výsledek:** Každá neplatná e-mailová adresa je odmítnuta a uživatel není přihlášený.

**Skutečný výsledek:** Prohlížeč odmítl všech pět neplatných e-mailových adres: adresu bez tečky a koncovky domény, se dvěma znaky `@`, s mezerou, bez části před znakem `@` a bez koncovky za poslední tečkou. Ve všech variantách zobrazil validační upozornění, formulář neodeslal a uživatel zůstal na `/login`.

**Výsledný stav:** Passed

---

### TC-004 – Hraniční hodnoty délky hesla

| Položka | Hodnota |
| --- | --- |
| Testovací scénář | TS-004 |
| Požadavek | FR-004 |
| Typ testu | Hraniční, Boundary Value Analysis |
| Priorita | Střední |
| Stav | Passed |

**Testovací data:**

| Varianta | Heslo | Délka | Očekávané chování |
| --- | --- | --- | --- |
| A | `1234567` | 7 | Formulář odmítne příliš krátké heslo |
| B | `12345678` | 8 | Heslo projde kontrolou délky |
| C | `12345678901234567890` | 20 | Heslo projde kontrolou délky |
| D | `123456789012345678901` | 21 | Pole nepřijme více než 20 znaků |

Pro každou variantu použít e-mail `test@test.cz`.

| Krok | Akce | Očekávaný výsledek |
| --- | --- | --- |
| 1 | Otevřít nebo obnovit stránku `/login`. | Zobrazí se prázdný přihlašovací formulář. |
| 2 | Do pole E-mail zadat `test@test.cz`. | E-mail se zobrazí v poli. |
| 3 | Do pole Heslo zadat hodnotu testované varianty. | Pole reaguje podle očekávaného chování uvedeného v tabulce testovacích dat. |
| 4 | U varianty D ověřit délku hodnoty v poli pomocí Chrome DevTools. | Pole obsahuje nejvýše 20 znaků. |
| 5 | Kliknout na tlačítko Přihlásit se. | Varianta A je zablokována kontrolou délky. Varianty B a C projdou kontrolou délky a zobrazí chybu nesprávných přihlašovacích údajů. Varianta D se odešle pouze s prvními 20 znaky. |
| 6 | Zkontrolovat aktuální adresu. | Uživatel zůstane na `/login`. |

**Celkový očekávaný výsledek:** Pole Heslo povolí nejméně 8 a nejvýše 20 znaků. Hodnota kratší než 8 znaků je odmítnuta a 21. znak není do pole přijat.

**Skutečný výsledek:** Heslo se 7 znaky prohlížeč odmítl jako příliš krátké. Hesla s 8 a 20 znaky prošla kontrolou délky a aplikace následně zobrazila chybu nesprávných přihlašovacích údajů. Při pokusu zadat 21 znaků pole přijalo pouze 20 znaků, což bylo ověřeno v Chrome DevTools výsledkem `20`.

**Výsledný stav:** Passed

---

### TC-005 – Maskování hesla

| Položka | Hodnota |
| --- | --- |
| Testovací scénář | TS-005 |
| Požadavek | FR-004 |
| Typ testu | Funkční |
| Priorita | Střední |
| Stav | Passed |

**Testovací data:** Heslo `Heslo123`

| Krok | Akce | Očekávaný výsledek |
| --- | --- | --- |
| 1 | Otevřít nebo obnovit stránku `/login`. | Zobrazí se přihlašovací formulář. |
| 2 | Kliknout do pole Heslo. | Pole Heslo je aktivní. |
| 3 | Do pole Heslo zadat `Heslo123`. | Zadané znaky se zobrazí jako maskovací symboly a heslo nelze přečíst. |

**Celkový očekávaný výsledek:** Znaky zadané do pole Heslo jsou maskované a nezobrazují se jako čitelný text.

**Skutečný výsledek:** Po zadání hesla `Heslo123` se jednotlivé znaky zobrazily pouze jako maskovací symboly a heslo nebylo možné z pole přečíst.

**Výsledný stav:** Passed

---

### TC-006 – Úspěšné přihlášení tlačítkem

| Položka | Hodnota |
| --- | --- |
| Testovací scénář | TS-006, TS-007 |
| Požadavek | FR-005, FR-006 |
| Typ testu | Pozitivní, smoke |
| Priorita | Vysoká |
| Stav | Passed |

**Testovací data:**

| E-mail | Heslo |
| --- | --- |
| `test@test.cz` | `Heslo123` |

| Krok | Akce | Očekávaný výsledek |
| --- | --- | --- |
| 1 | Otevřít nebo obnovit stránku `/login`. | Zobrazí se přihlašovací formulář. |
| 2 | Do pole E-mail zadat `test@test.cz`. | E-mail se zobrazí v poli. |
| 3 | Do pole Heslo zadat `Heslo123`. | Heslo je zadané a jeho znaky jsou maskované. |
| 4 | Kliknout na tlačítko Přihlásit se. | Formulář se odešle a uživatel je přesměrován na `/dashboard`. |
| 5 | Zkontrolovat obsah dashboardu. | Zobrazí se text `Vítejte` a tlačítko Odhlásit se. |

**Celkový očekávaný výsledek:** Uživatel se pomocí platných údajů úspěšně přihlásí a zobrazí se mu dashboard.

**Skutečný výsledek:** Po zadání platných přihlašovacích údajů a kliknutí na tlačítko Přihlásit se aplikace přesměrovala uživatele na `/dashboard`. Zobrazil se text `Vítejte` a tlačítko Odhlásit se.

**Výsledný stav:** Passed

---

### TC-007 – Úspěšné přihlášení klávesou Enter

| Položka | Hodnota |
| --- | --- |
| Testovací scénář | TS-006, TS-007 |
| Požadavek | FR-005, FR-006 |
| Typ testu | Pozitivní |
| Priorita | Vysoká |
| Stav | Passed |

**Testovací data:**

| E-mail | Heslo |
| --- | --- |
| `test@test.cz` | `Heslo123` |

| Krok | Akce | Očekávaný výsledek |
| --- | --- | --- |
| 1 | Otevřít nebo obnovit stránku `/login`. | Zobrazí se přihlašovací formulář. |
| 2 | Do pole E-mail zadat `test@test.cz`. | E-mail se zobrazí v poli. |
| 3 | Do pole Heslo zadat `Heslo123`. | Heslo je zadané a jeho znaky jsou maskované. |
| 4 | Se zaměřeným polem Heslo stisknout klávesu Enter. | Formulář se odešle a uživatel je přesměrován na `/dashboard`. |
| 5 | Zkontrolovat obsah dashboardu. | Zobrazí se text `Vítejte` a tlačítko Odhlásit se. |

**Celkový očekávaný výsledek:** Uživatel se pomocí platných údajů úspěšně přihlásí po stisknutí klávesy Enter.

**Skutečný výsledek:** Po zadání platných přihlašovacích údajů a stisknutí klávesy Enter v poli Heslo aplikace zpracovala formulář, přesměrovala uživatele na `/dashboard` a zobrazila text `Vítejte` a tlačítko Odhlásit se.

**Výsledný stav:** Passed

---

### TC-008 – Přihlášení s nesprávnými údaji

| Položka | Hodnota |
| --- | --- |
| Testovací scénář | TS-008 |
| Požadavek | FR-007 |
| Typ testu | Negativní |
| Priorita | Vysoká |
| Stav | Passed |

**Testovací data:**

| Varianta | E-mail | Heslo | Neplatný údaj |
| --- | --- | --- | --- |
| A | `wrong@test.cz` | `Heslo123` | E-mail |
| B | `test@test.cz` | `Chybne12` | Heslo |

Pro každou variantu zopakovat následující kroky:

| Krok | Akce | Očekávaný výsledek |
| --- | --- | --- |
| 1 | Otevřít stránku `/login` a zkontrolovat, že jsou obě pole prázdná. | Zobrazí se prázdný přihlašovací formulář. |
| 2 | Vyplnit E-mail a Heslo podle testované varianty. | Zadané hodnoty se vloží do příslušných polí. |
| 3 | Kliknout na tlačítko Přihlásit se. | Přihlášení se nezdaří a zobrazí se zpráva `Zadali jste chybný e-mail nebo heslo.` |
| 4 | Zkontrolovat aktuální adresu a obsah stránky. | Uživatel zůstane na `/login` a dashboard se nezobrazí. |

**Celkový očekávaný výsledek:** Aplikace odmítne přihlášení, pokud e-mail nebo heslo neodpovídá demo účtu, zobrazí chybovou zprávu a ponechá uživatele na `/login`.

**Skutečný výsledek:** Ve variantě A aplikace odmítla formátově platný, ale nesprávný e-mail. Ve variantě B odmítla nesprávné heslo. V obou případech zobrazila zprávu `Zadali jste chybný e-mail nebo heslo.`, ponechala uživatele na `/login` a dashboard nezobrazila.

**Výsledný stav:** Passed

---

### TC-009 – Odhlášení uživatele

| Položka | Hodnota |
| --- | --- |
| Testovací scénář | TS-009 |
| Požadavek | FR-008 |
| Typ testu | Pozitivní, smoke |
| Priorita | Vysoká |
| Stav | Passed |

**Vstupní podmínka:** Uživatel je přihlášený pomocí platného demo účtu a nachází se na `/dashboard`.

**Testovací data:**

| E-mail | Heslo |
| --- | --- |
| `test@test.cz` | `Heslo123` |

| Krok | Akce | Očekávaný výsledek |
| --- | --- | --- |
| 1 | Zkontrolovat obsah stránky `/dashboard`. | Zobrazí se text `Vítejte` a tlačítko Odhlásit se. |
| 2 | Kliknout na tlačítko Odhlásit se. | Uživatel je odhlášen a přesměrován na `/login`. |
| 3 | Zkontrolovat obsah přihlašovací stránky. | Zobrazí se přihlašovací formulář s poli E-mail a Heslo a tlačítkem Přihlásit se. |

**Celkový očekávaný výsledek:** Přihlášený uživatel se může odhlásit a po odhlášení je přesměrován na `/login`.

**Skutečný výsledek:** Po kliknutí na tlačítko Odhlásit se aplikace přesměrovala uživatele na `/login` a zobrazila přihlašovací formulář.

**Výsledný stav:** Passed

---

### TC-010 – Přístup nepřihlášeného uživatele na dashboard

| Položka | Hodnota |
| --- | --- |
| Testovací scénář | TS-010 |
| Požadavek | FR-009 |
| Typ testu | Negativní, bezpečnostní |
| Priorita | Vysoká |
| Stav | Passed |

**Vstupní podmínka:** Uživatel není přihlášený.

**Testovací data:** Nejsou potřeba.

| Krok | Akce | Očekávaný výsledek |
| --- | --- | --- |
| 1 | Do adresního řádku prohlížeče zadat `http://localhost:5173/dashboard`. | Aplikace nepřihlášenému uživateli nezobrazí dashboard. |
| 2 | Zkontrolovat aktuální adresu. | Uživatel je přesměrován na `/login`. |
| 3 | Zkontrolovat obsah stránky. | Zobrazí se přihlašovací formulář a nezobrazí se text `Vítejte` ani tlačítko Odhlásit se. |

**Celkový očekávaný výsledek:** Nepřihlášený uživatel nemůže zobrazit obsah dashboardu a aplikace ho přesměruje na `/login`.

**Skutečný výsledek:** Po přímém zadání adresy `/dashboard` nepřihlášeným uživatelem aplikace dashboard nezobrazila a přesměrovala uživatele na `/login`.

**Výsledný stav:** Passed

---

### TC-011 – Ovládání formuláře klávesnicí

| Položka | Hodnota |
| --- | --- |
| Testovací scénář | TS-011 |
| Požadavek | NFR-001 |
| Typ testu | Přístupnost |
| Priorita | Střední |
| Stav | Passed |

**Testovací data:**

| E-mail | Heslo |
| --- | --- |
| `test@test.cz` | `Heslo123` |

Po otevření stránky nepoužívat myš.

| Krok | Akce | Očekávaný výsledek |
| --- | --- | --- |
| 1 | Otevřít nebo obnovit stránku `/login`. | Zobrazí se přihlašovací formulář. |
| 2 | Stisknout klávesu Tab. | Pole E-mail získá zaměření a je viditelně zvýrazněné. |
| 3 | Napsat `test@test.cz`. | E-mail se vloží do aktivního pole. |
| 4 | Stisknout klávesu Tab. | Pole Heslo získá zaměření a je viditelně zvýrazněné. |
| 5 | Napsat `Heslo123`. | Heslo se vloží do pole a jeho znaky jsou maskované. |
| 6 | Stisknout klávesu Tab. | Tlačítko Přihlásit se získá zaměření a je viditelně zvýrazněné. |
| 7 | Stisknout klávesu Enter. | Formulář se odešle a uživatel je přesměrován na `/dashboard`. |

**Celkový očekávaný výsledek:** Přihlašovací formulář lze ovládat pouze klávesnicí, prvky získávají zaměření v logickém pořadí a aktivní prvek je vždy viditelně zvýrazněný.

**Skutečný výsledek:** Pomocí klávesy Tab se focus přesouval v logickém pořadí z pole E-mail do pole Heslo a následně na tlačítko Přihlásit se. Každý aktivní prvek byl viditelně zvýrazněný. Po stisknutí klávesy Enter na tlačítku aplikace přesměrovala uživatele na `/dashboard`.

**Výsledný stav:** Passed

---

### TC-012 – Zobrazení při šířce 320 px

| Položka | Hodnota |
| --- | --- |
| Testovací scénář | TS-012 |
| Požadavek | NFR-002 |
| Typ testu | Responzivita |
| Priorita | Střední |
| Stav | Passed |

**Testovací data:**

| E-mail | Heslo | Šířka zobrazení |
| --- | --- | --- |
| `test@test.cz` | `Heslo123` | 320 px |

| Krok | Akce | Očekávaný výsledek |
| --- | --- | --- |
| 1 | Otevřít stránku `/login`. | Zobrazí se přihlašovací stránka. |
| 2 | Otevřít Chrome DevTools, zapnout režim zařízení a nastavit šířku na 320 px. | Stránka se zobrazí v nastavené šířce. |
| 3 | Zkontrolovat přihlašovací stránku. | Nadpis, pole a tlačítko jsou viditelné, použitelné a stránka nemá vodorovný posuvník. |
| 4 | Zadat platné přihlašovací údaje a kliknout na tlačítko Přihlásit se. | Uživatel je přesměrován na `/dashboard`. |
| 5 | Zkontrolovat dashboard při stejné šířce 320 px. | Text `Vítejte` a tlačítko Odhlásit se jsou viditelné, použitelné a stránka nemá vodorovný posuvník. |

**Celkový očekávaný výsledek:** Přihlašovací stránka i dashboard se při šířce 320 px zobrazí správně a bez vodorovného posouvání.

**Skutečný výsledek:** Při nastavené šířce 320 px se přihlašovací stránka i dashboard zobrazily bez vodorovného posouvání. Nadpisy, vstupní pole a tlačítka byly viditelné a použitelné.

**Výsledný stav:** Passed