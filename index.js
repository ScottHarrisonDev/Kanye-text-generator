// fetch('sources/kanye-west/kanye-west-yeezus-lyrics.json')
//     .then(blob => blob.json())
//     .then(data => process(data['kanye-west-yeezus-lyrics']));
fetch('sources/kanye-west/kanye-west-the-college-dropout-lyrics.json')
    .then(blob => blob.json())
    .then(data => process(data['kanye-west-the-college-dropout-lyrics']));

const order = 5;
const ngrams = [];
let firstNgram = '';

function process(source) {

    // Learn
    for (let i = 0; i < source.length - order; i++) {
        const ngram = source.substr(i, order);
        if (i === 0) {
            firstNgram = ngram;
        }
        if (!ngrams[ngram]) {
            ngrams[ngram] = [];
        }
        const nextChar = source.substr(i + order, 1);
        ngrams[ngram].push(nextChar);
    }
}

function generate() {
    let output = firstNgram;
    for (let i = 0; i < 500; i++) {
        const current = output.substring(output.length - order);
        const possibilities = ngrams[current];
        output += possibilities[Math.floor(Math.random() * possibilities.length)];
    }
    document.getElementById('generated-text').innerHTML = output;
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('generate').addEventListener('click', generate);
});