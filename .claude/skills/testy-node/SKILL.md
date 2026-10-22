---
name: testy-node
description: Pisanie testów jednostkowych JavaScript z wbudowanym w Node test runnerem (node:test, node:assert), uruchamianych poleceniem node --test. Użyj, gdy ktoś prosi o testy, przypadki testowe albo test, który odtwarza błąd.
---

# Testy w Node.js

## Kroki
1. Przeczytaj README.md (wymagania) i kod modułu.
2. Plik testów nazwij <moduł>.test.js i umieść obok modułu.
3. Na górze pliku:
   const test = require('node:test');
   const assert = require('node:assert');
4. Jeden test = jedna sytuacja. Nazwa testu po polsku opisuje sytuację.
5. Porównuj wynik przez assert.strictEqual (liczby, teksty) albo assert.deepStrictEqual (listy, obiekty). Błędy sprawdzaj przez assert.throws.
6. Uruchom: node --test. Podaj liczbę testów zaliczonych i niezaliczonych.

## Zasady
- Oczekiwany wynik bierz z README, nie z tego, co robi obecny kod.
- Przy naprawie błędu najpierw napisz test, który pada, dopiero potem zmieniaj kod.
- Uwzględnij przypadki brzegowe: zero, pusta lista, granica limitu, wartość tuż za granicą, zły typ danych.
- Nie zmieniaj kodu modułu, gdy prośba dotyczy tylko testów.
