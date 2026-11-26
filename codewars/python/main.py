def sort_the_odd(source_array):
    sorted_odd_array = [item for item in source_array if item % 2 == 1]
    sorted_odd_array.sort()
    odd_index = 0
    for index in range(len(source_array)):
        if source_array[index] % 2 == 1:
            source_array[index] = sorted_odd_array[odd_index]
            odd_index += 1
    return source_array
    # 1
    # odds = sorted((x for x in arr if x % 2 != 0), reverse=True)
    # return [x if x % 2 == 0 else odds.pop() for x in arr]
    # 2
    # from collections import deque
    # def sort_array(array):
    #     odd = deque(sorted(x for x in array if x % 2))
    #     return [odd.popleft() if x % 2 else x for x in array]
    # 3
    # odds = iter(sorted(v for v in source_array if v % 2))
    # return [next(odds) if i % 2 else i for i in source_array]


def find_the_odd_int(seq):
    # Given an array of integers, find the one that appears an odd number of times.
    # There will always be only one integer that appears an odd number of times.
    map_counts = {key: seq.count(key) for key in seq}
    return next(iter(dict((k, v) for k, v in map_counts.items() if v % 2 == 1).items()))[0]
    # 1
    # return [x for x in seq if seq.count(x) % 2][0]


def get_the_middle_character(s):
    # You are going to be given a word.Your job is to return the middle
    # character of the word. If the word 's length is odd, return the middle character. If the word'
    # s length is even, return the middle 2 characters.
    return s[int(len(s) / 2)] if len(s) % 2 == 1 else s[int(len(s) / 2) - 1:int(len(s) / 2) + 1]
    # 1
    # i = (len(s) - 1) // 2
    # return s[i:-i] or s


def permutations(s):

    # In this kata you have to create all permutations of a non-empty input
    # string and remove duplicates, if present. This means,
    # you have to shuffle all letters from the input in all possible orders.
    result = set()
    list_str = list(s)
    n = len(s)
    p = [*range(n+1)]
    i = 1
    result.add("".join(list_str))
    while i < n:
        p[i] -= 1
        if i % 2 == 1:
            j = p[i]
        else:
            j = 0
        list_str[j], list_str[i] = list_str[i], list_str[j]
        result.add("".join(list_str))
        i = 1
        while p[i] == 0:
            p[i] = i
            i += 1
    return list(result)
    # 1
    # import itertools
    # return list("".join(p) for p in set(itertools.permutations(string)))

def sum_arrays(a):

    # Write a function that takes an array of numbers and returns
    # the sum of the numbers. The numbers can be negative or non-integer.
    # If the array does not contain any numbers then you should return 0.
    return sum(a)


if __name__ == '__main__':
    print(sum_arrays([1, 5.2, 4, 0, -1]))
