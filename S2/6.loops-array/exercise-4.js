const toys = [{id: 5, name: 'Buzz MyYear'}, {id: 11, name: 'Action Woman'}, {id: 23, name: 'Barbie Man'}, {id: 40, name: 'El gato con Guantes'}, {id: 40, name: 'El gato felix'}];

/*

let i = 0;
for(let toy of toys) {
    if(toy.name.includes("gato")) {
        console.log(i + ": " + toy.name);
        toys.splice(i, 1);
 }

 i++;

}

*/

for(let i = 0; i < toys.length; i++) {
    let toy = toys[i];
    if(toy.name.includes("gato")) {
        console.log(i + ": " + toy.name);
        toys.splice(i, 1);
        i--;
    }
}

console.log(toys);