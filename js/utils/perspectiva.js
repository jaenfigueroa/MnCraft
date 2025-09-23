///////////////////////////////////////////////////////////////////
//CAMBIAR LA PERSPECTIVA DEL PERSONAJE/////////////////////////////

// // /cuando se hace click ----------------------
window.addEventListener("mousedown", () => {
  window.addEventListener("mousemove", moverPlano);
});

///cuando se deja de hacer click -------------
window.addEventListener("mouseup", () => {
  removeEventListener("mousemove", moverPlano);
});

//--------------------------------------------
function moverPlano(evento) {
  //obtener la coordenadas del eje X y Y de la flecha de mouse
  let X = evento.clientX;
  let Y = evento.clientY;

  //asignar esos valores y hacer que rote
  contenedor3d.style.transform = `rotateX(-${Y}deg) rotateY(${X}deg)`;
}
