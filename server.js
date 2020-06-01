// import app, { set } from "./backend/app";
// const debug = require("debug")("node-angular");
// import { createServer } from "http";
const app = require("./backend/app");
const debug = require("debug")("node-angular");
const http = require("http");
const https = require('https');
const fs = require('fs');
const gulpUtil = require('gulp-util');
const key = fs.readFileSync('./backend/security/id_rsa_key.pem', 'utf8');
const cert = fs.readFileSync('./backend/security/id_rsa.crt', 'utf8');

const https_options = {
  key: key,
  cert: cert
};

const normalizePort = val => {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
};

const onErrorHttp = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const addrHttp = httpServer.address();
  const bindHttp = typeof addrHttp === "string" ? "pipe " + addrHttp : "port " + portHttp;
  switch (error.code) {
    case "EACCES":
      // console.error(bind + " requires elevated privileges");
      console.log(gulpUtil.colors.red(bindHttp + " requires elevated privileges"));
      process.exit(1);
      break;
    case "EADDRINUSE":
      // console.error(bind + " is already in use");
      console.log(gulpUtil.colors.red(bindHttp + " is already in use"));
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onErrorHttps = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const addrHttps = httpsServer.address();
  const bindHttps = typeof addrHttps === "string" ? "pipe " + addrHttps : "port " + portHttps;
  switch (error.code) {
    case "EACCES":
      // console.error(bindHttps + " requires elevated privileges");
      console.log(gulpUtil.colors.red(bindHttps + " requires elevated privileges"));
      process.exit(1);
      break;
    case "EADDRINUSE":
      // console.error(bindHttps + " is already in use");
      console.log(gulpUtil.colors.red(bindHttps + " is already in use"));
      process.exit(1);
      break;
    default:
      throw error;
  }
};

/*
const onError = (server, port, error) => {
  console.log(error);
  if (error.syscall !== "listen") {
    throw error;
  }
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  switch (error.code) {
    case "EACCES":
      // console.error(bind + " requires elevated privileges");
      console.log(gulpUtil.colors.red(bind + " requires elevated privileges"));
      process.exit(1);
      break;
    case "EADDRINUSE":
      // console.error(bind + " is already in use");
      console.log(gulpUtil.colors.red(bind + " is already in use"));
      process.exit(1);
      break;
    default:
      throw error;
  }
};
*/

/*
const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  switch (error.code) {
    case "EACCES":
      // console.error(bind + " requires elevated privileges");
      console.log(gulpUtil.colors.red(bind + " requires elevated privileges"));
      process.exit(1);
      break;
    case "EADDRINUSE":
      // console.error(bind + " is already in use");
      console.log(gulpUtil.colors.red(bind + " is already in use"));
      process.exit(1);
      break;
    default:
      throw error;
  }
};
*/

const onListeningHttp = () => {
  const addrHttp = httpServer.address();
  const bindHttp = typeof addrHttp === "string" ? "pipe " + addrHttp : "port " + portHttp;
  debug("Listening on " + bindHttp);
  console.log(gulpUtil.colors.green("Listening on " + bindHttp));
};

const onListeningHttps = () => {
  const addrHttps = httpsServer.address();
  const bindHttps = typeof addrHttps === "string" ? "pipe " + addrHttps : "port " + portHttps;
  debug("Listening on " + bindHttps);
  console.log(gulpUtil.colors.green("Listening on " + bindHttps));
};

/*
const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  // debug("Listening on " + bind);
  console.log(gulpUtil.colors.green("Listening on " + bind));
};
*/

const portHttp = normalizePort(process.env.PORT || "3000");
// console.log('normalizePort http: ' + portHttp);

const portHttps = normalizePort(process.env.PORT || "4443");
// console.log('normalizePort https: ' + portHttps);

app.set("httpPort", portHttp);
app.set("httpsPort", portHttps);

// let server;
// let port;

const httpServer = http.createServer(app);
// httpServer.on("error", onError);
httpServer.on("error", onErrorHttp);
// httpServer.on("listening", onListening);
httpServer.on("listening", onListeningHttp);
httpServer.listen(portHttp);
// server = httpServer;
// port = portHttp;

const httpsServer = https.createServer(https_options, app);
// httpsServer.on("error", onError);
httpsServer.on("error", onErrorHttps);
// httpsServer.on("listening", onListening);
httpsServer.on("listening", onListeningHttps);
httpsServer.listen(portHttps);
// server = httpsServer;
// port = portHttps;
