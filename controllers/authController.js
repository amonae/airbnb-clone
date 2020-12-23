const passport = require("passport");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const validator = require("email-validator");

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
      // if (!user) {
      //   return res.redirect("/auth/login");
      // }
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
  const isValidEmail = validator.validate(req.body.email);
  const email = isValidEmail ? req.body.email : null;

  if (email) {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      console.log("This user already exists!");
      res.status(400);
      return res.send("This user already exists!!!");
    }

    if (!user) {
      try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = {
          username: req.body.username,
          email: req.body.email,
          password: hashedPassword,
        };

        User.create(newUser);
        return res.send("User added!");
      } catch {
        res.redirect("/auth/signup");
      }
    }
  } else {
    res.status(400);
    return res.send("Invalid email!");
  }
};
