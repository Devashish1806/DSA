function mergeSort(arr) {
  if (arr.length === 1) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let leftIndex = 0;
  let rightIndex = 0;
  let resArray = [];
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resArray.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return resArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

let arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(mergeSort(arr));
