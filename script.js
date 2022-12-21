let faqButton = document.getElementById('questionSelector')

const clickHandler = () => {
    console.log('Button is clicked')
}

faqButton.addEventListener('click', clickHandler)


let questionSelector = document.getElementById('questionSelector')
let answerDiv = document.getElementById('answerDiv')

const revealAnswerHandler = () => {

    if (answerDiv.style.display == 'none') {
        answerDiv.style.display = 'flex';
    } else {
        answerDiv.style.display = 'none';
    }
}

questionSelector.addEventListener('click', revealAnswerHandler)


let showMoreButton = document.getElementById('FAQ_button')
let showMoreContent = document.getElementById('showMore_content')

const showMoreQuestionHandler = () => {
    if (showMoreContent.style.display == 'none') {
        showMoreContent.style.display = 'block'
    } else {
        showMoreContent.style.display = 'none'
    }
}

showMoreButton.addEventListener('click', showMoreQuestionHandler)
console.log('test')

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;
