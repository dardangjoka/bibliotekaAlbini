const express=require("express");
const router=express.Router();
const bookProfileModule= require("../controllers/bookprofile");

router.get("/", bookProfileModule.getAllBooks);

router.get("/:id", bookProfileModule.getBookProfile);

router.post("/", bookProfileModule.createBook);

router.delete("/:id", bookProfileModule.deleteABook);

module.exports=router;