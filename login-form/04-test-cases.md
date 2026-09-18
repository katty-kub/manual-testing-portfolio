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
## 3\. Poznámka k provedení testů

Pole Skutečný výsledek a Výsledný stav budou doplněna až po spuštění aplikace a skutečném provedení testů.

Test nesmí být označen jako Passed pouze na základě očekávání. Stav Passed lze použít jen tehdy, pokud byl test skutečně proveden a skutečný výsledek odpovídal očekávanému výsledku.

---

