# Kryteria jakości kodu

Każdy problem oznacz wagą:
- KRYTYCZNY: kod łamie wymaganie z README albo może się wysypać na zwykłych danych,
- WAŻNY: brak obsługi złych danych, brak testu dla wymagania, myląca nazwa,
- DROBNY: styl, powtórzenia, `var` zamiast `const`/`let`, `==` zamiast `===`.

## Poprawność
- Czy każde wymaganie z README.md jest spełnione? Porównaj kod z wymaganiami punkt po punkcie.
- Przypadki brzegowe: zero, pusta lista, granica limitu, wartość tuż za granicą, zły typ danych.

## Testy
- Czy każde wymaganie ma test? Których brakuje?
- Czy testy sprawdzają wynik z wymagań, a nie przypadkowy przypadek (np. wszystkie wagi równe 1)?

## Czytelność
- Nazwy mówią, co przechowują (nie: d, c, m, w).
- Brak powtórzeń, które da się zastąpić jedną funkcją lub listą reguł.

## Obsługa błędów
- Złe dane dają czytelny komunikat albo błąd opisany w README, a nie NaN, Infinity czy wyjątek z silnika.
