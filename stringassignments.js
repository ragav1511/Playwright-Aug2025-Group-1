//Split the string and find the length of the last word
function splitstring(string1){
let arr1=string1
let arr2=arr1.split(" ")
let len=arr2[arr2.length-1].length
console.log("The last word is "+arr2[arr2.length-1]+" with length "+len)
}
splitstring("Hello World")



//Trim the string and find the length of last word
function trimstring(string1){
let arr1=string1.trim()
let arr2=arr1.split(" ")
let length=arr2[arr2.length-1].length
return length
}
console.log("The length of last word is "+trimstring("   Hello World   "))


//Verify Anagram after removing spaces and converting to lowercase
function removespaceandconvert(string1,string2){
let arr1=string1.trim().toLowerCase().split('').sort()
let arr2=string2.trim().toLowerCase().split('').sort()

let Anagram=arr1.join('')===arr2.join('')?true:false

     if(Anagram){   

       return string1+ " and " + string2 + " are Anagram"
}else if(!Anagram){
    return string1+" and "+ string2 + " are not Anagram"

}
}
    
console.log(removespaceandconvert("  Eat  ","Ate    "))
