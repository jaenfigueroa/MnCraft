// Al hacer click en una tecla
const clickKeyW = () => {
  moverBrazos();
  moverPiernas();
  girar("NORTE");
  avanzar("NORTE");
};

const clickKeyA = () => {
  moverBrazos();
  moverPiernas();
  girar("OESTE");
  avanzar("OESTE");
};

const clickKeyS = () => {
  moverBrazos();
  moverPiernas();
  girar("SUR");
  avanzar("SUR");
};

const clickKeyD = () => {
  moverBrazos();
  moverPiernas();
  girar("ESTE");
  avanzar("ESTE");
};

const clickShiftLeft = () => {
  agacharse();
};

const clickKeyG = () => {
  iniciarDap();
};

const clickSpace = () => {
  moverBrazos();
  moverPiernas();
  saltar();
  animarSombra();
};

const clickKeyL = () => {
  siguienteTemaFondo();
};

const clickKeyK = () => {
  anteriorTemaSteve();
};

// Al soltar una tecla
const unclickWASD = () => {
  dejarMoverBrazos();
  dejarMoverPiernas();
};
const unclickShiftLeft = () => {
  dejarDeAgacharse();
};

const unclickG = () => {
  detenerDap();
};

const unclickSpace = () => {
  dejarDeSaltar();
  dejarDeAnimarSombra();
  dejarMoverBrazos();
  dejarMoverPiernas();
};
