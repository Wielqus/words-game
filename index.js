const bodyParser = require('body-parser');

const path = require("path");

const express = require('express');
const app = express();
const port = process.env.PORT || 5000

const server = require('http').Server(app);

const scrableRoutes = require("./routes/scrable");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(scrableRoutes);


app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

app.listen(port, function() {
  console.log("App is running on port " + port);
});