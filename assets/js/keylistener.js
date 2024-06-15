const key = document.getElementById("key")
const key2 = document.getElementById("key2")

document.addEventListener('keydown',  function  (event)  {
    if  (event.key  ===  'a' || event.key  === 'A')  {
    key.style.backgroundColor = "pink"
    } else  if  (event.key  ===  's' ||event.key  === 'S' )  {
    key.style.backgroundColor = "orange"
    } else  if  (event.key  ===  'd' ||event.key  === 'D')  {
    key.style.backgroundColor = "skyblue"
    }
    })



document.addEventListener('keydown',  function  (event)  {
    if  (event.key  ===  'q' || event.key  === 'Q')  {
    agregarElemento("purple");
    } else  if  (event.key  ===  'w' || event.key  === 'W')  {
    agregarElemento("grey");
    }else  if  (event.key  ===  'e' || event.key  === 'E')  {
    agregarElemento("brown");
    }
})

function  agregarElemento(color)  {
    newkey = document.getElementById("key3");
    nuevoElemento  =  document.createElement("div");
    nuevoElemento.style.width = "200px"
    nuevoElemento.style.height = "200px"
    nuevoElemento.style.backgroundColor = color
    nuevoElemento.style.border = "3px solid black"
    newkey.appendChild(nuevoElemento);
    }
    