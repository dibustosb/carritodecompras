
export class ProductosService{
    getProductos(){
        return[
            {id:1, nombre: 'Tablet Guahuei', valor: 35000, disponible: true, img: 'assets/productos/tablet.jpg'},
            {id:2, nombre: 'Smartphone Chiaomi', valor: 75000, disponible: true, img: 'assets/productos/smartphone.jpg'},
            {id:3, nombre: 'Led Sansun', valor: 250000, disponible: true, img: 'assets/productos/led.jpg'},
            {id:4, nombre: 'Audifonos Zony', valor: 12500, disponible: true, img: 'assets/productos/audifonos.jpg'},
            {id:5, nombre: 'Notebook I-mak Pear', valor: 450000, disponible: true, img: 'assets/productos/notebook.jpg'}
        ]
    }
}