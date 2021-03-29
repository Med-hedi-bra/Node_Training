const express = require("express");
const routerU = express.Router();
const userController = require("../Controllers/user");

routerU.post('/signup', userController.signup);
routerU.get('/login', userController.login);
module.exports = routerU;

