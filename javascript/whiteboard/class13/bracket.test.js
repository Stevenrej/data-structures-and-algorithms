const validate_brackets = require('./index');


describe('Bracket Tests', () => {
  let bracket = validate_brackets;


  it('has a vlaid input', () => {
    let input = '[(hello){world}]';
    let expected_output = true;
    let output = bracket(input);
    expect(output).toEqual(expected_output);
  });

  it('Only opening brackets', () => {
    let input = '[[{{';
    let expected_output = false;
    let output = bracket(input);
    expect(output).toEqual(expected_output);
  });
});
