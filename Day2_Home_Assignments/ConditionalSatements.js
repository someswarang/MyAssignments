launchBrowser("Edge")
runTests("")
function launchBrowser(browserName){
    if (browserName === "Chrome"){
        console.log("Using Browser as : "+ browserName)
    }
    else if(browserName==="Firefox"){
        console.log("Using Browser as : "+ browserName)
    }
    else if(browserName==="Edge"){
         console.log("Using Browser as : "+ browserName)
    }
    else {
         console.log("Invalid Browser Name :"+ browserName)
    }
}
function runTests(testType){

    switch(testType){
        case 'Smoke':
              console.log("Running "+testType+" test suite for Automation Execution")  
              break
        case 'Sanity':
              console.log("Running "+testType+" test suite for Automation Execution")  
              break  
        case 'Regression':
              console.log("Running "+testType+" test suite for Automation Execution")  
              break  
        default:
              console.log("Running Smoke test suite for Automation Execution")   

    }
    
}