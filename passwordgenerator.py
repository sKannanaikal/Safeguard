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
	

def main():
	desired_length = input('How Long Do You want the Password: ')
	password = generate(int(desired_length))
	print('Your Password is: ' + password) 

if __name__ == '__main__':
	main()