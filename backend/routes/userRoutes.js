const express = require('express');
const router = express.Router();
const { userRegister, userLogin } = require('../controllers/userController.js');

router.post('/login', userLogin, (req, res) => {
  res.status(200).json(res.locals.data);
});

router.post('/register', userRegister, (req, res) => {
  res.status(200).json(res.locals.data);
});

module.exports = router;
