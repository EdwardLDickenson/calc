var display;
var fadeTime = 800;
var	pi = 3.14;

//	Button Ids
var buttonParent = "main.keyboard.";
var oneId = buttonParent + "one";
var twoId = buttonParent + "two";
var threeId = buttonParent + "three";
var fourId = buttonParent + "four";
var fiveId = buttonParent + "five";
var sixId = buttonParent + "six";
var sevenId = buttonParent + "seven";
var eightId = buttonParent + "eight";
var nineId = buttonParent + "nine";
var zeroId = buttonParent + "zero";
var equalsId = buttonParent + "equals";
var addId = buttonParent + "add";
var subtractId = buttonParent + "subtract";
var multiplyId = buttonParent + "multiply";
var divideId = buttonParent + "divide";
var clearId = buttonParent + "clear";
var backId = buttonParent + "back";
var factorialId = buttonParent + "factorial";
var modId = buttonParent + "mod";
var rootId = buttonParent + "root";
var piId = buttonParent + "pi";
var leftId = buttonParent + "leftParenthesis";
var rightId = buttonParent + "rightParenthesis";
var exponentId = buttonParent + "exponent";
var decimalId = buttonParent + "decimal";

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
idChars[multiplyId] = "×";
idChars[divideId] = "÷";
idChars[factorialId] = "!";
idChars[modId] = "%";
idChars[exponentId] = "^";
idChars[leftId] = "(";
idChars[rightId] = ")";
idChars[rootId] = "√";
idChars[piId] = "Π";
idChars[decimalId] = "."

function getColorAndChangeStyle(){
	//var fgRedVal = parseInt(document.getElementById("fgRed", 10).value).toString(16);
	var fgRedVal
	if(parseInt(document.getElementById("fgRed", 10).value) < 15)
	{
		console.log("This is the zero case");
		fgRedVal = "0" + fgRedVal;
	}
	//var fgGreenVal = parseInt(document.getElementById("fgGreen", 10).value).toString(16);
	if(parseInt(document.getElementById("fgGreen", 10).value) < 15)
	{
		fgGreenVal = "0" + fgGreenVal;
	}
	//var fgBlueVal = parseInt(document.getElementById("fgBlue", 10).value).toString(16);
	if(parseInt(document.getElementById("fgBlue", 10).value) < 15)
	{
		fgBlueVal = "0" + fgBlueVal;
	}
	//var bgRedVal = parseInt(document.getElementById("bgRed", 10).value).toString(16);
	if(parseInt(document.getElementById("bgRed", 10).value) < 15)
	{
		bgRedVal = "0" + bgRedVal;
	}
	//var bgGreenVal = parseInt(document.getElementById("bgGreen", 10).value).toString(16);
	if(parseInt(document.getElementById("bgGreen", 10).value) < 15)
	{
		bgGreenVal = "0" + bgGreenVal;
	}
	//var bgBlueVal = parseInt(document.getElementById("bgBlue", 10).value).toString(16);
	if(parseInt(document.getElementById("bgBlue", 10).value) < 15)
	{
		bgBlueVal = "0" + bgBlueVal;
	}
	
	document.documentElement.style.setProperty("--foregroundColor", "#" + fgRedVal + fgGreenVal + fgBlueVal);
	document.documentElement.style.setProperty("--backgroundColor", "#" + bgRedVal + bgGreenVal + bgBlueVal);
}

function gotten(item, id, preset){
	/*fields[id] = item[id];
	var result = fields[id];
	
	if(item[id] == undefined || item[id] == "undefined")
	{
		result = preset;
		saveColor(id, preset);
	}
	
	document.getElementById(id).value = result;
	
	result = result;
	
	document.getElementById(id + "Slider").value = result;
	getColorAndChangeStyle();*/
	
	//var fgRedVal = parseInt(document.getElementById("fgRed", 10).value).toString(16);
	var fgRedVal = item[id];
	if(parseInt(document.getElementById("fgRed", 10).value) < 15)
	{
		console.log("This is the zero case");
		fgRedVal = "0" + fgRedVal;
	}
	//var fgGreenVal = parseInt(document.getElementById("fgGreen", 10).value).toString(16);
	var fgGreenVal =
	if(parseInt(document.getElementById("fgGreen", 10).value) < 15)
	{
		fgGreenVal = "0" + fgGreenVal;
	}
	//var fgBlueVal = parseInt(document.getElementById("fgBlue", 10).value).toString(16);
	var fgBlueVal =
	if(parseInt(document.getElementById("fgBlue", 10).value) < 15)
	{
		fgBlueVal = "0" + fgBlueVal;
	}
	//var bgRedVal = parseInt(document.getElementById("bgRed", 10).value).toString(16);
	var bgRedVal =
	if(parseInt(document.getElementById("bgRed", 10).value) < 15)
	{
		bgRedVal = "0" + bgRedVal;
	}
	//var bgGreenVal = parseInt(document.getElementById("bgGreen", 10).value).toString(16);
	var bgGreenVal =
	if(parseInt(document.getElementById("bgGreen", 10).value) < 15)
	{
		bgGreenVal = "0" + bgGreenVal;
	}
	//var bgBlueVal = parseInt(document.getElementById("bgBlue", 10).value).toString(16);
	var bgBlueVal =
	if(parseInt(document.getElementById("bgBlue", 10).value) < 15)
	{
		bgBlueVal = "0" + bgBlueVal;
	}
	
	document.documentElement.style.setProperty("--foregroundColor", "#" + fgRedVal + fgGreenVal + fgBlueVal);
	document.documentElement.style.setProperty("--backgroundColor", "#" + bgRedVal + bgGreenVal + bgBlueVal);
}


