var number1 = null;
var number2 = null;
var number3 = null;
var output = "Nog niet alle kleuren zijn gekozen.";

function input1(number, color){
    number1 = number;
    document.getElementById('button1').style.backgroundColor = color;
    check();
    closeNav(1);
}
function input2(number, color){
    number2 = number;
    document.getElementById('button2').style.backgroundColor = color;
    check();
    closeNav(2);
}
function input3(number, color){
    number3 = number;
    document.getElementById('button3').style.backgroundColor = color;
    check();
    closeNav(3);
}

var check = function(){
	if(number1 !== null && number2 !== null && number3 !== null){
		var output = (number1 + '' + number2) * number3;
	    document.getElementById("output").innerHTML = output;
	}
}

function openNav(number) {
    document.getElementById("input" + + number).style.height = "320px";
}

function closeNav(number) {
    document.getElementById("input" + + number).style.height = "0";
}