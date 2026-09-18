# Test Cases – Login Form QA

## 1\. Účel dokumentu

Tento dokument obsahuje podrobné test cases vytvořené podle požadavků a testovacích scénářů projektu Login Form QA.

Každý test case obsahuje vstupní podmínky, testovací data, jednotlivé kroky a očekávaný výsledek.

## 2\. Používané stavy

| Stav | Význam |
| --- | --- |
| Not Run | Test zatím nebyl proveden |
| Passed | Skutečný výsledek odpovídá očekávanému výsledku |
| Failed | Skutečný výsledek neodpovídá očekávanému výsledku |
| Blocked | Test nebylo možné dokončit kvůli překážce |

---

# TC-001 – Zobrazení přihlašovacího formuláře

| Položka | Hodnota |
| --- | --- |
| Test Case ID | TC-001 |
| Název | Zobrazení přihlašovacího formuláře |
| Testovací scénáře | TS-001, TS-002 |
| Požadavky | FR-001, FR-002 |
| Typ testu | Pozitivní, smoke |
| Priorita | Vysoká |
| Prostředí | Google Chrome, Windows |
| Stav | Not Run |

## Vstupní podmínky

-   Aplikace je spuštěná.

-   Přihlašovací stránka je dostupná.

## Testovací data

Pro tento test nejsou potřeba žádná testovací data.

## Kroky testu

| Krok | Akce | Očekávaný výsledek |
| --- | --- | --- |
| 1 | Otevřít adresu `http://localhost:5173/login`. | Zobrazí se přihlašovací stránka. |
| 2 | Zkontrolovat pole E-mail. | Pole E-mail je viditelné. |
| 3 | Zkontrolovat pole Heslo. | Pole Heslo je viditelné. |
| 4 | Zkontrolovat tlačítko Přihlásit se. | Tlačítko Přihlásit se je viditelné. |

## Očekávaný výsledek

Přihlašovací stránka se zobrazí a obsahuje pole E-mail, pole Heslo a tlačítko Přihlásit se.

## Skutečný výsledek

Nevyplněno – test zatím nebyl proveden.

## Výsledný stav

**Not Run**

---

# TC-002 – Přihlášení platnými údaji

| Položka | Hodnota |
| --- | --- |
| Test Case ID | TC-002 |
| Název | Přihlášení platným e-mailem a heslem |
| Testovací scénáře | TS-012, TS-015 |
| Požadavky | FR-007, FR-008, FR-011 |
| Typ testu | Pozitivní, smoke |
| Priorita | Vysoká |
| Prostředí | Google Chrome, Windows |
| Stav | Not Run |

## Vstupní podmínky

-   Aplikace je spuštěná.

-   Uživatel není přihlášený.

-   Přihlašovací stránka je otevřená.

-   Testovací účet existuje.

## Testovací data

| Pole | Hodnota |
| --- | --- |
| E-mail | `test@test.cz` |
| Heslo | `Heslo123` |

## Kroky testu

| Krok | Akce | Očekávaný výsledek |
| --- | --- | --- |
| 1 | Otevřít adresu `http://localhost:5173/login`. | Zobrazí se přihlašovací formulář. |
| 2 | Do pole E-mail zadat `test@test.cz`. | E-mail se zobrazí v poli. |
| 3 | Do pole Heslo zadat `Heslo123`. | Heslo je zadané a jeho znaky jsou skryté. |
| 4 | Kliknout na tlačítko Přihlásit se. | Formulář se odešle. |
| 5 | Zkontrolovat adresu a obsah zobrazené stránky. | Uživatel je přesměrován na `/dashboard` a zobrazí se informace o úspěšném přihlášení. |

## Očekávaný výsledek

Uživatel je úspěšně přihlášený a přesměrovaný na stránku `/dashboard`.

## Skutečný výsledek

Nevyplněno – test zatím nebyl proveden.

## Výsledný stav

**Not Run**

---

# TC-003 – Odeslání prázdného formuláře

| Položka | Hodnota |
| --- | --- |
| Test Case ID | TC-003 |
| Název | Odeslání formuláře s prázdným e-mailem a heslem |
| Testovací scénář | TS-003 |
| Požadavek | FR-003 |
| Typ testu | Negativní |
| Priorita | Vysoká |
| Prostředí | Google Chrome, Windows |
| Stav | Not Run |

## Vstupní podmínky

-   Aplikace je spuštěná.

-   Uživatel není přihlášený.

-   Přihlašovací stránka je otevřená.

## Testovací data

| Pole | Hodnota |
| --- | --- |
| E-mail | Prázdná hodnota |
| Heslo | Prázdná hodnota |

## Kroky testu

| Krok | Akce | Očekávaný výsledek |
| --- | --- | --- |
| 1 | Otevřít adresu `http://localhost:5173/login`. | Zobrazí se přihlašovací formulář. |
| 2 | Ponechat pole E-mail prázdné. | Pole zůstane prázdné. |
| 3 | Ponechat pole Heslo prázdné. | Pole zůstane prázdné. |
| 4 | Kliknout na tlačítko Přihlásit se. | Formulář se neodešle a zobrazí se upozornění na povinná pole. |
| 5 | Zkontrolovat aktuální adresu stránky. | Uživatel zůstane na stránce `/login`. |

## Očekávaný výsledek

Uživatel není přihlášený. Aplikace upozorní, že pole E-mail a Heslo jsou povinná, a uživatel zůstane na stránce `/login`.

