const correoUsuario = JSON.parse(localStorage.getItem('user'));

fetch(`/Usuario/favoritos/${correoUsuario.email}`)
.then(response => response.json())
.then(data => {
    construirFavoritos(data)
  console.log(data); // Llamar a la función con los datos

})
.catch(error => {
  console.log(error); // Manejar el error en caso de que ocurra
});




function construirFavoritos(data){

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
   
    
  
    
  })





}

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
