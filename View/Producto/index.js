


document.addEventListener('DOMContentLoaded', async ()=>{

	
	const parametroURL = new URLSearchParams(window.location.search)
	
	const idProducto = parseInt(parametroURL.get('id'))
	console.log(idProducto)
	const producto = await obtenerProducto(idProducto)

	console.log(idProducto)
		construirProducto(producto)


});






const obtenerProducto = async idProducto =>{
	console.log(idProducto)
	try{
		const resultado = await fetch(`http://localhost:4000/api/Productos/${idProducto}`)
		const producto = await resultado.json();
		console.log(producto)
		return producto; 
	}catch(error){
		console.log(error);
	}
}



async function construirProducto(producto) {
	const mostrarProducto = document.querySelector('#main');
	
	const  { Titulo, Precio,Imagen,Id,Marca} = await producto;
	
	 mostrarProducto.innerHTML +=`
	<div class="container-img">
	<img
		src="${Imagen}"
		alt="imagen-producto"
	/>
</div>
<div class="container-info-product">
	<div class="container-price">
		<h1>${Marca} - ${Titulo}</h1>
		
	</div>

	<div class="container-details-product">
		<div class="form-group">
			<label for="size">Talla</label>
			<select name="size" id="size">
				<option disabled selected value="">
					Escoge una opción
				</option>
				<option value="40">40</option>
				<option value="42">42</option>
				<option value="43">43</option>
				<option value="44">44</option>
			</select>
		</div>
	</div>

	<div class="container-add-cart">
		<div class="TEXT-CANTIDAD">
			<p>Cantidad</p>
		</div>
		<div class="container-quantity">
			
			<input
				type="number"
				placeholder="1"
				value="1"
				min="1"
				class="input-quantity"
			/>
			<div class="btn-increment-decrement">
				<i class="fa-solid fa-chevron-up" id="increment"></i>
				<i class="fa-solid fa-chevron-down" id="decrement"></i>
			</div>
		
		
		</div>
		<div class="precioT">
		<span>$${Precio}</span>
		</div>
	
	</div>
	<div class="Añadir">
		<button class="btn-add-to-cart" id="aggCarrito">
			<i class="fa-solid fa-plus"></i>
			Añadir al carrito
		</button>
		<button class="btn-add-to-cart" id="aggFavorito" data-id=${Id}>
			<i class="fa-solid fa-plus"></i>
			Añadir a Favoritos
		</button>
		
	</div>

	<div class="container-description">
		<div class="title-description">
			<h4>Descripción</h4>
			<i class="fa-solid fa-chevron-down"></i>
		</div>
		<div class="text-description">
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing
				elit. Laboriosam iure provident atque voluptatibus
				reiciendis quae rerum, maxime placeat enim cupiditate
				voluptatum, temporibus quis iusto. Enim eum qui delectus
				deleniti similique? Lorem, ipsum dolor sit amet
				consectetur adipisicing elit. Sint autem magni earum est
				dolorem saepe perferendis repellat ipsam laudantium cum
				assumenda quidem quam, vero similique? Iusto officiis
				quod blanditiis iste?
			</p>
		</div>
	</div>

	<div class="container-additional-information">
		<div class="title-additional-information">
			<h4>Información adicional</h4>
			<i class="fa-solid fa-chevron-down"></i>
		</div>
		<div class="text-additional-information hidden">
			<p>-----------</p>
		</div>
	</div>


	<div class="container-social">
		<span>Compartir</span>
		<div class="container-buttons-social">
			<a href="#"><i class="fa-solid fa-envelope"></i></a>
			<a href="#"><i class="fa-brands fa-facebook"></i></a>
			<a href="#"><i class="fa-brands fa-twitter"></i></a>
			<a href="#"><i class="fa-brands fa-instagram"></i></a>
			<a href="#"><i class="fa-brands fa-pinterest"></i></a>
		</div>
	</div>
	
	`




	
	
console.log("hola")
activar()
agregarCarrito(producto)
enviarfavoritos(producto)
};




function activar(){


	// Funciones Click

	const inputQuantity = document.querySelector('.input-quantity');
	const btnIncrement = document.querySelector('#increment');
	const btnDecrement = document.querySelector('#decrement');

	
	let valueByDefault = parseInt(inputQuantity.value);

		
	// Funciones Click
	
	btnIncrement.addEventListener('click', () => {
		valueByDefault += 1;
		inputQuantity.value = valueByDefault;


		
		
		
	});
	
	btnDecrement.addEventListener('click', () => {
		if (valueByDefault === 1) {
			return;
		}
		valueByDefault -= 1;
		inputQuantity.value = valueByDefault;

	});
	
	// Toggle
	// Constantes Toggle Titles
	const toggleDescription = document.querySelector(
		'.title-description'
	);
	const toggleAdditionalInformation = document.querySelector(
		'.title-additional-information'
	);

	
	// Constantes Contenido Texto
	const contentDescription = document.querySelector(
		'.text-description'
	);
	const contentAdditionalInformation = document.querySelector(
		'.text-additional-information'
	);
	
	// Funciones Toggle
	toggleDescription.addEventListener('click', () => {
		contentDescription.classList.toggle('hidden');
	});
	
	toggleAdditionalInformation.addEventListener('click', () => {
		contentAdditionalInformation.classList.toggle('hidden');
	});

	
	

}




function agregarCarrito(producto){
	

	  
	const agregarINfors=document.querySelector('#aggCarrito')

	agregarINfors.addEventListener('click',()=>{

	const inputQuantity = document.querySelector('.input-quantity').value
	const inputSize = document.querySelector('#size').value
	const{Categoria,Genero,Id,Imagen,Marca,Precio,Tipo,Titulo }=producto

	const infoCompra={
	Categoria,
	Genero,
	Id,
	Imagen,
	Marca,
	Precio,
	Tipo,
	Titulo,
	Cantidad:inputQuantity,
	Talla:inputSize
	
    }



	console.log(infoCompra)
	extraerdatos(infoCompra)


	})


};


function enviarfavoritos(producto){
	const{Categoria,Genero,Id,Imagen,Marca,Precio,Tipo,Titulo }=producto
	const BtnFavoritos = document.querySelector('#aggFavorito');
	const User = JSON.parse(localStorage.getItem('user'));
    BtnFavoritos.addEventListener('click',async(e)=>{
		

	

	console.log(User)

	if(User){
		datosfavoritos={

			user:User.email,
			Id,
			Marca,
			Precio,
			Titulo,
			Imagen
		}
		const response = await fetch('http://localhost:4000/api/Productos/agregar-favorito', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify(datosfavoritos)
		  });
	
		  console.log(response) 
	

	}else{
		window.location.href ='/Login'
	}





})






}





