const express= require('express');
const router= express.Router();
const bookProfileModule= require("../controllers/bookprofile");
const Librat = require('../models/libra');
const isAuth= require('../middleware/auth');

router.get("/", (req,res)=>{
    res.render("dashboard/crudiPerLibra", {isAuthenticated: req.session.isLoggedIn, privilege:req.session.user.privilegji});
});
router.get('/:id', isAuth.isAuth ,bookProfileModule.getUpdateBookProfile);

router.post('/updatebook',isAuth.isAuth ,bookProfileModule.updateAbook);
module.exports=router;