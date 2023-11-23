const gobble = require('./gobble.js');

test('Returns an appropriate number of gobbles when given 0 as an argument.', () => {
    expect(gobble(0)).toEqual('Gobble!');
});

test('Returns an appropriate number of gobbles when given 4 as an argument.', () => {
    expect(gobble(4)).toEqual('Gobble Gobble Gobble Gobble Gobble Gobble Gobble Gobble Gobble Gobble Gobble Gobble Gobble Gobble Gobble Gobble!');
});
