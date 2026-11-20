//Napíšte podmienku pre systém prihlásenia: 
// užívateľ musí mať vek nad 18 rokov a zároveň musí mať zaplatené predplatné (hasSubscription = true), aby mal prístup k obsahu. 
// Použite vhodný operátor.

let vek = 18;
const hasSubscription = false;

if(vek>=18 && hasSubscription === true) {
    console.log("mas pristup");
}

else {
    console.log("nemas pristup.");
}