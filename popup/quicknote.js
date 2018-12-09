var display;
var fadeTime = 800;

window.onload = function(){
	console.log("Onload event");
	
	//	Consolidate this list
	//	var parentId = "main.keyboard.";
	//	var elementList = [parentId + "one", parentId + "two"];
	//	for(var i = 0; i < elementList.length; ++i)
	//	{
	//
	//	}
	
	document.getElementById("main.keyboard.one").addEventListener("mousedown", inputOne);
	document.getElementById("main.keyboard.two").addEventListener("mousedown", inputTwo);
	document.getElementById("main.keyboard.three").addEventListener("mousedown", inputThree);
	document.getElementById("main.keyboard.add").addEventListener("mousedown", inputAdd);
	document.getElementById("main.keyboard.four").addEventListener("mousedown", inputFour);
	document.getElementById("main.keyboard.five").addEventListener("mousedown", inputFive);
	document.getElementById("main.keyboard.six").addEventListener("mousedown", inputSix);
	document.getElementById("main.keyboard.subtract").addEventListener("mousedown", inputSubtract);
	document.getElementById("main.keyboard.seven").addEventListener("mousedown", inputSeven);
	document.getElementById("main.keyboard.eight").addEventListener("mousedown", inputEight);
	document.getElementById("main.keyboard.nine").addEventListener("mousedown", inputNine);
	document.getElementById("main.keyboard.multiply").addEventListener("mousedown", inputMultiply);
	document.getElementById("main.keyboard.decimal").addEventListener("mousedown", inputDecimal);
	document.getElementById("main.keyboard.zero").addEventListener("mousedown", inputZero);
	document.getElementById("main.keyboard.equals").addEventListener("mousedown", inputEquals);
	document.getElementById("main.keyboard.divide").addEventListener("mousedown", inputDivide);
	document.getElementById("main.keyboard.clear").addEventListener("mousedown", clearInput);
	document.getElementById("main.keyboard.back").addEventListener("mousedown", backInput);
	document.getElementById("main.keyboard.factorial").addEventListener("mousedown", inputFactorial);
	
	setInterval(cleanString, 250);
	
	display = document.getElementById("main.display");
	display.focus();
}

document.onkeydown = function downEvent(e)
{	
	//	Backspace key
	if(e.keyCode == 8)
	{
		backInput();
	}
		
	//	'=' key
	if (e.keyCode == 13)
	{
		inputEquals();
		
		var id = "main.keyboard.equals";
		setInterval(function(){resetButtonColor(document.getElementById(id))}, fadeTime);
	}
	
	if(e.keyCode == 48)
	{
		inputZero();
		
		var id = "main.keyboard.zero";
		setInterval(function(){resetButtonColor(document.getElementById(id))}, fadeTime);
	}
	
	else if(e.shiftKey && e.keyCode == 49)
	{
		inputFactorial();
	}
	
	//	This is the '*' character.  Key combinations have to located before 
	else if(e.shiftKey && e.keyCode == 56)
	{
		inputMultiply();
	}
	
	else if(e.shiftKey && e.keyCode == 61)
	{
		inputAdd();
	}

	//	'1'	key
	else if(e.keyCode == 49)
	{
		inputOne();
	}

	else if(e.keyCode == 50)
	{
		inputTwo();
	}

	else if(e.keyCode == 51)
	{
		inputThree();
	}
	
	else if(e.keyCode == 52)
	{
		inputFour();
	}
	
	else if(e.keyCode == 53)
	{
		inputFive();
	}
	
	else if(e.keyCode == 54)
	{
		inputSix();
	}
	
	else if(e.keyCode == 55)
	{
		inputSeven();
	}
	
	else if(e.keyCode == 56)
	{
		inputEight();
	}
	
	else if(e.keyCode == 57)
	{
		inputNine();
	}
	
	else if(e.keyCode == 61)
	{
		inputEquals();
	}
	
	//	Key 'c'
	else if(e.keyCode == 67)
	{
		clearInput();
	}
	
	else if(e.keyCode == 173)
	{
		inputSubtract();
	}
	
	else if(e.keyCode == 190)
	{
		inputDecimal();
	}
	
	else if(e.keyCode == 191)
	{
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
}

function inputDecimal()
{
	display.textContent += ".";
	invertButtonColor(document.getElementById("main.keyboard.decimal"));
}

function inputZero()
{
	display.textContent += "0";
	invertButtonColor(document.getElementById("main.keyboard.zero"));
}

function inputEquals()
{
	var result = math.eval(display.textContent);
	
	if(result == "Infinity")
	{
		display.textContent = "∞";
	}
	
	else
	{
		display.textContent = result;
	}
	
	invertButtonColor(document.getElementById("main.keyboard.equals"));
}

function inputDivide()
{
	display.textContent += "/";
	invertButtonColor(document.getElementById("main.keyboard.divide"));
}

function clearInput()
{
	display.textContent = "";
	invertButtonColor(document.getElementById("main.keyboard.clear"));
}

function backInput()
{
	display.textContent = display.textContent.substring(0, display.textContent.length - 1)
	invertButtonColor(document.getElementById("main.keyboard.back"));
}

function inputFactorial()
{
	display.textContent += "!";
	invertButtonColor(document.getElementById("main.keyboard.factorial"));
}

function cleanString()
{
	var display = document.getElementById("main.display");
	display.innerHTML = display.innerHTML.replace(/[a-zA-Z\[\]\{\} ,~`@#$%&_?;|\\]/g, '');
	
	//	This eliminates any double operators like ++ or //.  Factorial is intentionally omitted because double factorials are a thing
	display.textContent = display.textContent.replace(/[+]{2,}/g, '+');
	display.textContent = display.textContent.replace(/[-]{2,}/g, '-');
	display.textContent = display.textContent.replace(/[*]{2,}/g, '*');
	display.textContent = display.textContent.replace(/[/]{2,}/g, '/');
	display.textContent = display.textContent.replace(/[.]{2,}/g, '.');
}


