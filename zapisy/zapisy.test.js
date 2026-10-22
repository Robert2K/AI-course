const test = require('node:test');
const assert = require('node:assert');
const { utworzWarsztat, zapisz, anuluj, wolneMiejsca } = require('./zapisy.js');

test('zapis zmniejsza liczbę wolnych miejsc', () => {
  const w = utworzWarsztat('Git', 12);
  assert.strictEqual(zapisz(w, 'Ola'), 'Zapisano: Ola');
  assert.strictEqual(wolneMiejsca(w), 11);
});

test('nowy warsztat ma wszystkie miejsca wolne', () => {
  const w = utworzWarsztat('HTML', 16);
  assert.strictEqual(wolneMiejsca(w), 16);
});

test('warsztat odrzuca limit równy zero', () => {
  assert.throws(
    () => utworzWarsztat('Git', 0),
    { message: 'Limit musi być dodatnią liczbą całkowitą.' }
  );
});

test('warsztat odrzuca ujemny limit', () => {
  assert.throws(
    () => utworzWarsztat('Git', -1),
    { message: 'Limit musi być dodatnią liczbą całkowitą.' }
  );
});

test('warsztat odrzuca limit niecałkowity', () => {
  assert.throws(
    () => utworzWarsztat('Git', 1.5),
    { message: 'Limit musi być dodatnią liczbą całkowitą.' }
  );
});

test('warsztat odrzuca limit podany jako tekst', () => {
  assert.throws(
    () => utworzWarsztat('Git', '2'),
    { message: 'Limit musi być dodatnią liczbą całkowitą.' }
  );
});

test('zapis na ostatnie miejsce jest możliwy, ale kolejny zapis jest odrzucany', () => {
  const w = utworzWarsztat('Git', 1);
  assert.strictEqual(zapisz(w, 'Ola'), 'Zapisano: Ola');
  assert.strictEqual(wolneMiejsca(w), 0);
  assert.strictEqual(zapisz(w, 'Jan'), 'Brak miejsc.');
  assert.strictEqual(wolneMiejsca(w), 0);
});

test('ta sama osoba nie może zapisać się ponownie', () => {
  const w = utworzWarsztat('Git', 2);
  assert.strictEqual(zapisz(w, 'Ola'), 'Zapisano: Ola');
  assert.strictEqual(zapisz(w, 'Ola'), 'Ta osoba jest już zapisana.');
  assert.strictEqual(wolneMiejsca(w), 1);
});

test('uczestnik może anulować własny zapis', () => {
  const w = utworzWarsztat('Git', 2);
  zapisz(w, 'Ola');
  assert.strictEqual(anuluj(w, 'Ola', 'Ola'), 'Anulowano: Ola');
  assert.strictEqual(wolneMiejsca(w), 2);
});

test('uczestnik nie może anulować zapisu innej osoby', () => {
  const w = utworzWarsztat('Git', 2);
  zapisz(w, 'Ola');
  assert.strictEqual(anuluj(w, 'Ola', 'Jan'), 'Nie możesz anulować cudzego zapisu.');
  assert.strictEqual(wolneMiejsca(w), 1);
});

test('nie można anulować zapisu osoby spoza warsztatu', () => {
  const w = utworzWarsztat('Git', 2);
  assert.strictEqual(anuluj(w, 'Ola', 'Ola'), 'Nie ma takiego zapisu.');
  assert.strictEqual(wolneMiejsca(w), 2);
});

test('anulowanie zapisu zwalnia miejsce dla kolejnej osoby', () => {
  const w = utworzWarsztat('Git', 1);
  zapisz(w, 'Ola');
  anuluj(w, 'Ola', 'Ola');
  assert.strictEqual(zapisz(w, 'Jan'), 'Zapisano: Jan');
  assert.strictEqual(wolneMiejsca(w), 0);
});
