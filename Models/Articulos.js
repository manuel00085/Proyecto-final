const mongoose = require("mongoose");
const proSchema = new mongoose.Schema({
    Titulo: {
        type: String,
        required: true
      },
      Precio: {
        type: Number,
        required: true
      },
      Categoria: {
        type: String,
        required: true
      },
      Id: {
        type: Number,
        required: true,
        unique: true
        
       
      },
      Imagen: {
        type: String,
        require:true
      },
      Marca:{
        type: String,
        require:true
      },
      Tipo:{
        type: String,
        require:true
      },
      Genero:{
        type: String,
        require:true
      },
      Descripcion:{
        type: String,
        require:true
      }
      
      




});

module.exports = mongoose.model('Productos', proSchema)