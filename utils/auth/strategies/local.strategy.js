const { Strategy } = require('passport-local');

const AuthService = require('../../../services/auth.service');
const service = new AuthService();

const LocalStrategy = new Strategy(
  {
    usernameField:'email',
    passwordField:'password'
  },
  async (email, password, done) => {
    try {
      const user = await service.getUser(email, password);
      done(null,user);
    } catch (err) {
      done(err, false); // si algo sale mal, mando el done con el error y en false
    }
  }
);

module.exports = LocalStrategy;