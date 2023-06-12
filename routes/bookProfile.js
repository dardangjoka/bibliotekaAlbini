const express=require("express");
const auth = require('../middleware/authUser');
const router=express.Router();
const bookProfileModule= require("../controllers/bookprofile");

router.get("/", bookProfileModule.getAllBooks);

router.get("/:id", bookProfileModule.getBookProfile);

router.post("/", auth.isAuthLoggedIn, bookProfileModule.createBook);

router.delete("/:id",auth.isAuthLoggedIn, bookProfileModule.deleteABook);

//router.get('libri/:id', bookProfileModule.getUpdateBookProfile)

module.exports=router;