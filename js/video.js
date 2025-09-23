// Simula una pulsación de tecla
const pressKey = (key, delay = 100) => {
  const down = new KeyboardEvent("keydown", { key });
  const up = new KeyboardEvent("keyup", { key });
  document.dispatchEvent(down);
  setTimeout(() => document.dispatchEvent(up), delay);
};

// Flujo de acciones automatizado
const autoFlow = () => {
  // Camina adelante largo tiempo
  clickKeyW();
  setTimeout(() => clickKeyW(), 500);
  setTimeout(() => clickKeyW(), 1000);
  setTimeout(() => clickKeyW(), 1500);
  setTimeout(() => clickKeyW(), 2000);

  // Salta dos veces mientras avanza
  setTimeout(() => clickSpace(), 2200);
  setTimeout(() => clickSpace(), 2400);

  // Combo: agacharse + dap + salto
  setTimeout(() => {
    clickShiftLeft();
    setTimeout(clickKeyG, 120);
    setTimeout(clickSpace, 250);
  }, 2600);

  // Cambia skin y fondo, como celebración
  setTimeout(() => {
    clickKeyK();
    setTimeout(clickKeyL, 120);
  }, 3000);

  // Camina a la derecha, con gestos
  setTimeout(() => clickKeyD(), 3200);
  setTimeout(() => clickKeyD(), 3400);
  setTimeout(() => clickKeyG(), 3550); // dap
  setTimeout(() => clickKeyD(), 3700);
  setTimeout(() => clickKeyD(), 3900);

  // Salta, cambia skin y fondo varias veces
  setTimeout(() => clickSpace(), 4000);
  setTimeout(() => clickKeyK(), 4150);
  setTimeout(() => clickKeyL(), 4300);
  setTimeout(() => clickSpace(), 4400);

  // Super combo: agacharse + salto triple + dap
  setTimeout(() => {
    clickShiftLeft();
    setTimeout(clickSpace, 100);
    setTimeout(clickSpace, 200);
    setTimeout(clickSpace, 340);
    setTimeout(clickKeyG, 500);
  }, 4600);

  // Camina a la izquierda haciendo gestos
  setTimeout(() => clickKeyA(), 5200);
  setTimeout(() => clickKeyA(), 5400);
  setTimeout(() => clickKeyG(), 5550); // dap
  setTimeout(() => clickKeyA(), 5700);

  // Cambia skin y fondo en combo
  setTimeout(() => {
    clickKeyK();
    setTimeout(clickKeyL, 120);
  }, 6000);

  // Camina atrás y salta como escape
  setTimeout(() => clickKeyS(), 6300);
  setTimeout(() => clickKeyS(), 6500);
  setTimeout(() => clickSpace(), 6600);

  // Finaliza con combo de gestos y cambios
  setTimeout(() => {
    clickKeyG(); // dap
    setTimeout(clickKeyK, 100); // skin
    setTimeout(clickKeyL, 200); // fondo
    setTimeout(clickSpace, 300); // salto final
  }, 6800);
};

// Ejecutar el flujo
// autoFlow();
