# Požadavky aplikace Login Form QA

## 1\. Účel dokumentu

Tento dokument popisuje požadavky na jednoduchou webovou aplikaci určenou k přihlašování uživatelů.

Požadavky budou sloužit jako podklad pro vytvoření testovacího plánu, testovacích scénářů, test cases a bug reportů.

## 2\. Popis aplikace

Aplikace obsahuje přihlašovací stránku a chráněný uživatelský dashboard.

Uživatel zadá svůj e-mail a heslo. Po úspěšném přihlášení bude přesměrován na dashboard. Při zadání neplatných údajů zůstane na přihlašovací stránce a zobrazí se mu chybová zpráva.

## 3. Testovací účty

Testovací účty jsou určené pouze pro účely tohoto projektu.

| Účel účtu | E-mail | Heslo |
| --- | --- | --- |
| Standardní testy přihlášení | `test@test.cz` | `Heslo123` |
| Test maximální délky hesla | `boundary20@test.cz` | `Heslo123456789012345` |

## 4\. Funkční požadavky

| ID | Požadavek |
| --- | --- |
| FR-001 | Přihlašovací formulář musí být dostupný na adrese `/login`. |
| FR-002 | Formulář musí obsahovat pole E-mail, pole Heslo a tlačítko Přihlásit se. |
| FR-003 | Pole E-mail a Heslo musí být povinná. |
| FR-004 | Pole E-mail musí přijímat pouze hodnotu ve správném formátu e-mailové adresy. |
| FR-005 | Heslo musí obsahovat minimálně 8 a maximálně 20 znaků. |
| FR-006 | Zadané heslo musí být v poli skryté. |
| FR-007 | Po zadání platných přihlašovacích údajů musí být uživatel přesměrován na `/dashboard`. |
| FR-008 | Dashboard musí zobrazit informaci o úspěšném přihlášení. |
| FR-009 | Při zadání neplatného e-mailu nebo hesla musí aplikace zobrazit zprávu `Neplatný e-mail nebo heslo.` |
| FR-010 | Po neúspěšném přihlášení musí uživatel zůstat na stránce `/login`. |
| FR-011 | Formulář musí být možné odeslat kliknutím na tlačítko Přihlásit se. |
| FR-012 | Formulář musí být možné odeslat klávesou Enter. |
| FR-013 | Dashboard musí obsahovat tlačítko Odhlásit se. |
| FR-014 | Po odhlášení musí být uživatel přesměrován zpět na `/login`. |
| FR-015 | Nepřihlášený uživatel nesmí mít přístup na `/dashboard`. Při pokusu o přístup musí být přesměrován na `/login`. |

## 5\. Nefunkční požadavky

| ID | Požadavek |
| --- | --- |
| NFR-001 | Formulář musí být ovladatelný pomocí klávesnice. |
| NFR-002 | Všechna formulářová pole musí mít srozumitelné textové popisky. |
| NFR-003 | Chybové zprávy musí být čitelné a jednoznačné. |
| NFR-004 | Přihlašovací formulář musí být použitelný na počítači i mobilním zařízení. |
| NFR-005 | Výsledek přihlášení musí být zobrazen nejpozději do 2 sekund od odeslání formuláře. |

## 6\. Funkce mimo rozsah projektu

Součástí první verze aplikace nebudou:

-   registrace nového uživatele,

-   obnovení zapomenutého hesla,

-   změna hesla,

-   přihlášení prostřednictvím sociálních sítí,

-   dvoufázové ověření,

-   uživatelské role.

## 7\. Poznámky a předpoklady

-   Testovací účet je pouze demonstrační a neobsahuje skutečné osobní údaje.

-   Aplikace je vytvořena pro studijní a testovací účely.

-   Všechny požadavky musí být ověřitelné alespoň jedním test casem.