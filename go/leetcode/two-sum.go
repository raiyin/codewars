package leetcode

func twoSum(nums []int, target int) []int {
	myMap := make(map[int]int)

	for i := 0; i < len(nums); i++ {
		_, exists := myMap[nums[i]]

		if exists {
			if target-nums[i] != nums[i] {
				myMap[target-nums[i]] = i
				return []int{myMap[target-nums[i]], myMap[nums[i]]}
			} else {
				return []int{myMap[target-nums[i]], i}
			}
		}
		myMap[target-nums[i]] = i
	}
	return []int{1}
}

func twoSumBest(nums []int, target int) []int {
	dic := make(map[int]int)
	for i, num := range nums {
		comp := target - num
		if v, ok := dic[comp]; ok {
			return []int{v, i}
		}
		dic[num] = i
	}
	return []int{}
}
