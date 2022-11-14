const containerPadre = document.querySelector("div.containerPadre");

const carrito = []

const retornoVino= (producto) => {
  return `<div class="card">
                <div class="card-image">${producto.image} <img src="./img/PREMIUM-MALBEC.png" alt="" class="vino1" /></div>
                <div class="card-name">${producto.nombre}</div>
                <div class="card-price">${producto.precio}</div>
                <div class="card-button">
                    <button class="button button-outline button-add" id=${producto.nombre} title="Pulsa para agregar al carrito">+</button>
                </div>
                </div>`
}


const activarBotonAdd = () => {
  const botonesAdd = document.querySelectorAll(".button.button-outline.button-add");

  botonesAdd.forEach(btn => {
    btn.addEventListener("click", () => {
      agregarAlCarrito(btn.id);
    })
  })

}
 
const cargarMisProductos = ()=> {

     containerPadre.innerHTML = ""
    productos.forEach(producto => {
        containerPadre.innerHTML += retornoVino(producto)
    })
    activarBotonAdd()
}

cargarMisProductos()


const agregarAlCarrito = (vino) => {
  let resultado = productos.find(prod => prod.nombre  === vino)
    if(resultado !== undefined){
        carrito.push(resultado)
        console.clear()
        console.table(carrito)
    }

    localStorage.setItem (retornoVino, cargarMisProductos);
}

