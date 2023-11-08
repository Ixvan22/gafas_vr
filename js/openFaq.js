const QUESTIONS = document.querySelectorAll('.arrow-icon');
const ANSWERS = document.querySelectorAll('.answer');
console.log(ANSWERS);

QUESTIONS.forEach((question, key) => {
    let actual_key = key;
    
    question.addEventListener('click', () => {
        ANSWERS[actual_key].classList.toggle('answer-show');
        question.classList.toggle('fa-arrow-down');
        question.classList.toggle('fa-arrow-up');
    })
})