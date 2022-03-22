var express = require('express') 
var bodyParser = require('body-parser')
var app = express()

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ 
    extended: true
})); 
app.use(bodyParser.json());

//All log errors and info to be written in log file
var Log = require('log')
, fs = require('fs')
, stream = fs.createWriteStream(__dirname + '/file.log')
, log = new Log('debug', stream);
 
  log.on('line', function(line){
    console.log(line);
  });


// Respond with "Working Application" when a GET request is made to the homepage
app.get('/', function (req, res) { 
    res.send('Working application')
})

//Create function that performs an operation between 2 values
//Throw an error if 2 values are not numbers
//Declare if statements that compare the equality of users input to appropraite operations 
const calculation = (n1, n2, op) => {
    if (Number.isNaN(n1) || Number.isNaN(n2)){
        log.error("Invalid numbers")
        throw "error";
    }
    
    else {
        if (op === "plus" || op === "add" || op === "adition" || op == "%2B"){ 
            return n1 + n2;
        }
        else if (op === "minus" || op === "subtract" || op === "-") {
            return n1 - n2;
        }
        else if (op === "multiply" || op === "times" || op === "%2A") {
            return n1 * n2;
        }
        else if (op === "divide" || op === "div" || op === "%2F") {
            return n1 / n2;
        }
        else{
            log.error("Invalid operator")
            throw "error";
        }
    }
}

//Retrieve HTML data from approrpaite routes
app.get('/calculator', function(req, res){
    try {
        const n1 = parseInt(req.query.firstValue)
        const n2 = parseInt(req.query.secondValue)
        const operation = req.query.operator

        const result = calculation(n1, n2, operation)

        res.json({statuscode: 200, data: result});
    }
    catch(e){
        res.json({statuscode: 200, data: "Error has occured, either invalid value or operator"});
    }
})

app.post('/calculator', function(req, res){
    try {
        const n1 = parseInt(req.query.firstValue)
        const n2 = parseInt(req.query.secondValue)
        const operation = req.query.operator

        const result = calculation(n1, n2, operation)

        res.json({statuscode: 200, data: result});
    }
    catch(e){
        res.json({statuscode: 200, data: "Error has occured"});
    }
})


// Listen to a particular port
var port = 8080

// Start server on port 8080
app.listen(port, ()=>{
    console.log(" [Server Activity] : Listening on port " + port)
    log.info(" [Server Activity] : Listening on port " + port)
})


