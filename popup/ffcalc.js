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
	
	document.getElementById(oneId).addEventListener("mousedown", function(){input(oneId)});
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
		input(oneId);
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
		input(oneId);
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

var idChars = {};
idChars[oneId] = "1";
idChars[twoId] = "2";
idChars[threeId] = "3";
idChars[fourId] = "4";
idChars[fiveId] = "5";
idChars[sixId] = "6";
idChars[sevenId] = "7";
idChars[eightId] = "8";
idChars[nineId] = "9";
idChars[zeroId] = "0";
idChars[addId] = "+";
idChars[subtractId] = "-";
idChars[multiplyId] = "*";
idChars[divideId] = "/";
idChars[factorialId] = "!";
idChars[modId] = "%";
idChars[exponentId] = "^";
idChars[leftId] = "(";
idChars[rightId] = ")";
idChars[rootId] = "√";
idChars[piId] = "Π";
idChars[decimalId] = "."

function input(buttonId)
{
	display.textContent += idChars[buttonId];
	invertButtonColor(document.getElementById(buttonId));

	setInterval(function(){resetButtonColor(document.getElementById(buttonId))}, fadeTime);
}

function inputTwo()
{
	display.textContent += "2";
	invertButtonColor(document.getElementById(twoId));

	setInterval(function(){resetButtonColor(document.getElementById(twoId))}, fadeTime);
}

function inputThree()
{
	display.textContent += "3";
	invertButtonColor(document.getElementById(threeId));

	setInterval(function(){resetButtonColor(document.getElementById(threeId))}, fadeTime);
}

function inputAdd()
{
	display.textContent += "+";
	invertButtonColor(document.getElementById(addId));

	setInterval(function(){resetButtonColor(document.getElementById(addId))}, fadeTime);
}

function inputFour()
{
	display.textContent += "4";
	invertButtonColor(document.getElementById(fourId));

	setInterval(function(){resetButtonColor(document.getElementById(fourId))}, fadeTime);
}

function inputFive()
{
	display.textContent += "5";
	invertButtonColor(document.getElementById(fiveId));

	setInterval(function(){resetButtonColor(document.getElementById(fiveId))}, fadeTime);
}

function inputSix()
{
	display.textContent += "6";
	invertButtonColor(document.getElementById(sixId));

	setInterval(function(){resetButtonColor(document.getElementById(sixId))}, fadeTime);
}

function inputSubtract()
{
	display.textContent += "-";
	invertButtonColor(document.getElementById(subtractId));

	setInterval(function(){resetButtonColor(document.getElementById(subtractId))}, fadeTime);
}

function inputSeven()
{
	display.textContent += "7";
	invertButtonColor(document.getElementById(sevenId));

	setInterval(function(){resetButtonColor(document.getElementById(sevenId))}, fadeTime);
}

function inputEight()
{
	display.textContent += "8";
	invertButtonColor(document.getElementById(eightId));

	setInterval(function(){resetButtonColor(document.getElementById(eightId))}, fadeTime);
}

function inputNine()
{
	display.textContent += "9";
	invertButtonColor(document.getElementById(nineId));

	setInterval(function(){resetButtonColor(document.getElementById(nineId))}, fadeTime);
}

function inputMultiply()
{
	display.textContent += "*";
	invertButtonColor(document.getElementById(multiplyId));

	setInterval(function(){resetButtonColor(document.getElementById(multiplyId))}, fadeTime);
}

function inputDecimal()
{
	display.textContent += ".";
	invertButtonColor(document.getElementById(decimalId));

	setInterval(function(){resetButtonColor(document.getElementById(decimalId))}, fadeTime);
}

function inputZero()
{
	display.textContent += "0";
	invertButtonColor(document.getElementById(zeroId));

	setInterval(function(){resetButtonColor(document.getElementById(zeroId))}, fadeTime);
}

function inputEquals()
{
	var parsedDisplay = display.textContent;
	parsedDisplay = parsedDisplay.replace(/Π/g, "(3.14)");
	
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

	invertButtonColor(document.getElementById(equalsId));

	setInterval(function(){resetButtonColor(document.getElementById(equalsId))}, fadeTime);
}

//	Replacing '/' with '÷' will take a bit more work since the parser doesn't understand '÷'
function inputDivide()
{	
	display.textContent += "/";
	invertButtonColor(document.getElementById(divideId));

	setInterval(function(){resetButtonColor(document.getElementById(divideId))}, fadeTime);
}

function clearInput()
{
	display.textContent = "";
	invertButtonColor(document.getElementById(clearId));

	setInterval(function(){resetButtonColor(document.getElementById(clearId))}, fadeTime);
}

function backInput()
{
	display.textContent = display.textContent.substring(0, display.textContent.length - 1)
	invertButtonColor(document.getElementById(backId));

	setInterval(function(){resetButtonColor(document.getElementById(backId))}, fadeTime);
}

function inputFactorial()
{
	display.textContent += "!";
	invertButtonColor(document.getElementById(factorialId));

	setInterval(function(){resetButtonColor(document.getElementById(factorialId))}, fadeTime);
}

function inputExponent()
{
	display.textContent += "^";
	invertButtonColor(document.getElementById(exponentId));

	setInterval(function(){resetButtonColor(document.getElementById(exponentId))}, fadeTime);
}

function inputRoot()
{
	display.textContent += "√";
	invertButtonColor(document.getElementById(rootId));

	setInterval(function(){resetButtonColor(document.getElementById(rootId))}, fadeTime);
}

function inputPi()
{
	display.textContent += "Π";
	invertButtonColor(document.getElementById(piId));

	setInterval(function(){resetButtonColor(document.getElementById(piId))}, fadeTime);
}

function inputMod()
{
	display.textContent += "%";
	invertButtonColor(document.getElementById(modId));

	setInterval(function(){resetButtonColor(document.getElementById(modId))}, fadeTime);
}

function inputRoot()
{
	display.textContent += "√";
	invertButtonColor(document.getElementById(rootId));

	setInterval(function(){resetButtonColor(document.getElementById(rootId))}, fadeTime);
}

function inputLeftParenthesis()
{
	display.textContent += "(";
	invertButtonColor(document.getElementById(leftId));

	setInterval(function(){resetButtonColor(document.getElementById(leftId))}, fadeTime);
}

function inputRightParenthesis()
{
	display.textContent += ")";
	invertButtonColor(document.getElementById(rightId));

	setInterval(function(){resetButtonColor(document.getElementById(rightId))}, fadeTime);
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


