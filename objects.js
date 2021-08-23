

let user = {};

user.name = "Johan"
user.surname = "Smith"

user.name = "Pete"
delete user.name

//console.log(user)

//Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
const isEmpty = (obj) => {
    for(let prop in obj ){
        return false
    
    }return true
}

//console.log(isEmpty({"name": "Viorel"}))
//console.log(isEmpty({}))


//Sum object properties

const sumSalary = salaries =>{
   let summer = 0;
   for(let key in salaries){
       //console.log( salaries[key])
        summer += salaries[key]
        
   } return summer
}
  sumSalary({
    John: 100,
    Ann: 160,
    Pete: 130
  })


  const myltiplayNumeric = menu =>{
      for (let key in menu){
          if(typeof menu[key] === "number"){
              //console.log(menu[key])
              menu[key]= menu[key]*2
          }

      }return menu

  }

  myltiplayNumeric({
    width: 200,
    height: 300,
    title: "My menu"
  })

  let calculator = {
    sum() {
        return this.elm1 + this.elm2;
      },
    
      mul() {
        return this.elm1 * this.elm2;
      },
    
      read() {
        this.elm1 = 3;
        this.elm2 = 8;
      }
  };

 calculator.read();
 console.log(calculator.sum());
 console.log(calculator.mul());

