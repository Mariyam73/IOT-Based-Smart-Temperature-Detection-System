var temp_sum = 0
var months = 0
var payload = msg.payload
var averageTemp = 0

for(let i = 0 ; i < payload.length ; i++){
    
    temp_sum = temp_sum + payload[i]["AverageTemperature"];
    months = months+1
    
}
averageTemp = temp_sum/months;
averageTemp = Math.round(averageTemp * 100) / 100 


msg.payload = {
    "temp":averageTemp,
    "months":months
}
   


return msg;