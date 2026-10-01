const readline = require("readline-sync");

let TajneCislo = 42;
let cislo = Number(readline.question("Zadaj cislo: "));

while (cislo !== TajneCislo) {
    if (cislo < TajneCislo) {
        console.log("Zadane cislo je mensie ako tajne cislo.");
    }   else {
        console.log("Zadane cislo je vacsie ako tajne cislo.");
    }
    cislo = Number(readline.question("Zadaj cislo: "));
}

console.log("Gratulujem! Uhadol si tajne cislo.");