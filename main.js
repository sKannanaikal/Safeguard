var passlen = document.getElementById("passSize");
var display = document.getElementById("passLenDisplay");

display.innerHTML = "Password Size: " + passlen.value;

passlen.oninput = function() {
	display.innerHTML = "Password Size: " + passlen.value;
}