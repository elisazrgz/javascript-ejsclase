const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, {name: 'Raquel Benito', T1: true, T2: true, T3: true}
];

for(let alumn of alumns) {
  alumn.isApproved =
        (alumn.T1 && alumn.T2) ||
        (alumn.T2 && alumn.T3) ||
        (alumn.T1 && alumn.T3);
}

// Se puede usar un condicional if dentro del for of y después añadir la acción de crear .isApproved pero sería redundante, y así se ahorran líneas de código

console.log(alumns)