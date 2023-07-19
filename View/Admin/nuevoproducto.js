(function(){
    
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit',validarProducto);

    async function validarProducto(e){
        console.log("entro")
        e.preventDefault();

        const Titulo = document.querySelector('#Nombre').value;
        const Precio = document.querySelector('#Precio').value;
        const Categoria = document.querySelector('#categoria').value;
        const Id = parseInt(document.querySelector('#Identificador').value);
        const Imagen = document.querySelector('#Imagen');
        const Marca = document.querySelector('#Marca').value;
        const Tipo = document.querySelector('#Tipo').value;
        const Genero = document.querySelector('#Genero').value;

        const file = Imagen.files[0]
        const formData = new FormData();
        formData.append('file',file);
        console.log(formData)
      

        const response = await fetch('/Multer/unpload', {
            method: 'POST',
            body: formData
          });

    
        if (response.ok) {
            const data = await response.json();
           crearProducto(data);
        } else {
            console.error('Error en la solicitud:', response.status);
        }

        async function crearProducto(data){
            
        const producto = {
            Titulo,
            Precio,
            Categoria,
            Id,
            Imagen:`/ImgProducto/${data}`,
            Marca,
            Tipo,
            Genero
        }

        try{
            await fetch("/Productos",{
                method:'POST',
                body:JSON.stringify(producto),
                headers:{
                    'Content-Type':'application/json'
                }
            });
    
        }catch(error){
    
            console.log(error)
        }
        



        }



      /*   if(validacion(producto)){
            mostrarAlerta('Todos los campos deben ser obligatorios');
            return
        } */


         
        
       



    }

   


})();