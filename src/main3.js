
let countPositiveNumbers = () => {

    let sumOfPositiveNumbers = 0;

    while (true) {
        let numb = +prompt("Write a number:");

        if (numb > 0) {
            sumOfPositiveNumbers += numb;
        } else {
            console.log(`Suma: ${sumOfPositiveNumbers}`);
            break;
        };
    };

    return sumOfPositiveNumbers;
};

countPositiveNumbers();


