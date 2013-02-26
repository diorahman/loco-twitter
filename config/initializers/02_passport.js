var passport = require('passport')
var TwitterStrategy = require('passport-twitter').Strategy

passport.use(new TwitterStrategy({
    consumerKey: 'pD88diCCbFT9ZLNxv973HQ',
    consumerSecret: 'jTt6viqNzOL4mYiFhNuJJmmq6FmGsJJMao6ztJsze0',
    callbackURL: "/auth/twitter/callback"
  },
  function(token, tokenSecret, profile, done) {
  	/*console.log(token)
  	console.log(tokenSecret)
  	console.log(profile)*/
  	done(null, {id: profile.id})
  }
))

passport.serializeUser(function(user, done) {
  	done(null, user.id);
})

passport.deserializeUser(function(id, done) {
  /*User.findById(id, function(err, user) {
    done(err, user);
  })*/
})
