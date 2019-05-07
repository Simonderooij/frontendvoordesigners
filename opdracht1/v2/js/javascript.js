var huisafbeeldingen = document.getElementsByClassName("woning");
var huisbeschrijving = document.getElementsByClassName("huisbeschrijving");
//console.log(huisafbeelding);
console.log(huisbeschrijving);

huisafbeeldingen.addEventListener("click", function(){
for(var i = 0;  i < huisafbeeldingen.length; i++) {
 huisbeschrijving[i].classList.toggle('huisbeschrijvingaan')
};
});

//for(img of huisafbeelding) {
//img.addEventListener("click", function(){
//    console.log(this);
//    huisbeschrijving[0].classList.toggle('huisbeschrijvingaan');
//    
//});
//}