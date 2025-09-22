const flecha = document.getElementById("flecha");
const letraW = document.getElementById("letraW");
const letraS = document.getElementById("letraS");
const letraA = document.getElementById("letraA");
const letraD = document.getElementById("letraD");

window.addEventListener("keydown", (evento) => {
  if (evento.code == "KeyW") {
    flecha.style.transform = "rotateZ(-59deg)";
    letraW.classList.add("coloreado");
  } else if (evento.code == "KeyS") {
    flecha.style.transform = "rotateZ(119.5deg)";
    letraS.classList.add("coloreado");
  } else if (evento.code == "KeyA") {
    flecha.style.transform = "rotateZ(-149deg)";
    letraA.classList.add("coloreado");
  } else if (evento.code == "KeyD") {
    flecha.style.transform = "rotateZ(30deg)";
    letraD.classList.add("coloreado");
  }
});

window.addEventListener("keyup", (evento) => {
  letraW.classList.remove("coloreado");
  letraS.classList.remove("coloreado");
  letraA.classList.remove("coloreado");
  letraD.classList.remove("coloreado");
});
