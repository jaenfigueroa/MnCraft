const moverExtremidades = () => {
  // validar si ya se está moviendo
  if (validarAccionEnCurso("mover-extremidades")) return;
  agregarAccionEnCurso("mover-extremidades");

  cabeza.classList.add("moverse");
  tronco.classList.add("moverse");
  brazoIzquierdo.classList.add("moverse");
  brazoDerecho.classList.add("moverse");
  piernaIzquierda.classList.add("moverse");
  piernaDerecha.classList.add("moverse");

  console.log("mover extremidades");
};

const dejarMoverExtremidades = () => {
  cabeza.classList.remove("moverse");
  tronco.classList.remove("moverse");
  brazoIzquierdo.classList.remove("moverse");
  brazoDerecho.classList.remove("moverse");
  piernaIzquierda.classList.remove("moverse");
  piernaDerecha.classList.remove("moverse");

  eliminarAccionEnCurso("mover-extremidades");

  console.log("dejar de mover extremidades");
};
