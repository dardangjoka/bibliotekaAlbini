const express=require("express");
const router=express.Router();
const bookCollectionController = require('../controllers/bookCollectionControler');


router.get("/", bookCollectionController.getAllBookCollections);
router.get("/:id",bookCollectionController.getABookToCollection);
module.exports=router;