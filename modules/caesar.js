

export function caesarCipher(string, factor) {
    const stringArray = [...string];
    const alphabetLowerCase = [...'abcdefghijklmnopqrstuvwxyz'];
    const alphabetUpperCase = alphabetLowerCase.map(letter => letter.toUpperCase());
    const codedStringArray = stringArray.map(char => {
        if(alphabetLowerCase.includes(char)) return getNewLetter(char, alphabetLowerCase, factor);
        else if (alphabetUpperCase.includes(char)) return getNewLetter(char, alphabetUpperCase, factor);
        else return char;
    })
    return codedStringArray.join('');
}

function getNewLetter(char, alphabet, factor) {
    const newIndex = alphabet.indexOf(char) + factor;
    return newIndex > alphabet.length - 1 ? alphabet[newIndex - alphabet.length] : alphabet[newIndex]
}