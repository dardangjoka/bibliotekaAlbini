const express= require('express');
const router= express.Router();
const Librat = require("../models/libra");

router.get("/",async (req,res)=>{
    res.render("dashboard/dashboard", {aaa1: await Librat.getAllBooks()});
});

module.exports=router;