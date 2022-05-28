// Check notes for difference

const BubbleSortUnoptimized = (arr) => {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //change to < for descending order
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
};

console.log(
  BubbleSortUnoptimized([89, 36, 78, 20, 37, 402, 83, 90, 0, 1020202020])
);
const BubbleSortOptimized = (arr) => {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }

  return arr;
};

console.log(
  BubbleSortOptimized([89, 36, 78, 20, 37, 402, 83, 90, 0, 1020202020])
);
