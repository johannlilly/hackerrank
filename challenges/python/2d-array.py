# HackerRank > Prepare > Data Structures > Arrays > 2D Array - DS
# hackerrank.com/challenges/2d-array

#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'hourglassSum' function below.
#
# The function is expected to return an INTEGER.
# The function accepts 2D_INTEGER_ARRAY arr as parameter.
#

def hourglassSum(arr):
    # Write your code here

    sums = []

    for y in range(len(arr) - 2):
        for x in range(len(arr[y]) - 2):
            a = arr[y][x]
            b = arr[y][x+1]
            c = arr[y][x+2]
            d = arr[y+1][x+1]
            e = arr[y+2][x]
            f = arr[y+2][x+1]
            g = arr[y+2][x+2]
            
            sums.append(a+b+c+d+e+f+g)
    
    return(max(sums))

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    arr = []

    for _ in range(6):
        arr.append(list(map(int, input().rstrip().split())))

    result = hourglassSum(arr)

    fptr.write(str(result) + '\n')

    fptr.close()
