const iniciarDap = (e) => {
  cabeza.classList.add("cabeza--epico");
  tronco.classList.add("tronco--epico");
  brazoIzquierdo.classList.add("brazo-izquierdo--epico");
  brazoDerecho.classList.add("brazo-derecho--epico");
  piernaIzquierda.classList.add("pierna-izquierda--epico");
  piernaDerecha.classList.add("pierna-derecha--epico");
};

const detenerDap = (e) => {
  cabeza.classList.remove("cabeza--epico");
  tronco.classList.remove("tronco--epico");
  brazoIzquierdo.classList.remove("brazo-izquierdo--epico");
  brazoDerecho.classList.remove("brazo-derecho--epico");
  piernaIzquierda.classList.remove("pierna-izquierda--epico");
  piernaDerecha.classList.remove("pierna-derecha--epico");
};
