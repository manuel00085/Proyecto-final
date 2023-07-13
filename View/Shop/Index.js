mostrarArticulos()




function mostrarArticulos() {
  
    
  
    fetch('http://localhost:4000/api/Productos')
      .then(response => response.json())
      .then(data => {
        construirArticulos(data); // Llamar a la función con los datos
        extraerinfo(data)
      })
      .catch(error => {
        console.log(error); // Manejar el error en caso de que ocurra
      });
  

   
  
      
};
function construirArticulos(data) {
  limpiarHTML()
  const listado = document.querySelector('.pro-container');
  console.log(data)
  const  articulo = data;
  articulo.forEach(articulo => {
  const { Titulo, Precio,Imagen,Id,Marca} = articulo;
  const ConArt = document.createElement('div');
  ConArt.classList.add('pro');
  ConArt.dataset.id=Id
 

  ConArt.innerHTML +=`
  <img  src="${Imagen}">
  <div class="des">
      <span>${Marca}</span>
      <h5>${Titulo}</h5>
   
      <span>$<h4>${Precio}</h4></span>
     
  
  
  `

  listado.appendChild(ConArt);
 
  

  
})};

const mostrarProducto = document.querySelector('.pro-container');
mostrarProducto.addEventListener('click',descricionPro)

function descricionPro(e){
  console.log(e.target.parentElement.parentElement.dataset.id)
  if(e.target.parentElement.dataset.id){

    const productoId = (e.target.parentElement.dataset.id)
    console.log(productoId)
    window.location.href = `/Producto?id=${productoId}`;

  }
  if(e.target.parentElement.parentElement.dataset.id){
    const productoId = (e.target.parentElement.parentElement.dataset.id)
    console.log(productoId)
    window.location.href = `/Producto?id=${productoId}`;

  }
 
  

}









//hidden botones de los filtros

const botonMarca= document.querySelector(".btnmarcas");

botonMarca.addEventListener('click',(e)=>{
  e.preventDefault()
  botonMarca.parentElement.children[1].classList.toggle('hidden')

 
  
})



const botonPrecio= document.querySelector(".btnprecio");

botonPrecio.addEventListener('click',(e)=>{
  e.preventDefault()
  botonPrecio.parentElement.children[1].classList.toggle('hidden')
  
  
})

const botonGenero= document.querySelector(".btngenero");


botonGenero.addEventListener('click',(e)=>{
  e.preventDefault()
  botonGenero.parentElement.children[1].classList.toggle('hidden')
})

const botonDeportes= document.querySelector(".btndeportes");


botonDeportes.addEventListener('click',(e)=>{
  e.preventDefault()
  botonDeportes.parentElement.children[1].classList.toggle('hidden')
})

const botonAccesorios= document.querySelector(".btnaccesorios");


botonAccesorios.addEventListener('click',(e)=>{
  e.preventDefault()
  botonAccesorios.parentElement.children[1].classList.toggle('hidden')
})



const BusquedaObj={
  Marca:"",
  Precio:"",
  Genero:"",
  Deporte:"",
  Accesorios:""

}


function BtnFiltros() {
  const MostraFlitros = document.querySelector('#filtroAgg')
  console.log("hola")
  limpiarBusqueda()
  

  for (let filtro in BusquedaObj) {
    if(BusquedaObj[filtro]){
      const btnF = document.createElement('button')
      btnF.innerHTML = BusquedaObj[filtro]
      MostraFlitros.appendChild(btnF)
      
      deleteFiltro()

    }

 
    //console.log(`Filtro: ${filtro}, Valor: ${BusquedaObj[filtro]}`)
  }
  function deleteFiltro(){
    MostraFlitros.addEventListener('click',(e)=>{
      if(e.target.innerHTML==BusquedaObj.Marca){
        BusquedaObj.Marca=""
        limpiarBusqueda()
        filtrarAutos()
      }

      if(e.target.innerHTML==BusquedaObj.Precio){
        BusquedaObj.Precio=""
        limpiarBusqueda()
        filtrarAutos()
      }
      if(e.target.innerHTML==BusquedaObj.Genero){
        BusquedaObj.Genero=""
        limpiarBusqueda()
        filtrarAutos()
      }
      if(e.target.innerHTML==BusquedaObj.Deporte){
        BusquedaObj.Deporte=""
        limpiarBusqueda()
        filtrarAutos()
      }
      if(e.target.innerHTML==BusquedaObj.Accesorios){
        BusquedaObj.Accesorios=""
        limpiarBusqueda()
        filtrarAutos()
      }


    })
    


  }
}







