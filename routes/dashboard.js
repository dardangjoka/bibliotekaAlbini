const express= require('express');
const router= express.Router();
const Librat = require("../models/libra");
const auth = require('../middleware/auth');
router.get("/",auth.isAuth ,async (req,res)=>{
    res.render("dashboard/dashboard", {aaa1: await Librat.getAllBooks(), isAuthenticated: req.session.isLoggedIn});
});

module.exports=router;