let paisajesTotal = 3;
let numeroPaisajeSeleccionado = 3;

let skinsTotal = 10;
let numeroSkinSeleccionado = 10;

const siguienteTemaFondo = () => {
  if (numeroPaisajeSeleccionado > paisajesTotal) {
    numeroPaisajeSeleccionado = 1;
  }

  body.className = `temaFondo${numeroPaisajeSeleccionado}`;
  numeroPaisajeSeleccionado++;
};

const anteriorTemaSteve = () => {
  if (numeroSkinSeleccionado > skinsTotal) {
    numeroSkinSeleccionado = 1;
  }

  steve.className = `temaPersonaje${numeroSkinSeleccionado}`;
  numeroSkinSeleccionado++;
};
