


function validate_brackets(string) {
  let stack = [];

  for (let char of string) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    }
    else if (char === ')' || char === ']' || char === '}') {
      if (stack.length === 0) {
        return false;
      }
      else if (char === ')' && stack[stack.length - 1] === '(') {
        stack.pop();
      }
      else if (char === ']' && stack[stack.length - 1] === '[') {
        stack.pop();
      }
      else if (char === '}' && stack[stack.length - 1] === '{') {
        stack.pop();
      }
      else {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(validate_brackets('[[8]'));

module.exports = validate_brackets;

