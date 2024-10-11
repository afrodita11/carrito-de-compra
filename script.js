// OBJETO PRODUCTO
let Producto = function(nombre, precio) {
    this.nombre = nombre; // asignación de nombre
    this.precio = precio; // asignación de precio
};

let productos = [
    new Producto('Leche', 1000),
    new Producto('Pan de Molde', 2000),
    new Producto('Queso', 1200),
    new Producto('Mermelada', 890),
    new Producto('Azúcar', 1300),
];

let carrito = [];

// FUNCIÓN AGREGAR PRODUCTOS
function agregarProductos(indice, cantidad) {
    if (indice >= 0 && indice < productos.length) {
        let productoEnCarrito = carrito.find(item => item.nombre === productos[indice].nombre);
        
        if (productoEnCarrito) {
            productoEnCarrito.cantidad += cantidad;
        } else {
            carrito.push({ ...productos[indice], cantidad: cantidad });
        }

        // Agregar el alert que notifique lo que se ha agregado sin el precio unitario
        alert(`Has agregado ${cantidad} unidad(es) de ${productos[indice].nombre} al carrito.`);
    } else {
        alert('Opción inválida.'); // Mensaje de opción inválida
    }
}

// FUNCIÓN PARA CALCULAR EL TOTAL
function calcularTotal() {
    let total = 0;
    for (let item of carrito) {
        total += item.precio * item.cantidad; // Sumar el precio multiplicado por la cantidad
    }
    return total;
}

// FUNCIÓN PARA PREGUNTAR SI QUIERE SEGUIR
function preguntarContinuar() {
    let continuar = prompt('¿Deseas seguir agregando productos? (si/no)');
    return continuar.toLowerCase() === 'si';
}

// MENÚ DE SELECCIÓN
do {
    let menu = prompt('Productos disponibles: \n1.- Leche $1000 \n2.- Pan de Molde $2000\n3.- Queso $1200 \n4.- Mermelada $890 \n5.- Azúcar $1300\n\nSeleccione el producto (1-5) o escriba "salir" para finalizar:');

    if (menu === "salir") break;

    let indice = parseInt(menu) - 1; // Convertir a índice (0-4)
    let cantidad = parseInt(prompt(`¿Cuántas unidades de ${productos[indice].nombre} deseas agregar?`)); // Pedir cantidad

    if (!isNaN(cantidad) && cantidad > 0) {
        agregarProductos(indice, cantidad);
    } else {
        alert('Cantidad inválida.'); // Mensaje de cantidad inválida
    }
} while (preguntarContinuar());

// MOSTRAR CARRITO Y TOTAL
if (carrito.length > 0) {
    let mensajeCarrito = 'Productos en el carrito:\n';
    for (let i = 0; i < carrito.length; i++) {
        mensajeCarrito += `${carrito[i].nombre} - $${carrito[i].precio} x ${carrito[i].cantidad}\n`;
    }
    let totalCompra = calcularTotal(); // Calcular el total
    mensajeCarrito += `\nTotal de la compra: $${totalCompra}`;
    alert(mensajeCarrito);
} else {
    alert('El carrito está vacío.');
}





