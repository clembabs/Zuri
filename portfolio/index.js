const express = require("express");
const app = express();

app.listen(8000, () => {
  console.log("Application started and Listening on port 8000");
});

app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/homepage.html");
});


app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/about.html");
});

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/contact.html");
});

app.get("/", (req, res) => {
    res.redirect("/home");
});