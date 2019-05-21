// variabelen declareren uit HTML

var bgleft = document.getElementById("bgleft");
var bgright = document.getElementById("bgright");
var fgleft = document.getElementById("fgleft");
var fgright = document.getElementById("fgright");
var backgrounds = document.querySelectorAll(".background");
var persons = document.querySelectorAll(".person")
//variabelen voor de teller van afbeeldingen
var clickBg = 0 
var clickFg = 0


                         
function bgknoprechts(){ //eventlistener op de knop rechts voor de background
    clickBg = clickBg + 1 //click krijgt er een bij, zodat je naar de volgende image gaat.
    if (clickBg > backgrounds.length - 1) {
        clickBg = 0 // als click groter word dan dat er background zijn, wil je weer van voor af aan beginnen dus gaat click weer op 0.
    }
    for (i = 0; i < backgrounds.length; i++) {
        backgrounds[i].classList.remove('active') // van elke background word de active verwijderd zodat ze niet zichtbaar blijven als je naar een andere afbeelding gaat.
    }
    // voeg de class active toe aan de afbeelding. dit zorgt ervoor dat de afbeelding zichtbaar wordt.
    backgrounds[clickBg].classList.add('active') 
};

bgright.addEventListener("click", function(){bgknoprechts()});


// zelfde code voor de knop links van de background, maar dan loopt de click af.

function bgknoplinks() {
    clickBg = clickBg - 1 
    if (clickBg < 0) {
        clickBg = backgrounds.length - 1
    }
    for (i = 0; i < backgrounds.length; i++) {
        backgrounds[i].classList.remove('active')
    }
    backgrounds[clickBg].classList.add('active')
};
bgleft.addEventListener("click", function(){bgknoplinks()});


// zelfde code voor de knoppen om het poppetje aan te passen.

function fgknoprechts() { 
    clickFg = clickFg + 1
    if (clickFg > persons.length - 1) {
        clickFg = 0
    }
    for (i = 0; i < persons.length; i++) {
        persons[i].classList.remove('active')
    }
    persons[clickFg].classList.add('active')
};
fgright.addEventListener("click", function(){fgknoprechts()});


function fgknoplinks() {
    clickFg = clickFg - 1 
    if (clickFg < 0) {
        clickFg = persons.length - 1
    }
    for (i = 0; i < persons.length; i++) {
        persons[i].classList.remove('active')
    }
    persons[clickFg].classList.add('active')
};
fgleft.addEventListener("click", function(){fgknoplinks()});

//zelfde code per knop, maar dan met de keydown eventlistener. moet nog een functie worden als ik tijd heb.

document.addEventListener("keydown", function(e) {
    if (e.keyCode === 65) {
        bgknoplinks();
    } else if (e.keyCode === 68) {
        bgknoprechts();
    } else if (e.keyCode === 39) {
        fgknoprechts();
    } else if (e.keyCode === 37) {
        fgknoplinks();
    }
});

//Er is een array met een aantal afbeeldingen voor de achtergrond, en een array met een aantal afbeeldingen
//voor de voorgrond (poppetjes). Voor de achtergrond zijn 2 buttons, links en rechts die door de array heen 
//gaan en de afbeelding laat zien die er bij hoort. Ook zijn er 2 buttons voor de voorgrond poppetjes die door 
//die array heen gaan en het goede poppetje laten zien. Elke keer als je op een knop klikt moet er een transition 
//komen naar de nieuwe afbeelding.
//Ook moet de functie van de knoppen niet alleen met het klikken van de muis lukken. Dus het moet ook kunnen via 
//toetsen op je toetsenbord.
