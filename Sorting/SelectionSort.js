const SelectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) lowest = j;
    }
    if (i !== lowest) {
      let temp = arr[lowest];
      arr[lowest] = arr[i];
      arr[i] = temp;
    }
  }
  console.log(arr);
};
SelectionSort([89, 36, 78, 20, 37, 402, 83, 90, 0, 1020202020]);
