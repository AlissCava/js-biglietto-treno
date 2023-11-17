// Ottenere l'input dall'utente utilizzando prompt
const kmInput = parseFloat(prompt("Inserisci il numero di chilometri che vuoi percorrere:"));
const ageInput = parseInt(prompt("Inserisci la tua età:"));

// Verificare che l'input sia valido
if (kmInput > 0 && ageInput > 0) {
    // Definire il prezzo base per chilometro
    const prezzoBasePerKm = 0.21;

    // Calcolare il prezzo totale del viaggio
    let prezzoTotale = kmInput * prezzoBasePerKm;

    // Applicare gli sconti in base all'età
    if (ageInput < 18) {
        // Sconto del 20% per i minorenni
        prezzoTotale *= 0.8;
    } 
    
    else if (ageInput >= 65) {
        // Sconto del 40% per gli over 65
        prezzoTotale *= 0.6;
    }

    // Formattare il prezzo con massimo due decimali e stampare
    console.log(`Il prezzo del viaggio è: €${prezzoTotale.toFixed(2)}`);
} 

else {
    console.log("Input non valido. Inserisci numeri validi.");
}
