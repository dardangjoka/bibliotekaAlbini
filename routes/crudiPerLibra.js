const express= require('express');
const router= express.Router();
const bookProfileModule= require("../controllers/bookprofile");
const Librat = require('../models/libra');
const isAuth= require('../middleware/auth');
const isAuthUser= require('../middleware/authUser');


router.get("/",isAuthUser.isAuthLoggedIn, isAuth.isAuth, (req,res)=>{
    res.render("dashboard/crudiPerLibra", {isAuthenticated: req.session.isLoggedIn, privilege:req.session.user.privilegji});
});
router.get('/:id',isAuthUser.isAuthLoggedIn, isAuth.isAuth ,bookProfileModule.getUpdateBookProfile);

router.post('/updatebook', isAuthUser.isAuthLoggedIn ,isAuth.isAuth, bookProfileModule.updateAbook);
module.exports=router;