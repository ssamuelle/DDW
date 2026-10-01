//pomocou cyklu najdi

const teploty = [5, 15, 18, 23, 30];

let minTeplota = teploty[0];
let maxTeplota = teploty[0];

for (const teplota of teploty) {
    if (teplota < minTeplota) {
        minTeplota = teplota;
    }
    if (teplota > maxTeplota) {
        maxTeplota = teplota;
    }
}

console.log(minTeplota);
console.log(maxTeplota);

