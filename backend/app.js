const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const ejs = require('ejs');
const mongoose = require('mongoose');
const _ = require('lodash');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
// render 5 jokes: 
const jokes = [
    {
      id: 1,
      title: "Why don't scientists trust atoms?",
      content: "Because they make up everything!"
    },
    {
      id: 2,
      title: "Did you hear about the mathematician who's afraid of negative numbers?",
      content: "He'll stop at nothing to avoid them."
    },
    {
      id: 3,
      title: "Why did the scarecrow win an award?",
      content: "Because he was outstanding in his field."
    },
    {
      id: 4,
      title: "Why did the bicycle fall over?",
      content: "Because it was two tired!"
    },
    {
      id: 5,
      title: "How does a penguin build its house?",
      content: "Igloos it together!"
    }
  ];
  
  
  

// Routes 
app.get('/api/jokes', (req, res) => {
  res.send(jokes);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});


// notes for the next session with code: 
/*
    i have a valid code for frontend... but it still may involve some modifications.
    FOR BACKEND: 
    i. schemas: 
    we have to define a list and a schema on mongo db named: NOTES

    ii. contents of schema: 
    that NOTES must include an id, TITLE, and CONTENT

    iii. parths and proxies: 
    i would have define paths and proxies, /api/notes; 
    i would have to retrieve data when the above route is tapped... 
    i would have to define a route too for DELETE... which would be triggered upon clicking the BIN BUTTON on frontend. 
*/
