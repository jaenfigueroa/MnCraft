const animarSombra = () => {
  sombra.style.width = "100px";
  sombra.style.height = "100px";

  setTimeout(() => {
    sombra.style.width = "140px";
    sombra.style.height = "140px";
  }, 400);
};
