
//A maximal subarray

const getMaxsubSum = arr =>{
    let finalSum = 0
    for(let i=0; i < arr.length; u++){
        let startSum = 0
        for (let j = i; j < arr.length; j++){
            startSum += arr[j]
            //if(finalSum>=startSum){
                //finalSum = finalSum
            
            finalSum = Math.max(finalSum, startSum);
        }
    }
    return finalSum


}
 //console.log(getMaxsubSum(-1, 2, 3, -9))

 //methods

 // remove dublicates

 const removeDublicates = arr => arr.filter((a,b)=>arr.indexOf(a)===b);

//console.log(removeDublicates(["Hare", "Krishna", "Hare", "Krishna",
//"Krishna", "Krishna", "Hare", "Hare", ":-O"
//]))

//Translate border-left-width to borderLeftWidth
const camelize = str => {
   let toArr = str.split('-')
   let map = toArr.map((elm, index)=> index==0 ? elm : elm[0].toUpperCase()+elm.slice(1))
   //console.log(map)
   return map.join('') 
}
camelize("background-color")


//Write a function filterRange(arr, a, b) that gets an array arr, 
//looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

const filterRange = (arr , a , b) => {
    return arr.filter(
        value => a <= value && value <= b  
    );
}
//console.log(filterRange([5, 3, 8, 1], 1,4));


const filterRangePlace = (arr , a , b) => {
    for(let i = 0; i < arr.length; i++){
         let temp = arr[i]
        if(temp < a || temp > b){
            arr.splice(i, 1);
            i--;
        }
    }
} 
//console.log(filterRangePlace([5, 3, 8, 1], 1,4));

//We’d like to have a sorted copy of it, but keep arr unmodified.
//Create a function copySorted(arr) that returns such a copy.

const copySorted = arr => {
    return [...arr].sort()
}
let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

//console.log( sorted );
//console.log( arr );
