from flask import Flask, json

app = Flask(__name__)
@app.route('/<int:length>', methods=["GET", "POST"])
def home(length):
	password = generate(length)
	json_data = {
		"Password": password
	}
	response = json.jsonify(json_data)
	response.headers.add("Access-Control-Allow-Origin", "*")
	return response

import random
import string_utils
SPECIAL_CHARACTERS = ['!', '@', '#', '$', '%', '^', '&', '*']

def generate(pass_length):
	password = ''
	lower_count = random.randint(1, pass_length - 2)
	pass_length -= lower_count
	upper_count = random.randint(1, pass_length - 1)
	special_count = pass_length

	for _ in range(lower_count):
		password += chr(random.randint(65, 90))

	for _ in range(upper_count):
		password += chr(random.randint(97, 122))

	for _ in range(special_count):
		password += SPECIAL_CHARACTERS[random.randint(1, len(SPECIAL_CHARACTERS) - 1)]

	for _ in range(10):
		shuffled_password = string_utils.shuffle(password)

	return shuffled_password

app.run(port=12000)