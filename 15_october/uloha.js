const mena = ["Adam", "Majo", "Petra"];

for(let i=0; i<mena.length; i++) {
    console.log(mena[i]);
}

for (const n of mena) {
    console.log(n);
}

mena.forEach(n => console.log(n));