var nosql = require('nosql').load('./database/db.nosql');
var usage = require('usage');
var d = new Date();
var t= Math.round(d.getTime()/(1000 * 60));
// Database date created 
/*===============================
=            created            =
===============================*/
// nosql.created;
 
// if (!nosql.isReady) {
//     // YOU MUST WAIT :-) 
// }
 
// nosql.on('load', function() {
//    // I'm ready 
// });

/*-----  End of created  ------*/




//var pid = (process.argv[2])? parseInt(process.argv[2]): process.pid;
// var pid = process.pid 
// setInterval(function() {


// usage.lookup(pid, function(err, result) {

// 		console.log(err, result);
// 		console.log(result.cpu);
// 				console.log(result.memory);
// 	});
// }, 2000);


var fuel=40.5;
var rpm=17629184;
var car={
  "timestamp":{
    "minutes_70":t,
    "minutes":d.getMinutes(),
    "day":d.getDate(),
    "month":d.getMonth(),
    "year":d.getFullYear()
  },
  "sensordata": {
    "levels": {
      "fuel": fuel,
      "oil": 60,
      "brake_fluid":20,
      "windshield_washer_fluid":80
    },
    "engine_RPM":rpm,
    "temperatures": {
      "engine": 10,
      "outside": 15
    }
  }
}
nosql.insert(car);
