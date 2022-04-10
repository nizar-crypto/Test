// const express = require("express");
import express from "express";
import bodyParser from "body-parser";
import questionsRoutes from "./routes/questions.js";
// Did you mean to import ../routes/questions.js
// here we import route from routes folder then we call and run routew in app.use('question)
const app = express();
const port = 3000;

//here I installed cors and I used simple use copy/paste to enable all routes

import cors from "cors";
// var cors = require("cors"); //here i use import cors instead of var cors require("cors")

app.use(cors());

app.get("/products/:id", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80");
});

app.use(express.json()); // to define the body ,strategy compare with glitch line by line
app.use(bodyParser.json());
app.use("/questions", questionsRoutes);
app.get("/", (request, response) => {
  response.send({ status: "UP " });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
