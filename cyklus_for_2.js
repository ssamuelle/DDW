//Napis program, ktory si od pouzitela vypyta cele kladne cislo N a nasledne vypise vsetky parne cisa od 1 ay po N

const readline = require("readline-sync");

let cislo = Number(readline.question("Zadaj cislo: "));

for (let i = 1; i <= cislo; i++) {
    if (1 % 2 === 0) {
        console.log(i);
    }
}

