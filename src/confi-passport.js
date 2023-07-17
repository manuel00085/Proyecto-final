const passport = require('passport')
const Localstrategy = require ('passport-local').Strategy;
const User = require("../Models/user");
const express = require("express");
const router = express.Router();

passport.use(new Localstrategy({
    usernameField: 'email',
    passwordField:'password'
}, async (email, password, done) => {
   

    // coinside 
    const userM = await User.findOne({email})
    console.log(userM)
    if (!userM){
        return done(null, false, {message:"no encontro el usuario"})
    }else{
        const match = await userM.matchPassword(password)
        if(match){
            return done(null, userM)
        }else{
            return done(null, false, {message:'constraseña incorrecta'})
        }
    }


}))

passport.serializeUser((userM, done) =>{
    done(null, userM._id)
})




passport.deserializeUser(async (id, done) => {
    try {
       
      const user = await User.findById(id);
      done(null, user);
      console.log("sirvio")
    } catch (error) {

      done(error, null);
      console.log("no sirvio")
    }
  });

router.post('/autentification', passport.authenticate('local',{
    successRedirect:"/",
    failureRedirect:"/"
    
    
  }))


  
  module.exports = router;
