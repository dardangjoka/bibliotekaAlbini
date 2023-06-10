const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerContorller');
const auth = require('../middleware/auth');

router.get('/', registerController.getRegister);
router.post('/', registerController.postRegister);

module.exports = router;

