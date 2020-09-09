const express = require("express");
const route = express();
const People = require("../controllers/people");

route.get("/personas",People.list);
route.post("/personas",People.add);
route.patch("/personas/:id",People.update);
route.delete("/personas",People.del);

module.exports = route;