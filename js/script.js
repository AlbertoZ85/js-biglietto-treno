var percorso =parseInt(prompt('Quanti km devi percorrere?'));
var eta =parseInt(prompt('Quanti anni hai?'));
var prezzo = 0.21*percorso;

if (eta < 18) {
    prezzo -= 0.20*prezzo;
}   else if (eta >= 65) {
    prezzo -= 0.40*prezzo;
}

document.getElementById('prezzo-biglietto').innerHTML= 'Il prezzo del tuo biglietto è di'+' '+ prezzo.toFixed(2) +' '+'€';

// document.getElementById('prezzo-biglietto').innerHTML= `Il prezzo del tuo biglietto è di ${prezzo.toFixed(2)} €`;
