let $p = document.createElement("p");
$p.textContent = "Estoy en medio!";

let $secondDiv = document.querySelector("div:nth-child(2)");
/* UNA FORMA QUE AL PROFE NO LE GUSTA:
padre.insertBefore(cosaNueva, cosaDeReferencia)
--> document.body.insertBefore($p, $secondDiv)
*/
$secondDiv.parentNode.insertBefore($p, $secondDiv);