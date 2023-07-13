const mongoose = require("mongoose");
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
      user: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      },
      phone: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      favorite:[
        {
          Id:{
            type: String,
            required: false
          },
          Imagen:{
            type: String,
            required: false
          } ,
           Titulo:{
            type: String,
            required: false
          },
          Precio:{
            type: String,
            required: false
          },
          Marca:{
            type: String,
            required: false
          }

        }
       ],
       compras:[{

          correo:{
            type: String,
        required: false

          },
          dataTimePago:{
            type: String,
        required: false

          },
          id:{
            type: String,
        required: false

          },
          nombre:{
            type: String,
        required: false

          },
          user:{
            type: String,
        required: false

          },
          precio:{
            type: String,
        required: false

          },
          status:{
            type: String,
        required: false

          },
          productos:{
            type: Array,
        required: false
          }

          
          


          
        

          
          
        }
       ]
     
},
{
  timestamps:true
}
);


module.exports = mongoose.model('User', userSchema)