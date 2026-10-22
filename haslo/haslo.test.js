const test = require('node:test');
const assert = require('node:assert');
const { sprawdzHaslo } = require('./haslo.js');

test('akceptuje poprawne hasło o długości dokładnie 8 znaków', () => {
  assert.deepStrictEqual(sprawdzHaslo('Abcdef1g'), []);
});

test('zgłasza problem, gdy hasło ma 7 znaków', () => {
  assert.deepStrictEqual(sprawdzHaslo('Abcde1f'), [
    'Hasło musi mieć co najmniej 8 znaków.'
  ]);
});

test('liczy emoji jako pojedyncze znaki przy sprawdzaniu długości', () => {
  assert.deepStrictEqual(sprawdzHaslo('Aabc1😀😀'), [
    'Hasło musi mieć co najmniej 8 znaków.'
  ]);
});

test('akceptuje hasło złożone z 8 znaków Unicode, w tym emoji', () => {
  assert.deepStrictEqual(sprawdzHaslo('Aabc1😀😀x'), []);
});

test('zgłasza brak długości dla pustego hasła', () => {
  assert.deepStrictEqual(sprawdzHaslo(''), [
    'Hasło musi mieć co najmniej 8 znaków.',
    'Hasło musi zawierać wielką literę.',
    'Hasło musi zawierać cyfrę.',
    'Hasło musi zawierać małą literę.'
  ]);
});

test('zgłasza brak wielkiej litery', () => {
  assert.deepStrictEqual(sprawdzHaslo('abcdefg1'), [
    'Hasło musi zawierać wielką literę.'
  ]);
});

test('zgłasza brak małej litery', () => {
  assert.deepStrictEqual(sprawdzHaslo('ABCDEFG1'), [
    'Hasło musi zawierać małą literę.'
  ]);
});

test('zgłasza brak cyfry', () => {
  assert.deepStrictEqual(sprawdzHaslo('Abcdefgh'), [
    'Hasło musi zawierać cyfrę.'
  ]);
});

test('rozpoznaje polską wielką literę', () => {
  assert.deepStrictEqual(sprawdzHaslo('Żabcde1f'), []);
});

test('rozpoznaje polskie małe litery', () => {
  assert.deepStrictEqual(sprawdzHaslo('Aąćęłńóśź1'), []);
});

test('zwraca komunikaty o wszystkich brakach we wskazanej kolejności', () => {
  assert.deepStrictEqual(sprawdzHaslo('!!!!!!'), [
    'Hasło musi mieć co najmniej 8 znaków.',
    'Hasło musi zawierać wielką literę.',
    'Hasło musi zawierać cyfrę.',
    'Hasło musi zawierać małą literę.'
  ]);
});

test('zwraca tylko brakującą cyfrę, gdy pozostałe wymagania są spełnione', () => {
  assert.deepStrictEqual(sprawdzHaslo('Abcdefgh'), [
    'Hasło musi zawierać cyfrę.'
  ]);
});

test('odrzuca wartość null', () => {
  assert.throws(() => sprawdzHaslo(null), { message: 'Hasło musi być tekstem.' });
});

test('odrzuca wartość undefined', () => {
  assert.throws(() => sprawdzHaslo(undefined), { message: 'Hasło musi być tekstem.' });
});

test('odrzuca liczbę zamiast tekstu', () => {
  assert.throws(() => sprawdzHaslo(123), { message: 'Hasło musi być tekstem.' });
});

test('odrzuca obiekt zamiast tekstu', () => {
  assert.throws(() => sprawdzHaslo({}), { message: 'Hasło musi być tekstem.' });
});

test('odrzuca tablicę zamiast tekstu', () => {
  assert.throws(() => sprawdzHaslo([]), { message: 'Hasło musi być tekstem.' });
});

test('odrzuca wartość logiczną zamiast tekstu', () => {
  assert.throws(() => sprawdzHaslo(true), { message: 'Hasło musi być tekstem.' });
});
