//Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

const checkSpam = str => {
 if(str.toLowerCase().includes("viagra")||str.toLowerCase().includes("xxx")){
     return true
 } 
return false
}
console.log(checkSpam('buy ViAgRA now'))
console.log(checkSpam('free xxxxx'))
console.log(checkSpam("innocent rabbit"))

const truncate = (str, len) => {
    if(str.length>=len){
      return str.slice(0, len + 1) + "..."
    }
    return str + "!"

}

console.log(truncate("What I'd like to tell on this topic is:", 20))
console.log(truncate("Hi everyone!", 20))

//We have a cost in the form "$120". That is: the dollar sign goes first, and then the number

const extractCurrencyValue = str => +str.slice(1);