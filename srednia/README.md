# Średnia ważona ocen

srednia(oceny) liczy średnią ważoną. Każdy element to obiekt { ocena, waga }.

- Wynik: suma (ocena × waga) podzielona przez sumę wag, zaokrąglona do 2 miejsc po przecinku.
- Pusta lista → błąd „Brak ocen.”.
- Ocena musi być liczbą całkowitą od 1 do 6, waga liczbą całkowitą od 1 wzwyż. Inaczej → błąd „Nieprawidłowa ocena lub waga.”.

Przykład: ocena 5 z wagą 3 i ocena 2 z wagą 1 → (15 + 2) / 4 = 4.25.

Uruchom testy: node --test
