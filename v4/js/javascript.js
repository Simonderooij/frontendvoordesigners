var huisafbeeldingen = document.getElementsByClassName("woning");
var huisbeschrijving = document.getElementsByClassName("huisbeschrijving");
//console.log(huisafbeelding);
console.log(huisbeschrijving);

var huisafbeelding = document.querySelectorAll(".woning");
var huisbeschrijving = document.querySelectorAll(".huisbeschrijving");

huisafbeelding.forEach(function(item, index) {
  item.addEventListener("click", function(){
    huisbeschrijving[index].classList.toggle('huisbeschrijvingaan');
})
})
