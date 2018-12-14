SimpleSymbols = (str) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let chars = str.toLowerCase().split('');
    let result = false; 

    for (char of chars) {
        if (alphabet.includes(char)) {
            const charIndex = chars.indexOf(char);
            const beforeLetter = chars[charIndex - 1];
            const nextLetter = chars[charIndex + 1];
            if (beforeLetter === '+' && nextLetter === '+') {
                result = true;
            } else {
                return false;
            }
        }
    }
    return result;
}

console.log(SimpleSymbols("+f-+d+"));