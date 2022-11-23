const data = require("./dummy.json");

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(data); // <== Will be created later
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200; // <== You can change the port

server.use(middlewares);
server.use(router);

server.listen(port);

server.use(middlewares);

// ========================> DEPLOYED SERVER AND WEBSITE LINKS <==============================//

// https://radiant-daffodil-a36d1e.netlify.app/
// https://first-mock-server.herokuapp.com/dummy

// ========================> DEPLOYED SERVER AND WEBSITE LINKS <==============================//
