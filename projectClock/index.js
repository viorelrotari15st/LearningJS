const render = () => {
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;
    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;
    let timeAm = "AM"
    if(hours > 12) {
       timeAm = "PM";
     }
     if(hours == 0) { 
       timeAm = "AM";
     }
   let time = `${hours}:${mins}:${secs} ${timeAm} `;
    //setInterval(render, 1000);
   return document.getElementById("clock").innerText = time;
}
const deleteElemnt = (id) => {
    let elm = document.getElementById(id);
    return elm.parentNode.removeChild(elm);
}
const insertNewRight = () => {
    const imgElement = document.querySelector('img');
   return imgElement.outerHTML = (' <img id = "element" src="middle.png" alt="right">')

}

const insertNewLeft = () => {
  const imgElement = document.querySelector('img');
  return imgElement.outerHTML = ('<img id = "element" src="sign-left-icon.png" alt="left">')

}
const delay = (ms) => {
  return new Promise( r => {setTimeout(() =>{r()} ,ms)}) }

async function kukuska(){
  setInterval(render, 1000)
   // try {
      await delay(500);
      insertNewRight();
      await delay(500);
      insertNewLeft();
     //  } //catch (err) {
      //delay(20000)
      //alert("kuku")
     //}
      
    }



    //render();
    setInterval(kukuska, 1000);
    //deleteElemnt('element')
   // insertNew();
    //kukuska()
   