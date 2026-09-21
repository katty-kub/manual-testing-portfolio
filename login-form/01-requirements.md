# Požadavky aplikace Login Form QA

## 1. Účel dokumentu

Účelem dokumentu je popsat testovatelné požadavky aplikace. Požadavky slouží jako podklad pro vytvoření testovacího plánu, testovacích scénářů a test cases a pro porovnání očekávaného chování aplikace se skutečným výsledkem.

## 2. Popis aplikace

Aplikace obsahuje přihlašovací stránku a chráněný uživatelský dashboard.

Uživatel zadá svůj e-mail a heslo. Pokud jsou přihlašovací údaje platné, aplikace uživatele přihlásí a přesměruje na dashboard. Při zadání neplatných údajů zůstane uživatel na přihlašovací stránce a zobrazí se chybová zpráva.

Přihlášený uživatel se může z dashboardu odhlásit.

## 3. Funkční požadavky

| ID | Požadavek |
| --- | --- |
| FR-001 | Aplikace musí na adrese `/login` zobrazit přihlašovací stránku s poli E-mail a Heslo a tlačítkem Přihlásit se. |
| FR-002 | Pole E-mail a Heslo musí být povinná. |
| FR-003 | Pole E-mail musí přijmout pouze adresu, která obsahuje neprázdnou část před jediným znakem `@`, doménu s tečkou a neprázdnou koncovku za poslední tečkou a neobsahuje mezery. |
| FR-004 | Heslo musí obsahovat 8 až 20 znaků včetně a jeho znaky musí být v poli maskované. |
| FR-005 | Přihlašovací formulář musí být možné odeslat tlačítkem Přihlásit se i klávesou Enter. |
| FR-006 | Po odeslání platných přihlašovacích údajů musí aplikace uživatele přesměrovat na `/dashboard` a zobrazit text `Vítejte`. |
| FR-007 | Pokud e-mail nebo heslo neodpovídá platnému demo účtu, aplikace musí zobrazit zprávu `Zadali jste chybný e-mail nebo heslo.` a uživatel musí zůstat na `/login`. |
| FR-008 | Dashboard musí obsahovat tlačítko Odhlásit se. Po odhlášení musí aplikace uživatele přesměrovat na `/login`. |
| FR-009 | Nepřihlášenému uživateli nesmí aplikace zobrazit obsah `/dashboard` a musí ho přesměrovat na `/login`. |

## 4. Nefunkční požadavky

| ID | Požadavek |
| --- | --- |
| NFR-001 | Přihlašovací formulář musí být ovladatelný pomocí klávesnice a aktivní prvek musí být viditelně zvýrazněný. |
| NFR-002 | Přihlašovací stránka i dashboard se musí zobrazit bez vodorovného posouvání při šířce obrazovky 320 px a větší. |

## 5. Funkce mimo rozsah projektu

Součástí této verze aplikace nejsou:

- registrace, obnovení ani změna hesla,
- backend, databáze a ověřování skutečných uživatelských účtů,
- zachování přihlášení po obnovení stránky,
- přihlášení přes sociální sítě, dvoufázové ověření a uživatelské role.

## 6. Poznámky a předpoklady

- Aplikace je vytvořena pro studijní a testovací účely.
- Přihlášení je simulováno v prohlížeči porovnáním údajů s pevně nastaveným demo účtem. Aplikace nemá backend ani databázi a nepředstavuje produkční zabezpečení.
- Konkrétní přihlašovací údaje jsou uvedeny v testovacím plánu jako testovací data.
- Každý požadavek musí být pokrytý alespoň jedním test casem.