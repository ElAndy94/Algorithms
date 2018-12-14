FirstFactorial = (num) => {

    let factorial = num;
    for (i = num - 1; i > 0; i--) {
        factorial *= i;
    }

    return factorial;
}

console.log(FirstFactorial(4));