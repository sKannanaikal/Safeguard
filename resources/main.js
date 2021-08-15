var display = document.getElementById("passLenDisplay");
var passDisplay = document.getElementById("passwordDisplay")
var submitButton = document.getElementById("subButton");

var rangeSlider = document.getElementById("passSize");
var rangeBullet = document.getElementById("sizeDisplay");

rangeSlider.addEventListener("input", showSliderValue, true);

function showSliderValue() {
	rangeBullet.style.visibility = "visible";
  rangeBullet.innerHTML = rangeSlider.value;
  var bulletPosition = (rangeSlider.value /rangeSlider.max);
  rangeBullet.style.left = (bulletPosition * 1000) + "px";
}

submitButton.onclick = function(){
	var requester = new XMLHttpRequest();
	requester.open("GET", "http://127.0.0.1:12000/" + rangeSlider.value, true);
	requester.send();

	requester.onreadystatechange = function(){
		if(requester.readyState == XMLHttpRequest.DONE && requester.status == 200){
			var server_response = requester.responseText;
			var json_data = JSON.parse(server_response);
			console.log(json_data.Password);
			passDisplay.innerHTML = json_data.Password;
		}
	}
}