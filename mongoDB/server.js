require('dotenv').config()
const mongoose = require("mongoose");


const express = require('express');
const Fitnest = require('./models/fitnest');

const app = express();
// app.use(cors());

app.use(express.json());

const port = 30049;
const uri = process.env.DATABASE_URL ;

mongoose.connect(uri)
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfuly");
});
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allow specific HTTP methods
    // res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow specific headers
    next();
});


app.get("/userlist", async (req, res) => {
    try {
        const fitnests = await Fitnest.find({});
        res.json(fitnests);    
    } catch (err) {
        console.error("Error fetching fitnests:", err);
        res.status(500).send("Error fetching fitnests");
    }
});

app.post("/userChallenge", async(req, res) => {
    try {
        console.log("req.body: ", req.body);
        const fitnests = new Fitnest(req.body); // Create a new Sublets object directly from req.body

        await fitnests.save(); // Save the sublets object to the database
        res.send("Fitnest added"); // Send a success response 
    } catch(err) {
        console.log("error catched: ", err);
    }
})
  

app.listen(port, () => {
    console.log(`app is listening at http://localhost:${port}`);
});


