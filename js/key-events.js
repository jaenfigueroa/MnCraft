// Al presionar una tecla
window.addEventListener("keydown", (e) => {
  switch (e.code) {
    // movimientos en el plano
    case "KeyW":
      moverBrazos();
      moverPiernas();
      girar("NORTE");
      avanzar("NORTE");
      break;
    case "KeyA":
      moverBrazos();
      moverPiernas();
      girar("OESTE");
      avanzar("OESTE");
      break;
    case "KeyS":
      moverBrazos();
      moverPiernas();
      girar("SUR");
      avanzar("SUR");
      break;
    case "KeyD":
      moverBrazos();
      moverPiernas();
      girar("ESTE");
      avanzar("ESTE");
      break;
    // gestos
    case "ShiftLeft":
      agacharse();
      break;
    case "KeyG":
      iniciarDap();
      break;
    case "Space":
      moverBrazos();
      moverPiernas();
      saltar();
      animarSombra();
      break;
    // cambios de tema
    case "KeyL":
      siguienteTemaFondo();
      break;
    case "KeyK":
      anteriorTemaSteve();
      break;
  }
});

// Al soltar una tecla
window.addEventListener("keyup", (e) => {
  switch (e.code) {
    case "KeyW":
    case "KeyA":
    case "KeyS":
    case "KeyD":
      dejarMoverBrazos();
      dejarMoverPiernas();
      // detenerAvance();
      break;
    case "ShiftLeft":
      dejarDeAgacharse();
      break;
    case "KeyG":
      detenerDap();
      break;
    case "Space":
      dejarDeSaltar();
      dejarDeAnimarSombra();
      dejarMoverBrazos();
      dejarMoverPiernas();
      break;
  }
});
