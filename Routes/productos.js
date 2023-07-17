const express = require("express");
const router = express.Router();
const Articulo = require("../Models/Articulos");




///// Agregar Producto


router.post('/', async (req, res) => {
    const { Titulo, Categoria, Precio, Id, Marca, Imagen,Tipo,Genero} = req.body;
    console.log(req.body)
    console.log("creo producto")
  
  
  
    try{
  
      const newPro = new Articulo({ Titulo, Categoria, Precio, Id, Marca, Imagen, Tipo, Genero });
      await newPro.save();
      return res.status(200).json({message: 'Producto creado con exito'})
  
       
  
  
    }catch (error){
  
      return res.status(500).json({ message: 'Error en el servidor' });
  
    }
    
    
  
  });





  
  
  
  ///////Consulta de Productos


  router.get("/", (req,res)=>{
    console.log("consulto produtos")
    Articulo
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
  });
  
  
  






  //////Eliminar Producto

  
  router.delete("/:id", (req,res)=>{
    const { id } = req.params;
    console.log("Elimino Producto")
    Articulo
    .deleteOne({ Id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
  });
  
   








  
/////Buscar Producto por id


  router.get("/:id", (req,res)=>{
    const {id} = req.params;
    console.log("Busco producto por id")
    //console.log(id)
    Articulo
    .findOne({ Id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
  });
  








////Modificar Producto
  

  router.put("/:id", (req,res)=>{
    console.log("Modifico PRoducto por id")
    const {id} = req.params;
    const {Titulo, Categoria, Precio, Id, Marca, Imagen, Tipo, Genero } = req.body;
    Articulo
    .updateOne({Id:id},{$set:{Titulo, Categoria, Precio, Id, Marca, Imagen, Tipo, Genero }})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
  });
  
  
  






  
////////Buscador de PRoductos

  
  router.get("/Seach/:Seach", async (req,res)=>{
  try{
    console.log("Busqueda")
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
  

  




module.exports = router;