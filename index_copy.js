/*const fs = require('fs');
const lib = require('./module');
const {exec} = require('child_process');
//const sleep = require('sleep');

let lastMinute = 0;
let currentMinute = 0;
let currentDate;

//? https://nodejs.org/en/docs/guides/timers-in-node/

reloadDateString();

//!Search for timed loop --> intervall in 5 minutes instead of a few milliseconds, so the speedtest can run smoothly

while (true) {
    reloadDateString();
    currentMinute = currentDate.getMinutes();
    if(currentMinute != lastMinute) {
        console.log(currentMinute);

        lastMinute = currentMinute;

        if(currentMinute == 24) {
            testNow();
        }
    }
}

while(true){
    reloadDateString();
    if(lastMinute == false ){//&& (currentDate.getMinutes() == 0 || currentDate.getMinutes() == 15 || currentDate.getMinutes() == 30 || currentDate.getMinutes() == 45)) {
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

async function testNow (){
    console.log('Test Now!');
    await exec('speed-test -j', (error, stdout,stderr) => {
        console.log('Test Run!');
        if (error) {
            console.log(`Etwas ist schiefgelaufen ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`Stderr: ${stderr}`);
            return;
        }
         console.log(`Output: ${stdout}`);
        writeJSON(stdout);
    })
}

function checkNextTest() {
    switch(currentDate.getMinutes()) {
        case 0: 
            console.log("Test Now! " +  currentDate);
            testNow(); 
            break;
        case 15: 
            console.log("Test Now! " + currentDate);
            testNow(); 
            break;
        case 30:
            console.log("Test Now! " + currentDate);
            testNow(); 
            break;
        case 45:
            console.log("Test Now! " + currentDate);
            testNow(); 
            break;
        default: 
            console.log(currentDate);
            break;
    }
}
*/