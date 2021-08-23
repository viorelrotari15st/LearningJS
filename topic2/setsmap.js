//Filter unique array members
//Create a function unique(arr) that should return an array with unique items of arr.

function unique(arr) {
    let set = new Set(arr)
    for (let user of set) {
        console.log(user.name); 
      }
      console.log(set)
  }
  
  unique(["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
]) 