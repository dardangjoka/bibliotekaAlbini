const express= require('express');
const router= express.Router();
const Userat = require('../models/users');
router.get("/", async (req,res)=>{
    try{
        const admins= await Userat.getAllAdmins();
        res.render("about/about",{isAuthenticated: req.session.isLoggedIn,privilege:req.session.user.privilegji, adminat:admins});

    }
    catch(err){
        console.log(err)
    }
});

module.exports=router;