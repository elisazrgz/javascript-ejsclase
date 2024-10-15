const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(nums) {
    let avg = 0;
    for (let n of nums) {
        avg = (avg += n / nums.length);
    }
    return avg;
}

console.log(average(numbers))