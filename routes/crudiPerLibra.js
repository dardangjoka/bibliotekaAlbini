const express= require('express');
const router= express.Router();
const bookProfileModule= require("../controllers/bookprofile");
router.get("/", (req,res)=>{
    res.render("dashboard/crudiPerLibra", {isAuthenticated: req.session.isLoggedIn, privilege:req.session.user.privilegji});
});
router.get('/:id',bookProfileModule.getUpdateBookProfile)
module.exports=router;