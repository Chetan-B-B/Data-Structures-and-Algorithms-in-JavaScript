function SelectionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      console.log(j);
    }
    arr[j + 1] = currentVal;
    console.log(j);
  }
  return arr;
}
console.log(SelectionSort([89, 36, 78, 20, 37, 402, 83, 90, 0, 1020202020]));
