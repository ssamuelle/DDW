/*Máte pole čísel 
[1, 2, 3, 4, 5, 6];
.
Použite .map() na vytvorenie nového poľa, kde bude každé číslo vynásobené 2.
Použite .filter() na vytvorenie poľa, ktoré obsahuje iba párne čísla.
Máte pole objektov produktov (každý produkt má id a name).  
Vytvorte pole s klúčmi a hodnotami. Následne pomocou .find() nájdite produkt s id: 2. */

const cisla = [1, 2, 3, 4, 5, 6];
const dvojnasobok = cisla.map(n=>n*2);
const parne = cisla.filter(n => n %2 === 0);

console.log(cisla);
console.log(dvojnasobok);
console.log(parne);

const produkty = [
    {id:1, nazov: "Iphone"},
    {id:2, nazov: "Vonavka YSL"},
    {id:3, nazov: "Dildo"}
]

const najdeny = produkty.find(produkty => produkty.id === 3);
console.log(najdeny);
