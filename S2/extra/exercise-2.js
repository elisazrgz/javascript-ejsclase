const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];

for (let i = 0; i < foodSchedule.length; i++) {
    if (isVegan = "false") {
        foodSchedule.splice(i, 1, fruits[i]);
    }
}

console.log(foodSchedule)