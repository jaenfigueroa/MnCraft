const GRADOS = {
  ESTE: 90,
  OESTE: 270,
  NORTE: 180,
  SUR: 0,
};

const girar = (direccion) => {
  steveContenedor.style.transform = `rotateX(0deg) rotateY(${GRADOS[direccion]}deg)`;
};
