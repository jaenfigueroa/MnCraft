let temasFondo = 10;
let temaFondo = 3;

let temasPersonsaje = 3;
let temaPersonaje = 3;

const siguienteTemaFondo = () => {
  if (temaFondo > temasFondo) {
    temaFondo = 1;
  }

  body.className = `temaFondo${temaFondo}`;
  temaFondo++;
};

const anteriorTemaSteve = () => {
  if (temaPersonaje > temasPersonsaje) {
    temaPersonaje = 1;
  }

  steve.className = `temaPersonaje${temaPersonaje}`;
  temaPersonaje++;
};
