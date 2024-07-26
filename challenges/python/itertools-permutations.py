# Prepare > Python > Itertools > itertools.permutations()
# hackerrank.com/challenges/itertools-permutations

# Enter your code here. Read input from STDIN. Print output to STDOUT
from itertools import permutations

line = input().split()
S, k = line[0], int(line[1])

groups = []
for permutation in permutations(S, r=k):
    groups.append("".join(permutation))

groups.sort()
print(*groups, sep="\n")
