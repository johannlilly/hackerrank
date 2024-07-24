# Prepare> Python > Strings> String Split and Join
# hackerrank.com/challenges/python-string-split-and-join

def split_and_join(line):
  # write your code here
  return "-".join(line.split(" "))

if __name__ == '__main__':
  line = input()
  result = split_and_join(line)
  print(result)