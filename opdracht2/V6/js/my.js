// variabelen declareren uit HTML
var bgleft = document.getElementById("bgleft");
var bgright = document.getElementById("bgright");
var fgleft = document.getElementById("fgleft");
var fgright = document.getElementById("fgright");
var backgrounds = document.querySelectorAll(".background");
var persons = document.querySelectorAll(".person")
//variabelen voor de teller van afbeeldingen
var clickr = 0 
var clickl = 0

//code voor de 2 knoppen die aan de rechterkant staan, waar de images oplopen.
function knoprechts(afbeelding){ //eventlistener op de knop rechts voor de background
    clickr = clickr + 1 //click krijgt er een bij, zodat je naar de volgende image gaat.
    if (clickr > afbeelding.length - 1) {
        clickr = 0 // als click groter word dan dat er background zijn, wil je weer van voor af aan beginnen dus gaat click weer op 0.
    }
    for (i = 0; i < afbeelding.length; i++) {
        afbeelding[i].classList.remove('active') // van elke background word de active verwijderd zodat ze niet zichtbaar blijven als je naar een andere afbeelding gaat.
    }
    // voeg de class active toe aan de afbeelding. dit zorgt ervoor dat de afbeelding zichtbaar wordt.
    afbeelding[clickr].classList.add('active') 
};

//eventlisteners knoppen D en rechts
bgright.addEventListener("click", function(){knoprechts(backgrounds)});
fgright.addEventListener("click", function(){knoprechts(persons)});

// zelfde code als knoprechts, maar dan voor knoplinks en lopen de images af.
function knoplinks(afbeelding) {
    clickl = clickl - 1 
    if (clickl < 0) {
        clickl = afbeelding.length - 1
    }
    for (i = 0; i < afbeelding.length; i++) {
        afbeelding[i].classList.remove('active')
    }
    afbeelding[clickl].classList.add('active')
};

//eventlisteners knoppen L en links
bgleft.addEventListener("click", function(){knoplinks(backgrounds)});
fgleft.addEventListener("click", function(){knoplinks(persons)});

//keydowneventlistener voor de toetsen A, D, pijl links en pijl rechts. Elke knop geeft de variabele images mee aan de functie knoplinks of functie knoprechts
document.addEventListener("keydown", function(e) {
    if (e.keyCode === 65) {
        knoplinks(backgrounds);
    } else if (e.keyCode === 68) {
        knoprechts(backgrounds);
    } else if (e.keyCode === 37) {
        knoplinks(persons);
    } else if (e.keyCode === 39) {
        knoprechts(persons);
    }
});


//Er is een array met een aantal afbeeldingen voor de achtergrond, en een array met een aantal afbeeldingen
//voor de voorgrond (poppetjes). Voor de achtergrond zijn 2 buttons, links en rechts die door de array heen 
//gaan en de afbeelding laat zien die er bij hoort. Ook zijn er 2 buttons voor de voorgrond poppetjes die door 
//die array heen gaan en het goede poppetje laten zien. Elke keer als je op een knop klikt moet er een transition 
//komen naar de nieuwe afbeelding.
//Ook moet de functie van de knoppen niet alleen met het klikken van de muis lukken. Dus het moet ook kunnen via 
//toetsen op je toetsenbord.
