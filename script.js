let questionSelector = document.getElementById('questionSelector1');
let answerDiv = document.getElementById('answerDiv1');
answerDiv.style.display = 'none'

const revealAnswerHandler = () => {

    if (answerDiv.style.display == 'none') {
        answerDiv.style.display = 'flex';
    } else {
        answerDiv.style.display = 'none';
    }
}

questionSelector.addEventListener('click', revealAnswerHandler)


let questionSelector2 = document.getElementById('questionSelector2');
let answerDiv2 = document.getElementById('answerDiv2');
answerDiv2.style.display = 'none'

const revealAnswerHandler2 = () => {

    if (answerDiv2.style.display == 'none') {
        answerDiv2.style.display = 'flex';
    } else {
        answerDiv2.style.display = 'none';
    }
}

questionSelector2.addEventListener('click', revealAnswerHandler2)


let questionSelector3 = document.getElementById('questionSelector3');
let answerDiv3 = document.getElementById('answerDiv3');
answerDiv3.style.display = 'none'

const revealAnswerHandler3 = () => {

    if (answerDiv3.style.display == 'none') {
        answerDiv3.style.display = 'flex';
    } else {
        answerDiv3.style.display = 'none';
    }
}

questionSelector3.addEventListener('click', revealAnswerHandler3)


let questionSelector4 = document.getElementById('questionSelector4');
let answerDiv4 = document.getElementById('answerDiv4');
answerDiv4.style.display = 'none'

const revealAnswerHandler4 = () => {

    if (answerDiv4.style.display == 'none') {
        answerDiv4.style.display = 'flex';
    } else {
        answerDiv4.style.display = 'none';
    }
}

questionSelector4.addEventListener('click', revealAnswerHandler4)



let showMoreButton = document.getElementById('FAQ_showMoreBtn')
let showMoreContent = document.getElementById('showMore_content')
showMoreContent.style.display ='none'

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
