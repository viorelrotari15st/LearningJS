
const fetch = require("node-fetch");

const test = () => {
    return  new Promise((resolve , reject) => {
        console.log("timeout started with") 
        setTimeout(
            () =>{ 
                console.log("timeout ended ") 
                reject({status:'NOT OK'})
            },1000
         )
    })
    
}

//test
//.then()
//.catch(() => console.error("error handling"));
//.finally(() => console.log("finally"))

const delay = (ms) => {
   return new Promise(
       r => {
           setTimeout(
               () =>{
                   r()
               } ,ms
           )
       }
   ) 
}
//delay(2000).then(()=> console.log("after dely secs"))

// Promise.all([delay(2000), delay(4000)]).then(()=>console.log("afyer 6000 ms"))
// //cheama functia delay conform listei .
const url = 'https://pokeapi.co/api/v2/pokemon/1'

const fechUrl = () => {
  console.log("start asking from server")
  return delay(2000)
         .then(()=>{
             return fetch(url);
         })
         .then(response => response.json())
}
fechUrl() 
    .then(data => {
        for (const property in data) {
            console.log(`${property}: ${data[property]}`);
          }
    })
    .catch(e=> console.error(e))

async function fetchAsyncUrl() {
    console.log("fetching todeos ")

    try {
        await delay(2000)
        const response = await fetch(url)
        const data = await response.json()
        console.log(data) 
    } catch (error) {
       console.error(error) 
    }
    
}
fetchAsyncUrl()