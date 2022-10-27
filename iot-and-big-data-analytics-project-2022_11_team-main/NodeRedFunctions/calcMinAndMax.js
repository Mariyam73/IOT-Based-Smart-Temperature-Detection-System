var payload = msg.payload
var min = 40
var max = 0

for(let i = 0 ; i < payload.length ; i++){
    
    var temp = payload[i]["AverageTemperature"];
  
    //finding the max
    if(temp>max){
        max = temp
    }else{
        max = max
    }
    
    //finding min
    if(temp<min){
        min = temp
    }else{
        min = min
    }
    
}

msg.payload = {
    "max":max,
    "min":min
}
   
return msg;