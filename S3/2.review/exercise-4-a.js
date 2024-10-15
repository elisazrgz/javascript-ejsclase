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

console.log(findArrayIndex(animals, "Mosquito"))
