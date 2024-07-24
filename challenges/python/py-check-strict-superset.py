# Check Strict Superset
# https://www.hackerrank.com/challenges/py-check-strict-superset/problem
# A strict superset has at least one element that does not exist in its subset.

strict, left = True, set(map(int, input().split(" ")))

for i in range(int(input())):
  right = set(map(int, input().split(" ")))

  if len(left) <= len(right) or len(left.intersection(right)) != len(right):
    strict = False
    break
    
print(strict)
