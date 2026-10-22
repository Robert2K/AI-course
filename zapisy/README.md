# Zapisy na warsztaty Koła

Moduł obsługuje zapisy na jeden warsztat. Wymagania (z opisu aplikacji Koło z lekcji 2):

- utworzWarsztat(nazwa, limit): limit musi być dodatnią liczbą całkowitą. W przeciwnym razie funkcja rzuca błąd „Limit musi być dodatnią liczbą całkowitą.”.
- zapisz(warsztat, osoba):
  - gdy brak wolnych miejsc → „Brak miejsc.”,
  - gdy osoba jest już zapisana → „Ta osoba jest już zapisana.”,
  - w przeciwnym razie → „Zapisano: <osoba>”.
- anuluj(warsztat, osoba, ktoAnuluje):
  - można anulować tylko własny zapis; inaczej → „Nie możesz anulować cudzego zapisu.”,
  - gdy osoby nie ma na liście → „Nie ma takiego zapisu.”,
  - w przeciwnym razie → „Anulowano: <osoba>” (zwalnia się jedno miejsce).
- wolneMiejsca(warsztat): limit minus liczba zapisanych.

Uruchom testy: node --test
