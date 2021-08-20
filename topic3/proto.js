let animal = {
    eats: true,
    drink: false,
    walk(){
       return "walking"
    }
  };
  let rabbit = {
    jumps: true,
    __proto__:animal
  };
  let longEar = {
    earLength: 10,
    __proto__: rabbit
  };
  //rabbit.__proto__ = animal; // (*)
  rabbit.walking = function() {
    console.log("Rabbit! Bounce-bounce!");
  };
  
  // we can find both properties in rabbit now:
  //console.log( rabbit.drink ); // true (**)
  //console.log( rabbit.jumps ); // true
  //console.log(rabbit.walk())
  //console.log(longEar.walking())

  let user = {
    name: "John",
    surname: "Smith",
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    },
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    }
  };
  let admin = {
    __proto__:user,
    isAdmin: true
  };
  //admin.fulName = "ion "
  for(let prop in admin){
  let isOwn = admin.hasOwnProperty(prop)
  if(isOwn){
     // console.log("isown :" +  prop)
  } //console.log( "not :" + prop)
  }

//console.log(user.fullName)
//console.log(Object.keys(user))
//console.log(admin.fullName)

//task2 
/*Use __proto__ to assign prototypes in a way that any property lookup will follow the path: 
pockets → bed → table → head. For instance, pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).
Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.
*/
let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3,
    __proto__: head
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
  };
  
  let pockets = {
    money: 2000,
    __proto__: bed
  };
 //We have two hamsters: speedy and lazy inheriting from the general hamster objec
//When we feed one of them, the other one is also full. Why? How can we fix it?
  let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    },
     eatt() {
       return this.stomach;
    }
  };
  
  let speedy = {
    __proto__: hamster,
    stomach: []
  };
  
  let lazy = {
    __proto__: hamster,
    stomach: []
  };
  
  // This one found the food
  speedy.eat("apple");
  console.log( speedy.stomach ); 
  console.log( lazy.stomach ); 