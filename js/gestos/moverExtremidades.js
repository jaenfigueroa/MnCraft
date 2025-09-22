const moverExtremidades = () => {
  todos.forEach((element) => {
    element.classList.add("moverse");
  });
};

const dejarMoverExtremidades = () => {
  todos.forEach((element) => {
    element.classList.remove("moverse");
  });
};
