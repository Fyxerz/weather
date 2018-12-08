const cl = (x) => {console.log(x)}

const checkAlarm = (alarm,callback) => {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    if(h == 7 && m == 30){
        callback()
    }
    setTimeout(checkAlarm(alarm),1000)
}

const morning = {
    hour: 7,
    minute: 30
}

checkAlarm(morning)
