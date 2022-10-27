var payload = msg.payload
var currentTemp  = parseInt(payload) 
var status = ""

var gsDayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

var today = new Date()
var dayName = gsDayNames[today.getDay()];
var date = today.toString().slice(0,10)
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


if(currentTemp<20){
    status="Cold"
}else if(currentTemp<=30){
    status="Warm"
}else{
    status="Hot"
}

msg.payload = {
    "temp":currentTemp,
    "tempStatus" :status,
    "date":date,
    "dayName":dayName,
    "time": time
}


return msg;