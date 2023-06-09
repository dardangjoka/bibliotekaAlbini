const express=require("express");
const router=express.Router();
const userdb={emriIPerdoruesit:"FilaniIFistekut", emri: "Filan", mbiemri:"Fisteku", email:"fs@gmail.com", password:"libraria12345", bio:"Pershendetje, te gjitheve", img:"img/rr.jpg"}

router.get("/",(req, res)=>{
    res.render("profili/profili",{user: userdb,  isAuthenticated: req.session.isLoggedIn});

});
module.exports=router;