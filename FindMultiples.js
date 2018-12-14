findMultiples = (num) => {

    let sum = 0;

    for (i = 1; i <= num; i++) {
        if (i % 5 === 0 || i % 3 === 0) {
            sum += i;
        }  
    }

    return sum;
}

console.log(findMultiples(1000));