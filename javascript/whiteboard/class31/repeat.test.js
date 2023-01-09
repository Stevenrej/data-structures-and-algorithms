const assert = require('assert');

const repeatedWord = require('./index');

describe('repeatedWord', () => {
  const testCases = [
    {
      string: 'It was the best of times. It was the worst of times.',
      expected: 'it',
    },
    {
      string: 'It was the best of times. It was the worst of times. It was the age of wisdom.',
      expected: 'it',
    },
    {
      string: 'It was the best of times. It was the worst of times. It was the age of wisdom. It was the age of foolishness.',
      expected: 'it',
    },
    {
      string: 'This string does not contain any repeated words.',
      expected: '',
    },
    {
      string: 'A a a a b c d e f g h i j k l m n o p q r s t u v w x y z',
      expected: 'a',
    },
  ];

  for (const testCase of testCases) {
    const { string, expected } = testCase;
    it(`should return "${expected}" for string "${string}"`, () => {
      const result = repeatedWord(string);
      assert.strictEqual(result, expected);
    });
  }
});
