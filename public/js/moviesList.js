let $body = document.querySelector("body");
let $h1 = document.querySelector("h1");
let res = prompt("¿Desea modo oscuro?");
if (res.toUpperCase() == "SI") {
      $body.style.backgroundColor = "#7f7f7f";
      $body.classList.add("fondoMoviesList");
      $h1.innerText = "LISTADO DE PELÍCULAS";
      $h1.style.color = "#F0FF0F";
      $h1.style.backgroundColor = "teal";
      $h1.style.padding = "20px";
}
