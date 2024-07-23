# Nested Lists
# https://www.hackerrank.com/challenges/nested-list/problem

if __name__ == '__main__':

  students = []
  scores = []

  for _ in range(int(input())):
    name = input()
    score = float(input())
    students.append([name, score])
    scores.append(score)

  # testing
  # students = [['Harry', 37.21], ['Berry', 37.21], ['Tina', 37.2], ['Akriti', 41], ['Harsh', 39]]
  # scores = [37.21, 37.21, 37.2, 41, 39]
  
  scores = sorted(scores)
  second_lowest_score = 0
  second_lowest_students = []

  # Find second-to-lowest grade
  for i in range(len(scores)):
    if scores[i] != scores[0]:
      second_lowest_score = scores[i]
      break

  # Find student(s) with second-to-lowest grade
  for name, score in students:
    if score == second_lowest_score:
      second_lowest_students.append(name)

  # Sort names alphabetically and print
  second_lowest_students.sort()
  for name in second_lowest_students:
    print(name)
