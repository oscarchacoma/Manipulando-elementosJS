let main = document.querySelector("main");
let h2 = document.querySelector("h2.subtitulo");
let a = document.querySelector("a");
let p = document.querySelectorAll("p");

let nombre = prompt("Ingresa tu nombre");
if (nombre == null || nombre == "") {
      h2.innerText += " Invitado";
} else {
      h2.innerText += " " + nombre;
}
h2.style.textTransform = "uppercase";
a.style.color = "#E51B3E";
let fondo = confirm("¿Desea colocar un fondo de pantalla?");
if (fondo) {
      document.querySelector("body").classList.add("fondo");
}
for (let index = 0; index < p.length; index++) {
      if (index % 2 == 0) {
            p[index].classList.add("destacadoPar");
      } else {
            p[index].classList.add("destacadoImpar");
      }
}
main.style.display = "block";
