# Set .symmetric_difference() Operation
# https://www.hackerrank.com/challenges/py-set-symmetric-difference-operation/problem

if __name__ == '__main__':
  english = int(input())
  en_subs = set(input().split(" "))
  french = int(input())
  fr_subs = set(input().split(" "))

# test
# english = 9
# en_subs = set("1 2 3 4 5 6 7 8 9".split(" "))
# french = 9
# fr_subs = set("10 1 2 3 11 21 55 6 8".split(" "))

print(len(en_subs.symmetric_difference(fr_subs)))
