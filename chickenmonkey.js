for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {

    if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
    console.log("Chicken Monkey");
    } else if (currentNumber % 7 === 0) {
    console.log("Monkey"); 
    } else if (currentNumber % 5 === 0) {
    console.log("Chicken");
    } else {
    console.log(currentNumber);
    }
}

//** IF THE FIRST TWO ARE TRUE, THE LAST WILL NEVER BE REACHED...it only moves to the next statement when the condition of the previous statement hasn't been met
// THEREFORE THE conditional combining the %5 and %7 HAS to go first!! */