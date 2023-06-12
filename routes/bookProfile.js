const express=require("express");
const auth = require('../middleware/auth');
const authSuper = require('../middleware/authSuper');
const router=express.Router();
const bookProfileModule= require("../controllers/bookprofile");

router.get("/", bookProfileModule.getAllBooks);

router.get("/:id", bookProfileModule.getBookProfile);

router.post("/", auth.isAuth, authSuper.isAuthSuper, bookProfileModule.createBook);

router.delete("/:id", auth.isAuth, authSuper.isAuthSuper, bookProfileModule.deleteABook);

//router.get('libri/:id', bookProfileModule.getUpdateBookProfile)

module.exports=router;