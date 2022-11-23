const data = require("./dummy.json");

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(data); // <== Will be created later
const middlewares = jsonServer.defaults({
  static: "./index.html",
});
const port = process.env.PORT || 3200; // <== You can change the port

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`Server is running on port- ${port}`);
});

server.use(middlewares);

// https://first-mock-server.herokuapp.com/dummy
