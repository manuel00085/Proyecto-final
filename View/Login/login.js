inpuLogin=document.querySelector('#Login-mail')
inputLpassword=document.querySelector('#Login-password')

formulaL=document.querySelector('#sub-login')


let valLoginMail = false

inpuLogin.addEventListener(`input`, (e)=>{
   valLoginMail= emailVal.test(e.target.value);

   validar(inpuLogin,valLoginMail) 
   
    
})



formulaL.addEventListener('submit',(e)=>{
    console.log("entro")
    e.preventDefault()
    validacionLogin()



})

function validacionLogin(){
 const LoginUser={

        email: inpuLogin.value,
        
        password: inputLpassword.value
       
      
    }
    SolicitarBD(LoginUser)



}

 


async function SolicitarBD(LoginUser) {
    
  
      try {
        const response = await fetch(`http://localhost:4000/api/users/autentification`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(LoginUser)
        
        });
    
        if (response.ok) {
          const data = await response.json();
          console.log('Respuesta del servidor:', data);
          
          if (data.message ==='Contraseña correcta') {
            mostrarAlerta("pass","Login aprobado")

            
            iniciarSesion(data) 
           

          } else if (data.message === 'Contraseña incorrecta') {
            mostrarAlerta("","Contraseña incorrecta")
            
          }else if (data.message === 'Usuario no encontrado'){
            mostrarAlerta("","Usuario no encontrado")
          }
        } else {
          console.error('Error al realizar la solicitud:', response.statusText);
        }
      } catch (error) {
        console.error('Error de red:', error);
      }
  
  
  
  
  
    }



    function iniciarSesion(data){

        localStorage.setItem('user', JSON.stringify(data))
        formatearFormulario()

        setTimeout(() => {
          window.location.href = '/Shop';
          
      }, 2000);
    
        
        


    }





    function formatearFormulario(){

        inpuLogin.value="",
        inputLpassword.value=""
        inputPhone.value=""
        mailInput.value=""
        usernameInput.value=""
        passInput.value=""
        matchInput.value=""


    }
    
    
  