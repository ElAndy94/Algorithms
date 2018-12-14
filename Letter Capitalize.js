LetterCapitalize = (str) => {
    let textSplit = str.split(' ');

    for (let i = 0; i < textSplit.length; i++) {
        textSplit[i] = textSplit[i].substring(0,1).toUpperCase() + textSplit[i].substring(1);
    }

    return textSplit.join(" ");
}

console.log(LetterCapitalize("hello world"));