const fs = require('fs');
const lib = require('./module');
const {exec} = require('child_process');

let lastMinute = false;
let currentDate;

//? https://nodejs.org/en/docs/guides/timers-in-node/

reloadDateString();
//testNow();

while(true){
    reloadDateString();
    if(lastMinute == false && (currentDate.getMinutes() == 0 || currentDate.getMinutes() == 15 || currentDate.getMinutes() == 30 || currentDate.getMinutes() == 45)) {
        // console.log('current Minue: '+ currentDate.getMinutes());
        // console.log('last Updated Minute: ' + lastMinute);
        //lastMinute = currentDate.getMinutes();
        //checkNextTest();
        lastMinute = true;
        console.log("Test Now! " +  currentDate);
        testNow();
    } else if (currentDate.getMinutes() == 1 || currentDate.getMinutes() == 16 || currentDate.getMinutes() == 31 || currentDate.getMinutes() == 46) {
        lastMinute = false;
    }
}
   
function reloadDateString() { 
    currentDate = new Date();
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), currentDate.getHours() + 1, currentDate.getMinutes(), 00);
}

function writeJSON(data) {

    let json = JSON.stringify(data);
    fs.writeFile(fileName, json);   
}

function testNow (){
    exec('speed-test -j', (error, stdout,stderr) => {
        if (error) {
            console.log(`Etwas ist schiefgelaufen ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`Stderr: ${stderr}`);
            return;
        }
         console.log(`Output: ${stdout}`);
        //writeJSON(stdout);
    })
}

function checkNextTest() {
    switch(currentDate.getMinutes()) {
        case 0: 
            console.log("Test Now! " +  currentDate);
            testNow(); 
            break;
        case 15: 
            testNow(); 
            console.log("Test Now! " + currentDate);
            break;
        case 30:
            testNow(); 
            console.log("Test Now! " + currentDate);
            break;
        case 45:
            testNow(); 
            console.log("Test Now! " + currentDate);
            break;
        default: 
            console.log(currentDate);
            break;
    }
}
