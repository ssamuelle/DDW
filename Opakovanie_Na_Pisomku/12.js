/*Vytvorte pole mien 
const mena = ["Samuel, "Vanessa", "Nella"]
Prejdite ho pomocou:
klasický for
for...of cyklu
metódy .forEach()*/

const mena = ["Samuel", "Vanessa", "Nella"];

for(let i = 0; i < mena.length; i++) {
    console.log(mena[i]);
}

for(const n of mena) {
    console.log(n);
}

mena.forEach(n => console.log(n))