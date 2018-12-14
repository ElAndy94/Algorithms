LetterChanges = (str) => {

    let chars = str.toLowerCase().split('');
    let result = '';
    let nextLetter = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const vowels = 'aeiou'.split('');

    for (let char of chars) {
        if (!alphabet.includes(char)) {
            result += char;
        } else {
            const charIndex = alphabet.indexOf(char);
    
            if (char === 'z') {
                nextLetter = 'a';
            } else {
                nextLetter = alphabet[charIndex + 1];
            }
    
            if (vowels.includes(nextLetter)) {
                nextLetter = nextLetter.toUpperCase();
            }
            
            result += nextLetter;
        }

    }
    return result;
}
console.log(LetterChanges("Argument goes here"));