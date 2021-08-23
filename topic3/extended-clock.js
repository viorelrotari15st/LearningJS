//import OopClock from 'opClock.js'
class ExtendClock extends OopClock{
    precision = 1000
    constructor(setting) {
        super(setting)
        this.precision = precision
        this.precision = setting
    }
    start(){
        this.render();
        this.timer = setInterval(() => { this.render()} , this.precision);
            
        
    }

}
let clock = new OopClock({template: 's:h:m'});
  clock.start()