const moverPlano = (evento) => {
  //obtener la coordenadas del eje X y Y de la flecha de mouse
  let X = evento.clientX;
  let Y = evento.clientY;

  //asignar esos valores y hacer que rote
  contenedor3d.style.transform = `rotateX(-${Y}deg) rotateY(${X}deg)`;
};

// cuando se hace click de mouse
addEventListener("mousedown", () => {
  addEventListener("mousemove", moverPlano);
});

// cuando se suelta el click de mouse
addEventListener("mouseup", () => {
  removeEventListener("mousemove", moverPlano);
});
