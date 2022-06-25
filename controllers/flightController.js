const fs = require("fs");
const dataPath = require("../flight_data.json"); // path to our JSON file

// util functions
const saveFlightData = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync(dataPath, stringifyData);
};
const getFlightData = () => {
    
    
  const jsonData = fs.readFileSync(dataPath, "utf8");
  console.log(jsonData);
  return JSON.parse(jsonData);
};


//Controllers
const createFlight =  (req, res) => {
 
    var existingFlights = getFlightData();
    const newFlightId = Math.floor(100 + Math.random() * 900)
 
    existingFlights[newFlightId] = req.body
   
    console.log(existingFlights);
    saveFlightData(existingFlights);
    res.send({success: true, msg: 'account added successfully'})
};

const getFlights =  (req, res) => {
    const flights = getFlightData()
    console.log(flights)
    res.send(flights)
  
};

const updateFlight =  (req, res) => {
    var existingFlights = getFlightData()
  fs.readFile(dataPath, 'utf8', (err, data) => {
    const accountId = req.params['id'];
    existingFlights[accountId] = req.body;
    saveFlightData(existingFlights);
    res.send(`flights with id ${accountId} has been updated`)
  }, true);
};

const deleteFlight =  (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        var existAccounts = getFlightData()
        const flightId = req.params['id'];
        delete existAccounts[flightId]; 
        saveFlightData(existAccounts);
        res.send(`accounts with id ${flightId} has been deleted`)
      }, true);
};



  

module.exports = {
 createFlight,
 getFlights,
 updateFlight,
 deleteFlight
};
