def fiz():
	for num in range(1,20):
		if num % 3 == 0 and num % 5 == 0:
			print("FizzBuzz", num)
		elif num % 3 == 0:
			print("Buzz",num)
		else:
			print("Fizz",num)
fiz()
