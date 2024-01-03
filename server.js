const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const routes = require("./routes/index.route");
require("dotenv").config()
const app = express();

//database connection
function dbConnection() {
  const url = process.env.DB_URL;
  mongoose
    .connect(url)
    .then(() => {
      console.log("DB connected!");
    })
    .catch((error) => {
      console.log(error);
      console.log("DB NOT connected!!!");
    });
}

app.use(morgan("dev"));
app.use(express.json());
app.use("/api", routes);

app.all("*", (req, res) => {
  res.status(404).send({ message: "NO SUCH route!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  dbConnection();
  console.log(`App is running on port ${PORT}`);
});
