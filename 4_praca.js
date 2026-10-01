/*Úloha 4: Top dostupné trháky
Vytvorte pole topDostupne, ktoré bude obsahovať iba filmy, ktoré sú dostupné (dostupny: true) a zároveň majú hodnotenie 8.5 alebo vyššie.
Použitá metóda: filter (kombinácia podmienok cez &&)
Vypíšte výsledok a počet.*/

const filmy = [
  { nazov: "Inception", zanre: ["Sci-Fi", "Akcny"], rok: 2010, hodnotenie: 8.8, dostupny: true },
  { nazov: "Matrix", zanre: ["Sci-Fi", "Akcny"], rok: 1999, hodnotenie: 8.7, dostupny: true },
  { nazov: "Gladiator", zanre: ["Drama", "Akcny"], rok: 2000, hodnotenie: 8.5, dostupny: false },
  { nazov: "Titanic", zanre: ["Drama", "Romanticky"], rok: 1997, hodnotenie: 7.9, dostupny: true },
  { nazov: "Amélie", zanre: ["Komedie", "Romanticky"], rok: 2001, hodnotenie: 8.3, dostupny: false },
  { nazov: "Interstellar", zanre: ["Sci-Fi", "Drama"], rok: 2014, hodnotenie: 8.7, dostupny: true },
  { nazov: "Temný rytier", zanre: ["Akcny", "Drama", "Thriller"], rok: 2008, hodnotenie: 9.0, dostupny: true },
  { nazov: "Pulp Fiction", zanre: ["Krimi", "Drama"], rok: 1994, hodnotenie: 8.9, dostupny: false },
  { nazov: "Forrest Gump", zanre: ["Drama", "Romanticky"], rok: 1994, hodnotenie: 8.8, dostupny: true },
  { nazov: "Pán prsteňov: Spoločenstvo Prsteňa", zanre: ["Fantasy", "Dobrodruzny"], rok: 2001, hodnotenie: 8.8, dostupny: true },
  { nazov: "Kmotr", zanre: ["Krimi", "Drama"], rok: 1972, hodnotenie: 9.2, dostupny: false },
  { nazov: "V hlave", zanre: ["Animovany", "Komedie"], rok: 2015, hodnotenie: 8.1, dostupny: true },
  { nazov: "Whiplash", zanre: ["Drama", "Hudobny"], rok: 2014, hodnotenie: 8.5, dostupny: false },
  { nazov: "Parazit", zanre: ["Thriller", "Drama"], rok: 2019, hodnotenie: 8.5, dostupny: true },
  { nazov: "Joker", zanre: ["Drama", "Thriller"], rok: 2019, hodnotenie: 8.4, dostupny: true },
  { nazov: "Návrat do budúcnosti", zanre: ["Sci-Fi", "Komedie"], rok: 1985, hodnotenie: 8.5, dostupny: false },
  { nazov: "Nedotknuteľní", zanre: ["Komedie", "Drama"], rok: 2011, hodnotenie: 8.5, dostupny: true },
  { nazov: "Coco", zanre: ["Animovany", "Fantasy"], rok: 2017, hodnotenie: 8.4, dostupny: true },
  { nazov: "Klub rváčov", zanre: ["Drama", "Thriller"], rok: 1999, hodnotenie: 8.8, dostupny: false },
  { nazov: "Prelet nad kukučím hniezdom", zanre: ["Drama"], rok: 1975, hodnotenie: 8.7, dostupny: true }
];

const topDostupne = filmy.filter(film => film.dostupny == true && film.hodnotenie >= 8.5);
console.log(topDostupne);
console.log(topDostupne.length);
