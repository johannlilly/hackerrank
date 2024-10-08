# Prepare > Python > Strings > Capitalize!
# hackerrank.com/challenges/capitalize

#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the solve function below.
def solve(s):
    " ".join(map(str.capitalize, s.split(" ")))

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')
    s = input()
    result = solve(s)
    fptr.write(result + '\n')
    fptr.close()
