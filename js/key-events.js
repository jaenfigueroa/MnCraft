// Al presionar una tecla
window.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "KeyD":
      moverExtremidades();
      girar("ESTE");
      avanzar("ESTE");
      break;
    case "KeyA":
      moverExtremidades();
      girar("OESTE");
      avanzar("OESTE");
      break;
    case "KeyW":
      moverExtremidades();
      girar("NORTE");
      avanzar("NORTE");
      break;
    case "KeyS":
      moverExtremidades();
      girar("SUR");
      avanzar("SUR");
      break;
    case "ShiftLeft":
      agacharse();
      break;
    case "KeyG":
      iniciarDap();
      break;
    case "Space":
      moverExtremidades();
      saltar();
      animarSombra();

      setTimeout(() => {
        dejarMoverExtremidades();
      }, 800);
      break;
  }
});

// Al soltar una tecla
window.addEventListener("keyup", (e) => {
  switch (e.code) {
    case "KeyD":
    case "KeyA":
    case "KeyW":
    case "KeyS":
      dejarMoverExtremidades();
      break;
    case "ShiftLeft":
      dejarDeAgacharse();
      dejarMoverExtremidades();
      break;
    case "KeyG":
      detenerDap();
      dejarMoverExtremidades();
      break;
  }
});
