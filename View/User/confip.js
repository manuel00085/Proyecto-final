const correoUsuario = JSON.parse(localStorage.getItem('user'));

fetch(`/Usuario/${correoUsuario.email}`)
.then(response => response.json())
.then(data => {
    construirFavoritos(data)
  console.log(data); // Llamar a la función con los datos

})
.catch(error => {
  console.log(error); // Manejar el error en caso de que ocurra
});




function construirFavoritos(data){
  const mostrarCOnfiguarion = document.querySelector('#mostraconfi')
    const  articulo = data;
    console.log(articulo)
    const {user, phone, email, apellido } = articulo;
    console.log(user)

    mostrarCOnfiguarion.innerHTML= `
    <div class="InfoPrin">
    <img src="./pngwing.com.png" alt="">
    <p>${user} ${apellido}</p>

</div>

<div class="infoper">
    <h2>Informacion Personal</h2>
    <div class="infoP">
        <p>Nombre : ${user}</p>
        <p>Apellido : ${apellido}</p>
        <p>Contraseña: ********</p>
        <p>Correo Electronico: ${email}</p>
        <p>Numero telefonico : ${phone}</p>

    </div>



    <div>
        <button class="BtnF" id="btnEditar">Editar</button>
        <button class="BtnF" id="btnEditarC">Editar Contraseña</button>
     
    </div>
    
</div>
<div>
    <button class="BtnF" id="btnBorrar">Borrar Cuenta</button>
</div>
    
    
    
    
    
    
    `
   
   
    
  
 
   
  


mostrarModal(data)

}