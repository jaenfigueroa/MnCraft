const avanzar = (direccion) => {
  calcularNuevaUbicacionEnElPlano(direccion);
  moverANuevaUbicacionEnElPlano();
};

const calcularNuevaUbicacionEnElPlano = (direccion) => {
  switch (direccion) {
    case "ESTE":
      ubicacionX += DISTANCIA_AVANCE;
      break;
    case "OESTE":
      ubicacionX -= DISTANCIA_AVANCE;
      break;
    case "NORTE":
      ubicacionZ -= DISTANCIA_AVANCE;
      break;
    case "SUR":
      ubicacionZ += DISTANCIA_AVANCE;
      break;
  }
};

const moverANuevaUbicacionEnElPlano = () => {
  steveEjeMovimiento.style.transform = `
     translateX(${ubicacionX}px)
     translateZ(${ubicacionZ}px) 
    `;
};
