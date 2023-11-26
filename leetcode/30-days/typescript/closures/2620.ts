function createCounter(n: number): () => number {
  let result = 0;
  let count = 0;
  return function () {
    result = n + count;
    count += 1;
    console.log("Debug" + result, count);
    return result;
  };
}

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
