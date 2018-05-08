console.info('Learning, please wait.');

let source = '';
const order = 4;
const ngrams = [];
let firstNgram = '';

function reflect(promise) {
    return promise.then(function (v) { return { v: v, status: "resolved" } },
        function (e) { return { e: e, status: "rejected" } });
}

var fetches = [
    fetch('sources/kanye-west/kanye-west-yeezus-lyrics.json')
        .then(blob => blob.json())
        .then(data => compile(data['kanye-west-yeezus-lyrics'])),
    fetch('sources/kanye-west/kanye-west-the-college-dropout-lyrics.json')
        .then(blob => blob.json())
        .then(data => compile(data['kanye-west-the-college-dropout-lyrics']))
];

Promise.all(fetches.map(reflect)).then(results => {
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