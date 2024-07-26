# Prepare > Python > Strings > Text Wrap
# hackerrank.com/challenges/text-wrap

import textwrap

def wrap(string, max_width):
    wrapped = ""

    for i in range(len(string)):

        if i > 1 and i % max_width == 0:
        
            print(wrapped)
            wrapped = ""

        wrapped += string[i]

    return wrapped

if __name__ == '__main__':
    string, max_width = input(), int(input())
    result = wrap(string, max_width)
    print(result)
