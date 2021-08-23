

function ObjConstruct(name){
    this.name = name;
}
//ObjConstruct.prototype = {};
let user  = new ObjConstruct.constructor("jon");
let viorel = new ObjConstruct.prototype.constructor("viorel")
//console.log( instanceof ObjConstruct)
console.log(viorel.name)
console.log(user.name)


function f() {
    console.log("Hello!");
  }
  
  // shows "Hello!" after 1 second
Function.prototype.defer = function(ms) {
    setTimeout(this , ms)
}
console.log(f.defer(1000))

