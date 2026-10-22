// Zapisy na warsztaty Koła.

function utworzWarsztat(nazwa, limit) {
  if (!Number.isInteger(limit) || limit <= 0) {
    throw new Error('Limit musi być dodatnią liczbą całkowitą.');
  }
  return { nazwa: nazwa, limit: limit, uczestnicy: [] };
}

function zapisz(w, osoba) {
  if (w.uczestnicy.length >= w.limit) {
    return 'Brak miejsc.';
  }
  if (w.uczestnicy.includes(osoba)) {
    return 'Ta osoba jest już zapisana.';
  }
  w.uczestnicy.push(osoba);
  return 'Zapisano: ' + osoba;
}

function anuluj(w, osoba, ktoAnuluje) {
  var i = w.uczestnicy.indexOf(osoba);
  if (i == -1) return 'Nie ma takiego zapisu.';
  if (osoba != ktoAnuluje) return 'Nie możesz anulować cudzego zapisu.';
  w.uczestnicy.splice(i, 1);
  return 'Anulowano: ' + osoba;
}

function wolneMiejsca(w) {
  return w.limit - w.uczestnicy.length;
}

module.exports = { utworzWarsztat, zapisz, anuluj, wolneMiejsca };
