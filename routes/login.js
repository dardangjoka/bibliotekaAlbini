const express = require('express');
const router = express.Router();
const logInController = require('../controllers/loginController');


router.get("/",logInController.getLogIn);

router.post("/", logInController.postLogIn)

router.post("/logout", logInController.postLogout)

module.exports=router;