// 1. ES6+ je veľká aktualizácia JavaScriptu z roku 2015 a ďalšie ročné verzie po nej.
// Vznikla, aby bol jazyk prehľadnejší, bezpečnejší a modernejší (let, const, arrow funkcie, template literals).
// JS sa zacal pouzivat na komplexnejsie a vacsie aplikacie.

// 2. Hodnotu let môžeš meniť, hodnotu const už nie, lebo je fixná.

// 3. var platí v celej funkcii, let iba v bloku {} a nedá sa deklarovať dvakrát.

// 4. Sú to texty v spätných apostrofoch, do ktorých vkladáš premenné a výrazy cez ${...}.

// 5.
const appName = "Aplikácia";
let version = 1.0;
console.log(`Vitajte v aplikácii ${appName}, verzia ${version}.`);

// 6. && platí, ak platia obe podmienky naraz. || platí, ak platí aspoň jedna z nich.

// 7.
const age = 20;
const hasSubscription = true;
if (age > 18 && hasSubscription) {
  console.log("Máš prístup.");
} else {
  console.log("Nemáš prístup.");
}

// 8.
let isStudent = true;
let totalSpent = 30;
if (isStudent || totalSpent > 50) {
  console.log("Zľava udelená");
} else {
  console.log("Zľava neudelená");
}

// 9. Cyklus opakuje kód, kým platí podmienka, aby sme ho nemuseli písať viackrát.

// 10. while najprv skontroluje podmienku, do...while sa vykoná aspoň raz.

// 11. for...of prechádza hodnoty (napr. prvky poľa), for...in prechádza kľúče objektu (pri poli indexy).

// 12.
const mena = ["Samuel", "Vanessa", "Nella"];
for (let i = 0; i < mena.length; i++) {
  console.log(mena[i]);
}
for (const n of mena) {
  console.log(n);
}
mena.forEach(n => console.log(n));

// 13.
for (let i = 1; i <= 10; i++) {
  if (i === 7) break;
  console.log(i);
}

// 14. Pole je zoznam hodnôt uložených pod jednou premennou, každá má svoj index od 0.
// Používa sa na prácu s viacerými hodnotami naraz.

// 15. push() pridá prvok na koniec poľa, pop() ho z konca odstráni.
// unshift() pridá prvok na začiatok, shift() ho zo začiatku odstráni.

// 16. .map() prejde každý prvok poľa a vráti nové pole s upravenými hodnotami.
// Pôvodné pole sa nezmení.
const doubled = [1, 2, 3].map(n => n * 2); // [2, 4, 6]

// 17. .find() vráti prvý nájdený prvok, .filter() vráti pole všetkých prvkov, ktoré vyhovujú.

// 18.
const cisla = [1, 2, 3, 4, 5, 6];
const dvojnasobok = cisla.map(n => n * 2);
const parne = cisla.filter(n => n % 2 === 0);

const produkty = [
  { id: 1, name: "Chlieb" },
  { id: 2, name: "Mlieko" },
  { id: 3, name: "Syr" }
];
const najdeny = produkty.find(p => p.id === 2);
console.log(najdeny);

// 19.
const ovocie = ["jablko", "banán", "hruška"];
console.log(ovocie.includes("banán")); // true

// 20.
const pole = [2, 3, 4];
pole.push(5);
pole.unshift(1);
console.log(pole); // [1, 2, 3, 4, 5]

// 21. Objekt je zbierka dvojíc kľúč a hodnota.
// Môže obsahovať čísla, texty, polia, ďalšie objekty aj funkcie (metódy).

// 22. JSON je textový formát na prenos dát, má kľúče vždy v úvodzovkách a nemôže obsahovať funkcie.
// Objekt v JavaScripte je skutočná dátová štruktúra v kóde.

// 23. JSON.stringify() zmení objekt na JSON text. JSON.parse() zmení JSON text späť na objekt.

// 24. Spread operátor rozloží vlastnosti objektu, takže ich môžeš skopírovať
// alebo spojiť do nového objektu bez zmeny pôvodných.

// 25. Object.keys() vráti pole kľúčov. Object.values() vráti pole hodnôt.
// Object.entries() vráti pole dvojíc [kľúč, hodnota].
// Object.assign() skopíruje vlastnosti z jedného objektu do druhého.

// 26.
const user = {
  name: "Samuel",
  age: 17,
  gender: "muž",
  sayHello() {
    console.log(`Ahoj, ${this.name}!`);
  },
  vypis() {
    for (const [kluc, hodnota] of Object.entries(this)) {
      if (typeof hodnota !== "function") {
        console.log(kluc, hodnota);
      }
    }
  }
};
user.sayHello();
user.vypis();

// 27.
const auto = { znacka: "Škoda", model: "Octavia", rok: 2020 };
const { znacka, model } = auto;
console.log(znacka, model);

// 28.
const a = { x: 1, y: 2 };
const b = { z: 3 };
const spojeny = { ...a, ...b };
console.log(spojeny); // { x: 1, y: 2, z: 3 }

// 29. Funkcia je pomenovaný blok kódu, ktorý môžeš zavolať viackrát.
// Používame ju, aby sa kód neopakoval a bol prehľadnejší.

// 30. Defaultný parameter určuje hodnotu, ktorá sa použije, keď funkcii nepošleš argument.
function greet(meno = "hosť") {
  console.log(`Ahoj, ${meno}`);
}

// 31. Rest parameter zozbiera všetky zvyšné argumenty do jedného poľa,
// takže funkcia môže prijať ľubovoľný počet hodnôt.
function pocet(...hodnoty) {
  return hodnoty.length;
}

// 32.
function nasob(x, y) {
  return x * y;
}
console.log(nasob(4, 5)); // 20

const nasobArrow = (x, y) => x * y;
console.log(nasobArrow(4, 5)); // 20

// 33.
function sucet(...cisla) {
  let s = 0;
  for (const c of cisla) {
    s += c;
  }
  return s;
}
console.log(sucet(1, 2, 3, 4)); // 10

// 34.
function scitaj(N) {
  let vysledok = 0;
  for (let i = N; i >= 1; i--) {
    vysledok += i;
  }
  console.log(`Výsledok: ${vysledok}`);
}
scitaj(8); // Výsledok: 36