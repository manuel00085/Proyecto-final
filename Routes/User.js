const express = require("express");
const User = require("../Models/user");
const router = express.Router();


//--------- crear usuarios



router.post('/users', async (req, res) => {
  const { user, password, phone, email } = req.body;
  console.log(req.body)
  
  

  try {
    // Verificar si el email ya está registrado en la base de datos
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("el correo ya esta registrado")
      return res.status(400).json({ message: 'El email ya está registrado.' });
    }

    // Crear un nuevo usuario si el email no existe
    const newUser = new User({ user, password, phone, email });
    await newUser.save();

    res.status(200).json({ message: 'Registro exitoso' });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor' });
  }
});



///---verificar usuario disponible


router.post('/users/autentification', async (req, res) => {

  const { email, password } = req.body;


  try{

     
    const existingEmail = await User.findOne({ email: email });
    //const existingPassword = await User.findOne({password:password});

    
    
    if (existingEmail){
      if (existingEmail.password === password) {
        // Si la contraseña coincide, se autentica el usuario

        return res.json({ email,password,message: 'Contraseña correcta'  });
        //return res.status(200).json({ message: 'Autenticación exitosa' });
      } else {

        // Si la contraseña no coincide, devolver un mensaje de error
        return res.status(201).json({ message: 'Contraseña incorrecta' });
      }
    } else {
      // Si no se encuentra ningún usuario con el correo electrónico, devolver un mensaje de error
      return res.status(201).json({ message: 'Usuario no encontrado' });
    }

  }catch (error){

    return res.status(500).json({ message: 'Error en el servidor' });

  }

});






/// --------obtener usuarios  


router.get("/users", (req,res)=>{
    User
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
});


 // --------obtener compras de un usuario
router.get("/users/:email", (req,res)=>{
    const {email} = req.params;
    User
    .findOne({email:email})
    .then((data) => res.json(data.compras))
    .catch((error) => res.json({message: "error"}))
});


   //-----Actualizar un usuario 

router.put("/users/:id", (req,res)=>{
    const {id} = req.params;
    const {name, age, email} = req.body;
    userSchema
    .updateOne({_id:id},{$set:{name,age,email}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
});
//-----Eliminar un usuario

router.delete("/users/:id", (req,res)=>{
    const { id } = req.params;
    userSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
});



router.post("/users/agregar-compra", async (req,res)=>{
  const {id,correo,dataTimePago,nombre,precio,status,user,productos} = req.body;

  const existingEmail = await User.findOne({ email: user });
  console.log(user)
  console.log(id)

  if (existingEmail){
    try{
      


      await User.updateMany({email: user },{
        $push:{
         'compras':{id,correo,dataTimePago,nombre,precio,status,user,productos}
  
  
        }
      })
  

      res.status(201).json({ message: 'todo bien' });


    }catch(error){

      return res.status(500).json({ message: 'no se actualizo' });

    }
   



  

  }


  
  
});









// articulos o productos


const Articulo = require("../Models/Articulos");



router.post('/Productos', async (req, res) => {
  const { Titulo, Categoria, Precio, Id, Marca, Imagen,Tipo,Genero} = req.body;
  console.log(req.body)



  try{

    const newPro = new Articulo({ Titulo, Categoria, Precio, Id, Marca, Imagen, Tipo, Genero });
    await newPro.save();
    return res.status(200).json({message: 'Producto creado con exito'})

     


  }catch (error){

    return res.status(500).json({ message: 'Error en el servidor' });

  }
  
  

});




router.get("/Productos", (req,res)=>{
  Articulo
  .find()
  .then((data) => res.json(data))
  .catch((error) => res.json({message: error}))
});





router.delete("/Productos/:id", (req,res)=>{
  const { id } = req.params;
  Articulo
  .deleteOne({ Id: id })
  .then((data) => res.json(data))
  .catch((error) => res.json({message: error}))
});

 

//Buscar Producto por id
router.get("/Productos/:id", (req,res)=>{
  const {id} = req.params;
  //console.log(id)
  Articulo
  .findOne({ Id: id })
  .then((data) => res.json(data))
  .catch((error) => res.json({message: error}))
});


router.put("/Productos/:id", (req,res)=>{
  const {id} = req.params;
  const {Titulo, Categoria, Precio, Id, Marca, Imagen, Tipo, Genero } = req.body;
  Articulo
  .updateOne({Id:id},{$set:{Titulo, Categoria, Precio, Id, Marca, Imagen, Tipo, Genero }})
  .then((data) => res.json(data))
  .catch((error) => res.json({message: error}))
});




const compras = require ("../Models/compras")


router.post("/Compras",  (req,res)=>{
 
const {purchase_units,payer} = req.body;

console.log(req.body)


try{

  const newCom = new compras({ purchase_units, payer });
   newCom.save();
  return console.log({message: 'Producto creado con exito'})

   


}catch (error){

  return console.log({ message: 'Error en el servidor' });

}





})


router.get("/Productos/Seach/:Seach", async (req,res)=>{
try{
  console.log(req.params.Seach)
  const products = await Articulo.find({
    Titulo: new RegExp(req.params.Seach,'i')
    
  });
  if(products.length===0){

    console.log("hola")

    const product = await Articulo.find({
    Marca: new RegExp(req.params.Seach,'i') 
    })
    res.json(product)
    

  }else{
    console.log(products) 
    res.json(products)
  }
 


}catch(error){
res.status(401).json({message:"no funciona"})
}
  
});


router.post("/Productos/agregar-favorito", async (req,res)=>{
  const {user, Id,Imagen,Marca,Precio,Titulo} = req.body;

  const existingEmail = await User.findOne({ email: user });
  console.log(user)
  console.log(Id)

  if (existingEmail){
    try{
      


      await User.updateMany({email: user },{
        $push:{
         'favorite':{Id, Imagen, Marca, Precio, Titulo }
  
  
        }
      })
  

      res.status(201).json({ message: 'todo bien' });


    }catch(error){

      return res.status(500).json({ message: 'no se actualizo' });

    }
   



  

  }


  
  
});

router.get("/productos/favoritos/:email", (req,res)=>{
  const {email} = req.params;
  User
  .findOne({email:email})
  .then((data) => res.json(data.favorite))
  .catch((error) => res.json({message: "error"}))
});














module.exports = router;
