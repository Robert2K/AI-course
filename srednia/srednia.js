// Średnia ważona ocen.

function srednia(oceny) {
  var suma = 0;
  var sumaWag = 0;
  for (var i = 0; i <= oceny.length - 1; i++) {
    suma = suma + oceny[i].ocena * oceny[i].waga;
    sumaWag = sumaWag + oceny[i].waga;
  }
  return Math.round(suma / sumaWag * 100) / 100;
}

module.exports = { srednia };
