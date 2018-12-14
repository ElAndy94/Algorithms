TimeConvert = (num) => {
    const hours = Math.floor(num/60);
    // const hours = num / 60;
    // const hoursRoundedDown = Math.floor(hours);
    
    // const hoursInMins = hoursRoundedDown * 60;
    // const minutes = num - hoursInMins;
    const minutes = num % 60;
    const result = hours + ":" + minutes;
    return result;
}

console.log(TimeConvert(126));


