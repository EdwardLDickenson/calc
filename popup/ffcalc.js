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

window.onload = function(){
	console.log("Onload event");
	
	document.getElementById(oneId).addEventListener("mousedown", function(){input(oneId)});
	document.getElementById(twoId).addEventListener("mousedown", function(){input(twoId)});
	document.getElementById(threeId).addEventListener("mousedown", function(){input(threeId)});
	document.getElementById(addId).addEventListener("mousedown", function(){input(addId)});
	document.getElementById(fourId).addEventListener("mousedown", function(){input(fourId)});
	document.getElementById(fiveId).addEventListener("mousedown", function(){input(fiveId)});
	document.getElementById(sixId).addEventListener("mousedown", function(){input(sixId)});
	document.getElementById(subtractId).addEventListener("mousedown", function(){input(subtractId)});
	document.getElementById(sevenId).addEventListener("mousedown", function(){input(sevenId)});
	document.getElementById(eightId).addEventListener("mousedown", function(){input(eightId)});
	document.getElementById(nineId).addEventListener("mousedown", function(){input(nineId)});
	document.getElementById(multiplyId).addEventListener("mousedown", function(){input(multiplyId)});
	document.getElementById(decimalId).addEventListener("mousedown", function(){input(decimalId)});
	document.getElementById(zeroId).addEventListener("mousedown", function(){input(zeroId)});
	document.getElementById(equalsId).addEventListener("mousedown", inputEquals);
	document.getElementById(divideId).addEventListener("mousedown", function(){input(divideId)});
	document.getElementById(clearId).addEventListener("mousedown", clearInput);
	document.getElementById(backId).addEventListener("mousedown", backInput);
	document.getElementById(factorialId).addEventListener("mousedown", function(){input(factorialId)});
	document.getElementById(exponentId).addEventListener("mousedown", function(){input(exponentId)});
	document.getElementById(leftId).addEventListener("mousedown", function(){input(leftId)});
	document.getElementById(rightId).addEventListener("mousedown", function(){input(rightId)});
	document.getElementById(rootId).addEventListener("mousedown", function(){input(rootId)});
	document.getElementById(piId).addEventListener("mousedown", function(){input(piId)});
	document.getElementById(modId).addEventListener("mousedown", function(){input(modId)});
	
	setInterval(cleanString, 250);

	display = document.getElementById("main.display");
}

document.onkeydown = function downEvent(e)
{
	switch(e.keyCode)
	{
		//	Backspace key
		case 8:
			//	Clear the last character on the display
			backInput();

			//	Prevent the browser from navigating to the previous page
			e.preventDefault();
			break;
			
		//	'=' key
		case 13:
			inputEquals();
			break;
		case 48:
			//	')' key combination
			if(e.shiftKey)
			{
				input(rightId);
			}
			//	'0' key
			else
			{
				input(zeroId);
			}
			break;
		case 49:
			//	'!' key combination
			if(e.shiftKey)
			{
				input(factorialId);
			}
			//	'1' key
			else
			{
				input(oneId);
			}
			break;
		case 53:
			//	'%' key combination
			if(e.shiftKey)
			{
				input(modId);
			}
			//	'5' key
			else 
			{
				input(fiveId);
			}
			break;
		
		case 56:
			//	'*' key combination
			if(e.shiftKey)
			{
				input(multiplyId);
			}
			//	'8' key
			else
			{
				input(eightId);
			}
			break;
		case 61:
			//	'+' key combination
			if(e.shiftKey)
			{
				input(addId);
			}
			//	Evaluate (no character)
			else
			{
				inputEquals();
			}
			break;
		case 54:
			//	'^' key combination
			if(e.shiftKey)
			{
				input(exponentId);
			}
			//	'6' key
			else
			{
				input(sixId);
			}
			break;
		case 57:
			//	'(' key combination
			if(e.shiftKey)
			{
				input(leftId);
			}
			//	'9' key
			else
			{
				input(nineId);
			}
			break;
		// '2' key
		case 50:
			input(twoId);
			break;
		//	'3' key
		case 51:
			input(threeId);
			break;
		//	'4' key
		case 52:
			input(fourId);
			break;
		//	'7' key
		case 55:
			input(sevenId);
			break;
		//	'c' key, clear function(no character)
		case 67:
			clearInput();
			break;
		//	'p'	key, pi variable
		case 80:
			input(piId);
			break;
		//	numpad '0'
		case 96:
			input(zeroId);
			break;
		//	numpad '1'
		case 97:
			input(oneId);
			break;
		//	numpad '2'
		case 98:
			input(twoId);
			break;
		//	numpad '3'
		case 99:
			input(threeId);
			break;
		//	numpad '4'
		case 100:
			input(fourId);
			break;
		//	numpad '5'
		case 101:
			input(fiveId);
			break;
		//	numpad '6'
		case 102:
			input(sixId);
			break;
		//	numpad '7'
		case 103:
			input(sevenId);
			break;
		//	numpad '8'
		case 104:
			input(eightId);
			break;
		//	numpad '9'
		case 105:
			input(nineId);
			break;
		//	numpad '*'
		case 106:
			input(multiplyId);
			break;
		//	numpad '.'
		case 110:
			input(decimalId);
			break;
		//	numpad '/'
		case 111:
			//	Override the quick find
			e.preventDefault();
			
			input(divideId);
			break;
		//	numpad '+'
		case 107:
			input(addId);
			inputAdd();
			break;
		//	numpad '-'
		case 109:
			input(subtractId);
			break;
		//	'-' key
		case 173:
			input(subtractId);
			break;
		//	'.' key
		case 190:
			input(decimalId);
			break;
		//	'/' key
		case 191:
			//	Override the quick find
			e.preventDefault();
		
			input(divideId);
			break;
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

//	Replacing '/' with '÷' will take a bit more work since the parser doesn't understand '÷'
function input(buttonId)
{
	display.textContent += idChars[buttonId];
	invertButtonColor(document.getElementById(buttonId));

	setInterval(function(){resetButtonColor(document.getElementById(buttonId))}, fadeTime);
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


