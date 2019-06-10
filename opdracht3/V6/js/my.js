var header = document.querySelector('header');
var section = document.querySelector('section');
// var large = document.querySelector('.overlay');
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
  var activeStory
      
  for (let i = 0; i < verhaal.length; i++) {
    var storyArticle = document.createElement('article');
    var storyTitle = document.createElement('h2');
    var storyGenre = document.createElement('p');
    var storyTags = document.createElement('span');
    var storyImage = document.createElement('img');
    var storyNumber = document.createElement('div');

    storyTitle.textContent = verhaal[i].sfeerwoord;
    storyGenre.textContent = 'genre: ' + verhaal[i].genre;
    storyTags.textContent = 'tags: ' + verhaal[i].tags;
    storyImage.src = 'https://blokweb.org/uploads/' + verhaal[i].imgLarge;
    storyNumber.textContent = verhaal[i].verhaalnr;
      
    if (storyImage.src == 'https://blokweb.org/uploads/null') {
        storyImage.src = 'images/beschikbaar.jpg';
    }
        
    storyArticle.appendChild(storyNumber);
    storyArticle.appendChild(storyTitle);
    storyArticle.appendChild(storyGenre);
    storyArticle.appendChild(storyTags);
    storyArticle.appendChild(storyImage);
    
    section.appendChild(storyArticle);
       
    storyArticle.addEventListener("click", function() {
      overlay.classList.add("visible")
      document.body.classList.add("no-scroll")
      showOverlayImage(i)
      console.log("open article klik")
    })
  }

  var overlay = document.createElement('div')
  var overlayImage = document.createElement('img')
  var rightButton = document.createElement('button')
  var leftButton = document.createElement('button')
  var closeButton = document.createElement('button')

  rightButton.classList.add('right-button')
  overlay.classList.add('overlay')

  overlay.appendChild(closeButton)
  overlay.appendChild(leftButton)
  overlay.appendChild(overlayImage)
  overlay.appendChild(rightButton)

  section.appendChild(overlay)

  closeButton.addEventListener("click", function() {
    overlay.classList.remove("visible")
    document.body.classList.remove("no-scroll")
    overlayImage.src = ''
    console.log("close click")
  })

  rightButton.addEventListener('click', function () {
    console.log(activeStory)
    activeStory = activeStory + 1
    if (activeStory > verhaal.length - 1) {
      activeStory = 0
    }
    showOverlayImage(activeStory)
    console.log('left click')
  })

  leftButton.addEventListener('click', function () {
    activeStory = activeStory - 1
    if (activeStory < 0) {
      activeStory = verhaal.length - 1
    }
    showOverlayImage(activeStory)
    console.log('left click')
  })


  function showOverlayImage(index) {
    activeStory = index
    overlayImage.src = 'https://blokweb.org/uploads/' + verhaal[index].imgLarge
    if (overlayImage.src == 'https://blokweb.org/uploads/null') {
      overlayImage.src = 'images/beschikbaar.jpg'
    }
  }
}



/*    var largeImg = document.createElement('img');
        largeImg.src = 'https://blokweb.org/uploads/' + verhaal[i].imgLarge;
        large.appendChild(largeImg); 
      largeImg.classList.remove("active");
      largeImg.classList.add("active");
        myArticle.addEventListener("click", function(){
        large.classList.toggle("visible");
        
        
        console.log("klik")});*/