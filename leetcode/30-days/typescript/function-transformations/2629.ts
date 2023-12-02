type F = (x: number) => number;

function compose(functions: F[]): F {
  return function (x) {
    let arrReverse: F[] = functions.reverse();
    arrReverse.forEach((fn: F) => {
      x = fn(x);
    });
    return x;
  };
}

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
