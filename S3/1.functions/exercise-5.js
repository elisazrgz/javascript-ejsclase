const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function sumNumbersAndStrings(mixes) {
  let sum = 0;
    for (let mix of mixes) {
    if (typeof mix === "string") {
        sum += mix.length;
    } else {
        sum += mix;
    }
  }

  return sum;
}

console.log(sumNumbersAndStrings(mixedElements))