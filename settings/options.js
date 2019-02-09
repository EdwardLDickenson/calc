var fgRed;
var fgGreen;
var fgBlue
var bgRed;
var bgGreen;
var bgBlue;
var useCommas;

var fields = {"fgRed": fgRed, "fgGreen": fgGreen, "fgBlue": fgBlue, "bgRed": bgRed, "bgGreen": bgGreen, "bgBlue": bgBlue, "useCommas": useCommas};

//	It's a word in Middle English
function setten(item, id){
	fields[id] = item;
}

function gotten(item, id, preset){
	fields[id] = item[id];
	var result = fields[id];
	
	if(item[id] == undefined || item[id] == "undefined")
	{
		result = preset;
		saveColor(id, preset);
	}
	
	document.getElementById(id).value = result;
	
	result = result;
	
	document.getElementById(id + "Slider").value = result;
	getColorAndChangeStyle();
}

function setErr(err){
	console.log(err);
}

function getErr(err){
	console.log(err);
}

function saveColor(id, value){
	if(value == "")
	{
		value = "0";
	}
	
	if(value > 255)
	{
		value = 255;
	}
	
	document.getElementById(id).value = value;
	
	var kv = {};
	kv[id] = value;
	browser.storage.sync.set(kv).then(function(item){setten(item, id);}, setErr);
}

