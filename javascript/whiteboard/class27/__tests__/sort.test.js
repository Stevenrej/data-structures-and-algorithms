const mergeSort = require('../index');


describe("mergeSort", () => {
  const testCases = [{
    input: [3, 4, 2, 1],
    expectedOutput: [1, 2, 3, 4],
  },
  {
    input: [8, 4, 23, 42, 16, 15],
    expectedOutput: [4, 8, 15, 16, 23, 42],
  },
  ];

  testCases.forEach(({ input, expectedOutput }) => {
    it(`should return ${expectedOutput} for input ${input}`, () => {
      expect(mergeSort(input)).toEqual(expectedOutput);
    });
  });
});
