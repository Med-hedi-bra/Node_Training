const express = require("express");
const app = express();
const bP = require("body-parser");
const stuffRoute = require("./Routes/stuff")
const userRoute = require("./Routes/user")
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://user1:12345@cluster0.ermdo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bP.json());
app.use('/api/stuff',stuffRoute)
app.use('/api/auth',userRoute)
module.exports = app;
