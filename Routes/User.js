const express = require("express");
const User = require("../Models/user");
const router = express.Router();










//--------- crear usuarios


router.post('/', async (req, res) => {
  const { user, password, phone, email, apellido } = req.body;
  console.log(req.body)
  
  

  try {
    // Verificar si el email ya está registrado en la base de datos
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("el correo ya esta registrado")
      return res.status(400).json({ message: 'El email ya está registrado.' });
    }else{
      // Crear un nuevo usuario si el email no existe
    const newUser = new User({ user, password, phone, email, apellido });
    newUser.password = await newUser.encryPassword(password)
    await newUser.save();
    res.status(200).json({ message: 'Registro exitoso' });

    }

    
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

const bcrypt = require('bcryptjs');

router.put("/nuevacontra/:email", (req,res)=>{
  console.log("nuevacontra")
 
  const { pass,id } = req.body;

  const hashedPassword = bcrypt.hashSync(pass, 10);
  
 
    User
    .updateOne({_id:id},{$set:{password:hashedPassword}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
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
        const id =existingEmail._id 
        
        // Si la contraseña coincide, se autentica el usuario

        return res.json({ email,password,id,message: 'Contraseña correcta'  });
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

router.put("/:email", (req,res)=>{
  const { user, phone, email, apellido,id } = req.body;
    User
    .updateOne({_id:id},{$set:{user,phone,email,apellido}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
});












//-----Eliminar un usuario


router.delete("/:id", (req,res)=>{
    const { id } = req.params;
    console.log("Se eliminio el Usuario")
    User
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



/////consultar usuario por email
router.get("/:email", (req,res)=>{
  const {email} = req.params;
  User
  .findOne({email:email})
  .then((data) => res.json(data))
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
