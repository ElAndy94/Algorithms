LongestWord = (sen) => { 
    let largestWord = '';

    let words = sen.split(" ");

    for (let word of words) {
        if (word.length > largestWord.length) {
            largestWord = word;
        }
    }

    return largestWord;
         
}
   
// keep this function call here 
console.log(LongestWord('Argument goes here'));    