const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
];

let categoryList = [];
for (let movie of movies) {
    if (!categoryList.includes(movie.categories)) {
        categoryList.push(movie.categories);
    }
}

console.log(categoryList)

// no sé cómo acceder a los elementos individuales de los arrays
// de categorias si con for of no tengo índices