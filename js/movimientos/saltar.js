const saltar = () => {
  if (validarAccionEnCurso("saltar")) return;
  agregarAccionEnCurso("saltar");

  steve.classList.remove("steve--aterrizando");
  steve.classList.add("steve--saltando");

  console.log("saltar");
};

const dejarDeSaltar = () => {
  steve.classList.remove("steve--saltando");
  steve.classList.add("steve--aterrizando");

  eliminarAccionEnCurso("saltar");

  console.log("aterrizar");
};
