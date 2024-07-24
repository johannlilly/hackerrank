# Lists
# https://www.hackerrank.com/challenges/python-lists/problem
# Improve this using eval() and capturing successive with [1:]

def op(l, cmd, arg1=0, arg2=0):
  arg1 = int(arg1)
  arg2 = int(arg2)
  if cmd == "insert" : l.insert(arg1, arg2)
  if cmd == "print"  : print(l)
  if cmd == "remove" : l.remove(arg1)
  if cmd == "append" : l.append(arg1)
  if cmd == "sort"   : l.sort()
  if cmd == "pop"    : l.pop()
  if cmd == "reverse": l.reverse()
 
if __name__ == '__main__':
  N = int(input())
  L = []
  for _ in range(N):
    op(L, *list(input().split(" ")))
