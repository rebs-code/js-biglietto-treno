# Calcolo del prezzo del biglietto del treno

Questo semplice programma di JS richiede all'utente due input:
- numero di chilometri che si desiderano percorrere*
- età del passeggero

In base ai dati forniti, il programma calcola il prezzo del biglietto. 

## Codice

 - Il programma chiede all'utente il numero di chilometri che vuole percorrere e l'età del passeggero:

   // due prompt per la richiesta informazioni
   // const km = prompt("Inserisci il numero di chilometri che desideri percorrere:");
   // const age = prompt("Inserisci la tua età:");


 - il prezzo del biglietto è definito in base ai km (0.21 € al km)
   // totale = km (stringa da trasformare in numero) * prezzo (0.21)
   // const priceKm = 0.21;
   // const totalTicketPrice = kilometers * pricePerKm;

 - va applicato uno sconto del 20% per i minorenni & va applicato uno sconto del 40% per gli over 65.
   // const discount = 0;
   /* if (age < 18) {
         discount = totalTicketPrice * 0.20;
      } else if (age >= 65) {
         discount = totalTicketPrice * 0.40;
      }
   */
   // const finalTicketPrice = totalTicketPrice - discount;

 - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
   // console.log(`Il prezzo finale del biglietto è: €${finalTicketPrice.toFixed(2)}`);
