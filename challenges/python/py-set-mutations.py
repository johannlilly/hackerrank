# Set Mutations
# https://www.hackerrank.com/challenges/py-set-mutations/problem

# if __name__ == '__main__':

elem = int(input())
a = set(list(map(int, input().split(" "))))
s = int(input())

def mutate(A, N, op):
  if op[0] == "i": A.intersection_update(N)
  if op[0] == "u": A.update(N)
  if op[0] == "s": A.symmetric_difference_update(N)
  if op[0] == "d": A.difference_update(N)
  return A

# Sample Input
# elem = int("16")
# a = set(list(map(int, "1 2 3 4 5 6 7 8 9 10 11 12 13 14 24 52".split(" "))))
# s = int("4")

for i in range(s):
    op = input().split(" ")
    n = set(list(map(int, input().split(" "))))
    a = mutate(a, n, op[0])

print(sum(a))
