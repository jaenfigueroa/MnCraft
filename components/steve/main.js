//CAMBIAR LA PERSPECTIVA DEL PERSONAJE///////////////////////////////////
const contenedorSteve = document.getElementById('contenedor-steve')
const steve = document.getElementById('steve')

// ///cuando se hace click ----------------------
// window.addEventListener('mousedown', () => {
//   window.addEventListener('mousemove', girar)
// })

// ///cuando se deja de hacer click -------------
// window.addEventListener('mouseup', () => {
//   removeEventListener('mousemove', girar)
// })

// //--------------------------------------------
// function girar(evento) {
//   //obtener la coordenadas del eje X y Y de la flecha de mouse
//   let X = evento.clientX
//   let Y = evento.clientY

//   //asignar esos valores y hacer que rote
//   contenedorSteve.style.transform = `rotateX(-${Y}deg) rotateY(${X}deg)`
// }


///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
//MODO AGACHADO////////////////////////////////////////////////////////////
const cabeza = document.getElementById('cabeza')
const tronco = document.getElementById('tronco')
const brazoIzquierdo = document.getElementById('brazo-izquierdo')
const brazoDerecho = document.getElementById('brazo-derecho')
const piernaIzquierda = document.getElementById('pierna-izquierda')
const piernaDerecha = document.getElementById('pierna-derecha')

const todos = [cabeza, tronco, brazoIzquierdo, brazoDerecho, piernaIzquierda, piernaDerecha]

const sombra = document.getElementById('sombra')

/* AGACHARSE///////////////////////////////////////////////////////////// */
window.addEventListener('keydown', (evento) => {
  if (evento.code == 'ShiftLeft') {
    cabeza.classList.toggle('cabeza--agachado')
    tronco.classList.toggle('tronco--agachado')
    brazoIzquierdo.classList.toggle('brazo-izquierdo--agachado')
    brazoDerecho.classList.toggle('brazo-derecho--agachado')
  }
})

/* VOLTEAR Y CAMINAR/PARAR ///////////////////////////////////////////////*/
let rotacionY = 0
let rotacionX = 0

window.addEventListener('keydown', (evento) => {

  if (evento.code == 'KeyS') {
    rotacionY = 0
    contenedorSteve.style.transform = `rotateX(${rotacionX}deg) rotateY(${rotacionY}deg)`

  }

  else if (evento.code == 'KeyD') {
    rotacionY = 90
    contenedorSteve.style.transform = `rotateX(${rotacionX}deg) rotateY(${rotacionY}deg)`
  }

  else if (evento.code == 'KeyW') {
    rotacionY = 180
    contenedorSteve.style.transform = `rotateX(${rotacionX}deg) rotateY(${rotacionY}deg)`

  }

  else if (evento.code == 'KeyA') {
    rotacionY = 270
    contenedorSteve.style.transform = `rotateX(${rotacionX}deg) rotateY(${rotacionY}deg)`

  }

  caminar()
})

window.addEventListener('keyup', (evento) => {
  if (evento.code == 'KeyW' || evento.code == 'KeyS' || evento.code == 'KeyA' || evento.code == 'KeyD') {
    parar()
  }

})

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

/* PARAR/CAMINAR */
function parar() {
  todos.forEach(element => {
    element.classList.add('quieto')
  });
}

function caminar() {
  todos.forEach(element => {
    element.classList.remove('quieto')
  });
}

//SALTAR////////////////////////////////////////////////////////////////////////
window.addEventListener('keydown', (evento) => {
  if (evento.code == 'Space') {
    steve.style.transform = `translateY(-120px) `
    sombra.style.width = '100px'
    sombra.style.height = '100px'

    setTimeout(() => {
      steve.style.transform = `translateY(0px) `
      sombra.style.width = '140px'
      sombra.style.height = '140px'
    }, 400);

    setTimeout(() => {
      parar()
    }, 400);
  }
})


parar()

//////////////////////////////////////////////

const main = document.getElementById('main')

let ubicacionX = 0
let ubicacionZ = 0
const distancia = 25

window.addEventListener('keydown', obtenerCoordenadas)

function obtenerCoordenadas(evento) {

  if (evento.code == 'KeyW') {
    ubicacionZ -= distancia
  } else if (evento.code == 'KeyS') {
    ubicacionZ += distancia
  } else if (evento.code == 'KeyA') {
    ubicacionX -= distancia
  } else if (evento.code == 'KeyD') {
    ubicacionX += distancia
  }

  movermeEnElPlano()
}

function movermeEnElPlano() {
  main.style.transform =
    `rotateX(-25deg)
     rotateY(-35deg)
     translateX(${ubicacionX}px)
     translateZ(${ubicacionZ}px) 
    `
}