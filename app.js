
const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const app = express();
const path = require('path');
const PUERTO = process.env.PORT || 4000;
const userRoutes = require("./Routes/User");
const paymentRoutes = require('./Routes/payment');
const multerRoutes = require('./Routes/multer');










app.listen(PUERTO, () => {
    console.log(`el servidor wsta escuchando en el puerto ${PUERTO}...`);
})


    //----------middleware----------

    app.use(express.json())
    app.use(express.urlencoded({extended:false}))
    app.use('/api', userRoutes)
    app.use('/pay',paymentRoutes)
    app.use('/Multer',multerRoutes)
   
 

    




    //mongodb connection//


mongoose
.connect(process.env.MONGO_URI_TEST)
.then(() => console.log('conectado a mongo'))
.catch((error) => console.error(error))




///rutas Html///

/* app.get('/base',(req,res)=>{
    res.sendFile(__dirname + '/Models/db.json')

})*/
app.use('/', express.static(path.resolve('View', 'Home')));
app.use('/login', express.static(path.resolve('View', 'Login')));
app.use('/Shop', express.static(path.resolve('View', 'Shop')));
app.use('/Userdash', express.static(path.resolve('View', 'User')));
app.use('/Admin', express.static(path.resolve('View', 'Admin')));
app.use('/images', express.static(path.resolve('View', 'Home', 'img')));
app.use('/DB', express.static(path.resolve('Models')));
app.use('/Componentes', express.static(path.resolve('View','Componente')));
app.use('/Busqueda', express.static(path.resolve('View','Busqueda')));
app.use('/PaymenRes', express.static(path.resolve('View','Payment')));
app.use('/Producto', express.static(path.resolve('View','Producto')));
app.use('/ImgProducto', express.static(path.resolve('Uploads')));





/////paypal







