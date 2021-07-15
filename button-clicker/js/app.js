var cash = 0;
var multi = 1;
var reb = 1;
var gint;
var gint2;
var div = document.getElementById("div");
var cam = document.getElementById("cam");
var upg = document.getElementById("upgrades");
var muls = document.getElementById("muls");
function update() {
    cam.value = "$" + cash;
    muls.value = "Multi: " + multi;
}
update();
function save() {
    localStorage.setItem("cash",cash);
    localStorage.setItem("multi",multi);
}
gint2 = setInterval(save,200);
gint = setInterval(function(){
    cash += multi;
    update();
},100);
function up1() {
    if (cash >= 20) {
        cash -= 20;
        multi += 1;
    }
}
function up2() {
    if (cash >= 80) {
        cash -= 80;
        multi += 3;
    }
}
function up3() {
    if (cash >= 200) {
        cash -= 200;
        multi += 10;
    }
}
function up4() {
    if (cash >= 400) {
        cash -= 400;
        multi += 20;
    }
}
function up5() {
    if (cash >= 1000) {
        cash -= 1000;
        multi += 60;
    }
}
window.onload = function() {
    if (cash >= 2) {
        cash = localStorage.getItem("cash");
        multi = localStorage.getItem("multi");
        cash = parseInt(cash);
        multi = parseInt(multi);
    }
}
function reset() {
    if (window.confirm("Do you really want to hard reset?")) {
        cash = 0;
        multi = 1;
    }
}
