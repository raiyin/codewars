package ku_5

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
