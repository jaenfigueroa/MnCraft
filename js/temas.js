const PAISAJES_TOTAL = 3;
let numeroPaisajeSeleccionado = 1;

const SKINS_TOTAL = 9;
let numeroSkinSeleccionado = 1;

const siguienteTemaFondo = () => {
  if (numeroPaisajeSeleccionado > PAISAJES_TOTAL) {
    numeroPaisajeSeleccionado = 1;
  }

  body.className = `temaFondo${numeroPaisajeSeleccionado}`;
  numeroPaisajeSeleccionado++;
};

const anteriorTemaSteve = () => {
  if (numeroSkinSeleccionado > SKINS_TOTAL) {
    numeroSkinSeleccionado = 1;
  }

  steve.className = `temaPersonaje${numeroSkinSeleccionado}`;
  numeroSkinSeleccionado++;
};

// seleccionar un tema y personaje de manera aleatoria al cargar la página
window.onload = () => {
  numeroPaisajeSeleccionado = Math.floor(Math.random() * PAISAJES_TOTAL) + 1;
  body.className = `temaFondo${numeroPaisajeSeleccionado}`;
  numeroPaisajeSeleccionado++;

  numeroSkinSeleccionado = Math.floor(Math.random() * SKINS_TOTAL) + 1;
  steve.className = `temaPersonaje${numeroSkinSeleccionado}`;
  numeroSkinSeleccionado++;
};
