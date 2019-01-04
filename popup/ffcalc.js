var display;
var fadeTime = 800;
var	pi = 3.14;

//	Button Ids
var oneId = "main.keyboard.one";
var twoId = "main.keyboard.two";
var threeId = "main.keyboard.three";
var fourId = "main.keyboard.four";
var fiveId = "main.keyboard.five";
var sixId = "main.keyboard.six";
var sevenId = "main.keyboard.seven";
var eightId = "main.keyboard.eight";
var nineId = "main.keyboard.nine";
var zeroId = "main.keyboard.zero";
var equalsId = "main.keyboard.equals";
var addId = "main.keyboard.add";
var subtractId = "main.keyboard.subtract";
var multiplyId = "main.keyboard.multiply";
var divideId = "main.keyboard.divide";
var clearId = "main.keyboard.clear";
var backId = "main.keyboard.back";
var factorialId = "main.keyboard.factorial";
var modId = "main.keyboard.mod";
var rootId = "main.keyboard.root";
var piId = "main.keyboard.pi";
var leftId = "main.keyboard.leftParenthesis";
var rightId = "main.keyboard.rightParenthesis";
var exponentId = "main.keyboard.exponent";
var decimalId = "main.keyboard.decimal";

window.onload = function(){
	console.log("Onload event");
	
	document.getElementById(oneId).addEventListener("mousedown", inputOne);
	document.getElementById(twoId).addEventListener("mousedown", inputTwo);
	document.getElementById(threeId).addEventListener("mousedown", inputThree);
	document.getElementById(addId).addEventListener("mousedown", inputAdd);
	document.getElementById(fourId).addEventListener("mousedown", inputFour);
	document.getElementById(fiveId).addEventListener("mousedown", inputFive);
	document.getElementById(sixId).addEventListener("mousedown", inputSix);
	document.getElementById(subtractId).addEventListener("mousedown", inputSubtract);
	document.getElementById(sevenId).addEventListener("mousedown", inputSeven);
	document.getElementById(eightId).addEventListener("mousedown", inputEight);
	document.getElementById(nineId).addEventListener("mousedown", inputNine);
	document.getElementById(multiplyId).addEventListener("mousedown", inputMultiply);
	document.getElementById(decimalId).addEventListener("mousedown", inputDecimal);
	document.getElementById(zeroId).addEventListener("mousedown", inputZero);
	document.getElementById(equalsId).addEventListener("mousedown", inputEquals);
	document.getElementById(divideId).addEventListener("mousedown", inputDivide);
	document.getElementById(clearId).addEventListener("mousedown", clearInput);
	document.getElementById(backId).addEventListener("mousedown", backInput);
	document.getElementById(factorialId).addEventListener("mousedown", inputFactorial);
	document.getElementById(exponentId).addEventListener("mousedown", inputExponent);
	document.getElementById(leftId).addEventListener("mousedown", inputLeftParenthesis);
	document.getElementById(rightId).addEventListener("mousedown", inputRightParenthesis);
	document.getElementById(rootId).addEventListener("mousedown", inputRoot);
	document.getElementById(piId).addEventListener("mousedown", inputPi);
	document.getElementById(modId).addEventListener("mousedown", inputMod);
	
	setInterval(cleanString, 250);

	display = document.getElementById("main.display");
}

