

function Calculator(){
    
  this.calculate = function(str) {
      let splitTeOperation = str.split('').find(elm => elm === "+" || elm ==="-");
      
      if(splitTeOperation === "+"){
        let temp = str.split('+')   
        return parseInt(temp[0]) + parseInt(temp[1])
      } else {
        let temp2 = str.split('-')   
        return parseInt(temp2[0]) - parseInt(temp2[1])
      }

  } 

  this.addMethod = function(char , func){
      
  }
}
let calculator = new Calculator()

//calculator.read();
 console.log("SUM :"  + calculator.calculate("22-5"))
 //console.log("MUL :"  + calculator.mul())

 //console.log("2+4".split('+'));


 function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    };
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }