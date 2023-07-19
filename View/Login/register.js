const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link')
const registerLink = document.querySelector('.register-link');





registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
    
})

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
    
})







//------validaciones--------

const mailInput=document.querySelector('#emailInput');
const passInput=document.querySelector('#passInput');
const matchInput=document.querySelector('#matchInput');
const formularioRe = document.querySelector('#accion-register')
const checkbox = document.querySelector('#checkAgre')
const usernameInput = document.querySelector('#usernameInput');
const inputPhone=document.querySelector('#phoneInput')
const inputApellido=document.querySelector('#userapellidoInput')






// --------validar usuario
 
let valusername=false
usernameInput.addEventListener('input', e=>{
  const regex = /^\S*$/;
  valusername = regex.test(e.target.value);
  validar(usernameInput,valusername)
  //validarUsername()
})

let valuserApellido=false
inputApellido.addEventListener('input', e=>{
  const regex = /^\S*$/;
  valuserApellido = regex.test(e.target.value);
  validar(inputApellido,valuserApellido)
  //validarUsername()
})




// -----validar email 

const emailVal = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

let valemail = false

mailInput.addEventListener('input',e=>{
  console.log(e.target.value)

  valemail = emailVal.test(e.target.value);
  //console.log(valemail)
  

  validar(mailInput,valemail)

});




// --- validar telefono

   let valephone = false

inputPhone.addEventListener('input' ,(e)=>{
  const regexp = /^(\+\d{1,3}\s?)?(\(\d{1,3}\)|\d{1,3})[-\s]?\d{1,4}[-\s]?\d{1,4}$/;
  valephone=(regexp.test(e.target.value))
  console.log(parseInt(e.target.value))


  validar(inputPhone,valephone)

})  




// -----validar Password

const passwVal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/gm;

let valpassw = false;


passInput.addEventListener('input',e=>{

    valpassw = passwVal.test(e.target.value)

    validar(passInput,valpassw)
    //console.log(valpassw)
   

    
});





//------Validar match de contraseña
let valMatch=false

matchInput.addEventListener('input',e=>{
    valMatch = e.target.value === passInput.value;
    validar(matchInput,valMatch)
    console.log(valMatch)

    
})





const validar = (input,val)=>{
 
  if(input.value==""){
     


      console.log("esta vacio")
      input.parentElement.classList.remove('checkB')
      input.parentElement.classList.remove('falseB')
      input.parentElement.classList.add('normalB')
  }else{

      if(val){
         //console.log(input)
      input.parentElement.classList.remove('falseB')
      input.parentElement.classList.add('checkB')

       


      }else{
          input.parentElement.classList.remove('normalB')
        input.parentElement.classList.remove('checkB')
        input.parentElement.classList.add('falseB')
      }
      
      
     
  }

}






//validacion del username con la base de datos



async function validarUsername() {


  if(!usernameInput.value==""){

    try {
      const response = await fetch(`/Usuario/${usernameInput.value}`, {
        method: 'GET',
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Respuesta del servidor:', data);
  
        if (data.message === 'El nombre de usuario ya está registrado') {
          console.log('El nombre de usuario ya está registrado');
        } else if (data.message === 'El nombre de usuario está disponible') {
          console.log('El nombre de usuario está disponible');
        }
      } else {
        console.error('Error al realizar la solicitud:', response.statusText);
      }
    } catch (error) {
      console.error('Error de red:', error);
    }





  }
  
  
}



///-----Validacion  final y creancion del usuario en la base de datos  

formularioRe.addEventListener('submit' ,(e)=>{
  e.preventDefault()
    if(valemail  && valuserApellido && valpassw  && valephone && valMatch){
        console.log("esta todo ok")
      
        const createUser = async () => {
            const user = {
              user: usernameInput.value,
              apellido:inputApellido.value,
              password: passInput.value,
              email: mailInput.value,
              phone: parseInt(inputPhone.value)

            };
          
            try {
              const response = await fetch('/Usuario', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
              });
          
              if (response.ok) {
                const data = await response.json();
                console.log('Usuario creado:', data);

                mostrarAlerta("pass","Usuario creado Correctamente")

                setTimeout(()=>{
                  
                  window.location.href= '/login'}, 3000)
                  

              } else {
                console.error(await response.json())
                console.error('Error al crear el usuario:', response.statusText);
              }
            } catch (error) {
              console.error('Error de red:', error);
            }
        };
          
          createUser();
        
       
        

    }else{
      console.log("faltan campos ")
    }
     
    
})


function mostrarAlerta(error,mensaje){
  const alerta = document.querySelector('.notificacion')


if(error==="pass"){
  const alert = document.createElement('p');
  alert.classList.add('notificacionV')
  alert.innerHTML=`
  
  <span class='block sm:inline'>${mensaje}</span>
  `
  alerta.appendChild(alert);

  setTimeout(() => {
      alert.remove()
      
  }, 2000);


}else{
console.log('entro por falso')
  const alert = document.createElement('p');
  alert.classList.add('notificacionf')
  alert.innerHTML=`
  
  <span class='block sm:inline'>${mensaje}</span>
  `
  alerta.appendChild(alert);

  setTimeout(() => {
      alert.remove()
      
  }, 2000);



}

  
}


