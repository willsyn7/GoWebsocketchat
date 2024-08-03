const User = require('../models/userModel.js');
const jwt = require('jsonwebtoken');

function generateAccessToken(user) {
  const SECRET = 'hellothere';
  const token = jwt.sign(user, SECRET, { algorithm: 'HS256' }); //xxxxxx.yyyyyyyy.zzzzzzz 6678091273198327xx.hellothere.HS256
  return token;
}

const userController = {
  // userAuthorization() {},

  async userRegister(req, res, next) {
    try {
      const { username, password } = req.body;
      const user = await User.create({ username, password });
      const jwtToken = generateAccessToken({ id: user._id });

      if (user) {
        res.locals.data = { user, jwtToken };
        next();
      } else {
        res.status(404);
      }
    } catch (err) {
      return next({
        log: `userController error from userRegister ${err}`,
        status: 500,
        message: { err: 'An error occurred while registering user' },
      });
    }
  },
};

module.exports = userController;

// function generateAccessToken(user) {
//     const payload = {
//       id: user.id,
//       email: user.email
//     };

//     const secret = 'your-secret-key';
//     const options = { expiresIn: '1h' };

//     return jwt.sign(payload, secret, options);
//   }