function getColorAndSave(id){
	var value = document.getElementById(id).value;
	value = value.replace(/[G-Zg-z\[\]\{\},.*%+=\- ~`@#$&_?;|\\]/g, "");
	document.getElementById(id).value = value;
	saveColor(id, value);
	
	//	This solution obviously depends on a consistent naming scheme and is slightly kludgy.  An associative array or map function would be a better long term solution.
	document.getElementById(id + "Slider").value = value;
}

function getColorAndChangeStyle(){
	var fgRedVal = parseInt(document.getElementById("fgRed", 10).value).toString(16);
	if(parseInt(document.getElementById("fgRed", 10).value) < 15)
	{
		console.log("This is the zero case");
		fgRedVal = "0" + fgRedVal;
	}
	var fgGreenVal = parseInt(document.getElementById("fgGreen", 10).value).toString(16);
	if(parseInt(document.getElementById("fgGreen", 10).value) < 15)
	{
		fgGreenVal = "0" + fgGreenVal;
	}
	var fgBlueVal = parseInt(document.getElementById("fgBlue", 10).value).toString(16);
	if(parseInt(document.getElementById("fgBlue", 10).value) < 15)
	{
		fgBlueVal = "0" + fgBlueVal;
	}
	var bgRedVal = parseInt(document.getElementById("bgRed", 10).value).toString(16);
	if(parseInt(document.getElementById("bgRed", 10).value) < 15)
	{
		bgRedVal = "0" + bgRedVal;
	}
	var bgGreenVal = parseInt(document.getElementById("bgGreen", 10).value).toString(16);
	if(parseInt(document.getElementById("bgGreen", 10).value) < 15)
	{
		bgGreenVal = "0" + bgGreenVal;
	}
	var bgBlueVal = parseInt(document.getElementById("bgBlue", 10).value).toString(16);
	if(parseInt(document.getElementById("bgBlue", 10).value) < 15)
	{
		bgBlueVal = "0" + bgBlueVal;
	}
	
	document.documentElement.style.setProperty("--foregroundColor", "#" + fgRedVal + fgGreenVal + fgBlueVal);
	document.documentElement.style.setProperty("--backgroundColor", "#" + bgRedVal + bgGreenVal + bgBlueVal);
}

function getSliderValueAndSave(id){
	var value = document.getElementById(id).value;
	var shortId = id.replace("Slider", "");
	
	document.getElementById(shortId).value = value;
	saveColor(shortId, value);
	
	getColorAndChangeStyle();	
}

function getCheckboxValueAndSave(id){
	var value = document.getElementById(id).checked;
	var kv = {};
	kv[id] = value;
	browser.storage.sync.set(kv).then(function(item){}, setErr);
}

function getCheckboxValue(item, id){
	var value = item[id];
	
	if(value == undefined || value == "undefined")
	{
		true;
	}
	
	document.getElementById(id).checked = value;
}

function resetFields(){	
	document.getElementById("fgRedSlider").value = "68";
	document.getElementById("fgGreenSlider").value = "136";
	document.getElementById("fgBlueSlider").value = "255";
	
	document.getElementById("bgRedSlider").value = "34";
	document.getElementById("bgGreenSlider").value = "34";
	document.getElementById("bgBlueSlider").value = "34";
	
	document.getElementById("displaySize").value = "15";
	document.getElementById("displaySizeSlider").value = "15";
	document.getElementById("useCommas").checked = true;
	
	saveColor("fgRed", "68");
	saveColor("fgGreen", "136");
	saveColor("fgBlue", "255");
	
	saveColor("bgRed", "34");
	saveColor("bgGreen", "34");
	saveColor("bgBlue", "34");
	saveColor("displaySize", "15");

	getCheckboxValueAndSave("useCommas");
	getColorAndChangeStyle();
}

window.onload = function(){
	//	Get values for the UI
	browser.storage.sync.get("fgRed").then(function(item){gotten(item, "fgRed", "68");}, getErr);
	browser.storage.sync.get("fgGreen").then(function(item){gotten(item, "fgGreen", "136");}, getErr);
	browser.storage.sync.get("fgBlue").then(function(item){gotten(item, "fgBlue", "255");}, getErr);
	browser.storage.sync.get("bgRed").then(function(item){gotten(item, "bgRed", "34");}, getErr);
	browser.storage.sync.get("bgGreen").then(function(item){gotten(item, "bgGreen", "34");}, getErr);
	browser.storage.sync.get("bgBlue").then(function(item){gotten(item, "bgBlue", "34");}, getErr);
	browser.storage.sync.get("displaySize").then(function(item){gotten(item, "displaySize", "15");}, getErr);
	browser.storage.sync.get("useCommas").then(function(item){getCheckboxValue(item, "useCommas")}, getErr);
	
	//	Attach event listeners to the setting fields
	document.getElementById("fgRed").addEventListener("keyup", function(){getColorAndSave("fgRed");});
	document.getElementById("fgGreen").addEventListener("keyup", function(){getColorAndSave("fgGreen");});
	document.getElementById("fgBlue").addEventListener("keyup", function(){getColorAndSave("fgBlue");});
	document.getElementById("bgRed").addEventListener("keyup", function(){getColorAndSave("bgRed");});
	document.getElementById("bgGreen").addEventListener("keyup", function(){getColorAndSave("bgGreen");});
	document.getElementById("bgBlue").addEventListener("keyup", function(){getColorAndSave("bgBlue");});
	document.getElementById("displaySize").addEventListener("keyup", function(){getColorAndSave("displaySize");});
	
	//	Attach event listeners to the setting sliders
	document.getElementById("fgRedSlider").addEventListener("input", function(){getSliderValueAndSave("fgRedSlider")});
	document.getElementById("fgGreenSlider").addEventListener("input", function(){getSliderValueAndSave("fgGreenSlider")});
	document.getElementById("fgBlueSlider").addEventListener("input", function(){getSliderValueAndSave("fgBlueSlider")});
	document.getElementById("bgRedSlider").addEventListener("input", function(){getSliderValueAndSave("bgRedSlider")});
	document.getElementById("bgGreenSlider").addEventListener("input", function(){getSliderValueAndSave("bgGreenSlider")});
	document.getElementById("bgBlueSlider").addEventListener("input", function(){getSliderValueAndSave("bgBlueSlider")});
	document.getElementById("displaySizeSlider").addEventListener("input", function(){getSliderValueAndSave("displaySizeSlider")});
	
	//	Attach event listeners to the checkboxes
	document.getElementById("useCommas").addEventListener("click", function(){getCheckboxValueAndSave("useCommas")});
	
	//	Attach event listeners to the buttons
	document.getElementById("resetButton").addEventListener("click", resetFields);
}



//	TODO:
//
//
//


