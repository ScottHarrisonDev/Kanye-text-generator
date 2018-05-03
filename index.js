fetch('/sources/kanye-west/kanye-west-yeezus-lyrics.json')
    .then(blob => blob.json())
    .then(data => process(data['kanye-west-yeezus-lyrics']));


function process(source) {
    const order = 6;
    const ngrams = [];

    // Learn
    for (let i = 0; i < source.length - order; i++) {
        const ngram = source.substr(i, order);
        if (!ngrams[ngram]) {
            ngrams[ngram] = [];
        }
        const nextChar = source.substr(i + order, 1);
        ngrams[ngram].push(nextChar);
    }

    // Generate
    const start = 0;
    let output = source.substring(start, start + order); // hardcoded to use the same first word for now
    // let output = 'Autumn';
    for (let i = 0; i < 500; i++) {
        const current = output.substring(output.length - order);
        const possibilities = ngrams[current];
        output += possibilities[Math.floor(Math.random() * possibilities.length)];
    }
    console.log(output);
}