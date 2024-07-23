# Find the Runner-Up Score!

if __name__ == '__main__':
  n = int(input())
  arr = map(int, input().split())

  # testing
  # n = 5
  # arr = [2, 3, 6, 6, 5]

  arr = sorted(arr, reverse=True)

  for i in range(len(arr)):
    if arr[i] != arr[0]:
      print(arr[i])
      break
