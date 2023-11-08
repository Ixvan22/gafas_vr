const CONTAINER_QUESTIONS = document.querySelectorAll('.questions-title-container');
const QUESTIONS = document.querySelectorAll('.arrow-icon');
const ANSWERS = document.querySelectorAll('.answer');

CONTAINER_QUESTIONS.forEach((question, key) => {
    let actual_key = key;
    
    question.addEventListener('click', () => {
        ANSWERS[actual_key].classList.toggle('answer-show');
        QUESTIONS[key].classList.toggle('fa-arrow-down');
        QUESTIONS[key].classList.toggle('fa-arrow-up');
    })
})