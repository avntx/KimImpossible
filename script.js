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