## Skutečný výsledek

Nevyplněno – test zatím nebyl proveden.

## Výsledný stav

**Not Run**

---
# TC-004 – Odeslání formuláře s prázdným e-mailem

| Položka | Hodnota |
| --- | --- |
| Test Case ID | TC-004 |
| Název | Odeslání formuláře s prázdným e-mailem |
| Testovací scénář | TS-004 |
| Požadavek | FR-003 |
| Typ testu | Negativní |
| Priorita | Vysoká |
| Prostředí | Google Chrome, Windows |
| Stav | Not Run |

## Vstupní podmínky

- Aplikace je spuštěná.
- Uživatel není přihlášený.
- Přihlašovací stránka je otevřená.

## Testovací data

| Pole | Hodnota |
| --- | --- |
| E-mail | Prázdná hodnota |
| Heslo | `Heslo123` |

## Kroky testu

| Krok | Akce | Očekávaný výsledek |
| --- | --- | --- |
| 1 | Otevřít adresu `http://localhost:5173/login`. | Zobrazí se přihlašovací formulář. |
| 2 | Ponechat pole E-mail prázdné. | Pole E-mail zůstane prázdné. |
| 3 | Do pole Heslo zadat `Heslo123`. | Heslo je zadané a jeho znaky jsou skryté. |
| 4 | Kliknout na tlačítko Přihlásit se. | Formulář se neodešle a zobrazí se upozornění na povinný e-mail. |
| 5 | Zkontrolovat aktuální adresu stránky. | Uživatel zůstane na stránce `/login`. |

## Očekávaný výsledek

Uživatel není přihlášený. Aplikace upozorní, že pole E-mail je povinné, a uživatel zůstane na stránce `/login`.

## Skutečný výsledek

Nevyplněno – test zatím nebyl proveden.

## Výsledný stav

**Not Run**

---
# TC-005 – Odeslání formuláře s prázdným heslem

| Položka | Hodnota |
| --- | --- |
| Test Case ID | TC-005 |
| Název | Odeslání formuláře s prázdným heslem |
| Testovací scénář | TS-005 |
| Požadavek | FR-003 |
| Typ testu | Negativní |
| Priorita | Vysoká |
| Prostředí | Google Chrome, Windows |
| Stav | Not Run |

## Vstupní podmínky

- Aplikace je spuštěná.
- Uživatel není přihlášený.
- Přihlašovací stránka je otevřená.

## Testovací data

| Pole | Hodnota |
| --- | --- |
| E-mail | `test@test.cz` |
| Heslo | Prázdná hodnota |

## Kroky testu

| Krok | Akce | Očekávaný výsledek |
| --- | --- | --- |
| 1 | Otevřít adresu `http://localhost:5173/login`. | Zobrazí se přihlašovací formulář. |
| 2 | Do pole E-mail zadat `test@test.cz`. | E-mail se zobrazí v poli. |
| 3 | Ponechat pole Heslo prázdné. | Pole Heslo zůstane prázdné. |
| 4 | Kliknout na tlačítko Přihlásit se. | Formulář se neodešle a zobrazí se upozornění na povinné heslo. |
| 5 | Zkontrolovat aktuální adresu stránky. | Uživatel zůstane na stránce `/login`. |

## Očekávaný výsledek

Uživatel není přihlášený. Aplikace upozorní, že pole Heslo je povinné, a uživatel zůstane na stránce `/login`.

## Skutečný výsledek

Nevyplněno – test zatím nebyl proveden.

## Výsledný stav

**Not Run**

---
# TC-006 – Test neplatného formátu e-mailu

| Položka | Hodnota |
| --- | --- |
| Test Case ID | TC-006 |
| Název | Test neplatného formátu e-mailu |
| Testovací scénář | TS-006 |
| Požadavek | FR-004 |
| Typ testu | Negativní |
| Priorita | Vysoká |
| Prostředí | Google Chrome, Windows |
| Stav | Not Run |

## Vstupní podmínky

-   Aplikace je spuštěná.

-   Uživatel není přihlášený.

-   Přihlašovací stránka je otevřená.

## Testovací data

| Pole | Hodnota |
| --- | --- |
| E-mail | `testtest.cz` |
| Heslo | `Heslo123` |

## Kroky testu

| Krok | Akce | Očekávaný výsledek |
| --- | --- | --- |
| 1 | Otevřít adresu `http://localhost:5173/login`. | Zobrazí se přihlašovací formulář. |
| 2 | Do pole E-mail zadat `testtest.cz`. | Hodnota `testtest.cz` se zobrazí v poli E-mail. |
| 3 | Do pole Heslo zadat `Heslo123`. | Heslo je zadané a jeho znaky jsou skryté. |
| 4 | Kliknout na tlačítko Přihlásit se. | Formulář se neodešle a u pole E-mail se zobrazí upozornění na neplatný formát. |
| 5 | Zkontrolovat aktuální adresu stránky. | Uživatel zůstane na stránce `/login`. |

## Očekávaný výsledek

Uživatel není přihlášený. Aplikace zobrazí upozornění na neplatný formát e-mailu a uživatel zůstane na stránce `/login`.

## Skutečný výsledek

Nevyplněno – test zatím nebyl proveden.

## Výsledný stav

**Not Run**

---
# TC-007 – Odeslání formuláře s heslem o délce 7 znaků

