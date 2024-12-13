function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var d = date.getDay();
    var mo = date.getMonth();
    var y = date.getFullYear();
    if (h == 12) {
        h = "12";
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
    if (d < 10) {
        d = "0" + d;
    }
    if (mo < 10) {
        mo = "0" + mo;
    }
    var time = h + ":" + m + ":" + s;
    var dateString = d + "/" + mo + "/" + y;
    console.log(dateString + " " + time); 
}
