let temasFondo = 11
let temaFondo = 3

let temasPersonsaje = 3
let temaPersonaje = 3

const body = document.getElementById('body')
const personaje = document.getElementById('contenedor-steve')

window.addEventListener('keypress', (evento) => {
  if (evento.code == 'KeyL') {

    if (temaFondo > temasFondo) {
      temaFondo = 1
    }

    body.className = `fondoTema${temaFondo}`
    temaFondo++

  } else if (evento.code == 'KeyK') {

    if (temaPersonaje > temasPersonsaje) {
      temaPersonaje = 1
    }

    personaje.className = `personajeTema${temaPersonaje}`
    temaPersonaje++

  }
})