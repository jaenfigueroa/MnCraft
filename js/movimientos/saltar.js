const saltar = () => {
  steve.style.transform = `translateY(-${ALTURA_SALTO}px) `;

  setTimeout(() => {
    steve.style.transform = `translateY(0px) `;
  }, 400);
};
