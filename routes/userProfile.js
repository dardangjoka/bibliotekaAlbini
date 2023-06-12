const express=require("express");
const router=express.Router();
const userdb={emriIPerdoruesit:"FilaniIFistekut", emri: "Filan", mbiemri:"Fisteku", email:"fs@gmail.com", password:"libraria12345", bio:"Pershendetje, te gjitheve", img:"img/rr.jpg"}
const auth = require('../middleware/authUser');

router.get("/", auth.isAuthLoggedIn ,(req, res)=>{

    res.render("profili/profili",{user: req.session.user,  isAuthenticated: req.session.isLoggedIn, privilege:req.session.user.privilegji});

});
module.exports=router;