function mergeSortedArrays(arr1, arr2) {
  let sortedArray = [];
  let array1Item = arr1[0];
  let array2Item = arr2[0];
  let i = 1;
  let j = 1;
  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      sortedArray.push(array1Item);
      array1Item = arr1[i];
      i++;
    } else {
      sortedArray.push(array2Item);
      array2Item = arr2[j];
      j++;
    }
  }
  return sortedArray;
}

console.log(mergeSortedArrays([1, 3, 5, 7, 9], [2, 4, 6, 8]));
