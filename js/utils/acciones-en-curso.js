let accionesEnCurso = [];

const validarAccionEnCurso = (accion) => {
  return accionesEnCurso.includes(accion);
};

const agregarAccionEnCurso = (accion) => {
  if (!validarAccionEnCurso(accion)) {
    accionesEnCurso.push(accion);
  }
};

const eliminarAccionEnCurso = (accion) => {
  if (validarAccionEnCurso(accion)) {
    const index = accionesEnCurso.indexOf(accion);
    if (index > -1) {
      accionesEnCurso.splice(index, 1);
    }
  }
};
