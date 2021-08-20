
const printInterval = ( from, to) => {
    let current = from;

    setTimeout(function go() {
      console.log(current);
      if (current < to) {
        setTimeout(go, 1000);
      }
      current++;
    }, 1000);

}
let i = 0
let num = 6
while(i<num){
printInterval(10 , num)
i++ }