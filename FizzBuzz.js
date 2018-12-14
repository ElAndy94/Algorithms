findMultiples = (num) => {

    for (i = 1; i <= num; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log(i, " FizzBuzz");
        } else if (i % 5 === 0) {
            console.log(i, " Fizz");
        } else if (i % 3 === 0) {
            console.log(i, " Buzz");
        }
    }
}

// findMultiples(100);

isAMultiple = (num1, num2) => {
    if(num1 % num2 === 0) {
        console.log(`${num2} is a multiple of ${num1}`);
        return true;
    } else {
        console.log(`${num2} is not a multiple of ${num1}`);
        return false;
    }
}

console.log(isAMultiple(10, 5));