class Utils {

    doQuicksort = function(arr, leftIndex, rightIndex) {

        let right = rightIndex;
        let left = leftIndex;
        let pivot = arr[((left + right)/2).toFixed()];

        //partision
        while(left <= right) {
            while(arr[left] > pivot) {
                left++;
            }
            while(pivot < arr[right]) {
                right--;
            }
            //swap
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;

            left++;
            right--;
        }

        //recursion
        if(leftIndex < right)
            Utils.doQuicksort(arr, leftIndex, left);
        if(left < rightIndex)
            Utils.doQuicksort(arr, left + 1, rightIndex);

        return arr;
    };

    static quicksort2 = function(arr, left, right) {
        let l = left;
        let r = right;
        let tmp;
        let pivotidx = (left + right) / 2;
        let pivot = parseInt(arr[pivotidx.toFixed()]);

        //partition
        while (l <= r) {
            while(parseInt(arr[l]) < pivot) {
                l++;
            }
            while(parseInt(arr[r]) > pivot) {
                r--;
            }
            //swap
            if (l <= r) {
                tmp = arr[l];
                arr[l] = arr[r];
                arr[r] = tmp;
                l++;
                r--;
            }
        }

        if (left < r)
            Utils.quicksort2(arr, left, r);
        if (l < right)
            Utils.quicksort2(arr, l, right);
        return arr;
    };

    static quicksort = (arr) => {
        Utils.quicksort2(arr, 0, arr.length - 1);
    };
}

export default Utils;