import { getRandomWords } from '../utilities/getRandomWords.js';

/* page variables */
let numberOfWords = 4;

/* DOM elements */
let numberOfWords__range = document.querySelector('.number-of-words__range');
let numberOfWords__value = document.querySelector('.number-of-words__value');
let password__copy = document.querySelector('.password__copy');
let password__generate = document.querySelector('.password__generate');
let password__value = document.querySelector('.password__value');

// Display 'numberOfWords' on page load
numberOfWords__value.textContent = numberOfWords;

// Tie up all button click events
numberOfWords__range.addEventListener('input', changeNumberOfWords);
password__generate.addEventListener('click', generatePassword);
password__copy.addEventListener('click', copyPassword);

function changeNumberOfWords(event) {
    numberOfWords = numberOfWords__range.value;
    numberOfWords__value.textContent = numberOfWords;
}

function generatePassword(event) {
    let words = getRandomWords(numberOfWords);
    password__value.textContent = words.join(' ');
}

function copyPassword(event) {
    let password = password__value.textContent;

    let type = 'text/plain';
    let blob = new Blob([password], { type });
    let data = [new ClipboardItem({ [type]: blob })];

    navigator.clipboard.write(data);
}