document.onkeydown = function downEvent(e)
{
	//	Backspace key
	if(e.keyCode == 8)
	{
		backInput();

		e.preventDefault();
	}

	//	'=' key
	else if (e.keyCode == 13)
	{
		inputEquals();
	}

	//	')' key combination
	else if(e.shiftKey && e.keyCode == 48)
	{
		inputRightParenthesis();
	}
	
	else if(e.shiftKey && e.keyCode == 53)
	{
		inputMod();
	}

	//	'0' key
	else if(e.keyCode == 48)
	{
		inputZero();
	}

	//	'!' key combination
	else if(e.shiftKey && e.keyCode == 49)
	{
		inputFactorial();
	}

	//	'*' key combination
	else if(e.shiftKey && e.keyCode == 56)
	{
		inputMultiply();
	}

	//	'+' key
	else if(e.shiftKey && e.keyCode == 61)
	{
		inputAdd();
	}

	//	'^' key combination
	else if(e.shiftKey && e.keyCode == 54)
	{
		inputExponent();
	}

	//	'(' key combination
	else if(e.shiftKey && e.keyCode == 57)
	{
		inputLeftParenthesis();
	}

	//	'1'	key
	else if(e.keyCode == 49)
	{
		inputOne();
	}

	// '2' key
	else if(e.keyCode == 50)
	{
		inputTwo();
	}

	//	'3' key
	else if(e.keyCode == 51)
	{
		inputThree();
	}

	//	'4' key
	else if(e.keyCode == 52)
	{
		inputFour();
	}

	//	'5' key
	else if(e.keyCode == 53)
	{
		inputFive();
	}

	//	'6' key
	else if(e.keyCode == 54)
	{
		inputSix();
	}

	//	'7' key
	else if(e.keyCode == 55)
	{
		inputSeven();
	}

	//	'8' key
	else if(e.keyCode == 56)
	{
		inputEight();
	}

	//	'9' key
	else if(e.keyCode == 57)
	{
		inputNine();
	}

	//	'=' key
	else if(e.keyCode == 61)
	{
		inputEquals();
	}

	//	Key 'c'
	else if(e.keyCode == 67)
	{
		clearInput();
	}

	else if(e.keyCode == 80)
	{
		inputPi();
	}
	
	//	numpad '0'
	else if(e.keyCode == 96)
	{
		inputZero();
	}

	//	numpad '1'
	else if(e.keyCode == 97)
	{
		inputOne();
	}

	//	numpad '2'
	else if(e.keyCode == 98)
	{
		inputTwo();
	}

	//	numpad '3'
	else if(e.keyCode == 99)
	{
		inputThree();
	}

	//	numpad '4'
	else if(e.keyCode == 100)
	{
		inputFour();
	}

	//	numpad '5'
	else if(e.keyCode == 101)
	{
		inputFive();
	}

	//	numpad '6'
	else if(e.keyCode == 102)
	{
		inputSix();
	}

	//	numpad '7'
	else if(e.keyCode == 103)
	{
		inputSeven();
	}

	//	numpad '8'
	else if(e.keyCode == 104)
	{
		inputEight();
	}

	//	numpad '9'
	else if(e.keyCode == 105)
	{
		inputNine();
	}

	//	numpad '*'
	else if(e.keyCode == 106)
	{
		inputMultiply();
	}

	//	numpad '.'
	else if(e.keyCode == 110)
	{
		inputDecimal();
	}

	//	numpad '/'
	else if(e.keyCode == 111)
	{
		e.preventDefault();
		inputDivide();
	}

	//	numpad '+'
	else if(e.keyCode == 107)
	{
		inputAdd();
	}

	//	numpad '-'
	else if(e.keyCode == 109)
	{
		inputSubtract();
	}

	//	'-' key
	else if(e.keyCode == 173)
	{
		inputSubtract();
	}

	//	'.' key
	else if(e.keyCode == 190)
	{
		inputDecimal();
	}

	//	'/' key
	else if(e.keyCode == 191)
	{
		e.preventDefault();
		inputDivide();
	}
}

function invertButtonColor(button)
{
	button.style.setProperty("color", "#222222");
	button.style.setProperty("background-color", "#4488ff");
}

function resetButtonColor(button)
{
	button.style.setProperty("color", "#4488ff");
	button.style.setProperty("background-color", "#222222");
}

function inputOne()
{
	display.textContent += "1";
	invertButtonColor(document.getElementById("main.keyboard.one"));

	var id = "main.keyboard.one";
	setInterval(function(){resetButtonColor(document.getElementById(id))}, fadeTime);
}

