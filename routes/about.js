const express= require('express');
const router= express.Router();

router.get("/", (req,res)=>{
    res.render("about/about",{isAuthenticated: req.session.isLoggedIn});
});

module.exports=router;