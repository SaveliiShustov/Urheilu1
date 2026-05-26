class Henkilo {
  etunimi;
  sukunimi;
  kutsumanimi;
  syntymävuosi;
  constructor(etunimi, sukunimi, kutsumanimi, syntymävuosi) {
    this.etunimi = etunimi;
    this.sukunimi = sukunimi;
    this.kutsumanimi = kutsumanimi;
    this.syntymävuosi = syntymävuosi;
  }
}

class Urheilija extends Henkilo {
  constructor(
    etunimi,
    sukunimi,
    kutsumanimi,
    syntymävuosi,
    linkkiKuvaan,
    omapaino,
    laji,
    saavutukset) {
    super(etunimi, sukunimi, kutsumanimi, syntymävuosi);
    this._linkkiKuvaan = linkkiKuvaan;
    this._omapaino = omapaino;
    this._laji = laji;
    this._saavutukset = saavutukset;
  }

  get linkkiKuvaan() {
    return this._linkkiKuvaan;
  }
  get omapaino() {
    return this._omapaino;
  }
  get laji() {
    return this._laji;
  }
  get saavutukset() {
    return this._saavutukset;
  }

  set linkkiKuvaan(linkkiKuvaan) {
    this._linkkiKuvaan = linkkiKuvaan;
  }
  set omapaino(omapaino) {
    this._omapaino = omapaino;
  }
  set laji(laji) {
    this._laji = laji;
  }
  set saavutukset(saavutukset) {
    this._saavutukset = saavutukset;
  }
}

const urheilija1 = new Urheilija(
  "Kalle",
  "Virtanen",
  "Kalle",
  1995,
  "https://esimerkilinkki.com/kalle.jpg",
  82,
  "Jalkapallo",
  ["SM-kulta 2020", "Vuoden pelaaja 2021"]
);

const urheilija2 = new Urheilija(
  "Anna Maria",
  "Korhonen",
  "Anna",
  1998,
  "https://esimerkilinkki.com/anna.jpg",
  60,
  "Yleisurheilu",
  ["EM-hopea 2022", "MM-pronssi 2023"]
);

// Testataan

console.log(urheilija1);
console.log(urheilija2);
console.log(`${urheilija1.kutsumanimi} - ${urheilija1.omapaino} kg`);
console.log(`${urheilija2.kutsumanimi} - ${urheilija2.saavutukset}`);
