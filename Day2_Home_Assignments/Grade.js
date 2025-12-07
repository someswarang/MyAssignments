let studentMark
studentMark = 100
gradeEvaluation(studentMark)
function gradeEvaluation(studentMark){
    switch(true){
        case studentMark >= 95 && studentMark <= 100:
              console.log("Student Mark is : "+studentMark+" and Grade is : O+")  
              break
        case studentMark >= 90 && studentMark <= 94:
              console.log("Student Mark is : "+studentMark+" and Grade is : A")    
              break
        case studentMark >= 70 && studentMark <= 89:
              console.log("Student Mark is : "+studentMark+" and Grade is : B")    
              break  
        case studentMark >= 50 && studentMark <= 69:
              console.log("Student Mark is : "+studentMark+" and Grade is : C")    
              break
        case studentMark >= 35 && studentMark <= 49:
              console.log("Student Mark is : "+studentMark+" and Grade is : D")    
              break 
        case studentMark <= 34 && studentMark >= 0 :
              console.log("Student Mark is : "+studentMark+" and Grade is : Failed")    
              break     
        default:
              console.log("Please enter the valid mark to calculate the grade of the student")   

    }
}