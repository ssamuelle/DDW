/*Vytvorte program, ktorý vypočíta index BMI a vyhodnotí hmotnosť podľa toho, či ide o muža alebo ženu.
Vstupné dáta:
hmotnost (v kg)
vyska (v metroch)
pohlavie*/


let hmotnost = 50;
let vyska = 1.8;
let pohlavie = "zena";

let BMI = hmotnost / (vyska * vyska);

if (pohlavie === "zena") {
    if (BMI < 19) {
        console.log("podváha");
    } else if (BMI < 24) {
        console.log("normálna hmotnosť");
    } else if (BMI < 30) {
        console.log("nadváha");
    } else {
        console.log("obezita");
    }
} else if (pohlavie === "muz") {
    if (BMI < 20) {
        console.log("podváha");
    } else if (BMI < 25) {
        console.log("normálna hmotnosť");
    } else if (BMI < 30) {
        console.log("nadváha");
    } else {
        console.log("obezita");
    }
} else if (pohlavie === "ine") {
    if (BMI < 18.5) {
        console.log("podváha");
    } else if (BMI < 25) {
        console.log("normálna hmotnosť");
    } else if (BMI < 30) {
        console.log("nadváha");
    } else {
        console.log("obezita");
    }
} else {
    console.log("Neplatné pohlavie");
}