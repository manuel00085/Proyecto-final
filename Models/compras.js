const mongoose = require("mongoose");
const comSchema = new mongoose.Schema({


  purchase_units: {
        type: Array,
        
      },
      payer: {
        type: Array,
       
      }



});

module.exports = mongoose.model('Compras', comSchema)