const passport = require("passport");
const User = require("../models/User");

exports.signIn = function (req, res, next) {
  passport.authenticate(
    "local",
    {
      successFlash: true,
    },
    function (err, user, info) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.redirect("/auth/login");
      }
      req.logIn(user, function (err) {
        if (err) {
          return next(err);
        }
        return res.redirect("/");
      });
    }
  )(req, res, next);
};

exports.signUp = async (req, res) => {
  let user = await User.findOne({ username: req.body.username });
  if (user) {
    return console.log("This user already exists!");
  }

  if (!user) {
    const newUser = {
      username: req.body.username,
      password: req.body.password,
    };

    User.create(newUser);
  }
  return res.send("User added!");
};
