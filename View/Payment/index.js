const parametroURL = new URLSearchParams(window.location.search)
const idCompra = (parametroURL.get('Compra'))
const Orden = JSON.parse(localStorage.getItem('Orden'))


const resultado = document.querySelector('#resultadoi')

console.log(idCompra)
let datosCompra=[]


async function obtenerCompra(Compra) {
 
    try{
        const resultado = await fetch(`http://localhost:4000/pay/obtener-order/${idCompra}`)
        const Compra = await resultado.json();
        console.log(Compra)
        generarFactura(Compra)
        
    }catch(error){
        console.log(error);
    }


    }
obtenerCompra()


function generarFactura(Compra){

    console.log(Compra.status)

    const Status = Compra.status
     datosCompra ={
        user:Orden.user,
        id:Compra.id,
        precio:Compra.purchase_units[0].amount.value,
        status:Compra.status,
        correo:Compra.payer.email_address,
        nombre:Compra.payment_source.paypal.name.given_name + " " + Compra.payment_source.paypal.name.surname,
        dataTimePago:Compra.update_time,
        productos:Orden.articulos



    }
        


    
    console.log(datosCompra)

    if(Status==="COMPLETED"){
        resultado.innerHTML=`
        <div>


        <div class="head">
        
        <div>
            <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-mark-color.svg" alt="" height="50" width="50">

        </div>
      
        <div>
            <img src="/images/logo vectorizado.svg" alt="" height="50" width="50">
        </div>
        
        </div>
        <div class="status">
            <p>Status de Compra</p>
            <div class="estado">
                <i class="fas fa-check-circle fa-lg" style="color: #45cb20;"></i>
                <h2>Confirmado</h2>
            </div>
        </div>



    </div>

    <div class="Total">

        
        <Div>
            <p>Monto Total:</p>

            <h1>${parseInt(datosCompra.precio)}$</h1>


        </Div>
        <a href="/Userdash/status.html"><button>Ir a Compras Realizadas</button></a>

        

    </div>
        
        `;

        
       


    }
    enviarMongo()
}



async function enviarMongo(){

    if(Orden.id===datosCompra.id){

        const response = await fetch('http://localhost:4000/api/users/agregar-compra', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(datosCompra)
          });

          console.log(response)











    }







}

