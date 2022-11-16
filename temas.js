let temasFondo = 5
let temaFondo = 1

let temasPersonsaje = 2
let temaPersonaje = 1

const body = document.getElementById('body')
const personaje = document.getElementById('contenedor-steve')

window.addEventListener('keypress', (evento) => {
  if (evento.code == 'KeyK') {

    if (temaFondo > temasFondo) {
      temaFondo = 1
    }

    body.className = `fondoTema${temaFondo}`
    temaFondo++

  } else if (evento.code == 'KeyL') {

    if (temaPersonaje > temasPersonsaje) {
      temaPersonaje = 1
    }

    personaje.className = `personajeTema${temaPersonaje}`
    temaPersonaje++

  }
})