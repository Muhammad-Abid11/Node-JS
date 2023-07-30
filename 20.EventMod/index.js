const EventEmitter = require("events");
const event = new EventEmitter();

event.prependListener("ShuruHoja", () => {
    console.log("prependListener k mtb Sb sy pehly Shuru me honga ")
})

event.on("ShuruHoja", () => {   //its like function body 
    console.log("Mujhy call kiya me agaya! ")
})

event.on("ShuruHoja", () => {   //its like function body 
    console.log("Mujhy call kiya 2bar me agaya! ")
})

// ---x

event.on("foo", (Param1, Param2) => {   //its like function body 
    console.log(`${Param1} me function bhol gaye kiya! ${Param2} `)
})

event.emit('ShuruHoja')// its like function call here
//  here diffence is k mane 2 bar "ShuruHoja " ki body banaya too wo 2 times render hua
event.emit('foo', 200, "abid")// its like function call here 
event.emit('foo')
// or humne 2 bol ' foo ' ko fire kiya too 2 time " foo " render hogya
// 1st time me Parameter bhi show hua
// 2nd time me Parameters undefined q k humne bheja hi nhi 