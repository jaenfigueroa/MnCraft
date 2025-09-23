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
  main.style.transform = `rotateX(-10deg) rotateY(-30deg)
     translateX(${ubicacionX}px)
     translateZ(${ubicacionZ}px) 
    `;
};
