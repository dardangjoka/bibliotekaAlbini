const express= require('express');
const router= express.Router();

router.get("/", (req,res)=>{
    res.render("dashboard/dashboard");
});

module.exports=router;