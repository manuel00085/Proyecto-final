const { error } = require("console");
const express = require("express");
const { url } = require("inspector");
const routerM = express.Router();
const multer = require("multer")
const {dirname, join, extname}= require("path")




const CURRENT_DIR = dirname(__filename)
const MIMETYPES=['image/jpeg','image/png', 'image/jpg']

const multerUpload = multer({
    
    storage: multer.diskStorage({
        destination:join(CURRENT_DIR,'../Uploads'),
        filename:(req, file, cb)=>{
            const fileExtension = extname(file.originalname);
            const fileName = file.originalname.split(fileExtension)[0];
            console.log("entro en multer")

            cb(null,`${fileName}-${Date.now()}${fileExtension}`)

        }
    }) ,
    fileFilter:(req, file, cb)=>{
        if(MIMETYPES.includes(file.mimetype)) cb(null, true)
        else cb( new Error(`Only ${MIMETYPES.join(' ')} mimetypes are allowed`))
    },


    limits: {
        fieldSize: 10000000
    }
})
console.log(CURRENT_DIR)


routerM.post('/unpload', multerUpload.single('file'),(req,res)=>{
    console.log(req.file)
    console.log(CURRENT_DIR)
    console.log("entro en multer")
    const urlImg=req.file.filename
    


    res.json(urlImg)

 
    
})








module.exports = routerM;