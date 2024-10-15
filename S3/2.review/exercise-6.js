let ballers = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

function swap(array, index1, index2) {
    let container = array[index1];
    array[index1] = array[index2];
    array[index2] = container;
    return array;
    }

console.log(swap(ballers, 1, 3))