| Položka | Hodnota |
| --- | --- |
| Test Case ID | TC-007 |
| Název | Odeslání formuláře s heslem o délce 7 znaků |
| Testovací scénář | TS-007 |
| Požadavek | FR-005 |
| Typ testu | Hraniční, negativní |
| Priorita | Střední |
| Prostředí | Google Chrome, Windows |
| Stav | Not Run |

## Vstupní podmínky

- Aplikace je spuštěná.
- Uživatel není přihlášený.
- Přihlašovací stránka je otevřená.

## Testovací data

| Pole | Hodnota |
| --- | --- |
| E-mail | `test@test.cz` |
| Heslo | `Heslo12` – přesně 7 znaků |

## Kroky testu

| Krok | Akce | Očekávaný výsledek |
| --- | --- | --- |
| 1 | Otevřít adresu `http://localhost:5173/login`. | Zobrazí se přihlašovací formulář. |
| 2 | Do pole E-mail zadat `test@test.cz`. | E-mail se zobrazí v poli. |
| 3 | Do pole Heslo zadat `Heslo12` – přesně 7 znaků. | Heslo je zadané a jeho znaky jsou skryté. |
| 4 | Kliknout na tlačítko Přihlásit se. | Formulář se neodešle a zobrazí se upozornění, že heslo musí mít minimálně 8 znaků. |
| 5 | Zkontrolovat aktuální adresu stránky. | Uživatel zůstane na stránce `/login`. |

## Očekávaný výsledek

Uživatel není přihlášený. Aplikace zobrazí upozornění, že heslo musí mít minimálně 8 znaků, a uživatel zůstane na stránce `/login`.

## Skutečný výsledek

Nevyplněno – test zatím nebyl proveden.

## Výsledný stav

**Not Run**

---
# TC-008 – Odeslání formuláře s heslem o délce 8 znaků

| Položka | Hodnota |
| --- | --- |
| Test Case ID | TC-008 |
| Název | Odeslání formuláře s heslem o délce 8 znaků |
| Testovací scénář | TS-008 |
| Požadavek | FR-005 |
| Typ testu | Hraniční, pozitivní |
| Priorita | Střední |
| Prostředí | Google Chrome, Windows |
| Stav | Not Run |

## Vstupní podmínky

- Aplikace je spuštěná.
- Uživatel není přihlášený.
- Přihlašovací stránka je otevřená.
- Testovací účet existuje.

## Testovací data

| Pole | Hodnota |
| --- | --- |
| E-mail | `test@test.cz` |
| Heslo | `Heslo123` – přesně 8 znaků |

## Kroky testu

| Krok | Akce | Očekávaný výsledek |
| --- | --- | --- |
| 1 | Otevřít adresu `http://localhost:5173/login`. | Zobrazí se přihlašovací formulář. |
| 2 | Do pole E-mail zadat `test@test.cz`. | E-mail se zobrazí v poli. |
| 3 | Do pole Heslo zadat `Heslo123` – přesně 8 znaků. | Heslo je zadané, jeho znaky jsou skryté a nezobrazí se upozornění na neplatnou délku. |
| 4 | Kliknout na tlačítko Přihlásit se. | Formulář se odešle. |
| 5 | Zkontrolovat aktuální adresu a obsah stránky. | Uživatel je přihlášený a přesměrovaný na `/dashboard`. |

## Očekávaný výsledek

Uživatel je úspěšně přihlášený. Heslo o délce 8 znaků je přijato a uživatel je přesměrován na stránku `/dashboard`.

## Skutečný výsledek

Nevyplněno – test zatím nebyl proveden.

## Výsledný stav

**Not Run**

---
# TC-009 – Odeslání formuláře s heslem o délce 20 znaků

| Položka | Hodnota |
| --- | --- |
| Test Case ID | TC-009 |
| Název | Odeslání formuláře s heslem o délce 20 znaků |
| Testovací scénář | TS-009 |
| Požadavek | FR-005 |
| Typ testu | Hraniční, pozitivní |
| Priorita | Střední |
| Prostředí | Google Chrome, Windows |
| Stav | Not Run |

## Vstupní podmínky

- Aplikace je spuštěná.
- Uživatel není přihlášený.
- Přihlašovací stránka je otevřená.
- Testovací účet s heslem o délce 20 znaků existuje.

## Testovací data

| Pole | Hodnota |
| --- | --- |
| E-mail | `boundary20@test.cz` |
| Heslo | `Heslo123456789012345` – přesně 20 znaků |

## Kroky testu

| Krok | Akce | Očekávaný výsledek |
| --- | --- | --- |
| 1 | Otevřít adresu `http://localhost:5173/login`. | Zobrazí se přihlašovací formulář. |
| 2 | Do pole E-mail zadat `boundary20@test.cz`. | E-mail se zobrazí v poli. |
| 3 | Do pole Heslo zadat `Heslo123456789012345` – přesně 20 znaků. | Heslo je zadané, jeho znaky jsou skryté a nezobrazí se upozornění na neplatnou délku. |
| 4 | Kliknout na tlačítko Přihlásit se. | Formulář se odešle. |
| 5 | Zkontrolovat aktuální adresu a obsah stránky. | Uživatel je přihlášený a přesměrovaný na `/dashboard`. |

## Očekávaný výsledek

Heslo o délce přesně 20 znaků je přijato bez validační chyby. Uživatel je úspěšně přihlášený a přesměrovaný na stránku `/dashboard`.

## Skutečný výsledek

