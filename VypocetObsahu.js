const input = require('prompt-sync')();

let otazka1 = input("Chces vypocitat stvorec alebo obdlznik?: ")
let otazka2 = input("Chces vypocitat obsah alebo obvod?: ")

console.log("Zvolil si: " + otazka1 + " a " + otazka2);

if (otazka1 === "stvorec") {
    let strana = Number(input("Zadaj dlzku strany: "));
    if (otazka2 === "obsah") {
        console.log("Obsah stvorca je: " + strana * strana);
    } else {
        console.log("Obvod stvorca je: " + 4 * strana);
    }
} else {
    let dlzka = Number(input("Zadaj dlzku obdlznika: "));
    let sirka = Number(input("Zadaj sirku obdlznika: "));
    if (otazka2 === "obsah") {
        console.log("Obsah obdlznika je: " + dlzka * sirka);
    } else {
        console.log("Obvod obdlznika je: " + 2 * (dlzka + sirka));
    }
}