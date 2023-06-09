const express= require('express');
const router= express.Router();
const bookProfileModule= require("../controllers/bookprofile");
const Librat = require('../models/libra');
const auth = require('../middleware/auth');
const authSuper = require('../middleware/authSuper');


router.get("/",auth.isAuth, authSuper.isAuthSuper, (req,res)=>{
    res.render("dashboard/crudiPerLibra", {isAuthenticated: req.session.isLoggedIn, privilege:req.session.user.privilegji});
});
router.get('/:id',auth.isAuth, authSuper.isAuthSuper ,bookProfileModule.getUpdateBookProfile);

router.post('/updatebook', auth.isAuth, authSuper.isAuthSuper, bookProfileModule.updateAbook);
module.exports=router;