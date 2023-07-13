
const correoUsuario = JSON.parse(localStorage.getItem('user'));

console.log(correoUsuario.email)


mostrascompras()


function mostrascompras(){

    fetch(`http://localhost:4000/api/users/${correoUsuario.email}`)
    .then(response => response.json())
    .then(data => {
        construirCompras(data)
      console.log(data); // Llamar a la función con los datos

    })
    .catch(error => {
      console.log(error); // Manejar el error en caso de que ocurra
    });
    
      function construirCompras(data) {
       const listaCompra =document.querySelector('#tablaCompras')
        const  SusCompras = data;
        console.log(SusCompras)
       SusCompras.forEach(Compra => {
        const { correo,dataTimePago,id,nombre,precio,status} = Compra;
        const rowC = document.createElement('tr');

        rowC.innerHTML=`
        <td>${correo}</td>
        <td>${dataTimePago}</td>
        <td>${id}</td>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${status}</td>
    
        `
        listaCompra.appendChild(rowC)
        
      }) }; 
}