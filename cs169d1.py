
import math

def zero_counter(n):
	# factorial = math.factorial(n)
	if n < 5:
		return 0
	return zero_counter(n/math.factorial(5)) + 1 