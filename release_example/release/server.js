const app = require("./backend/app");
const debug = require("debug")("node-angular");
const http = require("http");
const fs = require('fs');
const gulpUtil = require('gulp-util');

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

const onListeningHttp = () => {
  const addrHttp = httpServer.address();
  const bindHttp = typeof addrHttp === "string" ? "pipe " + addrHttp : "port " + portHttp;
  debug("Listening on " + bindHttp);
  console.log(gulpUtil.colors.green("Listening on " + bindHttp));
};

const portHttp = normalizePort(process.env.PORT || "3000");
// console.log('normalizePort http: ' + portHttp);

app.set("httpPort", portHttp);

const httpServer = http.createServer(app);
httpServer.on("error", onErrorHttp);
httpServer.on("listening", onListeningHttp);
httpServer.listen(portHttp);
