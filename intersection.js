function intersection(arr1,arr2){
let arr3=[]
let arr4=[]

for (let i=0;i<arr1.length;i++)
{
for (let j=0;j<arr2.length;j++)
    {
if(arr1[i]==arr2[j]){
let alreadyincommon =false
for(let k=0;k<arr3.length;k++){
    if(arr1[i]==arr3[k]){
        alreadyincommon=true
        break
    }
}  
if(!alreadyincommon){ 
arr3.push(arr1[i])
}
}
}
    
 }

 for(i=0;i<arr1.length;i++){
let isincommon=false
for(j=0;j<arr3.length;j++){
if(arr1[i]==arr3[j]){
isincommon=true
break
}
}
if(!isincommon){
let isinuncommon=false
for(k=0;k<arr4.length;k++){
if(arr4[k]==arr1[i])
{
isinuncommon=true
break
}
}
if(!isinuncommon){
arr4.push(arr1[i])
}
}
 }
for(i=0;i<arr2.length;i++){
let isincommon=false
for(j=0;j<arr3.length;j++){
if(arr2[i]==arr3[j]){
isincommon=true
break
}
}
if(!isincommon){
let isinuncommon=false
for(k=0;k<arr4.length;k++){
if(arr2[i]==arr4[k])
{
isinuncommon=true
break
}
}
if(!isinuncommon){
arr4.push(arr2[i])
}
}
}
 console.log("Common elements are "+arr3)
console.log("Uncommon elements are "+arr4)
}

intersection([2,3,4,5,1,1],[4,5,6,1])
