//PROYECTO DOS 

const productos = [
    {nombre:"donaRosa",precio:450},
    {nombre:"donaNaranja",precio:350},
    {nombre:"donaOreo",precio:400},
    {nombre:"donaChocolate",precio:380},
    {nombre:"donaColores",precio:350},

];

let carrito = [];


let pedido = prompt ("Bienvenidos a la Tienda Homero,desea comprar algo si o no")

while (pedido != "si" && pedido != "no"){
    alert ("porfavor ingresar por si o por no")
    pedido = prompt ("Bienvenidos a la Tienda Homero,desea comprar algo si o no")
}

if (pedido === "si"){
    alert ("te vamos a mostrar nuestra lista de productos")
    let catalogo = productos.map ((producto) => producto.nombre + " " + producto.precio + "$" );
    alert (catalogo.join (" - "))

} else if (pedido === "no"){
    alert ("gracias por visitarnos,hasta pronto")
}

while (pedido != "no") {
    let producto = prompt("Agrega un producto a tu carrito")
    var precio = 0;
    if ( producto == "donaRosa" || producto == "donaNaranja" || producto == "donaOreo" || producto == "donaChocolate" 
    || producto == "donaColores"){
        switch(producto){
            case "donaRosa":
            precio = 450
            break;
            case "donaNaranja":
            precio= 350
            break;
            case "donaOreo":
           precio =  400
            break;
            case "donaChocolate":
             precio = 380
            break;
            case "donaColores":
            precio= 350
             break;
             default: 
             break;
        }
       let unidades = parseInt(prompt("que unidades queres?"))
       carrito.push({producto,unidades,precio})
       console.log(carrito)
    }else {( alert("no tenemos ese"))}

    pedido = prompt ("queres otro ?")
    while (pedido === "no"){
        alert("gracias por la compra")
        carrito.forEach((carritoFinal) =>{
            console.log (`producto: ${carritoFinal.producto},unidades: ${carrito.unidades},total a pagar:${carritoFinal.unidades * carritoFinal.precio}`)
        }) 
        break;
    }
}

    
