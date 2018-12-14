CheckNums = (num1, num2) => {
    if (num1 == num2) {
        return "-1"; 
     }
     else {
       return (num2 > num1); 
     }     

    // if (num1 < num2) {
    //     return true;
    // } else if (num1 === num2) {
    //     return -1;
    // } else {
    //     return false;
    // }
}

console.log(CheckNums(123, 122));