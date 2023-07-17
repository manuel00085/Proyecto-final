const parametroURL = new URLSearchParams(window.location.search)
const Busqueda = (parametroURL.get('Seach'))

console.log(Busqueda)




fetch(`/Productos/Seach/${Busqueda}`)
    .then(response => response.json())
    .then(data => {
      if(data.length===0){
        limpiarHTML()
        const listado = document.querySelector('.pro-container')
        const Mensaje = document.createElement('h1')
        Mensaje.textContent="No hay resultado de Busqueda"
        listado.appendChild(Mensaje)
      }else{
        construirBusqueda(data)
      }
        
      console.log(data); // Llamar a la función con los datos

    })






    function construirBusqueda(data) {
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
      });}



      function limpiarHTML() {
        //leer el elemento resultado
      
        const listado = document.querySelector('.pro-container');
      
        //limpiar los resultados anteriores
      
        while(listado.firstChild){
            listado.removeChild(listado.firstChild)
        }
      
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

       
      