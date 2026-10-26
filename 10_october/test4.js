/*Vytvorte premennú body a priraďte jej počet získaných bodov.
Pomocou podmienok if...else if...else určte hodnotenie:
*/

const body = 50;

if (body === 100) {
    console.log("Excelentny!");
} else if (body >= 90) {
    console.log("Výborný!");
} else if (body >= 75) {
    console.log("Chválitebný!");
} else if (body >= 50) {
    console.log("Dobrý!");
} else if (body >= 30) {
    console.log("Dostatočný.");
} else {
    console.log("Nedostatočný.");
}