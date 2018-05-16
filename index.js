console.info('Learning, please wait.');

let source = '';
const order = 6;
const ngrams = {};
let firstNgram = '';
let stringLimit = 300;

var fetches = [
    fetch('sources/kanye-west/kanye-west-the-life-of-pablo-lyrics.json')
        .then(blob => blob.json())
        .then(data => compile(data['kanye-west-the-life-of-pablo-lyrics'])),
    fetch('sources/kanye-west/kanye-west-yeezus-lyrics.json')
        .then(blob => blob.json())
        .then(data => compile(data['kanye-west-yeezus-lyrics'])),
    fetch('sources/kanye-west/kanye-west-my-beautiful-dark-twisted-fantasy-lyrics.json')
        .then(blob => blob.json())
        .then(data => compile(data['kanye-west-my-beautiful-dark-twisted-fantasy-lyrics'])),
    fetch('sources/kanye-west/kanye-west-808s-and-heartbreak-lyrics.json')
        .then(blob => blob.json())
        .then(data => compile(data['kanye-west-808s-and-heartbreak-lyrics'])),
    fetch('sources/kanye-west/kanye-west-graduation-lyrics.json')
        .then(blob => blob.json())
        .then(data => compile(data['kanye-west-graduation-lyrics'])),
    fetch('sources/kanye-west/kanye-west-late-orchestration-lyrics.json')
        .then(blob => blob.json())
        .then(data => compile(data['kanye-west-late-orchestration-lyrics'])),
    fetch('sources/kanye-west/kanye-west-the-college-dropout-lyrics.json')
        .then(blob => blob.json())
        .then(data => compile(data['kanye-west-the-college-dropout-lyrics']))
];

Promise.all(fetches).then(results => {
    process();
});

function compile(data) {
    source += ' ' + data;
};

function process() {
    // Learn
    for (let i = 0; i < source.length - order; i++) {
        const ngram = source.substr(i, order);
        if (i === 0) {
            firstNgram = ngram;
        }
        if (!ngrams[ngram]) {
            ngrams[ngram] = [];
        }

        ngrams[ngram].push(source.substr(i + order, 1));
    }
    console.info('Completed learning. Ready to generate!');
}

function generate() {
    let output = firstNgram;
    while (!outputLimitReached(output.length) || !isEndOfWord(output.substring(output.length - order))) {
        const current = output.substring(output.length - order);
        const possibilities = ngrams[current];
        output += possibilities[Math.floor(Math.random() * possibilities.length)];
    }
    document.getElementById('generated-text').innerHTML = output;
}

function isEndOfWord(ngram) {
    return '.!?'.indexOf(ngram.slice(-1)) > -1;
}

function outputLimitReached(stringLength) {
    return stringLength > stringLimit;
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('generate').addEventListener('click', generate);
});