//If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”


function check(question){
if(question==="ECMAScript"){
    return "Right!"
}
    return "YOU DOND KNOU ABOUT ECMAScript"

}

function checkNumber(num){
    if(num>0){
        return "less than" 
    }else if(num<0) {
      return "greater than"
    }return "equall"
    
}





function testLogin(login){
    return (login=='Employee')? 'Hello':
    (login=='Director')? 'Greetines':
    (login=='')? 'No login':
     ''
}
console.log(testLogin('Director'))