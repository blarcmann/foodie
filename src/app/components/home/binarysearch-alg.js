function binary(array, key) {
    let element,
        mid,
        high = array.length - 1;
        low = 0;
        while(low <= high) {
            mid = Math.floor((low + high) / 2, 10);
            element = array[mid];
            if(element < key) {
                low = mid + 1
            }
            else if (element > key) {
                high = mid - 1
            }
            else {
                return mid;
            }
        }
        return -1;
}

// array must be sorted before search begins