payload = msg.payload
var temps=flow.get('tempReading') || [];
var times=flow.get('time') || [];

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

times.push(time)
flow.set('time', times)

temps.push(payload)
flow.set('tempReading',temps);

msg.payload = [{
    "series":["Temperature"],
    "data":[temps],
    "labels": times,
    "date":today
}]
return msg;