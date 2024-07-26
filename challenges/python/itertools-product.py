# Prepare > Python > Itertool > sitertools.product()
# hackerrank.com/challenges/itertools-product

coordinate1 = []
coordinate2 = []

for var in list(map(int, input().split(" "))):
    coordinate1.append(var)

for var in list(map(int, input().split(" "))):
    coordinate2.append(var)

def product(A, B):
    cartesian = []
    
    for x in A:
        for y in B:
            cartesian.append((x, y))

    return cartesian

for tup in product(coordinate1, coordinate2):
    print(tup, end=" ")
