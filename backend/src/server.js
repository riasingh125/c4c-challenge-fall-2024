import express from 'express';
import mongoose from 'mongoose';
//import bodyParser from 'body-parser';

/*
File sets up and starts the Express server
configures middleware , connects to MongoDB, and sets up routes

*/
import routeParters from './routes/partners.js';

const app = express();
const port = 4000;

const mongoURI = 'mongodb://localhost:27017/partnersDB';

mongoose.connect(mongoURI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


// Some partner data
const partners = {
  "sftt": {
    "thumbnailUrl": "https://c4cneu-public.s3.us-east-2.amazonaws.com/Site/sfft-project-page.png",
    "name": "Speak For The Trees",
    "description": "Speak for the Trees Boston aims to improve the size and health of the urban forest in the greater Boston area, with a focus on under-served and under-canopied neighborhoods. They work with volunteers to inventory (collect data) trees, plant trees, and educate those about trees. C4C has built a tree stewardship application for SFTT that allows users to participate in conserving Boston's urban forest. Across Boston, hundreds of trees have been adopted and cared for.",
  }
}

/* 
  APPLICATION MIDDLEWARE
  This section contains some server configuration.
  You will likely not need to change anything here to meet the requirements.
  (but you are welcome to, if you'd like)
*/

// Parse request bodies as JSON
app.use(express.json())
// Enable CORS for the frontend so it can call the backend
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
  next();
})

/*
  APPLICATION ROUTES
*/

app.use('/partners', routeParters);

app.get('/', (req, res) => {
  res.status(200).send(partners);
})

// Start the backend
app.listen(port, () => {
  console.log(`Express server starting on port ${port}!`);
})