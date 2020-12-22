const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = function usePassport(passport) {
  passport.use(
    new LocalStrategy(
      { usernameField: "email" },
      function (username, password, done) {
        User.findOne({ email: username }, async function (err, user) {
          if (!user) {
            return done(null, false, {
              message: "There's no user with that email.",
            });
          }

          try {
            if (await bcrypt.compare(password, user.password)) {
              return done(null, user);
            } else {
              console.log("INCORRECT PASSWORD");
              return done(null, false, { message: "Incorrect password" });
            }
          } catch (err) {
            return done(err);
          }
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
