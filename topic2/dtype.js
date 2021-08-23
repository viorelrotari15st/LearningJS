

//Create a script that prompts the visitor to enter two numbers and then shows their sum.


const sumTest = (a,b) => {
    if(!isNaN(a) && !isNaN(b)){
        return a+b;
    }
    return "Enter only numbers";
}
//console.log(sumTest(5,3))

//console.log(isNaN(3)&&isNaN(5))

//A random number from min to max
//Write the function random(min, max) to generate a random floating-point number from min to max (not including max)

const randomGen = (min, max) => min + Math.random() * (max - min);

//console.log(random(100, 500))

// Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.

//Any number from the interval min..max must appear with the same probability

const randomIntegerGen = (a,b) =>{
    let getRandom = randomGen(a,b)
    return Math.round(getRandom)
} 

console.log(randomIntegerGen(1,5))