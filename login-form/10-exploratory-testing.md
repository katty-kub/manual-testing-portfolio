# Exploratory Testing – Login Form QA

## 1. Účel dokumentu

Exploratory testing slouží k průzkumu aplikace mimo přesně předepsané kroky test cases.

Tester současně:

- poznává aplikaci,
- navrhuje další kontroly,
- provádí testy,
- zapisuje pozorování,
- hledá neočekávané chování a rizika.

## 2. Informace o testovací session

| Položka | Hodnota |
| --- | --- |
| Session ID | ET-001 |
| Stav | Not Run |
| Časový limit | 30 minut |
| Tester | Doplnit |
| Datum | Doplnit |
| Prostředí | Google Chrome, Windows |
| Testovaná oblast | Přihlášení, odhlášení a práce s uživatelskou relací |

## 3. Testovací charter

Prozkoumat přihlašovací formulář, přihlašovací proces, dashboard a odhlášení s cílem odhalit neočekávané chování, problémy s použitelností a situace, které nejsou plně pokryté připravenými test cases.

## 4. Oblasti průzkumu

### Zadávání údajů

- mezery před a za e-mailovou adresou,
- velká a malá písmena v e-mailu,
- kopírování a vložení hodnot,
- speciální znaky,
- velmi dlouhé hodnoty,
- opakované změny zadaných údajů,
- vymazání hodnot po zobrazení validační chyby.

### Odeslání formuláře

- rychlé opakované kliknutí na tlačítko,
- opakované stisknutí klávesy Enter,
- odeslání během změny hodnoty,
- chování tlačítka během zpracování přihlášení,
- zachování nebo vymazání hodnot po neúspěšném přihlášení.

### Navigace a uživatelská relace

- obnovení stránky po přihlášení,
- použití tlačítka Zpět v prohlížeči,
- otevření `/dashboard` v nové kartě,
- obnovení stránky po odhlášení,
- pokus o návrat na dashboard po odhlášení,
- otevření aplikace ve více kartách.

### Použitelnost a zobrazení

- srozumitelnost textů a chybových zpráv,
- viditelnost aktivního prvku,
- změna velikosti okna,
- zobrazení při přiblížení stránky,
- ovládání pouze pomocí klávesnice,
- překrývání nebo ořezávání prvků.

## 5. Poznámky z průzkumu

| Čas | Provedená akce | Pozorování | Další krok |
| --- | --- | --- | --- |
| — | Testování zatím nebylo zahájeno. | — | — |

## 6. Nálezy

| Finding ID | Popis nálezu | Závažnost | Bug ID | Stav |
| --- | --- | --- | --- | --- |
| — | Zatím nebyl zaznamenán žádný nález. | — | — | Not Run |

## 7. Otázky a rizika

Během testování budou zaznamenány například:

- nejasné nebo chybějící požadavky,
- chování, u kterého není jasný očekávaný výsledek,
- rizika související s přihlášením a uživatelskou relací,
- nové nápady na test cases,
- části aplikace vhodné pro automatizaci.

## 8. Kritéria dokončení session

Exploratory session je dokončená, pokud:

- uplynul stanovený čas 30 minut,
- byly prozkoumány hlavní oblasti charteru,
- byla zaznamenána všechna důležitá pozorování,
- potvrzené chyby mají vytvořený bug report,
- nové testovací nápady byly zapsány pro další zpracování.

## 9. Aktuální stav

Exploratory testing zatím nebylo provedeno. Dokument bude aktualizován během skutečné třicetiminutové testovací session.