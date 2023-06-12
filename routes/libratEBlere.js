const express= require('express');
const bookCollectionController = require('../controllers/bookCollectionControler');
const router= express.Router();
const auth = require('../middleware/auth');
const authSuper = require('../middleware/authSuper');
const bookCollection = 

router.get("/",auth.isAuth, authSuper.isAuthSuper, (req,res)=>{
    
    res.render("dashboard/libratEBlere",{isAuthenticated: req.session.isLoggedIn,privilege:req.session.user.privilegji});
});

router.delete('/:id',auth.isAuth, authSuper.isAuthSuper,bookCollectionController.deleteABookCollection )
module.exports=router;