function inputTwo()
{
	display.textContent += "2";
	invertButtonColor(document.getElementById("main.keyboard.two"));

	var id = "main.keyboard.two";
	setInterval(function(){resetButtonColor(document.getElementById(id))}, fadeTime);
}

function inputThree()
{
	display.textContent += "3";
	invertButtonColor(document.getElementById("main.keyboard.three"));

	var id = "main.keyboard.three";
	setInterval(function(){resetButtonColor(document.getElementById(id))}, fadeTime);
}

function inputAdd()
{
	display.textContent += "+";
	invertButtonColor(document.getElementById("main.keyboard.add"));

	var id = "main.keyboard.add";
	setInterval(function(){resetButtonColor(document.getElementById(id))}, fadeTime);
}

function inputFour()
{
	display.textContent += "4";
	invertButtonColor(document.getElementById("main.keyboard.four"));

	var id = "main.keyboard.four";
	setInterval(function(){resetButtonColor(document.getElementById(id))}, fadeTime);
}

function inputFive()
{
	display.textContent += "5";
	invertButtonColor(document.getElementById("main.keyboard.five"));

	var id = "main.keyboard.five";
	setInterval(function(){resetButtonColor(document.getElementById(id))}, fadeTime);
}

function inputSix()
{
	display.textContent += "6";
	invertButtonColor(document.getElementById("main.keyboard.six"));

	var id = "main.keyboard.six";
	setInterval(function(){resetButtonColor(document.getElementById(id))}, fadeTime);
}

function inputSubtract()
{
	display.textContent += "-";
	invertButtonColor(document.getElementById("main.keyboard.subtract"));

	var id = "main.keyboard.subtract";
	setInterval(function(){resetButtonColor(document.getElementById(id))}, fadeTime);
}

function inputSeven()
{
	display.textContent += "7";
	invertButtonColor(document.getElementById("main.keyboard.seven"));

	var id = "main.keyboard.seven";
	setInterval(function(){resetButtonColor(document.getElementById(id))}, fadeTime);
}

function inputEight()
{
	display.textContent += "8";
	invertButtonColor(document.getElementById("main.keyboard.eight"));

	var id = "main.keyboard.eight";
	setInterval(function(){resetButtonColor(document.getElementById(id))}, fadeTime);
}

function inputNine()
{
	display.textContent += "9";
	invertButtonColor(document.getElementById("main.keyboard.nine"));

	var id = "main.keyboard.nine";
	setInterval(function(){resetButtonColor(document.getElementById(id))}, fadeTime);
}

function inputMultiply()
{
	display.textContent += "*";
	invertButtonColor(document.getElementById("main.keyboard.multiply"));

	var id = "main.keyboard.multiply";
	setInterval(function(){resetButtonColor(document.getElementById(id))}, fadeTime);
}

function inputDecimal()
{
	display.textContent += ".";
	invertButtonColor(document.getElementById("main.keyboard.decimal"));

	var id = "main.keyboard.decimal";
	setInterval(function(){resetButtonColor(document.getElementById(id))}, fadeTime);
}

function inputZero()
{
	display.textContent += "0";
	invertButtonColor(document.getElementById("main.keyboard.zero"));

	var id = "main.keyboard.zero";
	setInterval(function(){resetButtonColor(document.getElementById(id))}, fadeTime);
}

function inputEquals()
{
	var parsedDisplay = display.textContent;
	parsedDisplay = parsedDisplay.replace(/Π/g, "(3.14)");	//	Double pi ΠΠ doesn't work because replace all hasn't been implemented
	
	if(parsedDisplay.includes("√"))
	{
		parsedDisplay = parsedDisplay.replace(/√/g, "sqrt(");
		parsedDisplay = parsedDisplay + ")"
		
		console.log(parsedDisplay);
	}
	
	var result = math.eval(parsedDisplay);

	if(result == "Infinity")
	{
		display.textContent = "∞";
	}

	else
	{
		display.textContent = result;
	}

	invertButtonColor(document.getElementById("main.keyboard.equals"));

	var id = "main.keyboard.equals";
	setInterval(function(){resetButtonColor(document.getElementById(id))}, fadeTime);
}

