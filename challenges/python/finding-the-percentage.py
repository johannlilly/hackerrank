# Finding the percentage
# https://www.hackerrank.com/challenges/finding-the-percentage/problem

if __name__ == '__main__':
    n = int(input())
    student_marks = {}
    for _ in range(n):
        name, *line = input().split()
        scores = list(map(float, line))
        student_marks[name] = scores
    query_name = input()

    # testing
    # n = 2
    # student_marks = {
    #     "Harsh":   [25.0, 26.5, 28.0],
    #     "Anurag": [26.0, 28.0, 30.0]
    # }
    # query_name = "Harsh"

    # solution (without importing statistics library)
    scores = student_marks[query_name]
    average = 0.0
    
    # sum
    for score in scores:
        average += score

    # average
    average /= len(scores)

    # two (2) decimal places
    average = round(average, 2)

    # deliver
    print(format(average, ".2f"))
