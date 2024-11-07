"use strict"
console.clear();

// Riferimento agli elementi dell'HTML
const lampadina = document.getElementById('lampadinaImg'); // Cambia qui per puntare all'immagine
const bottoneAccensione = document.getElementById('bottoneAccensione');
console.log(lampadina);
console.log(bottoneAccensione);

// Funzione per gestire accensione e spegnimento
bottoneAccensione.addEventListener('click', function() {
    if (bottoneAccensione.textContent.includes("Accendi")) {
        // Accendi la lampadina
        lampadina.src = "../img/yellow_lamp.png"; // Cambia con l'immagine accesa
        bottoneAccensione.textContent = "Spegni";
    } else {
        // Spegni la lampadina
        lampadina.src = "../img/white_lamp.png"; // Cambia con l'immagine spenta
        bottoneAccensione.textContent = "Accendi";
    }
});
