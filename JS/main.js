"use strict"

//ask for input
const km = parseInt(prompt("Inserisci il numero di chilometri che desideri percorrere:"));
const age = parseInt(prompt("Inserisci la tua età:"));
//initialize const variables
const priceKm = 0.21;
const totalTicketPrice = km * priceKm;
//apply discount if needed
let discount = 0;
if (age < 18) {
    discount = totalTicketPrice * 0.20;
} else if (age >= 65) {
    discount = totalTicketPrice * 0.40;
};
//calculate final price with discount
const finalTicketPrice = totalTicketPrice - discount;
//print final price in console
console.log(`Il prezzo finale del biglietto è: €${finalTicketPrice.toFixed(2)}`);
