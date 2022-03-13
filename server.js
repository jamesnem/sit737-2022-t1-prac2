var express = require('express') 
var app = express()

// Create a function that returns the current time
function getTime(){
    var date = new Date();

    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    return hours + ":" + minutes + ":" + seconds
}

// Alert console when user requests home page
app.use(function (req, res, next) {
    console.log(getTime() + ' [Server Activity] : Page has been requested')
    next();
})

// Respond with "Working Application" when a GET request is made to the homepage
app.get('/', function (req, res) { 
    res.send('Working application')
})

// Listen to a particular port
var port = 8080

// Start server on port 8080
app.listen(port, ()=>{
    console.log(getTime() + " [Server Activity] : Web server started on port " + port)
})