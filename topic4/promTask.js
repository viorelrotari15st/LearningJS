// let promise = new Promise(function(resolve, reject) {
//     resolve(1);
  
//     setTimeout(() => resolve(2), 1000);
//   });
  
  //promise.then(console.log()); //1



   function delay(ms) {
      return new Promise(resolve => setTimeout(resolve , ms));
   }
  
   delay(3000).then(() => console.log('runs after 3 seconds'));