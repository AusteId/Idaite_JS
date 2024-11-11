let numb = prompt("Write the positives and negatives numbers separated only by comma:");
let arrayOfNumbers = numb.split(",").map(Number);

let positives = (array) => {

    if (arrayOfNumbers.length <= 1) {
        console.log("This is not an array");
        return;
    };

    let newArrayOfNumbers = array.filter(num => num > 0);

    return newArrayOfNumbers;

};

console.log(positives(arrayOfNumbers));



