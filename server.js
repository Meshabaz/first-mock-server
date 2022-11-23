const data = require("./db.js");

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(data); // <== Will be created later
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200; // <== You can change the port

server.use(middlewares);
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);

server.listen(port);

server.use(middlewares);
