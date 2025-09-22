const moverBrazos = () => {
  // validar si ya se está moviendo
  if (validarAccionEnCurso("mover-brazos")) return;
  agregarAccionEnCurso("mover-brazos");

  brazoIzquierdo.classList.add("moverse");
  brazoDerecho.classList.add("moverse");

  console.log("mover brazos");
};

const dejarMoverBrazos = () => {
  brazoIzquierdo.classList.remove("moverse");
  brazoDerecho.classList.remove("moverse");

  eliminarAccionEnCurso("mover-brazos");

  console.log("dejar de mover brazos");
};
