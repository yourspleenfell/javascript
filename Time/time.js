function timePlz(h,m,p){
    var HOUR = h;
    var MINUTE = m;
    var PERIOD = p;
    if(p == "AM" || p == "a.m." || p == "am" || p == "A.M.") {
        p = "in the morning.";
    }
    else(p = "in the evening.");

    if(m >= 30) {
        console.log("It's almost", h + 1, p);
    }
    else if(m <= 30) {
        console.log("It's", m, "minutes past", h, p);
    }
    }
timePlz(8,37,"PM")