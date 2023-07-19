const adminOn = JSON.parse(localStorage.getItem('adminCredentials'));



if(!adminOn){

    const adminCredentials = {
        username: 'admin',
        password: 'admin123',
      };
      mostrarPrompt()
      
      function mostrarPrompt() {
        const inputUsername = prompt('Ingrese su nombre de usuario:');
        const inputPassword = prompt('Ingrese su contraseña:');
      
        if (inputUsername === adminCredentials.username && inputPassword === adminCredentials.password) {
            localStorage.setItem('adminCredentials', JSON.stringify(adminCredentials))
          alert('Inicio de sesión exitoso. ¡Bienvenido, administrador!');
         
          window.location.href = '/Admin'
          
        } else {
          alert('Credenciales incorrectas. Vuelve a intentarlo.');
          window.location.href = '/'
        }
      }
   

}else{
    console.log("hola")
    

}

