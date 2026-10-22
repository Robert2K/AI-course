---
name: przeglad-jakosci
description: "Przeglądaj i oceniaj jakość kodu bez wprowadzania zmian. Użyj, gdy użytkownik prosi o review, code review, audyt, sprawdzenie jakości, poprawności lub testów."
---

# Przegląd jakości kodu

Oceń kod względem wymagań i kryteriów projektu. Tylko analizujesz i raportujesz — nie edytujesz plików ani nie naprawiasz znalezionych problemów.

## Procedura
1. Znajdź README.md lub inne dokumenty opisujące wymagania. Przeczytaj je przed oceną kodu.
2. Sprawdź kod objęty prośbą oraz powiązane testy. Ustal, które pliki i funkcje realizują wymagania.
3. Porównaj implementację z wymaganiami punkt po punkcie i zastosuj [kryteria jakości](./kryteria-jakosci.md).
4. Zweryfikuj każdy potencjalny problem w kontekście kodu i testów. Podawaj tylko ustalenia poparte konkretnymi dowodami.
5. Dla każdego ustalenia wskaż wagę, plik i linię oraz test lub konkretny przypadek, który pozwoli je sprawdzić.
6. Jeśli nie znajdziesz problemów, napisz to wprost. Wskaż też wymagania lub obszary, których nie dało się ocenić, jeśli takie są.

## Format raportu
Najpierw podaj krótki wynik przeglądu, a ustalenia przedstaw w tabeli:

| Waga | Problem | Miejsce w kodzie | Jak sprawdzić |
|---|---|---|---|
| KRYTYCZNY / WAŻNY / DROBNY | Co jest nie tak i jaki ma skutek | `ścieżka/do/pliku:linia` | Test lub konkretne dane wejściowe i oczekiwany rezultat |

Używaj wag zgodnie z definicjami w [kryteriach jakości](./kryteria-jakosci.md). Gdy brak testu sam w sobie jest problemem, nazwij wymaganie bez pokrycia i opisz test, który powinien je weryfikować.

## Zasady
- Nie zakładaj wymagań, których nie opisano w README ani w innych wskazanych dokumentach.
- Nie zgłaszaj przypuszczeń jako błędów. Jeśli czegoś nie da się rozstrzygnąć na podstawie dostępnych materiałów, zaznacz niepewność zamiast wyciągać wniosek.
- Nie zgłaszaj ogólników: każde ustalenie musi zawierać lokalizację i sposób weryfikacji.
- Nie zmieniaj kodu, testów ani dokumentacji; przegląd kończy się raportem.
