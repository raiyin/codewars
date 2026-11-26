package ku_5

import (
	"fmt"
	"strings"
)

// 54b42f9314d9229fd6000d9c
func MoveZeros(arr []int) []int {
	var zero_arr []int

	for i := len(arr) - 1; i >= 0; i-- {
		if arr[i] == 0 {
			zero_arr = append(zero_arr, 0)
			arr = append(arr[:i], arr[i+1:]...)
		}
	}
	arr = append(arr, zero_arr...)
	return arr
}

// 1.
// res:= make([]int,len(arr))
// ind:=0
// for i:=0;i<len(arr);i++{
// 	if arr[i]!=0{
// 		res[ind]=arr[i]
// 		ind++
// 	}
// }
// return res

// 52685f7382004e774f0001f7
func HumanReadableTime(seconds int) string {
	hours := seconds / 3600
	minutes := (seconds - hours*3600) / 60
	sec := seconds - hours*3600 - minutes*60
	result := fmt.Sprintf("%02d", hours) + ":" + fmt.Sprintf("%02d", minutes) + ":" + fmt.Sprintf("%02d", sec)
	return result
}

// 1.
// m,s := s / 60, s % 60
// h,m := m / 60, m % 60
// return fmt.Sprintf("%02d:%02d:%02d",h,m,s)
// 2.
// hh := sec / 3600
// mm := sec % 3600 / 60
// ss := sec % 60
// return fmt.Sprintf("%.2d:%.2d:%.2d", hh, mm, ss)

// 513e08acc600c94f01000001
func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func RGB(r, g, b int) string {
	r = max(min(r, 255), 0)
	g = max(min(g, 255), 0)
	b = max(min(b, 255), 0)
	return strings.ToUpper(fmt.Sprintf("%.2x%.2x%.2x", r, g, b))
}
