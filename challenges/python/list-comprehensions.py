# List Comprehensions
# https://www.hackerrank.com/challenges/list-comprehensions/problem
# 2024-07-23

if __name__ == '__main__':
    x = int(input())
    y = int(input())
    z = int(input())
    n = int(input())

# for i in range(x + 1):
#     for ii in range(y + 1):
#         for iii in range(z + 1):
#             if i + ii + iii != n:
#                 permutations.append([i, ii, iii])

# for i in range (x + 1):
#     permutations.append()

permutations = \
    [[i, j, k]
        for i in range(x+1)
        for j in range(y+1)
        for k in range(z+1)
        if sum([i, j, k]) != n]

print(permutations)