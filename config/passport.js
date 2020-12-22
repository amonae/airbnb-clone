const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");

module.exports = function usePassport(passport) {
  passport.use(
    new LocalStrategy(
      { usernameField: "email" },
      function (username, password, done) {
        User.findOne({ email: username }, function (err, user) {
          if (err) {
            return done(err);
          }
          if (!user) {
            return done(null, false, { message: "Incorrect email." });
          }
          return done(null, user);
        });
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
};
