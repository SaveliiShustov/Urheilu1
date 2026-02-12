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
  linkkiKuvaan;
  omapaino;
  laji;
  saavutukset;
  constructor(etunimi, sukunimi, kutsumanimi, syntymävuosi) {
    super(etunimi, sukunimi, kutsumanimi, syntymävuosi);
  }

  get linkkiKuvaan() {
    return this.linkkiKuvaan;
  }
  get omapaino() {
    return this.omapaino;
  }
  get laji() {
    return this.laji;
  }
  get saavutukset() {
    return this.saavutukset;
  }

  set linkkiKuvaan(linkkiKuvaan) {
    this.linkkiKuvaan = linkkiKuvaan;
  }
  set omapaino(omapaino) {
    this.omapaino = omapaino;
  }
  set laji(laji) {
    this.laji = laji;
  }
  set saavutukset(saavutukset) {
    this.saavutukset = saavutukset;
  }
}

const urheilija1 = new Urheilija("Kalle", "Virtanen", "Kalle", 1995);
urheilija1.linkkiKuvaan = "https://esimerkilinkki.com/kalle.jpg";
urheilija1.omapaino = 82;
urheilija1.laji = "Jalkapallo";
urheilija1.saavutukset = ["SM-kulta 2020", "Vuoden pelaaja 2021"];

const urheilija2 = new Urheilija("Anna Maria", "Korhonen", "Anna", 1998);

urheilija2.linkkiKuvaan = "https://esimerkilinkki.com/anna.jpg";
urheilija2.omapaino = 60;
urheilija2.laji = "Yleisurheilu";
urheilija2.saavutukset = ["EM-hopea 2022", "MM-pronssi 2023"];

// Testataan

console.log(urheilija1);
console.log(urheilija2);
console.log(`${urheilija1.kutsumanimi} - ${urheilija1.omapaino} kg`);
console.log(`${urheilija2.kutsumanimi} - ${urheilija1.saavutukset}`);
