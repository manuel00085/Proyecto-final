const express = require("express");
const routerP = express.Router();
const { createOrder,captureOrder,deleteOrder, obtenerCompra} = require('../src/Controllers');





routerP.post('/create-order', createOrder );


routerP.get('/capture-order', captureOrder);


routerP.get('/cancel-order', deleteOrder);

routerP.get('/obtener-order/:Compra', obtenerCompra);






module.exports = routerP;