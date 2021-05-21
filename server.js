//using react-router

const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//add routes for API and view
app.use(routes);

//Connect to Mongo DB
mongoose.connect(process.env.MONGO_URI || "mongodb//localhost");

//Start the API server
app.listen(PORT, function () {
  console.log(`API Server listening on PORT ${PORT}`);
});
