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

const plusAdultHandler = () => {
    adult_counter += 1;
    console.log(adult_counter)
}

const minusAdultHandler = () => {
    adult_counter -= 1;
}

// plusAdultTicket.addEventListener('click', plusAdultHandler)
// minusAdultTicket.addEventListener('click', minusAdultHandler)
window.onload = function() {
document.getElementById('adult_counter').innerHTML = adult_counter;

}