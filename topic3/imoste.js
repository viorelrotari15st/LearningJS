// overriding constructor
// class Animal {

//     constructor(name) {
//       this.speed = 0;
//       this.name = name;
//     }
  
//     // ...
//   }
  
//   class Rabbit extends Animal {
  
//     constructor(name, earLength) {
//       super(name);
//       this.earLength = earLength;
//     }
  
//     // ...
//   }
  
//   // now fine
//   let rabbit = new Rabbit("White Rabbit", 10);
//   console.log(rabbit.name); // White Rabbit
//   console.log(rabbit.earLength); // 10

//Here’s the code with Rabbit extending Animal.
//Unfortunately, Rabbit objects can’t be created. What’s wrong? Fix it

class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
    super(name);//solution
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
console.log(rabbit.name);