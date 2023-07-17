
Usuario = JSON.parse(localStorage.getItem('user'))
let factura=[]
factura = JSON.parse(localStorage.getItem('Facturacion'))
const tablaF=document.querySelector('#tablaFac')
console.log(factura)




mostrarFactura()


function mostrarFactura(){

  vaciarFactura()

    factura.forEach(articulos =>{
        const row = document.createElement('tr');
        row.innerHTML=`
        <td><img src="${articulos.Imagen}" width=100 height=90></td>
        <td>${articulos.Marca}</td>
        <td>"${articulos.Titulo}"</td>
        <td>${articulos.Precio}</td>
        <td>${articulos.Cantidad}</td>
         <td><a href="#" class="borrar-curso" data-id="${articulos.Id}">X</a></td>
        `
        tablaF.appendChild(row);
      })

      divTotal()
      


    
}

const tablaBtn = document.querySelector(`#tablaFac`);

tablaBtn.addEventListener(`click`, eliminarCurso)

function eliminarCurso(e){
  console.log("funciona")
  e.preventDefault();
  if(e.target.classList.contains('borrar-curso')){

      const cursoId= parseInt(e.target.getAttribute('data-id'));
      console.log(cursoId)

      const existe = factura.some(articulo => articulo.Id === cursoId);
      console.log(existe)

      if(existe){
          const curso = factura.map(curso =>{
              if(curso.Id === cursoId){
                  if(curso.Cantidad > 1){
                      curso.Cantidad--;
                      return curso;
                  }else{

                      factura = factura.filter(curso => curso.Id !== cursoId)
                      return curso;
                  }
              }
          })
      }
      sincronizarStorage()

      mostrarFactura();

      
      
  }
}


function sincronizarStorage(){
  localStorage.setItem('Facturacion',JSON.stringify(factura))
  
}




function vaciarFactura(){

  while(tablaF.firstChild){

    tablaF.removeChild(tablaF.firstChild)
}}





function divTotal(){

  let suma = 0; 

 
  
  if(factura.length==0){
    console.log("entro")
    while(mostrarTotal.firstChild){
    
  
      mostrarTotal.removeChild(mostrarTotal.firstChild)

    }
    
    


  }else{
    const mostrarTotal = document.querySelector('.importeTotalF')
        
    console.log(factura)

    

    

    factura.forEach(precios=>{
      suma +=  parseInt(precios.Cantidad)*parseInt(precios.Precio)
      console.log(suma) 
      

    })

    

    mostrarTotal.innerHTML=`
    <div>
    <h4>Total a Pagar</h4>
    <h4>$${suma}</h4>
    </div>
    <button id="facturacion">Pagar</button>
    `

        

  

  
  }

  const btnPagar=document.querySelector('#facturacion')

  btnPagar.addEventListener('click',pasarelaPaypal)
  
  
  async function pasarelaPaypal(){
    

    const monto={
      suma}
    const response = await fetch('/pay/create-order',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(monto)
    
    })
    const data = await response.json()
 

    const ordercap={
      user:Usuario.email,
      id:data.id,
      articulos:factura,
      precio:monto.suma
    }
    localStorage.setItem('Orden',JSON.stringify(ordercap))

    console.log(ordercap)
    
     window.location.href = data.links[1].href
    
    

    
    

  
  
  
  
  
  }
  

  




  
 

}




  
