EvenFibonacci = (num) => {
    let sum = 0;
    let currentNum = 2;
    let previous = 1;


    while (currentNum <= num) {
        if (currentNum % 2 === 0) {
            sum += currentNum;
        }
        const temp = previous;
        previous = currentNum;
        currentNum += temp;
    }

    return sum;

}

console.log(EvenFibonacci(4000000));