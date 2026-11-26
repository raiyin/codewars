# Sum of positive (https://www.codewars.com/kata/5715eaedb436cf5606000381/)
def positive_sum(arr):
    sum = 0
    for i in arr:
        if i > 0:
            sum = sum+i
    return sum


# Square(n) Sum (https://www.codewars.com/kata/515e271a311df0350d00000f)


def square_sum(numbers):
    sum = 0
    for i in numbers:
        sum += i*i
    return sum

# Remove First and Last Character (https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0)


def remove_char(s):
    return s[1:-1]


# Count of positives / sum of negatives (https://www.codewars.com/kata/576bb71bbbcf0951d5000044)
def count_positives_sum_negatives(arr):
    if arr is None:
        return []

    if len(arr) == 0:
        return []

    result = [0, 0]
    for value in arr:
        if value > 0:
            result[0] += 1
        elif value < 0:
            result[1] += value

    return result


# print(positive_sum([1, 2, 3, 4, 5]))
# print(square_sum([0, 3, 4, 5]))
# print(remove_char('country'))  # ="ountr"
print(count_positives_sum_negatives([1]))  # [1,0]
