"use strict";
function getNumber(num) {
    document.getElementById('myNumber').value = document.getElementById('myNumber').value + num;
}
function solution() {
    var operation = document.getElementById('myNumber').value;
    if (operation != '') {
        document.getElementById('myNumber').value = eval(operation);
        var ul = document.getElementById("history");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(operation + "=" + eval(operation)));
        ul === null || ul === void 0 ? void 0 : ul.appendChild(li);
        document.getElementById('myNumber').value = '';
    }
    else {
        alert("No Input!");
    }
}
