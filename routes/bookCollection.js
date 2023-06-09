const express=require("express");
const router=express.Router();
const dbBook=require("../controllers/bookprofile");

const dbBooks=[ {id:1, titulli:"Beni ecen nuk vetem", autori:"Fan Noli", img:"/img/img1.jpg", zhanri:"femij"}, 
                {id:2, titulli:"Beni nashta ecen  vetem", autori:"Fan Noli", img:"/img/img1.jpg", zhanri:"femij"},
                {id:3, titulli:"Beni munde te ecen vetem", autori:"Fan Noli", img:"/img/img1.jpg", zhanri:"komedi"},
                {id:4, titulli:"Beni nuk ecen vetem", autori:"Fan Noli", img:"/img/img1.jpg", zhanri:"shkence"},
                {id:5, titulli:"Beni nuk eshte fukara", autori:"Fan Noli", img:"/img/img1.jpg", zhanri:"romantik"},
                {id:6, titulli:"Beni ecen vetem", autori:"Fan Noli", img:"/img/img1.jpg", zhanri:"romantik"},
            ];

const bookCollection=[];
router.get("/",(req, res)=>{
    res.render("librat/koleksioniLibra",{titulliIfaqes:"Te gjitha librat", librat: bookCollection, active: true, isAuthenticated: req.session.isLoggedIn})
});


router.get("/:id",(req, res)=>{
    const id=req.params.id;
    bookCollection.push(dbBooks[id-1]);
    res.redirect("/book-collection");
});
module.exports=router;