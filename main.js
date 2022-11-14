//CAMBIAR LA PERSPECTIVA DEL PERSONAJE/////////////////////////
const basePrincipal = document.getElementById('base')

///cuando se hace click ////////////////////////
window.addEventListener('mousedown', () => {
  window.addEventListener('mousemove', girar)
})

///cuando se deja de hacer click ///////////////
window.addEventListener('mouseup', () => {
  removeEventListener('mousemove', girar)
})

//--------------------------------------------
function girar(evento) {

  //obtener la coordenadas del eje X y Y de la flecha de mouse
  let X = evento.clientX
  let Y = evento.clientY

  //asignar esos valores y hacer que rote
  basePrincipal.style.transform = `rotateX(-${Y}deg) rotateY(${X}deg)`
}


//MODO AGACHADO////////////////////////////////////////////////
window.addEventListener('dblclick', agachar)

let cabeza = document.getElementById('cabeza')
let tronco = document.getElementById('tronco')
let brazoIzquierdo = document.getElementById('brazo-izquierdo')
let brazoDerecho = document.getElementById('brazo-derecho')
let piernaIzquierda = document.getElementById('pierna-izquierda')
let piernaDerecha = document.getElementById('pierna-derecha')

function agachar() {
  cabeza.classList.toggle('cabeza--agachado')
  tronco.classList.toggle('tronco--agachado')
  brazoIzquierdo.classList.toggle('brazo-izquierdo--agachado')
  brazoDerecho.classList.toggle('brazo-derecho--agachado')
  piernaIzquierda.classList.toggle('pierna-izquierda--agachado')
  piernaDerecha.classList.toggle('pierna-derecha--agachado')
}
