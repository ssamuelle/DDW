//vytvor program, ktory vypocita index bmi a vyhodnoti hmotnost podla toho, ci ide o muza alebo ženu.
//vstupne data: hmotnosť (v kg), vyska, pohlavie.

let hmotnost = 30;
let vyska = 1.75;  
let pohlavie = "muz";


let BMI = hmotnost / (vyska * vyska);


if (pohlavie === "muz") {
    if (BMI < 20) {
        console.log("Muž: podváha");
    } else if (BMI < 25) {
        console.log("Muž: normálna hmotnosť");
    } else if (BMI < 30) {
        console.log("Muž: nadváha");
    } else {
        console.log("Muž: obezita");
    }
} else if (pohlavie === "zena") {
    if (BMI < 19) {
        console.log("Žena: podváha");
    } else if (BMI < 24) {
        console.log("Žena: normálna hmotnosť");
    } else if (BMI < 30) {
        console.log("Žena: nadváha");
    } else {
        console.log("Žena: obezita");
    }
} else {
    console.log("Neplatné pohlavie.");
}

console.log("BMI: " + BMI);