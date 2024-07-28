#  Prepare > Python > Itertools > itertools.combinations()
# hackerrank.com/challenges/itertools-combinations

# Enter your code here. Read input from STDIN. Print output to STDOUT
from itertools import combinations

temp = input().split()

S = list(temp[0])
k = int(temp[1])

S.sort()

for i in range(k):
    for combo in combinations(S, i+1):
        print("".join(combo))
