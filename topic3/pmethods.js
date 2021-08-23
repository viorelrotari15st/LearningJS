// let animal = {
//     eats: true
//   };
  
//   // create a new object with animal as a prototype
//   let rabbit = Object.create(animal);
  
//   console.log(rabbit.eats); // true
  
//   console.log(Object.getPrototypeOf(rabbit) === animal); // true
  
//   Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}


  let animal = {
    eats: false
  };
  
  let rabbit = Object.create(animal, {
    jumps: {
      value: true
    }
  });
  
  console.log(rabbit.jumps); // true
  console.log(rabbit.eats);


  let dictionary = Object.create(null,{
      toString :{  value(){
      return Object.keys(this).join();
        }
    }
 });

// your code to add dictionary.toString method

// add some data
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // __proto__ is a regular property key here

// only apple and __proto__ are in the loop
for(let key in dictionary) {
  console.log(key); // "apple", then "__proto__"
}

// your toString in action
console.log(dictionary); // "apple,__proto__