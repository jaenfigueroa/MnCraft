const agacharse = (e) => {
  if (validarAccionEnCurso("agacharse")) return;
  agregarAccionEnCurso("agacharse");

  cabeza.classList.add("cabeza--agachado");
  tronco.classList.add("tronco--agachado");
  brazoIzquierdo.classList.add("brazo-izquierdo--agachado");
  brazoDerecho.classList.add("brazo-derecho--agachado");

  console.log("agacharse");
};

const dejarDeAgacharse = (e) => {
  cabeza.classList.remove("cabeza--agachado");
  tronco.classList.remove("tronco--agachado");
  brazoIzquierdo.classList.remove("brazo-izquierdo--agachado");
  brazoDerecho.classList.remove("brazo-derecho--agachado");

  eliminarAccionEnCurso("agacharse");

  console.log("dejar de agacharse");
};
