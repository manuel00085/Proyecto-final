 mostrarProductos()
 const listado = document.querySelector('#listado-Productos');
 
 function mostrarProductos(){

    fetch('/Productos')
    .then(response => response.json())
    .then(data => {
      construirArticulos(data); // Llamar a la función con los datos
    })
    .catch(error => {
      console.log(error); // Manejar el error en caso de que ocurra
    });


}

function construirArticulos(data){
    

    const productos=data
    console.log(productos)
    
    productos.forEach(producto=>{
        const {Categoria, Titulo, Precio, Imagen, Id, Marca } =  producto;
        const fila = document.createElement('tr');

        fila.innerHTML +=`
        <td class="px-6 whitespace-no-wrap border-b border-gray-200" >
          <p class="text-sm-leading-5 font-medium text-gray-700 text-lg font-bold">${Titulo}</p>
        </td>
        
        <td class="px-6 whitespace-no-wrap border-b border-gray-200" >
          <p class="text-sm-leading-5 font-medium text-gray-700 text-lg font-bold">${Precio}</p>
        </td>
        
     
        <td class="px-6 whitespace-no-wrap border-b border-gray-200" >
        <p class="text-sm-leading-5 font-medium text-gray-700 text-lg font-bold">${Categoria}</p>
      </td>

      <td class="px-6 whitespace-no-wrap border-b border-gray-200" >
      <p class="text-sm-leading-5 font-medium text-gray-700 text-lg font-bold">${Marca}</p>
    </td>

        
        <td class="px-6 whitespace-no-wrap border-b border-gray-200" >
          <a href="./editar-producto.html?id=${Id}" class="text-teal-600 hover:text-teal-900 mr-5" >Editar</a>
          <a href="#" data-producto="${Id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
      </td>

        `;
        listado.appendChild(fila);
    })

    listado.addEventListener('click',confirmarEliminar);
    async function confirmarEliminar(e){
      
      if(e.target.classList.contains('eliminar')){
        const productoId= parseInt(e.target.dataset.producto);
        console.log(productoId);

        const confirmar = confirm('Quieres eliminar este producto?')

        if(confirmar){
          
            try{
                await fetch(`/Productos/${productoId}`,{
                    method:'DELETE'
                });
        
            }catch(error){
                console.log(error);
            }
        }
        }

      }


    }









