import imagen from './componentes/img/foto 1.jpeg'
import imagen2 from './componentes/img/foto 2.jpeg'
import imagen3 from './componentes/img/foto 3.jpeg'
import imagen4 from './componentes/img/foto 4.jpeg'


const productos = [
    { nombre: "picada1", precio: 500, id: "1", img: imagen, idCat: "2" },
    { nombre: "picada2", precio: 180, id: "2", img: imagen2, idCat: "2" },
    { nombre: "picada3", precio: 200, id: "3", img: imagen3, idCat: "3" },
    { nombre: "picada4", precio: 400, id: "4", img: imagen4, idCat: "3" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
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

