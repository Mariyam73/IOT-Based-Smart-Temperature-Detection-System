//generate chart
var payload = msg.payload
var data = []; //this will be an array of data
var labels = []; //this will be an array of labels


for(let i = 0 ; i < payload.length ; i++){
    var date = payload[i]["Month"]
    var temp = payload[i]["predicted_temp"]
    labels.push(date)
    data.push(temp);
}

msg.payload = [{
    "series" : ["TemperaturePredictions"],
    "data": [data],
    "labels": labels
    
}];


return msg;