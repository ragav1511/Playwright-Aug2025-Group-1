function findoccurrence(nums,n)
{
   
let count=0
for(let i =0;i<nums.length;i++){
    if(nums[i]==n){
        count++
    }
    
}
return n +" is present "+count+" times"
}
console.log(findoccurrence([2,3,4,2,5,2,1],2))
