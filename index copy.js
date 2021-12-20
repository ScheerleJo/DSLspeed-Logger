// const PORT = 8003;
// const fs = require('fs');
// const http = require('http');
const { resolveObject } = require('url');
const lib = require('./module');
while(true){
    
}
async function cycle(){
    lib.checkNextTest();
    console.log(lib.nextTest());
    console.log(lib.checkTest());
    await sleep(10000);
}
function sleep(ms){
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
}
// const server = http.createServer(function(res, req){


//     lib.writeJSON();
//     lib.nextTest();
//     lib.testNow();
// });
// server.listen(PORT, function(error){

//     if(error){
//         console.log(`Etwas ist schief gelaufen ${error}`);
//     }else{
//         console.log(`Server läuft auf Port ${PORT}`);
//     }
// });