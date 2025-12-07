let nameOfCandidate = "Someswaran"
let charOfSearch = 's'
let count = 0

for (num=0;num<nameOfCandidate.length;num++){
    if (nameOfCandidate[num] === 'S' || nameOfCandidate[num] === 's'){
        count = count + 1
    }
    
}
console.log("Number of Occurances of character 's' is : "+count)