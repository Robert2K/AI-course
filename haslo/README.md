# Sprawdzanie hasła

sprawdzHaslo(haslo) zwraca listę problemów. Pusta lista oznacza, że hasło jest dobre.

Wymagania:
- co najmniej 8 znaków → „Hasło musi mieć co najmniej 8 znaków.”,
- co najmniej jedna wielka litera (także polska, np. Ł, Ż) → „Hasło musi zawierać wielką literę.”,
- co najmniej jedna mała litera (także polska) → „Hasło musi zawierać małą literę.”,
- co najmniej jedna cyfra → „Hasło musi zawierać cyfrę.”,
- gdy hasło nie jest tekstem → błąd „Hasło musi być tekstem.”.

Kolejność komunikatów: długość, wielka litera, cyfra, mała litera.

Ten moduł nie ma jeszcze testów. Uruchom testy: node --test
