# frontend voor designers - opdracht 1

De opdracht die ik heb gekozen is het maken van een pagina met daarop verschillende huizen voor studenten. Als je op een afbeelding van een huis klikt, komt er onder de afbeelding een beschrijving van het huis tevoorschijn. Het is de bedoeling dat de pagina getoont wordt op een afmeting voor mobiel.

## Demo:

[Demo voor opdracht 1](https://simonderooij.github.io/frontendvoordesigners/opdracht1/v4/)

## Broncode:

[Code demo voor opdracht 1](https://github.com/Simonderooij/frontendvoordesigners/blob/master/opdracht1/v4/)

## Javascript:

```javascript
var huisafbeelding = document.querySelectorAll(".woning");
var huisbeschrijving = document.querySelectorAll(".huisbeschrijving");

huisafbeelding.forEach(function(item, index) {
  item.addEventListener("click", function(){
    huisbeschrijving[index].classList.toggle('huisbeschrijvingaan');
})
})
```
Voor het maken van deze opdracht met javascript heb ik gekozen om een foreach loop te gebruiken, omdat er op elke afbeelding van een huis hetzelfde event moest gebeuren.

Eerst heb ik variabelen gemaakt door alle huisafbeeldingen te selecteren, en alle huisbeschrijvingen.
Daarna heb ik een foreach loop gemaakt, die de array af gaat van huisafbeeldingen.
per huisafbeelding word er een click eventlistener op gezet.
Als er geklikt word op een huisafbeelding, komt de goede beschrijving tevoorschijn via een classList toggle en de meegegeven index. 
Het item is een item uit de array huisafbeelding en in dit geval is dat item een element (een huisafbeelding in de html). 
De index is de plek in de array.
