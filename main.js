var passlen = document.getElementById("passSize");
var display = document.getElementById("passLenDisplay");
var passDisplay = document.getElementById("passwordDisplay")

display.innerHTML = "Password Size: " + passlen.value;

passlen.oninput = function() {
	display.innerHTML = "Password Size: " + passlen.value;
}

var submitButton = document.getElementById("subButton");

submitButton.onclick = function(){
	var requester = new XMLHttpRequest();
	requester.open("GET", "http://127.0.0.1:12000/" + passlen.value, true);
	requester.send();

	requester.onreadystatechange = function(){
		if(requester.readyState == XMLHttpRequest.DONE && requester.status == 200){
			var server_response = requester.responseText;
			var json_data = JSON.parse(server_response);
			console.log(json_data.Password);
			passDisplay.innerHTML = "Password: " + json_data.Password;

		}
	}

}