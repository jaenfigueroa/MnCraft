const animarSombra = () => {
  if (validarAccionEnCurso("sombra-animando")) return;
  agregarAccionEnCurso("sombra-animando");

  sombra.classList.remove("sombra--aterrizando");
  sombra.classList.add("sombra--animando");

  console.log("animar sombra");
};

const dejarDeAnimarSombra = () => {
  sombra.classList.remove("sombra--animando");

  eliminarAccionEnCurso("sombra-animando");
  sombra.classList.add("sombra--aterrizando");

  console.log("dejar de animar sombra");
};
