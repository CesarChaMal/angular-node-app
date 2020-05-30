const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const clientRoutes = require("./routes/client");
const userRoutes = require("./routes/user");
const app = express();
const cookieParser = require('cookie-parser');

mongoose
  // .connect("mongodb+srv://root:admin@cluster0-69rn9.mongodb.net/node-angular?retryWrites=true&w=majority")
  .connect("mongodb+srv://root:admin@cluster0-69rn9.mongodb.net/node-app")
  // .connect("mongodb://localhost/node-app")
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/images', express.static(path.join("backend/images")));
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
// for testing angular deployments
app.use('/app', express.static('dist'))
app.use('/app', express.static(path.join(__dirname, 'dist')));
app.use(cookieParser());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.get('/test.html', function (req, res) {
// app.get('/', function (req, res) {
  res.header('Content-type', 'text/html');
  return res.end('<h1>Hello, World!</h1>');
});

app.use("/api/client", clientRoutes);
app.use("/api/user", userRoutes);
module.exports = app;
