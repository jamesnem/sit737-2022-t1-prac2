// Demonstrate understanding of functions by creating a series of functions that alert the console
var async = function(){
    setTimeout(function(){log('I am coming out later although I have been called before the next one')}, 2000)
}

var adder=function(first,second){ 
    var sum=first+second
    return sum
}

var statement=function(firstWord, secondWord){
    var lol = firstWord + secondWord
    return lol
}

var log=function(msg){
    console.log("[Log] : ",msg) 
}

log("Welcome to SIT737") 

log("The sum is "+adder(9,6))

log("Hello" + statement(" James ", "Nemecek"))

async();

log("These statements will print first because of the time delay regardless that async function is called first")