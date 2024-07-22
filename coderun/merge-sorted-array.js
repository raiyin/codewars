const merge = (nums1, m, nums2, n) => {
    // ваш код здесь
    // first, second.
    let f_index = m - 1;
    let s_index = n - 1;

    for (let common_index = m + n - 1; common_index >= 0; common_index--) {
        if (s_index >= 0 && f_index >= 0) {
            if (nums1[f_index] <= nums2[s_index]) {
                nums1[common_index] = nums2[s_index];
                s_index--;
            }
            else {
                nums1[common_index] = nums1[f_index];
                f_index--;
            }
        }
        else if (f_index >= 0) {
            nums1[common_index] = nums1[f_index];
            f_index--;
        }
        else if (s_index >= 0) {
            nums1[common_index] = nums2[s_index];
            s_index--;
        }
    }


    console.log(nums1);
};


merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
merge([46, 55, 88, 0, 0, 0, 0], 3, [18, 29, 80, 90], 4);
merge([1], 1, [], 0);
merge([0, 0, 0], 0, [1, 2, 3], 3);
merge([0], 0, [1], 1);
merge([1, 5, 10, 100, 0, 0, 0, 0], 4, [2, 4, 200, 650], 4);
merge([1, 2, 3, 0], 3, [1], 1);
merge([111, 123, 124, 0, 0], 3, [133, 224], 2);
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
merge([1, 3, 5, 8, 0, 0, 0, 0], 4, [2, 4, 7, 9], 4);
