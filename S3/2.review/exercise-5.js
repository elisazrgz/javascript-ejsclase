function rollDice(number) {
    console.log(Math.floor(Math.random() * number) + 1)
    // "math.random()" solo genera aleatorio entre 0 y 1
    // con el math.floor() * 4 por ej iría de 0 a 3 (sin decimales)
    // con el + 1 se mueve el recorrido para que no empiece en 0
}

rollDice(6)
