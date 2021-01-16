require('dotevn').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const utils = require('./utils');

const app = express();
const port = process.env.PORT || 4000;

const userData = {
  userId: "123456",
  password: "123456",
  name: "Olivia Park",
  email: "olivia.park1346@gmail.com",
  isAdmin: true
}

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// middlerware to see if JWT token exists and verifies it does exist
app.use(function(req, res, next) {
  var token = req.headers['authorization'];
  if (!token) return next();

  token = token.replace('Bearer ', '');
  jwt.verify(token, process.env.JWT_SECRET, function(err, user) {
    if (err) {
      return res.status(401).json({
        error: true,
        message: `Invalid user.`
      });
    } else {
      req.user = user;
      next();
    }
  });
});

// request handlers
app.get('/', (req, res) => {
  if (!req.user) return res.status(401).json({ success: false, message: `Invalid user to access it.` });
  res.send(`Welcome to the Kindness Journal ${req.user.name}`);
});

// validate user credentials
app.post('/users/signin', function(req, res) {
  const user = req.body.email;
  const pwd = req.body.password;

  // 400 status if username/password do not exist
  if (!user || !pwd) {
    return res.status(400).json({
      error: true,
      message: `Email or password is required.`
    });
  }

  // 401 status if credentials do not match
  if (user !== userData.email || pwd !== userData.password) {
    return res.status(401).json({
      error: true,
      message: `Email or password is incorrect.`
    });
  }

  // token generation
  const token = utils.generateToken(userData);
  // get basic user details
  const userObj = utils.getCleanUser(userData);
  return res.json({ user: userObj, token });
});

// verify token
app.get('/verifyToken', function (req, res) {
  var token = req.query.token;
  if(!token) {
    return res.status(400).json({
      error: true,
      message: `Token is required`
    });
  }

  // check token that was passed by decoding token using secret
  jwt.verify(token, process.env.JWT_SECRET, function(err, user) {
    if (err) return res.status(401).json({
      error: true,
      message: `Invalid token.`
    });

    // return 401 if user email doesn't match
    if (user.email !== userData.email) {
      return res.status(401).json({
        error: true,
        message: `Invalid user.`
      });
    }

    // get basic user details
    var userObj = utils.getCleanUser(userData);
    return res.json({ user: userObj, token });
  });
});

app.listen(port, () => {
  console.log(`Server started on: ${port}`);
});

