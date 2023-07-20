const header = document.querySelector('#header');

console.log(window.location.pathname)

const crearHeader = () =>{

header.innerHTML = `

<a href="/" class="logoHe"><img src="/images/logo vectorizado.svg" width="100" height="50" alt="">
<img class="logop" src="/images/Sin título-1.svg" alt="">
</a>

<div class="flex-buscador">
<input class="buscador" type="search" id="inputBusqueda" placeholder="Buscar" required>
<div class="buscadorBtn">
<i class="fas fa-search" id="btnBusqueda"></i> 
</div>

</div>
<div class="CarritoMovile">
<i><svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="m480-574-42-42 74-74H330v-60h182l-74-74 42-42 146 146-146 146ZM289.788-80Q260-80 239-101.212q-21-21.213-21-51Q218-182 239.212-203q21.213-21 51-21Q320-224 341-202.788q21 21.213 21 51Q362-122 340.788-101q-21.213 21-51 21Zm404 0Q664-80 643-101.212q-21-21.213-21-51Q622-182 643.212-203q21.213-21 51-21Q724-224 745-202.788q21 21.213 21 51Q766-122 744.788-101q-21.213 21-51 21ZM62-820v-60h116l170 364h287.706L796-796h67L701-493q-11 19-28.559 30.5Q654.881-451 634-451H331l-56 104h491v60H284q-37.663 0-57.332-30Q207-347 224-378l64-118-148-324H62Z"/></svg></i>
<p id="CantidadCarrito">0</p>
</div>
<div>

<ul id="navbar" class="">
<button class="Cerrar"><i class="fa-regular fa-circle-xmark" style="color: #ffffff;"></i></button>
    <li><a id="home" href="/index.html">Inicio</a></li>
    <li><a id="tienda" href="/Shop">Tienda</a></li>
    <div class="sesionbtn sesionbtnM">
      <a href="/login"><button>Iniciar Sesion</button></a>
  </div>
    <div class="opcionH">
    <li><a  href="/Userdash/index.html">Mis favoritos</a></li>
    <li><a  href="/Userdash/facturacion.html">Facturacion</a></li>
    <li><a  href="/Userdash/status.html">Mis Compras</a></li>
    <li><a  href="/Userdash/ConfiP.html">Configuracion de Perfil</a></li>
    
    </div>
    <li class="submenu"><i><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="40"><path d="m480-574-42-42 74-74H330v-60h182l-74-74 42-42 146 146-146 146ZM289.788-80Q260-80 239-101.212q-21-21.213-21-51Q218-182 239.212-203q21.213-21 51-21Q320-224 341-202.788q21 21.213 21 51Q362-122 340.788-101q-21.213 21-51 21Zm404 0Q664-80 643-101.212q-21-21.213-21-51Q622-182 643.212-203q21.213-21 51-21Q724-224 745-202.788q21 21.213 21 51Q766-122 744.788-101q-21.213 21-51 21ZM62-820v-60h116l170 364h287.706L796-796h67L701-493q-11 19-28.559 30.5Q654.881-451 634-451H331l-56 104h491v60H284q-37.663 0-57.332-30Q207-347 224-378l64-118-148-324H62Z"/></svg></i>
        <div id="carrito">
            <table id="lista-carrito" class="u-full-width">
    
                    

                
                <tbody></tbody>
            </table>
            <div class="flexbtn">
                
            <a href="#" id="vaciar-carrito" class="button u-full-width">Vaciar Carrito</a>
            <div class="importeTotal">

            </div>

            </div>

        </div>
 
       
    
    </li>
    <li class="submenu" id="InicioSesion"><i><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M222-255q63-44 125-67.5T480-346q71 0 133.5 23.5T739-255q44-54 62.5-109T820-480q0-145-97.5-242.5T480-820q-145 0-242.5 97.5T140-480q0 61 19 116t63 109Zm257.814-195Q422-450 382.5-489.686q-39.5-39.686-39.5-97.5t39.686-97.314q39.686-39.5 97.5-39.5t97.314 39.686q39.5 39.686 39.5 97.5T577.314-489.5q-39.686 39.5-97.5 39.5Zm.654 370Q398-80 325-111.5q-73-31.5-127.5-86t-86-127.266Q80-397.532 80-480.266T111.5-635.5q31.5-72.5 86-127t127.266-86q72.766-31.5 155.5-31.5T635.5-848.5q72.5 31.5 127 86t86 127.032q31.5 72.532 31.5 155T848.5-325q-31.5 73-86 127.5t-127.032 86q-72.532 31.5-155 31.5ZM480-140q55 0 107.5-16T691-212q-51-36-104-55t-107-19q-54 0-107 19t-104 55q51 40 103.5 56T480-140Zm0-370q34 0 55.5-21.5T557-587q0-34-21.5-55.5T480-664q-34 0-55.5 21.5T403-587q0 34 21.5 55.5T480-510Zm0-77Zm0 374Z"/></svg></i>
    
    
    </li>
    
    
  


</ul>
<button class="Hambuerguesa"><i class="fa-solid fa-bars" style="color: #000000;"></i></button>
</div>
<section class="modalC ">


<div id="carritoM">
<div class="BtnxF"><p>X</p></div>

<div class="modal__container" id="lista-carritoM">

</div>
<div class="flexbtnf">
<button id="facturacionM">Agregar Facturacion</button>
</div>


</div>
    
    

</section>

`;

if(window.location.pathname=='/Shop/'){
  console.log("activo tienda")

}else{
  console.log("activo home")


}




const CarritoMovile = document.querySelector('.CarritoMovile')
const btnCerrar = document.querySelector('.BtnxF')
const modal = document.querySelector('.modalC')

console.log(CarritoMovile)
CarritoMovile.addEventListener('click', (e)=>{
    e.preventDefault()

    modal.classList.add('modal--show')
    
})

btnCerrar.addEventListener('click',(e)=>{
    e.preventDefault()

    modal.classList.remove('modal--show')

})






}


