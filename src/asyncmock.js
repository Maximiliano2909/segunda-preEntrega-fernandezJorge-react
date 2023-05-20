const productos = [
    { nombre: "picada1", precio: 500, id: "1", img: "./img/foto1.jpeg", idCat: "2" },
    { nombre: "picada2", precio: 180, id: "2", img: "../img/foto2.jpg", idCat: "2" },
    { nombre: "picada3", precio: 200, id: "3", img: "../img/foto3.jpg", idCat: "3" },
    { nombre: "picada4", precio: 400, id: "4", img: "../img/foto4.jpg", idCat: "3" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 100)
    })
}

//Creamos una nueva función similar a la anterior pero que nos retorne un solo item:

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

//Creamos una nueva función que retorna toda la categoría. 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        }, 100)
    })
}
