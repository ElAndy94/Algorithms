SimpleAdding = (num) => {
    let numbers = 0;

    for (i = 1; i <= num; i++) {
        numbers += i;
    }

    return numbers;
}

console.log(SimpleAdding(140));