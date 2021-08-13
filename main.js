var passlen = document.getElementById("passSize");
var display = document.getElementById("passLenDisplay");

const serverURL = 'http://127.0.0.1:12000/';

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
			var server_response = requester.responseText;
			var json_data = JSON.parse(server_response);
			console.log(server_response);

		}
	}

}