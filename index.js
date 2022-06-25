const express = require("express");
const { json } = require("express");
const flights = require("./controllers/flightController");
const models = require("./models/Flight");
const routes = require("./routes/flightRoute");
const fs = require('fs');

const app = express();

app.use(json());

app.use("/", routes);
app.use("/flights/list", flights.getFlights);

const port = process.env.PORT || 3003;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