crearHeader()



const busqueda = document.querySelector('#inputBusqueda');

const btnBusqueda = document.querySelector('#btnBusqueda')

let valueBusqueda = ""; 

busqueda.addEventListener('input',()=>{
   valueBusqueda = busqueda.value
});

busqueda.addEventListener('keyup',(e)=>{
  if(e.key === 'Enter' && valueBusqueda){
    window.location.href = `/Busqueda?Seach=${valueBusqueda}`
  }else{
    console.log("el campo esta vacio")
  }

  

})


btnBusqueda.addEventListener('click',()=>{

  if(valueBusqueda){
    window.location.href = `/Busqueda?Seach=${valueBusqueda}`
  }else{
    console.log("el campo esta vacio")
  }
  
  

  

})








document.addEventListener('DOMContentLoaded',()=>{
  
    let local = JSON.parse(localStorage.getItem('articulos'))
    console.log(local)
    if(local.length==0){
      console.log("esta vacio")
      eliminarTodos()
      
    }else{
      articulosCarrito = JSON.parse(localStorage.getItem('articulos'))
      carritoHTML()
      msvacio()
      console.log("hay articulos")
      
  
    }
   
  
    
  })




//------validacion de usuario 

const user = JSON.parse(localStorage.getItem('user'));
const InicioSesion = document.querySelector('#InicioSesion')


if(!user){
  console.log('entro por visitantes')
  const visitante = document.createElement('div');
  visitante.id= "Visitante";
  visitante.innerHTML=`
  <div>
  <h4>Para Compras Iniciar sesion</h4>
  <div class="sesionbtn">
      <a href="/login"><button>Iniciar Sesion</button></a>
  </div>
 

</div>
  
  `

  const quitarMenumovil = document.querySelector('.sesionbtnM')
  quitarMenumovil.classList.add('ver')

  InicioSesion.appendChild(visitante)
 

}else{

  const UsuarioL = document.createElement('div');
  UsuarioL.id= "InicioS";
  UsuarioL.innerHTML=`
  
    <div>
        <a href="/Userdash/index.html"><p class="text">Mis Favoritos</p></a>
        <a href="/Userdash/status.html"><p class="text">Status de compras</p></a>
        <a href="/Userdash/facturacion.html"><p class="text">Facturacion</p></a>
        <a href="/Userdash/ConfiP.html"><p class="text">Configuracion de perfil</p></a>
        <button id="cerrarSesion">Cerrar Sesion</button>
    </div>
  `
  const quitarMenumovil = document.querySelector('.opcionH')
  quitarMenumovil.classList.add('ver')

  InicioSesion.appendChild(UsuarioL)

  const CerrarSesion = document.querySelector('#cerrarSesion')


CerrarSesion.addEventListener('click',()=>{

  localStorage.removeItem('user');
  window.location.href ='/'

})


}






// carrito de compra 


function sincronizarStorage(){
    localStorage.setItem('articulos',JSON.stringify(articulosCarrito))
    divTotal()
  }
  
  let articulosCarrito = [];
  
    function extraerdatos(infoCompra){
  
      
      console.log(infoCompra)
  
      
      
  
      
      if(articulosCarrito.some(articulo => articulo.Id === infoCompra.Id)){
        //console.log("funcion 1")
        const articulos = articulosCarrito.map(articulo=>{
          if(articulo.Id === infoCompra.Id){
            //console.log("funcion 2")
            articulo.Cantidad++;
            return articulo
  
          }else{
            return articulo
          }
        })
        articulosCarrito = [...articulos]
        carritoHTML();
  
      }else{
        //console.log("funcion 3")
        articulosCarrito = [...articulosCarrito,infoCompra];
      }
  
      console.log(articulosCarrito)
      carritoHTML();
     
   
  
      //agregarItemAlCarrito(titulo, precio, imagenSrc);
  }



