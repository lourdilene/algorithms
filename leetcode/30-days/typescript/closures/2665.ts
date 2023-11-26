type ReturnObj = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter(init: number): ReturnObj {
  var initialValue = init;
  return {
    increment: function (): number {
      return ++init;
    },
    decrement: function (): number {
      return --init;
    },
    reset: function (): number {
      init = initialValue;
      return init;
    },
  };
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
