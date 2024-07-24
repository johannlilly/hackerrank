# The Captain's Room
# https://www.hackerrank.com/challenges/py-the-captains-room/problem

size, rooms, counter = int(input()), list(map(int, input().split(" "))), {}

# Sample Input (Test Case 1)
# size = 823
# with open("./py-the-captains-room-01.txt", "r") as file:
#   rooms = list(map(int, file.read().replace("\n", "").split(" ")))
# counter = {}

for room in rooms:
  if room in counter.keys(): counter[room] += 1
  else: counter[room] = 1

for key, value in counter.items():
  if value == 1: print(key)

# Alternate solution (slow)
# for room in rooms:
#   if rooms.count(room) != size:
#     print(room)
#     break
