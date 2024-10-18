let animals = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

function findArrayIndex(array, text) {
    let index = 0;
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (item === text) {
            index = i;
            break;
        }
    }
    return index;
}

function removeItem(array, text) {
    let index = findArrayIndex(array, text);
    if (index > -1) {
    array.splice(index, 1);
    }
    return array;
}

console.log(removeItem(animals, "Mosquito"))