const contenedorCarrito = document.querySelector (`#lista-carrito`);
const vaciarCarritoBtn = document.querySelector (`#vaciar-carrito`);
vaciarCarritoBtn.addEventListener(`click`, eliminarTodos)
const contenedorCarritoM = document.querySelector (`#lista-carritoM`);




function carritoHTML(){
  var cantidadC = document.querySelector('#CantidadCarrito');
  cantidadC.innerHTML=`
  ${articulosCarrito.length}
  
  `
   
  console.log(cantidadC)
  
  vaciarCarrito();
  

  articulosCarrito.forEach(articulos =>{
    const row = document.createElement('tr');
    row.innerHTML=`
    <td>
    <img src="${articulos.Imagen}" width=100 height=90>
    </td>
    <td>${articulos.Titulo}</td>
    <td>${articulos.Precio}</td>
    <td>${articulos.Cantidad}</td>
    <td>
        <a href="#" class="borrar-curso" data-id="${articulos.Id}">X</a>
        </td>
    
    `
    contenedorCarrito.appendChild(row);
    
    
  })
  vaciarCarritoM()
  articulosCarrito.forEach(articulos =>{
    const row = document.createElement('tr');
    row.innerHTML=`
    <td>
    <img src="${articulos.Imagen}" width=100 height=90>
    </td>
    <td>${articulos.Titulo}</td>
    <td>${articulos.Precio}</td>
    <td>${articulos.Cantidad}</td>
    <td>
        <a href="#" class="borrar-curso" data-id="${articulos.Id}">X</a>
        </td>
    
    `
    contenedorCarritoM.appendChild(row);
    
    
  })
  sincronizarStorage()
}




function vaciarCarrito(){

  while(contenedorCarrito.firstChild){

      contenedorCarrito.removeChild(contenedorCarrito.firstChild)
}}

function vaciarCarritoM(){

  while(contenedorCarritoM.firstChild){

      contenedorCarritoM.removeChild(contenedorCarritoM.firstChild)
}}





function eliminarTodos(){

  while(contenedorCarrito.firstChild){
    
  
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)

      }

      
      articulosCarrito = [];
     
      carritoHTML()
      msvacio()

        
}

const carrito = document.querySelector(`#carrito`);

carrito.addEventListener(`click`, eliminarCurso)

const carritoM = document.querySelector(`#carritoM`);

carritoM.addEventListener(`click`,eliminarCurso)


function eliminarCurso(e){
  e.preventDefault();
  if(e.target.classList.contains('borrar-curso')){

      const cursoId= parseInt(e.target.getAttribute('data-id'));
      console.log(cursoId)

      const existe = articulosCarrito.some(articulo => articulo.Id === cursoId);
      console.log(existe)

      if(existe){
          const curso = articulosCarrito.map(curso =>{
              if(curso.Id === cursoId){
                  if(curso.Cantidad > 1){
                      curso.Cantidad--;
                      return curso;
                  }else{

                      articulosCarrito = articulosCarrito.filter(curso => curso.Id !== cursoId)
                      return curso;
                  }
              }
          })
      }

      carritoHTML();
      msvacio()
      
  }
}


function msvacio(){
  if(!contenedorCarrito.firstChild){
        
    const msvacio=document.createElement('th')
    msvacio.innerHTML=`
    <p> No hay productos Agregados</p>
    `

    contenedorCarrito.appendChild(msvacio)

    
  }
}



function divTotal(){
  const mostrarTotal = document.querySelector('.importeTotal')
  
  
  if(articulosCarrito.length==0){
    console.log("entro")
    while(mostrarTotal.firstChild){
    
  
      mostrarTotal.removeChild(mostrarTotal.firstChild)

    }
    
    


  }else{
        
    console.log(articulosCarrito)

    let suma = 0;

    

    articulosCarrito.forEach(Precios=>{
      suma +=  parseInt(Precios.Cantidad)*parseInt(Precios.Precio)
      console.log(suma) 
      

    })

    

    mostrarTotal.innerHTML=`
    <div>
    <h4>Total a Pagar</h4>
    <h4>$${suma}</h4>
    </div>
    <button id="facturacion">Agregar Facturacion</button>
    `

        
  const  btnFacturacion=document.querySelector('#facturacion')
  const  btnFacturacionm=document.querySelector('#facturacionM')
  btnFacturacion.addEventListener('click',agregarFacturacion)
  btnFacturacionm.addEventListener('click', agregarFacturacion)
  
  function agregarFacturacion(){
    if(user){
      localStorage.setItem('Facturacion',JSON.stringify(articulosCarrito))
      eliminarTodos()
      window.location.href = '/Userdash/facturacion.html';
 
    }else{
      window.location.href ='/Login'
    }
  

  
  }

  }

}

const nav = document.querySelector('#navbar')
const Abrir = document.querySelector('.Hambuerguesa')
const cerra = document.querySelector('.Cerrar')

Abrir.addEventListener('click',()=>{
  nav.classList.toggle('visible')
})

cerra.addEventListener('click',()=>{
  nav.classList.toggle('visible')
})


