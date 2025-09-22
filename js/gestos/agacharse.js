const agacharse = (e) => {
  cabeza.classList.add("cabeza--agachado");
  tronco.classList.add("tronco--agachado");
  brazoIzquierdo.classList.add("brazo-izquierdo--agachado");
  brazoDerecho.classList.add("brazo-derecho--agachado");
};

const dejarDeAgacharse = (e) => {
  cabeza.classList.remove("cabeza--agachado");
  tronco.classList.remove("tronco--agachado");
  brazoIzquierdo.classList.remove("brazo-izquierdo--agachado");
  brazoDerecho.classList.remove("brazo-derecho--agachado");
};
