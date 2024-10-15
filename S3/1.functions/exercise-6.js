const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

  function removeDuplicates(elements) {
    let cleanElements = [];
    for (let element of elements) {
        if (!cleanElements.includes(element)) {
            cleanElements.push(element)
        }
    }
    return cleanElements
  }

  console.log(removeDuplicates(duplicates))