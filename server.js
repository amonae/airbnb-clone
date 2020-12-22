const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
const colors = require("colors");
const passport = require("passport");
const session = require("express-session");
const connectDB = require("./config/db");
const app = express();
const usePassport = require("./config/passport");
app.use(express.urlencoded({ extended: false }));
dotenv.config({ path: "./config/config.env" });

app.use(morgan("dev"));

connectDB();

//=============== PASSPORT ================

// passport config
usePassport(passport);

//=============== OTHER MIDDLEWARE ================

//=============== EXPRESS ================

// sessions middleware
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

//=============== ROUTES ===============

const exampleRoute = require("./routes/example");
const { ensureAuth, ensureGuest } = require("./middleware/auth");

app.get("/", (req, res) => res.send("HOME"));
// app.get("/auth/login", (req, res) => res.send("LOGIN PAGE"));
app.get("/auth/failed", (req, res) => res.send("FAILED!!!"));

app.get("/auth/signup", (req, res) => res.send("REGISTER NOW"));
app.get("/auth/welcome", (req, res) => res.send("WELCOME USER"));
app.get("/auth/login", (req, res) => res.send("LOGIN NOW"));

app.get("/protected", ensureAuth, (req, res) => {
  res.send("YOU MADE IT THROGUH!");
});

app.use("/api/v1/example", exampleRoute);
app.use("/auth", require("./routes/auth"));

//=============== PORT =================

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port: ${PORT}`.yellow
      .bold
  )
);
