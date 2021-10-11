const express = require("express");
const app = express();
const fs = require("fs");
const session = require("express-session");
const flash = require("express-flash");
// const port = process.env.PORT || 8000;
const { PORT = 3000 } = process.env;

const { User_game, User_game_biodata, User_game_history } = require("./models");
app.use(
  session({
    secret: "Buat ini jadi rahasia",
    resave: false,
    saveUninitialized: false,
  })
);
const passport = require("./lib/passport");
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static("public"));
app.use(
  express.urlencoded({
    extended: false,
  })
);
const router = require("./router");
app.use(router);

app.listen(PORT, () => {
  console.log(`Server nyala di port ${PORT}`);
});
