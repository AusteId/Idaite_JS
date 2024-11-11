const friends = ["Rika", "Jacob", "Alex", "Oliver", "Marika"];

let filterItems = (array, filterBy) => {

    let filteredArray = [...array];
    filteredArray = filteredArray.filter(itemOfArray => itemOfArray.toLowerCase().includes(filterBy.toLowerCase()));

    let newFilteredArray = filteredArray.sort().map(itemOfNewArray => "*" + itemOfNewArray);

    return newFilteredArray;
};

console.log(filterItems(friends, "ka"));
