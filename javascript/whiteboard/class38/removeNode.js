function stackReverse(arr) {
  if (!arr) {
          return null;
      }
      let stack = new Stack();
      for (let i = arr.length - 1; i >= 0; i--) {
          stack.push(arr[i]);
      }
      let reversedArr = [];
      while (stack.size() > 0) {
          reversedArr.push(stack.pop());
      }
      return reversedArr;
  }
