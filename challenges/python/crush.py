# HackerRank > Prepare > Data Structures > Arrays > Array Manipulation
# hackerrank.com/challenges/crush

#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'arrayManipulation' function below.
#
# The function is expected to return a LONG_INTEGER.
# The function accepts following parameters:
#  1. INTEGER n
#  2. 2D_INTEGER_ARRAY queries
#

def arrayManipulation(n, queries):
    # Write your code here
    arr = [0] * (n + 1)
    acc = 0
    top = 0

    for query in queries:
        left, right, summand = query

        arr[left - 1] += summand # zero-based
        arr[right] -= summand # inclusive

    for el in arr:
        acc += el
        if acc > top:
            top = acc
            
    # Results in Runtime Error (Passes 9 of 16)
    # for i in range(len(arr)+1):
    #     if left <= i < right:
    #         arr[i] += summand

    # Results in Runtime Error (Passes 9 of 16)
    # arr[left:right] = [sum(x) for x in zip(arr[left:right], [summand] * (right - left)) ]

    # Results in Runtime Error (Passes 9 of 16)
    # from operator import add
    # arr[left:right] = list(map(add, arr[left:right], [summand] * (right - left)))

    return top


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    first_multiple_input = input().rstrip().split()

    n = int(first_multiple_input[0])

    m = int(first_multiple_input[1])

    queries = []

    for _ in range(m):
        queries.append(list(map(int, input().rstrip().split())))

    result = arrayManipulation(n, queries)

    fptr.write(str(result) + '\n')

    fptr.close()
