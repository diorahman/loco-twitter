var locomotive = require('locomotive')
  , Controller = locomotive.Controller, 
  passport = require('passport')
  ;

var AuthController = new Controller();

AuthController.twitter = function() {
  // does nothing, only a placeholder for the following hook.
};
AuthController.before('twitter', passport.authenticate('twitter'));

AuthController.callback = function() {
  // This will only be called when authentication succeeded.
  
  this.redirect('/')
}
AuthController.before('callback', passport.authenticate('twitter'));

module.exports = AuthController;
