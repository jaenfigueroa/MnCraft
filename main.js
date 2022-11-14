const basePrincipal = document.getElementById('base')

///cuando se hace click ////////////////////////
window.addEventListener('mousedown', () => {
  window.addEventListener('mousemove', girar)
})

///cuando se deja de hacer click ///////////////
window.addEventListener('mouseup', () => {
  removeEventListener('mousemove', girar)
})


/////////////////////////////////////////////////
function girar(evento) {

  //obtener la coordenadas del eje X y Y de la flecha de mouse
  let X = evento.clientX
  let Y = evento.clientY

  //asignar esos valores y hacer que rote
  basePrincipal.style.transform = `rotateX(-${Y}deg) rotateY(${X}deg)`
}


