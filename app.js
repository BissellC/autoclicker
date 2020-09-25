const r = require("robotjs");
const ioHook = require('iohook');

const qranode = require('qranode')
 
let count = 0

const fxn = () => {
    r.mouseClick('left')
    click()
}

const click = async() => {
    let number = await qranode('uint8', 1)
    
    if (number.toString().length === 1) {
        number = number * Math.floor(Math.random() * 100)
    }
    else if (number[0] === 0) {
        number = Math.floor(Math.random() * 100)
    }
    else if (number.toString().length === 2) {
        number = number * Math.floor(Math.random() * 10)
    }
    count++
    if (count % 25 === 0) {
        console.log('f1')
        r.keyTap('f1')
        setTimeout(() => r.mouseClick('left'), Math.floor(Math.random() * 100))
        console.log('1')
        setTimeout(() => r.mouseClick('left'), Math.floor(Math.random() * 100))
        console.log('2')
        setTimeout(() => r.mouseClick('left'), Math.floor(Math.random() * 100))
        console.log('3')
        setTimeout(() => r.keyTap('f1'), Math.floor(Math.random() * 10))
        console.log('f1')
    }
    console.log(number)
    setTimeout(fxn, number)
}

ioHook.on("keydown", keyPress => {
    console.log(keyPress)
  if (keyPress.shiftKey === true) {
    click()
  }

});



ioHook.start();



// ctrl + c to exit