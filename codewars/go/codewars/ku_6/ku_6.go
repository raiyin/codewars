package ku_6

import (
	"fmt"
	"strings"
)

// 54b42f9314d9229fd6000d9c
func DuplicateEncode(word string) string {
	dict := make(map[string]int)
	var result strings.Builder

	for _, r := range word {
		lower_str := strings.ToLower(string(r))
		_, ok := dict[lower_str]
		if ok {
			dict[lower_str] = dict[lower_str] + 1
		} else {
			dict[lower_str] = 1
		}
	}

	for _, r := range word {
		lower_str := strings.ToLower(string(r))
		count := dict[lower_str]
		if count == 1 {
			fmt.Fprintf(&result, "(")
		} else {
			fmt.Fprintf(&result, ")")
		}
	}
	return result.String()
}

// func DuplicateEncode(word string) (r string) {
// 	word = strings.ToLower(word)
// 	t := map[rune]int{}
// 	for _, c := range word { t[c]++ }
// 	for _, c := range word {
// 	  if t[c] == 1 {
// 		r += "("
// 	  } else {
// 		r += ")"
// 	  }
// 	}
// 	return
//   }