Nevyplněno – test zatím nebyl proveden.

## Výsledný stav

**Not Run**

---
# TC-009 – Odeslání formuláře s heslem o délce 20 znaků

| Položka | Hodnota |
| --- | --- |
| Test Case ID | TC-009 |
| Název | Odeslání formuláře s heslem o délce 20 znaků |
| Testovací scénář | TS-009 |
| Požadavek | FR-005 |
| Typ testu | Hraniční, pozitivní |
| Priorita | Střední |
| Prostředí | Google Chrome, Windows |
| Stav | Not Run |

## Vstupní podmínky

- Aplikace je spuštěná.
- Uživatel není přihlášený.
- Přihlašovací stránka je otevřená.
- Testovací účet s heslem o délce 20 znaků existuje.

## Testovací data

| Pole | Hodnota |
| --- | --- |
| E-mail | `boundary20@test.cz` |
| Heslo | `Heslo123456789012345` – přesně 20 znaků |

## Kroky testu

| Krok | Akce | Očekávaný výsledek |
| --- | --- | --- |
| 1 | Otevřít adresu `http://localhost:5173/login`. | Zobrazí se přihlašovací formulář. |
| 2 | Do pole E-mail zadat `test@test.cz`. | E-mail se zobrazí v poli. |
| 3 | Do pole Heslo zadat `12345678901234567890` – přesně 20 znaků. | Heslo je zadané a jeho znaky jsou skryté. |
| 4 | Kliknout na tlačítko Přihlásit se. | Formulář se odešle a nezobrazí se upozornění na neplatnou délku hesla. |
| 5 | Zkontrolovat výsledek přihlášení a aktuální adresu stránky. | Aplikace upozorní na neplatné přihlašovací údaje a uživatel zůstane na stránce `/login`. |

## Očekávaný výsledek

Aplikace přijme heslo o délce 20 znaků bez validační chyby. Uživatel je úspěšně přihlášený a přesměrovaný na stránku \`/dashboard\`.

## Skutečný výsledek

Nevyplněno – test zatím nebyl proveden.

## Výsledný stav

**Not Run**

---
# TC-010 – Odeslání formuláře s heslem o délce 21 znaků

| Položka | Hodnota |
| --- | --- |
| Test Case ID | TC-010 |
| Název | Odeslání formuláře s heslem o délce 21 znaků |
| Testovací scénář | TS-010 |
| Požadavek | FR-005 |
| Typ testu | Hraniční, negativní |
| Priorita | Střední |
| Prostředí | Google Chrome, Windows |
| Stav | Not Run |

## Vstupní podmínky

- Aplikace je spuštěná.
- Uživatel není přihlášený.
- Přihlašovací stránka je otevřená.

## Testovací data

| Pole | Hodnota |
| --- | --- |
| E-mail | `test@test.cz` |
| Heslo | `123456789012345678901` – přesně 21 znaků |

## Kroky testu

| Krok | Akce | Očekávaný výsledek |
| --- | --- | --- |
| 1 | Otevřít adresu `http://localhost:5173/login`. | Zobrazí se přihlašovací formulář. |
| 2 | Do pole E-mail zadat `test@test.cz`. | E-mail se zobrazí v poli. |
| 3 | Do pole Heslo zadat `123456789012345678901` – přesně 21 znaků. | Heslo je zadané a jeho znaky jsou skryté. |
| 4 | Kliknout na tlačítko Přihlásit se. | Formulář se neodešle a zobrazí se upozornění, že heslo může mít maximálně 20 znaků. |
| 5 | Zkontrolovat aktuální adresu stránky. | Uživatel zůstane na stránce `/login`. |

## Očekávaný výsledek

Aplikace odmítne heslo o délce 21 znaků a upozorní, že heslo může mít maximálně 20 znaků. Formulář se neodešle a uživatel zůstane na stránce `/login`.

## Skutečný výsledek

Nevyplněno – test zatím nebyl proveden.

## Výsledný stav

**Not Run**

---
# TC-011 – Skrytí znaků v poli Heslo

| Položka | Hodnota |
| --- | --- |
| Test Case ID | TC-011 |
| Název | Skrytí znaků v poli Heslo |
| Testovací scénář | TS-011 |
| Požadavek | FR-006 |
| Typ testu | Pozitivní |
| Priorita | Střední |
| Prostředí | Google Chrome, Windows |
| Stav | Not Run |

## Vstupní podmínky

- Aplikace je spuštěná.
- Uživatel není přihlášený.
- Přihlašovací stránka je otevřená.

## Testovací data

| Pole | Hodnota |
| --- | --- |
| Heslo | `Heslo123` |

## Kroky testu

| Krok | Akce | Očekávaný výsledek |
| --- | --- | --- |
| 1 | Otevřít adresu `http://localhost:5173/login`. | Zobrazí se přihlašovací formulář. |
| 2 | Kliknout do pole Heslo. | Pole Heslo je aktivní a připravené pro zadávání. |
| 3 | Do pole Heslo zadat `Heslo123`. | Zadané znaky nejsou čitelné a zobrazují se jako maskovací symboly, například tečky. |
| 4 | Zkontrolovat obsah pole Heslo. | Skutečná hodnota `Heslo123` není na obrazovce viditelná. |

## Očekávaný výsledek

Znaky zadané do pole Heslo jsou skryté pomocí maskovacích symbolů a skutečná hodnota hesla není na obrazovce čitelná.

## Skutečný výsledek

