const source = "Our great financial team is in China trying to negotiate a level playing field on trade! I look forward to being with President Xi in the not too distant future. We will always have a good (great) relationship!Mr. Cohen, an attorney, received a monthly retainer, not from the campaign and having nothing to do with the campaign, from which he entered into, through reimbursement, a private contract between two parties, known as a non-disclosure agreement, or NDA. These agreements are very common among celebrities and people of wealth. In this case it is in full force and effect and will be used in Arbitration for damages against Ms. Clifford (Daniels). The agreement was used to stop the false and extortionist accusations made by her about an affair, despite already having signed a detailed letter admitting that there was no affair. Prior to its violation by Ms. Clifford and her attorney, this was a private agreement. Money from the campaign, or campaign contributions, played no roll in this transaction.Ainsley Earnhardt, a truly great person, just wrote a wonderful book, “The Light Within Me,” which is doing really well. She is very special and so is her new book...bring it to number one!As everybody is aware, the past Administration has long been asking for three hostages to be released from a North Korean Labor camp, but to no avail. Stay tuned!I have been briefed on the U.S. C-130 “Hercules” cargo plane from the Puerto Rico National Guard that crashed near Savannah Hilton Head International Airport. Please agree me in thoughts and prayers for the victims, their families and the great men and women of the National Guard.";
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
// let output = source.substring(0, order); // hardcoded to use the same first word for now
let output = 'The not';
for (let i = 0; i < 500; i++) {
    const current = output.substring(output.length - order);
    const possibilities = ngrams[current];
    output += possibilities[Math.floor(Math.random() * possibilities.length)];
}
console.log(output);