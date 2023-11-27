function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  arr.forEach((element, index) => {
    arr[index] = fn(element, index);
  });
  return arr;
}
