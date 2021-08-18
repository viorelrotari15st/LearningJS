

//Create a constructor function Calculator that creates objects with 3 methods:


function Calculator(val1,val2){
    
    this.read = function() {
        this.val1= val1
        this.val2 = val2
    }

    this.sum = function(){
        return this.val1 + this.val2
    }

    this.mul = function(){
        return this.val1 * this.val2
    }
}
let calculator = new Calculator(5,2)

calculator.read();
 console.log("SUM :"  + calculator.sum())
 console.log("MUL :"  + calculator.mul())

 /* Create a constructor function Accumulator(startingValue).

Object that it creates should:

Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
The read() method should use prompt to read a new number and add it to value.
In other words, the value property is the sum of all user-entered values with the initial value startingValue.*/


function Acumulator(startingValue , next){

    this.value = startingValue;
    this.next = next//ask from prompt but ...
    this.read = function() {
        this.value += this.next;
      };
    }

let accumulator = new Acumulator(1, 6);
 accumulator.read();
 //accumulator.read();

 console.log(accumulator.value)
 //console.log(accumulator.next)