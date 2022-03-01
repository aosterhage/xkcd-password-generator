import { dictionary } from '../data/dictionary.js';

export function getRandomWords(numberOfWords) {
    let indices = getRandomValues(numberOfWords, dictionary.length);

    let words = [];
    indices.forEach(index => words.push(dictionary[index]));
    return words;
}

function getRandomValues(numberOfValues, maxValue) {
    // using Uint16Array means that maxValue is limimted to max(Uint16)
    if (maxValue >= 65536) {
        return;
    }

    // populate array with random values
    let cryptoArray = new Uint16Array(numberOfValues);
    self.crypto.getRandomValues(cryptoArray);

    // make sure that all random values are less than maxValue
    cryptoArray.forEach(function(value, index, array) {
        array[index] = value % maxValue;
    });

    return cryptoArray;
}
