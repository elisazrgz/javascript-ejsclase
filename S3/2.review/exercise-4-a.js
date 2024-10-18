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
    
    // SI NO QUIERO PROGRAMAR YO LA FUNCIÓN TAMBIÉN VALE CON:
    // return array.indexOf(text);
}

console.log(findArrayIndex(animals, "Mosquito"))
