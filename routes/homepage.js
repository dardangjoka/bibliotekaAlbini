const express=require("express");
const router=express.Router();
const bookController=require("../controllers/bookprofile");

router.get("/",bookController.getAllBooks);
module.exports=router;