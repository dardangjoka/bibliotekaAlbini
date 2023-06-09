const express= require('express');
const router= express.Router();
const Librat = require("../models/libra");

router.get("/",async (req,res)=>{
    console.log(req.session.isLoggedIn)
    res.render("dashboard/dashboard", {aaa1: await Librat.getAllBooks(), isAuthenticated: req.session.isLoggedIn});
});

module.exports=router;