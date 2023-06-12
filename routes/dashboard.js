const express= require('express');
const router= express.Router();
const Librat = require("../models/libra");
const auth = require('../middleware/auth');
const authSuper = require('../middleware/authSuper');

router.get("/", auth.isAuth, authSuper.isAuthSuper ,async (req,res)=>{
    res.render("dashboard/dashboard", {aaa1: await Librat.getAllBooks(), isAuthenticated: req.session.isLoggedIn, privilege:req.session.user.privilegji});
});

module.exports=router;