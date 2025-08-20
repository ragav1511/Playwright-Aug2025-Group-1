function launchbrowser(browsername){

if(browsername=="chrome"){
    console.log("Chrome is launched")
}else
console.log("Chrome is not launched")
}
launchbrowser("chrome")
launchbrowser("edge")

function runTest(testType){

switch(true){
    case testType=="smoke":
        console.log("Smoke Testing")
        break
    case testType=="sanity":
        console.log("Sanity Testing")
        break
    case testType=="regression":
        console.log("Regression Testing")
        break
    default:
        console.log("Smoke Testing")
}    
}
runTest("sanity")
