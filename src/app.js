const express = require("express")
const routes = require("./routes")

class App {
  constructor() {
    this.server = express();
  }

  middlewares() {
    this.server.use(express.json()) // to use req with JSON format
  }

  routes() {
    this.server.use(routes)
  }
}

module.exports = new App().server