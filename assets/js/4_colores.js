const cuadro1 = document.querySelector("#cuadro1")
const cuadro2 = document.querySelector("#cuadro2")
const cuadro3 = document.querySelector("#cuadro3")
const cuadro4 = document.querySelector("#cuadro4")

function pintar(e, color) {
    e.target.style.backgroundColor = "black"
}
cuadro1.addEventListener("click", pintar)
cuadro2.addEventListener("click", pintar)
cuadro3.addEventListener("click", pintar)
cuadro4.addEventListener("click", pintar)



// ejercicio clase: boton llega al 10 y resetea a 0
// let numero = 0
// const btn1 = document.getElementById('btn1')
// btn1.addEventListener("click", ()=> {
//     if (numero < 10 ) {
//         numero = numero + 1 
//         console.log(numero)
//     } else if (numero == 10 ) {
//         numero = numero - 10
//         console.log(numero)
//     } else {
//         console.log("error inesperado xD")
//     }
// })
