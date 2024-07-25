# Prepare > Python > Strings > String Validators
# hackerrank.com/challenges/string-validators

def validate(s, validation):
  instance = False
  for char in s:
    if eval('char.' + validation + '()'):
      instance = True
      break
  print(instance)

if __name__ == '__main__':
  s = input()

  for validator in ["isalnum", "isalpha", "isdigit", "islower", "isupper"]:
    validate(s, validator)
