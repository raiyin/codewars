const merge = (nums1, m, nums2, n) => {
    // ваш код здесь
    // first, second.
    let f_index = 0;
    let s_index = 0;
    let temp = Number.MAX_SAFE_INTEGER;
    let temp_2 = Number.MAX_SAFE_INTEGER;
    let min = 0;
    let temp_was_used = false;

    if (n == 0) {
        return;
    }

    while (f_index < m) {

        min = Math.min(nums1[f_index], nums2[s_index], temp);

        if (min == nums1[f_index]) {
            f_index++;
        }
        else if (min == nums2[s_index] && temp === Number.MAX_SAFE_INTEGER) {
            temp = nums1[f_index];
            nums1[f_index] = nums2[s_index];
            temp_was_used = true;
            f_index++;
            s_index++;
        }
        else if (min == nums2[s_index] && temp !== Number.MAX_SAFE_INTEGER) {
            temp_2 = nums1[f_index];
            nums1[f_index] = nums2[s_index];
            //nums2[s_index] = temp2;
            f_index++;

            if (temp < temp_2) {
                nums2[s_index] = temp;
                temp = temp_2;
            }
            else {
                nums2[s_index] = temp_2;
            }
        }
        else {
            temp_2 = nums1[f_index];
            nums1[f_index] = temp;
            temp = temp_2;
            temp_was_used = true;
            f_index++;
        }
    }

    for (let j = s_index; j < n;) {
        if (temp_was_used && temp < nums2[j]) {
            nums1[f_index] = temp;
            temp_was_used = false;
        }
        else {
            nums1[f_index] = nums2[j];
            j++;
        }
        f_index++;
    }

    if (temp_was_used) {
        nums1[m + n - 1] = temp;
    }

    console.log(nums1);
};


//merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
//merge([46, 55, 88, 0, 0, 0, 0], 3, [18, 29, 80, 90], 4);
//merge([1], 1, [], 0);
//merge([0, 0, 0], 0, [1, 2, 3], 3);
//merge([0], 0, [1], 1);
//merge([1, 5, 10, 100, 0, 0, 0, 0], 4, [2, 4, 200, 650], 4);
//merge([1, 2, 3, 0], 3, [1], 1);
//merge([111, 123, 124, 0, 0], 3, [133, 224], 2);

//merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

merge([1, 3, 5, 8, 0, 0, 0, 0], 4, [2, 4, 7, 9], 4);
