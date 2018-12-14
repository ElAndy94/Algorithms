FirstReverse = (str) => {

    let reversedString = '';
    let strSplit = str.split('');
    for (i = strSplit.length - 1; i > -1; i--) {
        reversedString += strSplit[i]
    }
    return reversedString;
}

console.log(FirstReverse("Argument goes here"));