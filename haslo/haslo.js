// Sprawdzanie siły hasła.

function sprawdzHaslo(haslo) {
  if (typeof haslo !== 'string') {
    throw new Error('Hasło musi być tekstem.');
  }

  const problemy = [];
  if (Array.from(haslo).length < 8) problemy.push('Hasło musi mieć co najmniej 8 znaków.');
  if (!/\p{Lu}/u.test(haslo)) problemy.push('Hasło musi zawierać wielką literę.');
  if (!/[0-9]/.test(haslo)) problemy.push('Hasło musi zawierać cyfrę.');
  if (!/\p{Ll}/u.test(haslo)) problemy.push('Hasło musi zawierać małą literę.');

  return problemy;
}

module.exports = { sprawdzHaslo };
