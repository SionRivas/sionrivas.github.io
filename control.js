var pos = document.documentElement

function parte1Light() {
  var pos = document.documentElement
  pos.addEventListener("mousemove", e => {

    pos.style.setProperty('--xlight', e.clientX + 'px')
    pos.style.setProperty('--ylight', e.clientY + 'px')
  })

  let button = document.getElementById("buttonCard1")
  button.addEventListener("click", () => {
    flare()
  })
}




function flare() {
  let flare = document.createElement("div")
  flare.id = "miDiv"
  let contenedor = document.getElementById("contenedor")
  contenedor.appendChild(flare)
  setTimeout(() => document.getElementById('miDiv').style.opacity = '1', 100)
  setTimeout(() => {
    document.getElementById('miDiv').style.opacity = '0'
    document.getElementById("carta1").style.display = "none"
    document.getElementById("carta2").style.display = "flex"

    document.getElementById("contenedor").style.background = 'white'
    document.getElementById("light").style.display = "none"



    pasarCard(0, intervalos[0])


  }, 4000)

  setTimeout(() => {
    document.getElementById("contenedor").removeChild(
      document.getElementById('miDiv'))
  }, 8000)


}

let intervalos = [
  6000,
  5000,
  4000,
  4000,
  45000,
  4000,
  4000,
  4000,
]



function pasar2() {
  document.getElementById("carta1").style.display = "none"
  document.getElementById("carta2").style.display = "flex"

  document.getElementById("contenedor").style.background = 'white'
  document.getElementById("light").style.display = "none"

  pasarCard(0, intervalos[0])
}

function pasarCard(index, intervalo) {


  setTimeout(() => {
    document.getElementById(`carta${index + 2}`).style.opacity = '0'
    setTimeout(() => {

      document.getElementById(`carta${index + 2}`).style.display = "none"
      document.getElementById(`carta${index + 3}`).style.display = "flex"
      document.getElementById(`carta${index + 3}`).style.opacity = '0'
      setTimeout(() => {
        document.getElementById(`carta${index + 3}`).style.opacity = '1'

        if (index < 5) {

          pasarCard(index + 1, intervalos[index + 1])
        }

      }, 100);
    }, 1000);


  }, intervalo)
}

parte1Light()

function comprobar() {

  let text = document.getElementById("password")

  if (text.value == "12231") {
    pasarCard(6, intervalos[6])
  }

}


let arraypadre =
  [["t", 1],
  ["e", 2],
  ["a", 3],
  ["m", 4],
  ["o", 5],
  ["c", 6],
  ["o", 7],
  ["n", 8],
  ["t", 9],
  ["o", 10],
  ["d", 11],
  ["o", 12],
  ["m", 13],
  ["i", 14],
  ["c", 15],
  ["o", 16],
  ["r", 17],
  ["a", 18],
  ["z", 19],
  ["o", 20],
  ["n", 21],
  ["e", 22],
  ["s", 23],
  ["t", 24],
  ["o", 25],
  ["s", 26],
  ["h", 27],
  ["a", 28],
  ["n", 29],
  ["s", 30],
  ["i", 31],
  ["d", 32],
  ["o", 33],
  ["l", 34],
  ["o", 35],
  ["s", 36],
  ["a", 37],
  ["ñ", 38],
  ["o", 39],
  ["s", 40],
  ["m", 41],
  ["a", 42],
  ["s", 43],
  ["f", 44],
  ["e", 45],
  ["l", 46],
  ["i", 47],
  ["c", 48],
  ["e", 49],
  ["s", 50],
  ["d", 51],
  ["e", 52],
  ["m", 53],
  ["i", 54],
  ["v", 55],
  ["i", 56],
  ["d", 57],
  ["a", 58],
  ["t", 59],
  ["e", 60],
  ["a", 61],
  ["m", 62],
  ["o", 63],
  ["m", 64],
  ["i", 65],
  ["b", 66],
  ["e", 67],
  ["t", 68],
  ["z", 69],
  ["a", 70],
  ["i", 71],
  ["d", 72],
  ["a", 73]
  ]

console.table(arraypadre);


function desordenarArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Ejemplo de uso
const arrayDesordenado = desordenarArray(arraypadre);
console.table(arrayDesordenado);

let tablero = document.getElementById("tablero")

arrayDesordenado.forEach(element => {

  let texthtml = `<div>${element[0]}<br>${element[1]}</div>`
  tablero.innerHTML+=texthtml
});