const consultaMarca = document.querySelector('#consultaMarca')


consultaMarca.addEventListener('click',(e)=>{

if(e.target.classList.contains('agregar')){
    BusquedaObj.Marca=e.target.innerHTML
    filtrarAutos()
    BtnFiltros()
}



})


const consultaPrecio = document.querySelector('#consultaPrecio')


consultaPrecio.addEventListener('click',(e)=>{

if(e.target.classList.contains('agregar')){
  BusquedaObj.Precio=e.target.innerHTML
  filtrarAutos()
  BtnFiltros()

  
}
console.log(BusquedaObj)


})


const consultaGenero = document.querySelector('#consultaGenero')


consultaGenero.addEventListener('click',(e)=>{

if(e.target.classList.contains('agregar')){
    BusquedaObj.Genero=e.target.innerHTML
    filtrarAutos()
    BtnFiltros()
}
console.log(BusquedaObj)


})


const consultaDeporte = document.querySelector('#consultaDeporte')


consultaDeporte.addEventListener('click',(e)=>{

if(e.target.classList.contains('agregar')){
    BusquedaObj.Deporte=e.target.innerHTML
    filtrarAutos()
    BtnFiltros()
}
console.log(BusquedaObj)


})


const consultaAccesorios = document.querySelector('#consultaAccesorios')


consultaAccesorios.addEventListener('click',(e)=>{

if(e.target.classList.contains('agregar')){
    BusquedaObj.Accesorios=e.target.innerHTML
    filtrarAutos()
    BtnFiltros()
}
console.log(BusquedaObj)


})

let productos=[]

function extraerinfo(data){
   productos=data
  


}

function filtrarAutos(){
  BtnFiltros()
  const resultado = productos.filter(filtrarMarca).filter(filtrarPrecio).filter(filtrarGenero).filter(filtrarDeporte).filter(filtrarAccesorios);
  console.log(resultado);
  if(resultado.length){
    construirArticulos(resultado)
  }else{
    limpiarHTML()
    const listado = document.querySelector('.pro-container')
    const Mensaje = document.createElement('h1')
    Mensaje.textContent="No hay resultado de Busqueda"
    listado.appendChild(Mensaje)
  }
}



function filtrarMarca(productos) {
  
  if(BusquedaObj.Marca){
   
      return productos.Marca === BusquedaObj.Marca;
  }
  return productos;
}


function filtrarPrecio(productos) {
  

    if(BusquedaObj.Precio=="Menos de 50$"){
      
      return productos.Precio <= 50 ;
    }
    if(BusquedaObj.Precio=="De 50$ a 100$"){
      console.log("hola")
      
      return productos.Precio >= 50 && productos.Precio < 100 ;
    }
    if(BusquedaObj.Precio=="De 100$ a 200$"){
      console.log("hola")
      
      return productos.Precio >= 100 && productos.Precio < 200 ;
    }
    
    if(BusquedaObj.Precio=="De 300$ en adelante"){
      
      return productos.Precio > 300 ;
    }
     

  return productos;
}


function filtrarGenero(productos) {
  
  if(BusquedaObj.Genero){
   
      return productos.Genero === BusquedaObj.Genero;
  }
  return productos;
}


function filtrarDeporte(productos) {
  
  if(BusquedaObj.Deporte){
   
      return productos.Tipo === BusquedaObj.Deporte;
  }
  return productos;
}



function filtrarAccesorios(productos) {
  
  if(BusquedaObj.Accesorios){
   
      return productos.Categoria === BusquedaObj.Accesorios;
  }
  return productos;
}


function limpiarHTML() {
  //leer el elemento resultado

  const listado = document.querySelector('.pro-container');

  //limpiar los resultados anteriores

  while(listado.firstChild){
      listado.removeChild(listado.firstChild)
  }

}
 
function limpiarBusqueda() {
  //leer el elemento resultado

  const MostraFlitros = document.querySelector('#filtroAgg');

  //limpiar los resultados anteriores

  while(MostraFlitros.firstChild){
      MostraFlitros.removeChild(MostraFlitros.firstChild)
  }

}
 