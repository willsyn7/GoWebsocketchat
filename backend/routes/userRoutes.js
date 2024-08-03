const express = require('express');
const router = express.Router();
const { userRegister } = require('../controllers/userController.js');

//router.post('/login', userAuthorization, (req, res) => {});

router.post('/register', userRegister, (req, res) => {
  res.status(200).json(res.locals.data);
});

module.exports = router;
