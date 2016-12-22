var number1 = null;
var number2 = null;
var number3 = null;
var output = "Nog niet alle kleuren zijn gekozen.";

function input1(number){
    number1 = number;
    console.log(number1, number2, number3);
    check();
}
function input2(number){
    number2 = number;
    console.log(number1, number2, number3);
    check();
}
function input3(number){
    number3 = number;
    console.log(number1, number2, number3);
    check();
}

var check = function(){
	if(number1 !== null && number2 !== null && number3 !== null){
		var output = (number1 + '' + number2) * number3;
	    document.getElementById("output").innerHTML = output;
	}
}