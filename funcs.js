function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return 'Did parents allow you?';
    }
  }

//Rewrite the function using '?'
  const checkAfeOf = age => (age>18) ? true : "Did parents allow you";
  console.log(checkAfeOf(17))

  //Write a function min(a,b) which returns the least of two numbers a and b.

  const checkLess = (a,b) =>(a<=b)?a : b;
 // console.log(checkLess(10,-1))

  const pow = (a,b)=>{
    let cou = a;
      for(let i=1;i<b;i++){
           cou *= a
      }
      return cou
  }
 // console.log(pow(3,2))
//Rewrite with arrow functions
 const ask = (question, yes , no) => {
     if(confirm(question))yes();
     else no();
 }
 ask(
     "Do you agree",
     ()=>{alert("You agreed")},
     ()=>{alert("You canceled execution")}
 )