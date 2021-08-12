var passlen = document.getElementById("passSize");
var display = document.getElementById("passLenDisplay");

const serverURL = 'https://httpbin.org/post';

display.innerHTML = "Password Size: " + passlen.value;

passlen.oninput = function() {
	display.innerHTML = "Password Size: " + passlen.value;
}

var submitButton = document.getElementById("subButton");

submitButton.onclick = function(){
	var requester = new XMLHttpRequest();
	requester.open("POST", serverURL, true);
	requester.setRequestHeader('Content-Type', 'application/json');
	requester.send(JSON.stringify({
		"Pass-Size": '' + passlen.value
	}));

	requester.onreadystatechange = function(){
		if(requester.readyState == XMLHttpRequest.DONE && requester.status == 200){
			console.log(requester.responseText);
		}
	}

}