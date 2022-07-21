function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (arr[j] > current && j > -1) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

let arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(insertionSort(arr));
