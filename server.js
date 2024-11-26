projectData = {};

const express = require('express');
const app = express();
/* Middleware*/
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 5000;
const server = app.listen(port, listening);

function listening () {
    console.log('Server Running');
    console.log(`running on localhost: ${port}`);
}

// Get route
app.get('/all', sendData);

function sendData(req, res) {
    res.send(projectData);
}

// Post route
app.post('/add', addData);

function addData(req, res) {
    try {
        const newObject = {
            date: req.body.date,
            temp: req.body.temp,
            content: req.body.content
        };
        projectData['data'] = newObject;

        console.log('Data received and stored:', projectData);
    } catch (error) {
        console.error('Error handling POST request:', error);
    }
}
