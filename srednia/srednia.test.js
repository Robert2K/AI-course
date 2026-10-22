const test = require('node:test');
const assert = require('node:assert');
const { srednia } = require('./srednia.js');

test('średnia z trzech ocen', () => {
  const oceny = [{ ocena: 5, waga: 1 }, { ocena: 4, waga: 1 }, { ocena: 3, waga: 1 }];
  assert.strictEqual(srednia(oceny), 4);
});


test('wagi mają znaczenie', () => {
  const oceny = [{ ocena: 5, waga: 3 }, { ocena: 2, waga: 1 }];
  assert.strictEqual(srednia(oceny), 4.25);
});