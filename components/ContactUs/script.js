let bookNow_btn = document.getElementById('bookNow_btn')
let modalContainer = document.getElementById('modalContainer')
let closeModalBtn = document.getElementById('modal_btn')

const displayModal = () => {
    modalContainer.style.display = 'flex'
}

const closeModal = () => {
    modalContainer.style.display = 'None'
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
    }
}

// plusAdultTicket.addEventListener('click', plusAdultHandler)
// minusAdultTicket.addEventListener('click', minusAdultHandler)
window.onload = function() {
document.getElementById('adult_counter').innerHTML = adult_counter;
document.getElementById('children_counter').innerHTML = children_counter;

}