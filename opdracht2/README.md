# frontend voor designers - opdracht 2
Voor opdracht 2 maak ik een carousel met een aantal achtergrond afbeeldingen. Je kan door deze carousel met de knoppen aan de zijkant waar je op kan klikken met je muis. Ook kan je met de A en D toetsen de carousel door.
Voor de achtergrondcarousel is er nog een carousel met poppetjes op de voorgrond. hier kan je doorheen met de knoppen en de pijltjestoetsen.

Alle images staan op elkaar met de opacity op 0, dus zijn ze onzichtbaar. Er is een image die de class active heeft, die de image zichtbaar maakt. Elke keer als je op een knop drukt gaat de active class naar de volgende image en word de huidige active class verwijderd. 
## Demo:
[Demo voor opdracht 2](https://simonderooij.github.io/frontendvoordesigners/opdracht2/V6)
## Broncode:

[Code demo voor opdracht 2](https://github.com/Simonderooij/frontendvoordesigners/tree/master/opdracht2/V6)

## Javascript:

```javascript
bgleft.addEventListener("click", function() {
    clickBg = clickBg - 1 
    if (clickBg < 0) {
        clickBg = backgrounds.length - 1
    }
    for (i = 0; i < backgrounds.length; i++) {
        backgrounds[i].classList.remove('active')
    }
    backgrounds[clickBg].classList.add('active')
});

```
Elke keer als er wordt geklikt, gaat de function in de eventlistener af. Eerst word de click veranderd met + of - 1, ligt er aan op welke knop er wordt gedrukt. Daarna wordt er gekeken of de click niet groter/kleiner wordt dan de hoeveelheid images die er zijn. Daarna wordt de active class verwijderd van alle images, en wordt er uiteindelijk een nieuwe active class toegevoegd op de image die gelijk staat met de hoeveelheid clicks. Deze code wordt gebruikt voor elke knop.
```javascript
    if (e.keyCode === 65) {
        clickBg = clickBg - 1 
        if (clickBg < 0) {
            clickBg = backgrounds.length - 1
        }
        for (i = 0; i < backgrounds.length; i++) {
            backgrounds[i].classList.remove('active')
        }
        backgrounds[clickBg].classList.add('active')
```
En deze code wordt gebruikt voor elke toets. Het is in principe hetzelfde.
Daarom heb ik het uiteindelijk nog in een functie gezet, zodat de code maar een keer in de javascript staat, en niet per button de zelfde code. Er zijn nog maar 2 functies, een voor de buttons die de images laten uploaden, en een voor de buttons die de images laten aflopen.

## Principles of User Interface Design:

### 6. One primary action per screen.
Elke button heeft dezelfde actie, naar de volgende afbeelding. Deze actie kan je bereiken om er op te klikken of om een toets op het toetsenbord te gebruiken.
### 14. Progressive disclosure.
Er is heel duidelijk te zien wat de opties zijn op het scherm. de knoppen hebben toetsen op zich zodat je weet dat je ook via je toetsenbord hetzelfde resultaat kan bereiken.

