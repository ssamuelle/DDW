let meno = "matus bodnar";
let vek = 19;

const info = meno => console.log(`Ahoj ${meno}, ${vek} ročný chiplet.`);

info(meno,vek);

if (vek <= 18) {
    console.log(`${meno}, nema dovolene goonovat.`);
}

else {
    console.log(`${meno}, ma dovolene goonovat.`);
}