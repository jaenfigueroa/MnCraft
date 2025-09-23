// Al presionar una tecla
window.addEventListener("keydown", (e) => {
  switch (e.code) {
    // movimientos en el plano
    case "KeyW":
      clickKeyW();
      break;
    case "KeyA":
      clickKeyA();
      break;
    case "KeyS":
      clickKeyS();
      break;
    case "KeyD":
      clickKeyD();
      break;
    // gestos
    case "ShiftLeft":
      clickShiftLeft();
      break;
    case "KeyG":
      clickKeyG();
      break;
    case "Space":
      clickSpace();
      break;
    // cambios de tema
    case "KeyL":
      clickKeyL();
      break;
    case "KeyK":
      clickKeyK();
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
      unclickWASD();
      break;
    case "ShiftLeft":
      unclickShiftLeft();
      break;
    case "KeyG":
      unclickG();
      break;
    case "Space":
      unclickSpace();
      break;
  }
});
