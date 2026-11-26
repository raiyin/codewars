package main

import "fmt"

// um of positive (https://www.codewars.com/kata/5715eaedb436cf5606000381/)
func PositiveSum(numbers []int) int {
	sum := 0
	for _, value := range numbers {
		if value > 0 {
			sum = sum + value
		}
	}
	return sum
}

// Square(n) Sum (https://www.codewars.com/kata/515e271a311df0350d00000f)
func SquareSum(numbers []int) int {
	sum := 0
	for _, value := range numbers {
		sum = sum + value*value
	}
	return sum
}

// Remove First and Last Character (https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0)
func RemoveChar(word string) string {
	return word[1 : len(word)-1]
}

// Count of positives / sum of negatives (https://www.codewars.com/kata/576bb71bbbcf0951d5000044)
func CountPositivesSumNegatives(numbers []int) []int {
	var res []int

	if len(numbers) == 0 {
		return res
	}

	res = make([]int, 2)
	for _, value := range numbers {
		if value > 0 {
			res[0]++
		} else if value < 0 {
			res[1] += value
		}
	}

	return res // your code here
}

func main() {
	// fmt.Println(PositiveSum([]int{1, 2, 3, 4, 5})) // =15
	// fmt.Println(SquareSum([]int{0, 3, 4, 5})) // =50
	// fmt.Println(RemoveChar("country")) // ="ountr"
	fmt.Println(CountPositivesSumNegatives([]int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15})) // {10, -65}
}