Nevyplněno – test zatím nebyl proveden.

## Výsledný stav

**Not Run**

---
# TC-012 – Přihlášení neexistujícím e-mailem

| Položka | Hodnota |
| --- | --- |
| Test Case ID | TC-012 |
| Název | Přihlášení neexistujícím e-mailem |
| Testovací scénář | TS-013 |
| Požadavky | FR-009, FR-010 |
| Typ testu | Negativní |
| Priorita | Vysoká |
| Prostředí | Google Chrome, Windows |
| Stav | Not Run |

## Vstupní podmínky

- Aplikace je spuštěná.
- Uživatel není přihlášený.
- Přihlašovací stránka je otevřená.
- Účet s e-mailem `neexistuje@test.cz` neexistuje.

## Testovací data

| Pole | Hodnota |
| --- | --- |
| E-mail | `neexistuje@test.cz` |
| Heslo | `Heslo123` |

## Kroky testu

| Krok | Akce | Očekávaný výsledek |
| --- | --- | --- |
| 1 | Otevřít adresu `http://localhost:5173/login`. | Zobrazí se přihlašovací formulář. |
| 2 | Do pole E-mail zadat `neexistuje@test.cz`. | E-mail se zobrazí v poli. |
| 3 | Do pole Heslo zadat `Heslo123`. | Heslo je zadané a jeho znaky jsou skryté. |
| 4 | Kliknout na tlačítko Přihlásit se. | Formulář se odešle a zobrazí se zpráva `Neplatný e-mail nebo heslo.` |
| 5 | Zkontrolovat aktuální adresu stránky. | Uživatel zůstane na stránce `/login`. |

## Očekávaný výsledek

Uživatel není přihlášený. Aplikace zobrazí zprávu `Neplatný e-mail nebo heslo.` a uživatel zůstane na stránce `/login`.

## Skutečný výsledek

Nevyplněno – test zatím nebyl proveden.

## Výsledný stav

**Not Run**

---
# TC-013 – Přihlášení nesprávným heslem

| Položka | Hodnota |
| --- | --- |
| Test Case ID | TC-013 |
| Název | Přihlášení platným e-mailem a nesprávným heslem |
| Testovací scénář | TS-014 |
| Požadavky | FR-009, FR-010 |
| Typ testu | Negativní |
| Priorita | Vysoká |
| Prostředí | Google Chrome, Windows |
| Stav | Not Run |

## Vstupní podmínky

- Aplikace je spuštěná.
- Uživatel není přihlášený.
- Přihlašovací stránka je otevřená.
- Testovací účet s e-mailem `test@test.cz` existuje.

## Testovací data

| Pole | Hodnota |
| --- | --- |
| E-mail | `test@test.cz` |
| Heslo | `Spatne123` |

## Kroky testu

| Krok | Akce | Očekávaný výsledek |
| --- | --- | --- |
| 1 | Otevřít adresu `http://localhost:5173/login`. | Zobrazí se přihlašovací formulář. |
| 2 | Do pole E-mail zadat `test@test.cz`. | E-mail se zobrazí v poli. |
| 3 | Do pole Heslo zadat `Spatne123`. | Heslo je zadané a jeho znaky jsou skryté. |
| 4 | Kliknout na tlačítko Přihlásit se. | Formulář se odešle a zobrazí se zpráva `Neplatný e-mail nebo heslo.` |
| 5 | Zkontrolovat aktuální adresu stránky. | Uživatel zůstane na stránce `/login`. |

## Očekávaný výsledek

Uživatel není přihlášený. Aplikace zobrazí zprávu `Neplatný e-mail nebo heslo.` a uživatel zůstane na stránce `/login`.

## Skutečný výsledek

Nevyplněno – test zatím nebyl proveden.

## Výsledný stav

**Not Run**

---
# TC-014 – Odeslání přihlašovacího formuláře klávesou Enter

| Položka | Hodnota |
| --- | --- |
| Test Case ID | TC-014 |
| Název | Odeslání přihlašovacího formuláře klávesou Enter |
| Testovací scénář | TS-016 |
| Požadavek | FR-012 |
| Typ testu | Pozitivní |
| Priorita | Střední |
| Prostředí | Google Chrome, Windows |
| Stav | Not Run |

## Vstupní podmínky

- Aplikace je spuštěná.
- Uživatel není přihlášený.
- Přihlašovací stránka je otevřená.
- Testovací účet existuje.

## Testovací data

| Pole | Hodnota |
| --- | --- |
| E-mail | `test@test.cz` |
| Heslo | `Heslo123` |

## Kroky testu

| Krok | Akce | Očekávaný výsledek |
| --- | --- | --- |
| 1 | Otevřít adresu `http://localhost:5173/login`. | Zobrazí se přihlašovací formulář. |
| 2 | Do pole E-mail zadat `test@test.cz`. | E-mail se zobrazí v poli. |
| 3 | Do pole Heslo zadat `Heslo123`. | Heslo je zadané a jeho znaky jsou skryté. |
| 4 | V poli Heslo stisknout klávesu Enter. | Formulář se odešle bez kliknutí na tlačítko Přihlásit se. |
| 5 | Zkontrolovat aktuální adresu a obsah stránky. | Uživatel je přesměrován na `/dashboard` a zobrazí se informace o úspěšném přihlášení. |

## Očekávaný výsledek

Formulář lze odeslat klávesou Enter. Uživatel je úspěšně přihlášený a přesměrovaný na stránku `/dashboard`.

