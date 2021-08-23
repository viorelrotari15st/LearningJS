// deci, pentru ziua de azi:
// E nevoie sa creati un timer cu pendul 
// (logica la timer o puteti lua din exercitiul precedent). 
// Creati un fisier HTML, js, css. Timerul se updateaza in
//  fiecare secunda iar pendulul se clatina imediat dupa ce timerul 
//  sa updatat (vro 45deg), pentru rotatie puteti 
//  folosi 'transform: rotate(...)' din css,
//   pendulul va avea 3 state-uri (default/left/right). 
//   Ca sa sinchronizati totul folositi Promise:


	
// se updateaza timerul

//       2. start clatinare pendul 0.5sec (prin css)).
//       3. wait 0.5sec
//       4. start clatinare pendul inapoi
//       5. wait 0.5sec
//       6. incepe de la punctul 1
 
// La ora fixa aruncati o eroare
//  si in catch scrieti logica care va afisa pentru 2sec o kukushka...

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
const moveToLeft = () => {
    console.log("right")
}

const moveToRight = () => {
    console.log("left")
}

const render = () => {
     

    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    // let output = template
    // .replace('h', hours)
    // .replace('m', mins)
    // .replace('s', secs);

    let time = `${hours}:${mins}:${secs} `;
      //setInterval(clock, 1000);
      //document.getElementById("clock").innerText = time

  return console.log(time)
 }
 const kuku= () => console.log("kuku")


   async function kukuska(){
    
    try {
        await delay(500);
         
         moveToLeft();
        await delay(500);
         
         moveToRight();
         
        
    } catch (err) {
        delay(2000)
        kuku()
        
    }
    
}
//kukuska()
//console.log(render())


setInterval(kukuska, 500)