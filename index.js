require("dotenv").config();
const express = require("express");
const cors = require("cors");
const client = require("./db/client");
const usersRouter = require("./routers/usersRouter");
const productsRouter = require("./routers/productsRouter");
const ordersRouter = require("./routers/ordersRouter");

const app = express();
const port = 8800;

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"]
  })
);

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use(express.json());

(async () => {
  try {
    await client.connect();
    app.use("/users", usersRouter);
    app.use("/products", productsRouter);
    app.use("/orders", ordersRouter);
  } catch (err) {
    console.log("There was some error", err);
  } finally {
    app.get("/", (req, res) => {
      res.send("Mobile Reseller Server 2, Yeh!");
    });
    app.listen(port, () => {
      console.log("server is running on", port);
    });
  }
})();
