# Check Subset
# https://www.hackerrank.com/challenges/py-check-subset/problem

for case in range(int(input())):
    lc, left = input(), set(map(int, input().split(" ")))
    lc, left = rc, right = input(), set(map(int, input().split(" ")))

print(len(left) == len(right.intersection(left)))
