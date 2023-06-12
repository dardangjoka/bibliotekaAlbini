const express=require("express");
const router=express.Router();
const bookCollectionController = require('../controllers/bookCollectionControler');
const auth = require('../middleware/auth');


router.get("/", auth.isAuth, bookCollectionController.getAllBookCollections);
router.get("/:id", auth.isAuth, bookCollectionController.getABookToCollection);
module.exports=router;