## Skutečný výsledek

Nevyplněno – test zatím nebyl proveden.

## Výsledný stav

**Not Run**

---
# TC-015 – Odhlášení přihlášeného uživatele

| Položka | Hodnota |
| --- | --- |
| Test Case ID | TC-015 |
| Název | Odhlášení přihlášeného uživatele |
| Testovací scénář | TS-017 |
| Požadavky | FR-013, FR-014 |
| Typ testu | Pozitivní, smoke |
| Priorita | Vysoká |
| Prostředí | Google Chrome, Windows |
| Stav | Not Run |

## Vstupní podmínky

- Aplikace je spuštěná.
- Uživatel je přihlášený testovacím účtem.
- Stránka `/dashboard` je otevřená.

## Testovací data

| Pole | Hodnota |
| --- | --- |
| E-mail | `test@test.cz` |
| Heslo | `Heslo123` |

## Kroky testu

| Krok | Akce | Očekávaný výsledek |
| --- | --- | --- |
| 1 | Zkontrolovat obsah stránky `/dashboard`. | Dashboard je zobrazený a obsahuje tlačítko Odhlásit se. |
| 2 | Kliknout na tlačítko Odhlásit se. | Uživatel je odhlášený a přesměrovaný na přihlašovací stránku. |
| 3 | Zkontrolovat aktuální adresu stránky. | V adresním řádku je zobrazena adresa `/login`. |

## Očekávaný výsledek

Uživatel se úspěšně odhlásí a je přesměrován na stránku `/login`.

## Skutečný výsledek

Nevyplněno – test zatím nebyl proveden.

## Výsledný stav

**Not Run**

---

# TC-016 – Přístup nepřihlášeného uživatele na dashboard

| Položka | Hodnota |
| --- | --- |
| Test Case ID | TC-016 |
| Název | Přístup nepřihlášeného uživatele na dashboard |
| Testovací scénář | TS-018 |
| Požadavek | FR-015 |
| Typ testu | Negativní |
| Priorita | Vysoká |
| Prostředí | Google Chrome, Windows |
| Stav | Not Run |

## Vstupní podmínky

- Aplikace je spuštěná.
- Uživatel není přihlášený.
- V prohlížeči není aktivní přihlášená relace.

## Testovací data

Pro tento test nejsou potřeba žádná testovací data.

## Kroky testu

| Krok | Akce | Očekávaný výsledek |
| --- | --- | --- |
| 1 | Do adresního řádku zadat `http://localhost:5173/dashboard`. | Aplikace zjistí, že uživatel není přihlášený. |
| 2 | Potvrdit adresu klávesou Enter. | Uživatel je automaticky přesměrován na stránku `/login`. |
| 3 | Zkontrolovat aktuální adresu stránky. | V adresním řádku je zobrazena adresa `/login`. |
| 4 | Zkontrolovat obsah stránky. | Obsah chráněného dashboardu není zobrazený a je viditelný přihlašovací formulář. |

## Očekávaný výsledek

Nepřihlášený uživatel nemá přístup na stránku `/dashboard`. Aplikace ho přesměruje na stránku `/login` a obsah dashboardu nezobrazí.

## Skutečný výsledek

Nevyplněno – test zatím nebyl proveden.

## Výsledný stav

**Not Run**

---
# TC-017 – Ovládání přihlašovacího formuláře pomocí klávesnice

| Položka | Hodnota |
| --- | --- |
| Test Case ID | TC-017 |
| Název | Ovládání přihlašovacího formuláře pouze pomocí klávesnice |
| Testovací scénář | TS-019 |
| Požadavek | NFR-001 |
| Typ testu | Přístupnost |
| Priorita | Střední |
| Prostředí | Google Chrome, Windows |
| Stav | Not Run |

## Vstupní podmínky

- Aplikace je spuštěná.
- Uživatel není přihlášený.
- Přihlašovací stránka je otevřená.
- Testovací účet existuje.
- Během testu se nepoužívá myš.

## Testovací data

| Pole | Hodnota |
| --- | --- |
| E-mail | `test@test.cz` |
| Heslo | `Heslo123` |

## Kroky testu

| Krok | Akce | Očekávaný výsledek |
| --- | --- | --- |
| 1 | Pomocí klávesy Tab přesunout kurzor do pole E-mail. | Pole E-mail získá viditelné zaměření. |
| 2 | Zadat `test@test.cz`. | E-mail se zobrazí v poli. |
| 3 | Stisknout klávesu Tab. | Zaměření se přesune do pole Heslo. |
| 4 | Zadat `Heslo123`. | Heslo je zadané a jeho znaky jsou skryté. |
| 5 | Stisknout klávesu Tab. | Zaměření se přesune na tlačítko Přihlásit se. |
| 6 | Stisknout klávesu Enter. | Formulář se odešle bez použití myši. |
| 7 | Zkontrolovat aktuální adresu a obsah stránky. | Uživatel je přesměrován na `/dashboard` a zobrazí se informace o úspěšném přihlášení. |

## Očekávaný výsledek

Přihlašovací formulář lze celý ovládat pouze pomocí klávesnice. Zaměření se přesouvá v logickém pořadí a uživatel se může přihlásit bez použití myši.

## Skutečný výsledek

Nevyplněno – test zatím nebyl proveden.

## Výsledný stav

**Not Run**

---
# TC-018 – Srozumitelnost popisků formulářových polí

