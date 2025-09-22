const moverPiernas = () => {
  // validar si ya se está moviendo
  if (validarAccionEnCurso("mover-piernas")) return;
  agregarAccionEnCurso("mover-piernas");

  piernaIzquierda.classList.add("moverse");
  piernaDerecha.classList.add("moverse");

  console.log("mover piernas");
};

const dejarMoverPiernas = () => {
  piernaIzquierda.classList.remove("moverse");
  piernaDerecha.classList.remove("moverse");

  eliminarAccionEnCurso("mover-piernas");

  console.log("dejar de mover piernas");
};
