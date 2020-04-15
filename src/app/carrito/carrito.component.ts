import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'app-carrito',
	templateUrl: './carrito.component.html',
	styleUrls: ['./carrito.component.css']
})

export class CarritoComponent implements OnInit {
	@ViewChild('correo', {static: false}) correoElement: ElementRef;

	//determina si el usuario está logueado o no
	usuarioLogueado:boolean;

	//correos válidos que permite el ingreso
	correos_validos = [
		'diego.bustos@kibernum.com',
		'diego.bustos@gmail.com',
		'diego@email.com',
		'sergio.sepulveda@dev-solutions.cl'
	];

	//aquí se guadará el correo una vez que ingrese
	correo:string;

	//se define lista de productos disponibles para comprar
	productos = [
		{id:1, nombre: 'Tablet Guahuei', valor: 35000, disponible: true, img: 'assets/productos/tablet.jpg'},
		{id:2, nombre: 'Smartphone Chiaomi', valor: 75000, disponible: true, img: 'assets/productos/smartphone.jpg'},
		{id:3, nombre: 'Led Sansun', valor: 250000, disponible: true, img: 'assets/productos/led.jpg'},
		{id:4, nombre: 'Audifonos Zony', valor: 12500, disponible: true, img: 'assets/productos/audifonos.jpg'},
		{id:5, nombre: 'Notebook I-mak Pear', valor: 450000, disponible: true, img: 'assets/productos/notebook.jpg'}
	];

	//arreglo donde irán las compras
	compras = [];

	producto = [];
	indice:number;
	mensaje_error:string;
	total:number;

	constructor(){ }
	ngOnInit(): void {}

	//login
	login(){
		if(this.correos_validos.indexOf(this.correoElement.nativeElement.value) !== -1){
			this.usuarioLogueado = true;
			this.correo = this.correoElement.nativeElement.value;
		}
		else{
			this.usuarioLogueado = false;
			this.correo = '';
			this.mensaje_error = "El correo ingresado no es válido.";
		}
	}

	//obtiene el correo del usuario que está logueado
	getCorreoLogueado(){
		return this.correo;
	}

	//método para agregar los productos
	agregarProducto(id:number){
		this.indice = id-1;
		this.compras.push({
			id: this.productos[this.indice].id,
			nombre: this.productos[this.indice].nombre,
			valor: this.productos[this.indice].valor
		});
		this.total += this.productos[this.indice].valor;
		console.log(this.total);
		this.productos[this.indice].disponible = false;
	}

	eliminarProducto(compras_id:number)
	{    
		//obtiene el indice del array de las compras
		var indiceCompras = this.compras.findIndex((element)=> {
			return (element.id == compras_id);
		});

		//obtiene el indice del array de los productos
		var indiceProductos = this.productos.findIndex((element)=> {
			return (element.id == compras_id);
		});

		//elimina del array de compras el elemento por el índice
		this.compras.splice(indiceCompras, 1);

		//define en el array de productos que el elemento está disponbile (le cambia el estado)
		this.productos[indiceProductos].disponible = true;
	}

	//método para salir del carrito de compras
	logout(){
		this.usuarioLogueado = false;
		this.correoElement.nativeElement.value = "";
		this.compras = [];

		//recorre los productos y los deja todos disponibles
		for( var p in this.productos){
			this.productos[p]['disponible'] = true;
		}
		this.mensaje_error = "";
	}

	//método para mostrar un mensaje de error en el login
	getMensajeError(){
		return this.mensaje_error;
	}
}