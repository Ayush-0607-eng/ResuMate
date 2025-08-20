const express = require("express");

express()
  .get("/", (req, res) => {
    res.send("hello homie!"); // sends to browser
  })
  .listen(3000, () => {
    console.log("Running on port 3000"); // shows in terminal
  });
