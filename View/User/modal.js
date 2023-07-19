
function mostrarModal(data){
const btneditar = document.querySelector('#btnEditar')
const btnCerrar = document.querySelector('.Btnx')
const modal = document.querySelector('.modal')


btneditar.addEventListener('click', (e)=>{
    e.preventDefault()

    modal.classList.add('modal--show')
    cargaredicion(data)
})

btnCerrar.addEventListener('click',(e)=>{
    e.preventDefault()

    modal.classList.remove('modal--show')

})

const btnEliminarCuenta = document.querySelector('#btnBorrar')
btnEliminarCuenta.addEventListener('click', validarEliminar)




const btnCerrarC = document.querySelector('.BtnxC')
const modalC = document.querySelector('.editC')
const btneditarC = document.querySelector('#btnEditarC')

btneditarC.addEventListener('click', (e)=>{
    e.preventDefault()

    modalC.classList.add('modal--show')
})

btnCerrarC.addEventListener('click',(e)=>{
    e.preventDefault()

    modalC.classList.remove('modal--show')

})


const btnGuardar = document.querySelector('#guardarbtn')
btnGuardar.addEventListener('click', validarProducto)


const btnGuardarC = document.querySelector('#guardarbtnC')
btnGuardarC.addEventListener('click', validarContraseña)



}


function cargaredicion(data){
    const {user, phone, email, apellido } = data
const nombrein = document.querySelector('#inputname')

const apellidoin = document.querySelector('#inputApellido')

const Correoin = document.querySelector('#inputcorreo')

const telefonoin = document.querySelector('#inputtlefono')

nombrein.value = user
apellidoin.value = apellido
telefonoin.value = phone
Correoin.value = email


}

async function validarEliminar(){

    const confirmar = confirm('Quieres eliminar Usuario?')

    if(confirmar){
        try{
            response =await fetch(`/Usuario/${correoUsuario.id}`,{
                method:`DELETE`})
                
        }catch{
            return console.log(error)
        } 

        if(response){
            localStorage.removeItem('user');
        window.location.href ='/'
        

        }

        


    }
    return

   
}



async function validarProducto(){
    

const nombrein = document.querySelector('#inputname')

const apellidoin = document.querySelector('#inputApellido')

const Correoin = document.querySelector('#inputcorreo')

const telefonoin = document.querySelector('#inputtlefono')

    
    
    
    const Usuario = {
        user: nombrein.value,
        apellido: apellidoin.value,
        email:Correoin.value ,
        phone:parseInt(telefonoin.value),
        id:correoUsuario.id
       
    }
   
    console.log(Usuario)
    console.log(correoUsuario.email)
    console.log(correoUsuario.id)
   

     if(validacion(Usuario)){
       return console.log("faltan campos")
    }

    try{
        await fetch(`/Usuario/${correoUsuario.email}`,{
            method:`PUT`,
            body:JSON.stringify(Usuario),
        
            headers:{
                'Content-Type':'application/json'
            }
        });
    }catch{
        return console.log(error)
    } 


    window.location.href ='./ConfiP.html'



    

}

function validacion(obj){
    return !Object.values(obj).every(i => i !== '')
}



async function validarContraseña(){
    

    const actualContraseña = document.querySelector('#inputcontra')
    
    const nuevaContra = document.querySelector('#inputnuevacontra')
    
    const RpetirContra = document.querySelector('#inputrepertir')

    const UsuarioP = {
        pass: nuevaContra.value,
        id:correoUsuario.id
    }

    if(RpetirContra.value==nuevaContra.value){
        console.log("entro")

       
        if(validacion(UsuarioP)){
            return console.log("faltan campos")
         }
         console.log("entro")
     
         try{
           const  response = await fetch(`/Usuario/nuevacontra/${correoUsuario.email}`,{
                 method:`PUT`,
                 body:JSON.stringify(UsuarioP),
             
                 headers:{
                     'Content-Type':'application/json'
                 }});
                 console.log(response)
         }catch{
             return console.log(error)
         } 


    }
    

        console.log(correoUsuario.email)
        console.log(correoUsuario.id)
       
    
    
    
        //window.location.href ='./ConfiP.html'
    
    
    
        
    
    }
    