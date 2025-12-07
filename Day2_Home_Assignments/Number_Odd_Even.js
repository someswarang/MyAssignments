let userInput
userInput = 56
NumberIsOddOrEven(userInput)
function NumberIsOddOrEven(userInput){
    if (userInput%2==0){
        console.log ("Provided Number : "+userInput+" is an even number")
    }
    else{
        console.log("Provided Number : "+userInput+" is an odd number")
    }
}