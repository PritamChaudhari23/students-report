const express = require("express");
const path = require("path");

const studentRoutes = require("./studentRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "css")));

app.use("/", studentRoutes);

module.exports = app;
