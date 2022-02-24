const lib = require('./module');

setInterval(cycle(), 60000);

async function cycle(){
    lib.checkNextTest();
    console.log(lib.nextTest());
    console.log(lib.checkTest());
}
