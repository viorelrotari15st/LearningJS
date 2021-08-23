//Use the for loop to output even numbers from 2 to 10.
function evenNum(stop){
    let arr = [];
    for(i=1;i<=stop;i++){
        if(i%2 == 0){
            arr.push(i);
        }

    }return arr

}
 //console.log( evenNum(100))

 //Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

 for (let i = 0; i < 3; i++) {
    //console.log( `number ${i}!` );
  }

   let i=0;
  while(i<3){
   // console.log( `number ${i}!` );
    i++
  }

  // Output prime numbers

  const primeNumberList = stop =>{
      let arr = [2]
      for(let i= 3; i<stop; i++){
          if(isPrime(i)){
              arr.push(i)
          }
      }return arr
  }

  const isPrime = num => {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false
    return num > 1
  }

  console.log(primeNumberList(100))