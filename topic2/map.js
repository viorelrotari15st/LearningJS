
//You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(
    item => item.name
)
console.log(names)
//alert( names ); // John, Pete, Mary

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(
    key => ({fullName: `${key.name} ${key.surname}`,
    id:key.id})
);


//You have an array of user objects, each one has name, surname and id.

//Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]


//console.log( usersMapped[0].id ) // 1
//console.log( usersMapped[0].fullName )
//console.log( usersMapped)

//Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

console.log(arr)
const sortByAge = arr => {
    return arr.sort(
        s, r => s.age - r.age
    );

}
//Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.
//The formula for the average is (age1 + age2 + ... + ageN) / N.
//console.log(getAverageAge(arr))
const getAverageAge = arr => {
    let averege 
    let mapping = arr.map(
        item => item.age
    )
    averege = mapping.reduce((sum, current) => sum + current) / mapping.length
    return Math.round(averege)
}
console.log(getAverageAge(arr))
