const fs = require('fs');
const {exec} = require('child_process');

DocumentType = module;

module.exports ={
    writeJSON,
    nextTest,
    testNow,
    checkTest,
    checkNextTest
}



let fileName ='results.json';
let jsonData;
var currentDate = new Date();

function writeJSON (data){

    let json = JSON.stringify(data);
    fs.writeFile(fileName, json);   
}
function nextTest() {
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), currentDate.getHours() + 1, currentDate.getMinutes(), 00);
    var nextDate;
    let minutes = currentDate.getMinutes();
    if (minutes < 15) {
        nextDate = new Date(currentDate.getFullYear(), (currentDate.getMonth()), currentDate.getDate(), currentDate.getHours(), 15, 00);
    }else if (minutes < 30){
        nextDate = new Date(currentDate.getFullYear(), (currentDate.getMonth()), currentDate.getDate(), currentDate.getHours(), 30, 00);
    }else if (minutes < 45){
        nextDate = new Date(currentDate.getFullYear(), (currentDate.getMonth()), currentDate.getDate(), currentDate.getHours(), 45, 00);
    }else {
        nextDate = new Date(currentDate.getFullYear(), (currentDate.getMonth()), currentDate.getDate(), currentDate.getHours() + 1, 00, 00);
    }
    return nextDate;
}
function checkTest(){
    let timeUntil = nextTest() - currentDate;
   
    return timeUntil;
}
/** 
*   Fuction for executing a test with the npm-Module 'speed-test' and 'child_process'
**/
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
        writeJSON(stdout);
    })
}

function checkNextTest() {
    switch(currentDate.getMinutes()) {
        case 0: 
            console.log("Test Now!");
            //testNow(); 
            break;
        case 15: 
            // testNow(); 
            console.log("Test Now!");
            break;
        case 30:
            // testNow(); 
            console.log("Test Now!");
            break;
        case 45:
            // testNow(); 
            console.log("Test Now!");
            break;
        default: 
            console.log(currentDate.getMinutes());
            break;
    }
}
                
                
                
                
                






























const NetworkSpeed = require('network-speed');
const testNetworkSpeed = new NetworkSpeed();

const options = {
    // The hostname where the request would be made
    hostname: 'https://your-domain-name',
    // The port of the host
    port: 80,
    // The endpoint available for uploading the data stream
    path: '/speed-checker-upload',
    // The http methos
    method: 'POST',
    headers: {
      // Format being used. Currently we just send a json file stream
      'Content-Type': 'application/json',
    },
  };
  
  async function getNetworkDownloadSpeed() {
    const baseUrl = 'https://eu.httpbin.org/stream-bytes/500000';
    const fileSizeInBytes = 500000;
    const speed = await testNetworkSpeed.checkDownloadSpeed(baseUrl, fileSizeInBytes);
    console.log(fileSizeInBytes + "B", speed);
  }
  
  function getNetworkUploadSpeed() {
    const options = {
      hostname: 'www.google.com',
      port: 80,
      path: '/catchers/544b09b4599c1d0200000289',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const fileSizeInBytes = 5000000
    const speed = testNetworkSpeed.checkUploadSpeed(options, fileSizeInBytes);
    console.log(fileSizeInBytes + "B", speed);
  }