AlphabetSoup = (str) => {
    const chars = str.split('');

    let swapped;
    do {
        swapped = false;
        for (i = 0; i < chars.length; i++) {
            const char = chars[i];
            const nextChar = chars[i + 1];
            if (char > nextChar) {
                chars[i + 1] = char;
                chars[i] = nextChar;
                swapped = true;
            }
        }
    } while (swapped);

    return chars.join('');

}

console.log(AlphabetSoup("hooplah"));