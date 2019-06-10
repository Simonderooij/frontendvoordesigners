var header = document.querySelector('header');
var section = document.querySelector('section');
var large = document.getElementById('large');
var requestURL = 'https://blokweb.org/stories';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var Verhalen = request.response;
  showVerhalen(Verhalen);
}


function showVerhalen(jsonObj) {
  var verhaal = jsonObj;
      
  for (var i = 0; i < verhaal.length; i++) {
    var myArticle = document.createElement('article');
    var myPara1 = document.createElement('h2');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('span');
    var myPara4 = document.createElement('img');
    var myPara5 = document.createElement('div');
    var myPara6 = document.createElement('img');

    myPara1.textContent = verhaal[i].sfeerwoord;
    myPara2.textContent = 'genre: ' + verhaal[i].genre;
    myPara3.textContent = 'tags: ' + verhaal[i].tags;
    myPara4.src = 'https://blokweb.org/uploads/' + verhaal[i].imgLarge;
    myPara5.textContent = verhaal[i].verhaalnr;
    myPara6.src = 'https://blokweb.org/uploads/' + verhaal[i].imgLarge;
      
    if (myPara4.src == 'https://blokweb.org/uploads/null') {
        myPara4.src = 'images/beschikbaar.jpg';
    };
    if (myPara6.src == 'https://blokweb.org/uploads/null') {
        myPara6.src = 'images/beschikbaar.jpg';
    };
        
    myArticle.appendChild(myPara5);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);
    myArticle.appendChild(myPara6);
    

    section.appendChild(myArticle);
      
      
     var largeImg = document.createElement('img');
        largeImg.src = 'https://blokweb.org/uploads/' + verhaal[i].imgLarge;
        large.appendChild(largeImg); 
        myArticle.addEventListener("click", function(){
        large.classList.toggle("visible");
        
        
        console.log("klik")});
  }
    
}