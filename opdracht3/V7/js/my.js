// declareren van de html elementen en variabelen voor het laden van van de json file.
var header = document.querySelector('header');
var section = document.querySelector('section');
var requestURL = 'https://blokweb.org/stories';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

//laden van de json file
request.onload = function() {
  var Verhalen = request.response;
  showVerhalen(Verhalen);
}

// functie met daarin het aanmaken van de articles met html elementen er in per verhaal, en de overlay met knoppen aanmaken.
function showVerhalen(jsonObj) {
  var verhaal = jsonObj;
  var activeStory //het verhaal waar op geklikt is.
      
  for (let i = 0; i < verhaal.length; i++) {
    //maak voor elk verhaal een article aan met deze elementen er in.
    var storyArticle = document.createElement('article');
    var storyTitle = document.createElement('h2');
    var storyGenre = document.createElement('p');
    var storyTags = document.createElement('span');
    var storyImage = document.createElement('img');
    var storyNumber = document.createElement('div');

    //vul de elementen met deze content uit de json file.
    storyTitle.textContent = verhaal[i].sfeerwoord;
    storyGenre.textContent = 'genre: ' + verhaal[i].genre;
    storyTags.textContent = 'tags: ' + verhaal[i].tags;
    storyImage.src = 'https://blokweb.org/uploads/' + verhaal[i].imgLarge;
    storyNumber.textContent = verhaal[i].verhaalnr;
    //als er geen afbeelding beschikbaar is, laat dan deze afbeelding zien.
    if (storyImage.src == 'https://blokweb.org/uploads/null') {
        storyImage.src = 'images/beschikbaar.jpg';
    }
    //voeg de elementen en het article toe aan de html.    
    storyArticle.appendChild(storyNumber);
    storyArticle.appendChild(storyTitle);
    storyArticle.appendChild(storyGenre);
    storyArticle.appendChild(storyTags);
    storyArticle.appendChild(storyImage);
    
    section.appendChild(storyArticle);
     // voeg een class toe aan de overlay div, zodat deze div zichtbaar word als je op een article drukt. ook de class no-scroll word toegevoegd zodat je niet de achtergrond kan blijven scrollen
    storyArticle.addEventListener("click", function() {
      overlay.classList.add("visible")
      document.body.classList.add("no-scroll")
      showOverlayImage(i)
      console.log("open article klik")
    })
  }
  //maak de html elementen aan voor de overlay div, de afbeelding en knoppen in de overlay om door de verhalen te gaan.
  var overlay = document.createElement('div')
  var overlayImage = document.createElement('img')
  var rightButton = document.createElement('button')
  var leftButton = document.createElement('button')
  var closeButton = document.createElement('button')
  //voeg classes toe aan de knoppen in de overlay
  rightButton.classList.add('right-button')
  leftButton.classList.add('left-button')
  closeButton.classList.add('close-button')
  overlay.classList.add('overlay')
  //voeg de knoppen en image toe zodat ze in de overlay div zitten en voeg de overlay zelf toe aan de section.
  overlay.appendChild(closeButton)
  overlay.appendChild(leftButton)
  overlay.appendChild(overlayImage)
  overlay.appendChild(rightButton)

  section.appendChild(overlay)
    //fucntie die er voor zorgt dat je de class visible weghaalt van overlay, waardoor hij weer weg gaat. ook de class no-scroll word weggehaald zodat je weer door de hele pagina kan scrollen.
    function close() {
    overlay.classList.remove("visible")
    document.body.classList.remove("no-scroll")
    overlayImage.src = ''
    console.log("close click")   
    }
    //functie die er voor zorgt dat je de volgende afbeelding ziet als je op de rechterknop of toets drukt.
    function right() {
    console.log(activeStory)
    activeStory = activeStory + 1
    if (activeStory > verhaal.length - 1) {
      activeStory = 0
    }
    showOverlayImage(activeStory)
    console.log('left click')
    }
    //functie die er voor zorgt dat je de volgende afbeelding ziet als je op de linkerknop of toets drukt.
    function left() {
    activeStory = activeStory - 1
    if (activeStory < 0) {
      activeStory = verhaal.length - 1
    }
    showOverlayImage(activeStory)
    console.log('left click')
    }
  //aanroepen van functies met click eventlisteners  
  closeButton.addEventListener("click", function() {
      close();
  })

  rightButton.addEventListener('click', function () {
      right();
  })

  leftButton.addEventListener('click', function () {
      left();
  })
    //aanroepen van functies met keydown eventlisteners
    document.addEventListener("keydown", function(e) {
    if (e.keyCode === 37) {
        left();
    } else if (e.keyCode === 39) {
       right();
    } else if (e.keyCode === 27) {
        close();
    }
    });
    
    //functie die van de index van elke afbeelding in een article, de activeStory maakt, hierdoor kan je de activeStory + 1, of -1 geven waardoor je in de overlay met de knoppen door alle verhalen kan gaan. Ook in de overlay kijkt hij of de image beschikbaar is en laat anders een default afbeelding zien.
  function showOverlayImage(index) {
    activeStory = index
    overlayImage.src = 'https://blokweb.org/uploads/' + verhaal[index].imgLarge
    if (overlayImage.src == 'https://blokweb.org/uploads/null') {
      overlayImage.src = 'images/beschikbaar.jpg'
    }
  }
}