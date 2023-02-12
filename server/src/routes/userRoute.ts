const express = require('express');
const router = express.Router();

const { registerUser, userLogin, getAllUsers } = require("../controllers/userController");


router.post("/register", registerUser);
router.post('/login', userLogin)

router.get('/getallusers', getAllUsers)


module.exports = router;