const moverExtremidades = () => {
  // validar si ya se está moviendo
  if (validarAccionEnCurso("mover-extremidades")) return;
  agregarAccionEnCurso("mover-extremidades");

  todos.forEach((element) => {
    element.classList.add("moverse");
  });

  console.log("mover extremidades");
};

const dejarMoverExtremidades = () => {
  todos.forEach((element) => {
    element.classList.remove("moverse");
  });
  eliminarAccionEnCurso("mover-extremidades");

  console.log("dejar de mover extremidades");
};
