const express=require("express");
const auth = require('../middleware/auth');
const router=express.Router();
const bookProfileModule= require("../controllers/bookprofile");

router.get("/", bookProfileModule.getAllBooks);

router.get("/:id", bookProfileModule.getBookProfile);

router.post("/", auth.isAuth, bookProfileModule.createBook);

router.delete("/:id",auth.isAuth, bookProfileModule.deleteABook);

//router.get('libri/:id', bookProfileModule.getUpdateBookProfile)

module.exports=router;