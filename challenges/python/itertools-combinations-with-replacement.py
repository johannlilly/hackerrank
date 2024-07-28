# Prepare > Python > Itertools > itertools.combinations_with_replacement()
# hackerrank.com/challenges/itertools-combinations-with-replacement

from itertools import combinations_with_replacement

given = input().split()

S = list(given[0])
K = int(given[1])

S.sort()

for combo in combinations_with_replacement(S, K):
    print("".join(combo))
