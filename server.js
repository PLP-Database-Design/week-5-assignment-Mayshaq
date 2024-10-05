//importing the necessary dependancies
const express = require('express')
const app = express()
const mysql = require('mysql2')
const dotenv = require('dotenv')

const app = express()
dotenv.config()

// create connection
const DB = mysql.createConnection({
     host: process.env.DB_HOST,
     password: process.env.DB_PASSWORD,
     username: process.env.DB_USERNAME,
     database: process.env.DB_NAME 
})
// declare the port and listen to the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log()
})

// Question 1 goes here
app.get('/patients', (req, res) => {
    res.json(patients);
});



// Question 2 goes here
app.get('/providers', (req, res) => {
    res.json(providers);
});


// Question 3 goes here
app.get('/patients/:firstName', (req, res) => {
    const firstName = req.params.firstName;
    const filteredPatients = patients.filter(patient => patient.first_name === firstName);
    res.json(filteredPatients);
});



// Question 4 goes here
app.get('/providers/:specialty', (req, res) => {
    const specialty = req.params.specialty;
    const filteredProviders = providers.filter(provider => provider.provider_specialty === specialty);
    res.json(filteredProviders);
});



// listen to the server
const PORT = 3000
app.listen(PORT, () => {
  console.log(`server is runnig on http://localhost:${PORT}`)
})

//test the connection
db.connect((err) => {
    //connection not successful
    if(err) {
        return console.log("Error connecting to MYSQL",err)
    }
    //connection successful
    console.log("MYSQL connection successful")
})