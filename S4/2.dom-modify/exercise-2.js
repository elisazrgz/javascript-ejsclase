let $div = document.createElement("div");

// MEJOR OPCIÓN:
$div.innerHTML = "<p></p>";

/*
OTRA FORMA DE HACERLO:
let $p = document.createElement("p");
$div.appendChild($p);
*/

document.body.appendChild($div)