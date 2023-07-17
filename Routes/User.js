const express = require("express");
const User = require("../Models/user");
const passport = require("passport");
const router = express.Router();










//--------- crear usuarios


router.post('/', async (req, res) => {
  const { user, password, phone, email } = req.body;
  console.log(req.body)
  
  

  try {
    // Verificar si el email ya está registrado en la base de datos
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("el correo ya esta registrado")
      return res.status(400).json({ message: 'El email ya está registrado.' });
    }else{
      // Crear un nuevo usuario si el email no existe
    const newUser = new User({ user, password, phone, email });
    newUser.password = await newUser.encryPassword(password)
    await newUser.save();
    res.status(200).json({ message: 'Registro exitoso' });

    }

    
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor' });
  }
});






///////inicio de sesion


router.post('/autentification', async (req, res) => {

  const { email, password } = req.body;


  try{

     
    const existingEmail = await User.findOne({ email: email });
    //const existingPassword = await User.findOne({password:password});

    
    
    if (existingEmail){
      const match = await existingEmail.matchPassword(password)
      if (match) {
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




router.get("/", (req,res)=>{
    User
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
});












 // --------obtener compras de un usuario
router.get("/compras/:email", (req,res)=>{
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


router.delete("/:id", (req,res)=>{
    const { id } = req.params;
    userSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
});










///////Agregar compras de un usuario


router.post("/agregar-compra", async (req,res)=>{
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








///// Consultar Favoritos de un Usuario



router.get("/favoritos/:email", (req,res)=>{
  const {email} = req.params;
  User
  .findOne({email:email})
  .then((data) => res.json(data.favorite))
  .catch((error) => res.json({message: "error"}))
});










///// Agregar Favoritos de un Usuario

router.post("/agregar-favorito", async (req,res)=>{
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










module.exports = router;
