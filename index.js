const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { routes } = require("./src/routes");
require("dotenv").config();

const PORT = process.env.PORT;
const connection_string = process.env.CONNECTION_STRING;

mongoose
  .connect(connection_string, {
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes.forEach((item) => {
  app.use(item, require(`./src/routes/${item}`));
});

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});
