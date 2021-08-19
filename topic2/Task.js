//Exercitiu extra pe ziua de azi: 
//Faceti o functie care primeste ca parametru un array cu lungime de 10 elemente,
// care sa fie numere. Functia trebuie sa returneze un string care sa respecte formatul
// urmator (555) 555-5555. Validati ca array-ul sa contina doar numere, si ca numere sa nu fie mai mari de 9. 

const numValidator = arr => {
    let validArr = []
    if (arr.length != 10 ){
       return "TRY AGYN LEN IS'T CORECTCT"
    } else{
    for(let i = 0; i < 3; i++){
        if(arr[i] === 5) {
            console.log(arr[i])
             

        } else { console.log("errr") }
          
    }
}
}
console.log( numValidator([5,5,5,5,5,5,5,5,5,5]))