| Položka | Hodnota |
| --- | --- |
| Test Case ID | TC-018 |
| Název | Srozumitelnost popisků formulářových polí |
| Testovací scénář | TS-020 |
| Požadavek | NFR-002 |
| Typ testu | Přístupnost |
| Priorita | Střední |
| Prostředí | Google Chrome, Windows |
| Stav | Not Run |

## Vstupní podmínky

- Aplikace je spuštěná.
- Přihlašovací stránka je otevřená.

## Testovací data

Pro tento test nejsou potřeba žádná testovací data.

## Kroky testu

| Krok | Akce | Očekávaný výsledek |
| --- | --- | --- |
| 1 | Otevřít adresu `http://localhost:5173/login`. | Zobrazí se přihlašovací formulář. |
| 2 | Zkontrolovat textový popisek pole pro zadání e-mailu. | Pole má viditelný a srozumitelný popisek `E-mail`. |
| 3 | Zkontrolovat umístění popisku `E-mail`. | Je jednoznačně poznat, že popisek patří k poli pro zadání e-mailu. |
| 4 | Zkontrolovat textový popisek pole pro zadání hesla. | Pole má viditelný a srozumitelný popisek `Heslo`. |
| 5 | Zkontrolovat umístění popisku `Heslo`. | Je jednoznačně poznat, že popisek patří k poli pro zadání hesla. |

## Očekávaný výsledek

Pole přihlašovacího formuláře mají viditelné a srozumitelné textové popisky. Uživatel dokáže jednoznačně určit, které pole slouží pro zadání e-mailu a které pro zadání hesla.

## Skutečný výsledek

Nevyplněno – test zatím nebyl proveden.

## Výsledný stav

**Not Run**

---

# TC-019 – Čitelnost a srozumitelnost chybové zprávy

| Položka | Hodnota |
| --- | --- |
| Test Case ID | TC-019 |
| Název | Čitelnost a srozumitelnost chybové zprávy |
| Testovací scénář | TS-021 |
| Požadavek | NFR-003 |
| Typ testu | Použitelnost |
| Priorita | Střední |
| Prostředí | Google Chrome, Windows |
| Stav | Not Run |

## Vstupní podmínky

- Aplikace je spuštěná.
- Uživatel není přihlášený.
- Přihlašovací stránka je otevřená.
- Testovací účet existuje.

## Testovací data

| Pole | Hodnota |
| --- | --- |
| E-mail | `test@test.cz` |
| Heslo | `Spatne123` |

## Kroky testu

| Krok | Akce | Očekávaný výsledek |
| --- | --- | --- |
| 1 | Do pole E-mail zadat `test@test.cz`. | E-mail se zobrazí v poli. |
| 2 | Do pole Heslo zadat `Spatne123`. | Heslo je zadané a jeho znaky jsou skryté. |
| 3 | Kliknout na tlačítko Přihlásit se. | Zobrazí se chybová zpráva `Neplatný e-mail nebo heslo.` |
| 4 | Pohledem zkontrolovat chybovou zprávu. | Celý text zprávy je viditelný, čitelný a nepřekrývá jiné prvky formuláře. |
| 5 | Posoudit význam chybové zprávy. | Ze zprávy je srozumitelné, že zadané přihlašovací údaje nejsou platné. |

## Očekávaný výsledek

Chybová zpráva `Neplatný e-mail nebo heslo.` je celá viditelná, čitelná a srozumitelně informuje uživatele o neplatných přihlašovacích údajích.

## Skutečný výsledek

Nevyplněno – test zatím nebyl proveden.

## Výsledný stav

**Not Run**

---
# TC-020 – Zobrazení přihlašovacího formuláře na mobilním zařízení

| Položka | Hodnota |
| --- | --- |
| Test Case ID | TC-020 |
| Název | Zobrazení přihlašovacího formuláře při šířce 360 px |
| Testovací scénář | TS-022 |
| Požadavek | NFR-004 |
| Typ testu | Responzivita |
| Priorita | Střední |
| Prostředí | Google Chrome, Windows, rozlišení 360 × 800 px |
| Stav | Not Run |

## Vstupní podmínky

- Aplikace je spuštěná.
- Uživatel není přihlášený.
- Přihlašovací stránka je otevřená.
- Vývojářské nástroje prohlížeče jsou dostupné.

## Testovací data

| Pole | Hodnota |
| --- | --- |
| E-mail | `test@test.cz` |
| Heslo | `Heslo123` |
| Šířka obrazovky | `360 px` |
| Výška obrazovky | `800 px` |

## Kroky testu

| Krok | Akce | Očekávaný výsledek |
| --- | --- | --- |
| 1 | Otevřít adresu `http://localhost:5173/login`. | Zobrazí se přihlašovací formulář. |
| 2 | Otevřít vývojářské nástroje pomocí klávesy F12. | Zobrazí se vývojářské nástroje prohlížeče. |
| 3 | Zapnout režim mobilního zařízení a nastavit rozlišení na `360 × 800 px`. | Stránka se zobrazí v nastavené mobilní velikosti. |
| 4 | Pohledem zkontrolovat přihlašovací formulář. | Formulář se vejde do šířky obrazovky, jeho prvky se nepřekrývají a není potřeba vodorovné posouvání. |
| 5 | Zkontrolovat pole E-mail, pole Heslo a tlačítko Přihlásit se. | Všechny prvky jsou celé viditelné, čitelné a dostupné pro ovládání. |
| 6 | Do pole E-mail zadat `test@test.cz` a do pole Heslo zadat `Heslo123`. | Hodnoty lze zadat a formulář zůstává správně zobrazený. |
| 7 | Kliknout na tlačítko Přihlásit se. | Tlačítko je možné použít a formulář se odešle. |

