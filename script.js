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

  $(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        
        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
          if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
        } else { //object goes out of view (scrolling up)
          if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
        }
      });
    }).scroll(); //invoke scroll-handler on page-load
  });

  let bookNow_btn = document.getElementById('bookNow_btn')
  let modalContainer = document.getElementById('modalContainer')
  let closeModalBtn = document.getElementById('modal_btn')
  let page = document.getElementById('container')
  
  const displayModal = () => {
    modalContainer.style.display = 'flex'
    page.style.opacity = '0.2'
  }
  
  const closeModal = () => {
    modalContainer.style.display = 'None'
    page.style.opacity = '1'
  }
  
  bookNow_btn.addEventListener('click', displayModal)
  closeModalBtn.addEventListener('click', closeModal)
  
  
  
  
  
  let plusAdultTicket = document.getElementById('adult_increase')
  let minusAdultTicket = document.getElementById('adult_decrease')
  
  let adult_counter = 0;
  let adultTix_indiPrice = 69;
  let children_counter = 0;
  let childTix_indiPrice = 49;
  
  let adultTix_totalPrice = 0;
  let childTix_totalPrice = 0;
  
  const plusAdultHandler = () => {
      adult_counter += 1;
      document.getElementById('adult_counter').innerHTML = adult_counter
      document.getElementById('adultType').innerHTML = 'Adult'
      document.getElementById('adultTix_num').innerHTML = adult_counter
      adultTix_totalPrice = adult_counter * adultTix_indiPrice
      document.getElementById('adultTix_price').innerHTML = adultTix_totalPrice
  
      document.getElementById('tixTotalPrice').innerHTML = childTix_totalPrice + adultTix_totalPrice
  
  }
  
  const minusAdultHandler = () => {
      adult_counter -= 1;
      document.getElementById('adult_counter').innerHTML = adult_counter
  
      document.getElementById('adultTix_num').innerHTML = adult_counter
      document.getElementById('adultTix_price').innerHTML = adult_counter * adultTix_indiPrice
      adultTix_totalPrice = adult_counter * adultTix_indiPrice
      document.getElementById('tixTotalPrice').innerHTML = childTix_totalPrice + adultTix_totalPrice
  
  
      if (adult_counter <= 0) {
          adult_counter = 0
          document.getElementById('adultType').innerHTML = ''
          document.getElementById('adult_counter').innerHTML = adult_counter
          document.getElementById('adultTix_num').innerHTML = ''
          document.getElementById('adultTix_price').innerHTML = ''
  
          if (adult_counter <= 0 & children_counter <= 0) {
              document.getElementById('tixTotalPrice').innerHTML = ''
          }
      }
  }
  
  const plusChildHandler = () => {
      children_counter += 1;
      document.getElementById('children_counter').innerHTML = children_counter
      document.getElementById('childType').innerHTML = 'Children'
  
      document.getElementById('childTix_num').innerHTML = children_counter
      childTix_totalPrice = children_counter * childTix_indiPrice
      document.getElementById('childTix_price').innerHTML = childTix_totalPrice
  
      document.getElementById('tixTotalPrice').innerHTML = childTix_totalPrice + adultTix_totalPrice
  }
  
  const minusChildHandler = () => {
      children_counter -= 1;
      document.getElementById('children_counter').innerHTML = children_counter
      document.getElementById('childTix_num').innerHTML = children_counter
  
      document.getElementById('childTix_price').innerHTML = children_counter * childTix_indiPrice
      childTix_totalPrice = children_counter * childTix_indiPrice
      document.getElementById('tixTotalPrice').innerHTML = childTix_totalPrice + adultTix_totalPrice
  
      if (children_counter <= 0) {
          children_counter = 0
          document.getElementById('children_counter').innerHTML = children_counter
          document.getElementById('childType').innerHTML = ''
          document.getElementById('childTix_num').innerHTML = ''
          document.getElementById('childTix_price').innerHTML = ''
  
          if (adult_counter <= 0 & children_counter <= 0) {
              document.getElementById('tixTotalPrice').innerHTML = ''
          }
      }
  }
  
  
  window.onload = function() {
  document.getElementById('adult_counter').innerHTML = adult_counter;
  document.getElementById('children_counter').innerHTML = children_counter;
  
  }