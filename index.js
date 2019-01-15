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


// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))
// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

app.listen(port, function() {
  console.log("App is running on port " + port);
});