## Očekávaný výsledek

Přihlašovací formulář je při šířce obrazovky 360 px celý viditelný a použitelný. Prvky se nepřekrývají, není nutné vodorovné posouvání a formulář lze vyplnit a odeslat.

## Skutečný výsledek

Nevyplněno – test zatím nebyl proveden.

## Výsledný stav

**Not Run**

---

# TC-021 – Zobrazení výsledku přihlášení do 2 sekund

| Položka | Hodnota |
| --- | --- |
| Test Case ID | TC-021 |
| Název | Zobrazení výsledku přihlášení do 2 sekund |
| Testovací scénář | TS-023 |
| Požadavek | NFR-005 |
| Typ testu | Výkon |
| Priorita | Nízká |
| Prostředí | Google Chrome, Windows, Chrome DevTools |
| Stav | Not Run |

## Vstupní podmínky

- Aplikace je spuštěná.
- Uživatel není přihlášený.
- Přihlašovací stránka je otevřená.
- Testovací účet existuje.
- V prohlížeči není nastavené omezení rychlosti připojení.

## Testovací data

| Pole | Hodnota |
| --- | --- |
| E-mail | `test@test.cz` |
| Heslo | `Heslo123` |
| Maximální povolený čas | `2 sekundy` |

## Kroky testu

| Krok | Akce | Očekávaný výsledek |
| --- | --- | --- |
| 1 | Do pole E-mail zadat `test@test.cz`. | E-mail se zobrazí v poli. |
| 2 | Do pole Heslo zadat `Heslo123`. | Heslo je zadané a jeho znaky jsou skryté. |
| 3 | Otevřít vývojářské nástroje a kartu Performance. | Zobrazí se nástroj pro měření výkonu. |
| 4 | Spustit nahrávání výkonu. | Prohlížeč začne zaznamenávat průběh aplikace. |
| 5 | Kliknout na tlačítko Přihlásit se. | Formulář se odešle. |
| 6 | Po zobrazení výsledku přihlášení zastavit nahrávání. | Záznam výkonu se ukončí a zobrazí se časová osa. |
| 7 | Změřit čas od kliknutí na tlačítko do zobrazení dashboardu. | Naměřený čas je nejvýše 2 sekundy. |

## Očekávaný výsledek

Výsledek přihlášení a stránka `/dashboard` se zobrazí nejpozději do 2 sekund od odeslání formuláře.

## Skutečný výsledek

Nevyplněno – test zatím nebyl proveden. Naměřený čas bude doplněn při provedení testu.

## Výsledný stav

**Not Run**

---
# TC-022 – Přihlášení v prohlížeči Microsoft Edge

| Položka | Hodnota |
| --- | --- |
| Test Case ID | TC-022 |
| Název | Základní přihlášení v prohlížeči Microsoft Edge |
| Testovací scénář | TS-024 |
| Požadavky | FR-007, NFR-004 |
| Typ testu | Cross-browser, pozitivní |
| Priorita | Střední |
| Prostředí | Microsoft Edge, Windows |
| Stav | Not Run |

## Vstupní podmínky

- Aplikace je spuštěná.
- Prohlížeč Microsoft Edge je nainstalovaný.
- Uživatel není přihlášený.
- Testovací účet existuje.

## Testovací data

| Pole | Hodnota |
| --- | --- |
| E-mail | `test@test.cz` |
| Heslo | `Heslo123` |

## Kroky testu

| Krok | Akce | Očekávaný výsledek |
| --- | --- | --- |
| 1 | Otevřít prohlížeč Microsoft Edge. | Prohlížeč se spustí. |
| 2 | Otevřít adresu `http://localhost:5173/login`. | Zobrazí se přihlašovací formulář. |
| 3 | Zkontrolovat zobrazení formuláře. | Pole E-mail, pole Heslo a tlačítko Přihlásit se jsou správně zobrazené a nepřekrývají se. |
| 4 | Do pole E-mail zadat `test@test.cz`. | E-mail se zobrazí v poli. |
| 5 | Do pole Heslo zadat `Heslo123`. | Heslo je zadané a jeho znaky jsou skryté. |
| 6 | Kliknout na tlačítko Přihlásit se. | Formulář se odešle. |
| 7 | Zkontrolovat aktuální adresu a obsah stránky. | Uživatel je přesměrován na `/dashboard` a zobrazí se informace o úspěšném přihlášení. |

## Očekávaný výsledek

Přihlašovací formulář se v prohlížeči Microsoft Edge správně zobrazí a funguje. Uživatel se může přihlásit a je přesměrován na stránku `/dashboard`.

## Skutečný výsledek

Nevyplněno – test zatím nebyl proveden.

## Výsledný stav

**Not Run**

---
## 3 \ . Poznámka k provedení testů

Pole Skutečný výsledek a Výsledný stav budou doplněna až po spuštění aplikace a skutečném provedení testů.

Test nesmí být označen jako Passed pouze na základě očekávání. Stav Passed lze použít jen tehdy, pokud byl test skutečně proveden a skutečný výsledek odpovídal očekávanému výsledku.

---

