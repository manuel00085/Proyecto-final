mostrar()

const obtenerProducto = async idProducto =>{
    console.log(idProducto)
    try{
        const resultado = await fetch(`/Productos/${idProducto}`)
        const producto = await resultado.json();
        console.log(producto)
        return producto; 
    }catch(error){
        console.log(error);
    }
}


function mostrar (){


    document.addEventListener('DOMContentLoaded', async ()=>{

        const parametroURL = new URLSearchParams(window.location.search)
        
        const idProducto = parseInt(parametroURL.get('id'))
        console.log(idProducto)
        const producto = await obtenerProducto(idProducto)


       



        console.log(idProducto)
            mostrarProducto(producto)
    
        const formulario = document.querySelector('#formulario')
        formulario.addEventListener('submit',validarProducto)
    
    
        })

    function mostrarProducto(producto){

                const TituloInput = document.querySelector('#Nombre');
                const PrecioInput = document.querySelector('#Precio');
                const CategoriaInput = document.querySelector('#categoria');
                const IdInput = document.querySelector('#Identificador');
                const ImagenInput = document.querySelector('#Imagen');
                const MarcaInput = document.querySelector('#Marca');
                const GeneroInput = document.querySelector('#Genero');
                const TipoInput = document.querySelector('#Tipo');

        const {Titulo, Categoria, Precio, Id, Marca, Imagen, Tipo, Genero } = producto

        TituloInput.value = Titulo
        PrecioInput.value = Precio
        CategoriaInput.value  = Categoria
        IdInput.value = Id
        ImagenInput.value  = Imagen
        MarcaInput.value  = Marca
        TipoInput.value = Tipo
        GeneroInput.value = Genero
    }

    async function validarProducto(e){

        const TituloInput = document.querySelector('#Nombre');
        const PrecioInput = document.querySelector('#Precio');
        const CategoriaInput = document.querySelector('#categoria');
        const IdInput = document.querySelector('#Identificador');
        const ImagenInput = document.querySelector('#Imagen');
        const MarcaInput = document.querySelector('#Marca');
        const GeneroInput = document.querySelector('#Genero');
        const TipoInput = document.querySelector('#Tipo');

        
        e.preventDefault();
        
        const producto = {
            Titulo: TituloInput.value,
            Precio: PrecioInput.value,
            Categoria:CategoriaInput.value ,
            Id:parseInt(IdInput.value),
            Imagen: ImagenInput.value,
            Marca: MarcaInput.value,
            Genero: GeneroInput.value,
            Tipo: TipoInput.value
        }
       
        console.log(producto)

        if(validacion(producto)){
           return console.log("faltan campos")
        }

        try{
            await fetch(`/Productos/${producto.Id}`,{
                method:`PUT`,
                body:JSON.stringify(producto),
            
                headers:{
                    'Content-Type':'application/json'
                }
            });
        }catch{
            return console.log(error)
        }


        window.location.href = 'index.html'



        

    }

    function validacion(obj){
        return !Object.values(obj).every(i => i !== '')
    }

}