window.onload = function(){
	
	browser.storage.sync.get("fgRed").then(function(item){gotten(item, "fgRed", "68");}, getErr);
	browser.storage.sync.get("fgGreen").then(function(item){gotten(item, "fgGreen", "136");}, getErr);
	browser.storage.sync.get("fgBlue").then(function(item){gotten(item, "fgBlue", "255");}, getErr);
	browser.storage.sync.get("bgRed").then(function(item){gotten(item, "bgRed", "34");}, getErr);
	browser.storage.sync.get("bgGreen").then(function(item){gotten(item, "bgGreen", "34");}, getErr);
	browser.storage.sync.get("bgBlue").then(function(item){gotten(item, "bgBlue", "34");}, getErr);
	browser.storage.sync.get("displaySize").then(function(item){gotten(item, "displaySize", "15");}, getErr);
	browser.storage.sync.get("useCommas").then(function(item){getCheckboxValue(item, "useCommas")}, getErr);
	
	
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

function input(buttonId)
{
	display.textContent += idChars[buttonId];
	invertButtonColor(document.getElementById(buttonId));
	var parsedDisplay = display.textContent.replace(/[,]/g, '');

	var figures = parsedDisplay.split(/[+\-*/Π÷×√!^%().]/g);
	
	for(var i = 0; i < figures.length; ++i)
	{
		if(figures[i].length != 0)
		{
			var formatted = new Intl.NumberFormat('en', {maximumSignificantDigits: 18}).format(parseInt(figures[i]), 10);
			
			parsedDisplay = parsedDisplay.replace(figures[i], formatted);
		}
	}
	
	display.textContent = parsedDisplay;
	
	//	Clean characters which are not used as operators
	display.innerHTML = display.innerHTML.replace(/[a-zA-Z\[\]\{\} ~`@#$&_?;|\\]/g, '');
	
	//	This eliminates any double operators like ++ or //.  Factorial is intentionally omitted because double factorials are a thing
	display.textContent = display.textContent.replace(/[+]{2,}/g, '+');
	display.textContent = display.textContent.replace(/[-]{2,}/g, '-');
	display.textContent = display.textContent.replace(/[×]{2,}/g, '×');
	display.textContent = display.textContent.replace(/[÷]{2,}/g, '÷');
	display.textContent = display.textContent.replace(/[.]{2,}/g, '.');
	display.textContent = display.textContent.replace(/[%]{2,}/g, '%');
	
	setInterval(function(){resetButtonColor(document.getElementById(buttonId))}, fadeTime);
}

function inputEquals()
{
	var parsedDisplay = display.textContent;
	parsedDisplay = parsedDisplay.replace(/[,]/g, "");
	parsedDisplay = parsedDisplay.replace(/[Π]/g, "(3.14)");
	
	if(parsedDisplay.includes("√"))
	{
		parsedDisplay = parsedDisplay.replace(/[√]/g, "sqrt(");
		parsedDisplay = parsedDisplay + ")"
		
		console.log(parsedDisplay);
	}
	
	parsedDisplay = parsedDisplay.replace(/[÷]/g, "/");
	parsedDisplay = parsedDisplay.replace(/[×]/g, "*");
	
	var result = math.eval(parsedDisplay);

	if(result == "Infinity")
	{
		display.textContent = "∞";
	}

	else
	{
		display.textContent = new Intl.NumberFormat('en', {maximumSignificantDigits: 18}).format(parseInt(result), 10);
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



//	TODO:
//
//
//