//	Replacing '/' with '÷' will take a bit more work since the parser doesn't understand '÷'
function inputDivide()
{	
	display.textContent += "/";
	invertButtonColor(document.getElementById("main.keyboard.divide"));

	var id = "main.keyboard.divide";
	setInterval(function(){resetButtonColor(document.getElementById(id))}, fadeTime);
}

function clearInput()
{
	display.textContent = "";
	invertButtonColor(document.getElementById("main.keyboard.clear"));

	var id = "main.keyboard.clear";
	setInterval(function(){resetButtonColor(document.getElementById(id))}, fadeTime);
}

function backInput()
{
	display.textContent = display.textContent.substring(0, display.textContent.length - 1)
	invertButtonColor(document.getElementById("main.keyboard.back"));

	var id = "main.keyboard.back";
	setInterval(function(){resetButtonColor(document.getElementById(id))}, fadeTime);
}

function inputFactorial()
{
	display.textContent += "!";
	invertButtonColor(document.getElementById("main.keyboard.factorial"));

	var id = "main.keyboard.factorial";
	setInterval(function(){resetButtonColor(document.getElementById(id))}, fadeTime);
}

function inputExponent()
{
	display.textContent += "^";
	invertButtonColor(document.getElementById("main.keyboard.exponent"));

	var id = "main.keyboard.exponent";
	setInterval(function(){resetButtonColor(document.getElementById(id))}, fadeTime);
}

function inputRoot()
{
	display.textContent += "√";
	invertButtonColor(document.getElementById("main.keyboard.root"));

	var id = "main.keyboard.root";
	setInterval(function(){resetButtonColor(document.getElementById(id))}, fadeTime);
}

function inputPi()
{
	display.textContent += "Π";
	invertButtonColor(document.getElementById("main.keyboard.pi"));

	var id = "main.keyboard.pi";
	setInterval(function(){resetButtonColor(document.getElementById(id))}, fadeTime);
}

function inputMod()
{
	display.textContent += "%";
	invertButtonColor(document.getElementById("main.keyboard.mod"));

	var id = "main.keyboard.mod";
	setInterval(function(){resetButtonColor(document.getElementById(id))}, fadeTime);
}

function inputRoot()
{
	display.textContent += "√";
	invertButtonColor(document.getElementById("main.keyboard.root"));

	var id = "main.keyboard.root";
	setInterval(function(){resetButtonColor(document.getElementById(id))}, fadeTime);
}

function inputLeftParenthesis()
{
	display.textContent += "(";
	invertButtonColor(document.getElementById("main.keyboard.leftParenthesis"));

	var id = "main.keyboard.leftParenthesis";
	setInterval(function(){resetButtonColor(document.getElementById(id))}, fadeTime);
}

function inputRightParenthesis()
{
	display.textContent += ")";
	invertButtonColor(document.getElementById("main.keyboard.rightParenthesis"));

	var id = "main.keyboard.rightParenthesis";
	setInterval(function(){resetButtonColor(document.getElementById(id))}, fadeTime);
}

function cleanString()
{
	var display = document.getElementById("main.display");

	//	Not necessary?
	display.innerHTML = display.innerHTML.replace(/[a-zA-Z\[\]\{\} ,~`@#$&_?;|\\]/g, '');

	//	This eliminates any double operators like ++ or //.  Factorial is intentionally omitted because double factorials are a thing
	display.textContent = display.textContent.replace(/[+]{2,}/g, '+');
	display.textContent = display.textContent.replace(/[-]{2,}/g, '-');
	display.textContent = display.textContent.replace(/[*]{2,}/g, '*');
	display.textContent = display.textContent.replace(/[/]{2,}/g, '/');
	display.textContent = display.textContent.replace(/[.]{2,}/g, '.');
	display.textContent = display.textContent.replace(/[%]{2,}/g, '%');
}



//	TODO:
//	The root doesn't work without changing √ to sqrt() for the parser.
//
//
//


