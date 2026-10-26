//Volám sa Matúš Grivalský, som muž, mám: 24 rokov a pochádzam zo:  Slovensko

let meno = "Vanessa Mai";
let priezvisko = "Nguyen";
let pohlavie = "zena";
let vek = "19";
let krajina = "Vietnam";

console.log(`Volám sa ${meno} ${priezvisko} som ${pohlavie}, mám ${vek}, Z kadiaľ som?: ${krajina}`);

const cislo = 9;

if (cislo % 2 == 0) {
    console.log(`${cislo} je parne.`);
}
else {
    console.log(`${cislo} je neparne.`);
}

let i = 0;

for(i=1;i<18;i++) 
{
    if(i===9) {
        break;
    }
    console.log(i);
}