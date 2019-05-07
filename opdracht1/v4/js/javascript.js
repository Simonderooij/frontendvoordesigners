var huisafbeelding = document.querySelectorAll(".woning");
var huisbeschrijving = document.querySelectorAll(".huisbeschrijving");

huisafbeelding.forEach(function(item, index) {
  item.addEventListener("click", function(){
    huisbeschrijving[index].classList.toggle('huisbeschrijvingaan');
})
})
