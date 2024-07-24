# Incorrect Regex
# https://www.hackerrank.com/challenges/incorrect-regex/problem

import re

for _ in range(int(input())):
  res = True
  try:
    reg = re.compile(input())
  except re.error:
    res = False
  print(res)
