let userInput
userInput = 100
NumberType(userInput)
function NumberType(userInput){
    if (userInput>0){
        console.log ("Provided Number : "+userInput+" and it is a Positive Number")
    }
    else if(userInput<0){
        console.log ("Provided Number : "+userInput+" and it is a Negative Number")
    }
    else{
        console.log ("Provided Number : "+userInput+" and it's a neutral")
    }
}