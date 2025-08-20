function gradecalc(score){
    let grade1 = "A Grade"
    let grade2 = "B Grade"
    let grade3 = "C Grade"
    let grade4 = "D Grade"
    let grade5 = "Fail"
    

    switch(true){
case (score >=90):
   return grade1
    break;
case (score>=80 && score <90):
   return grade2
    break;
case (score>=60 && score<80):
   return grade3
    break;
case (score>=35 && score< 60):
    return grade4
    break;
default:
    return grade5
    }
}


console.log(gradecalc(90))
