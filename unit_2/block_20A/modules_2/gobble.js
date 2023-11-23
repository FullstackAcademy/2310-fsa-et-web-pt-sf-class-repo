const gobble = (howManyGobbles) => {
    return `${new Array(2 ** howManyGobbles).fill('Gobble').join(' ')}!`;
};

module.exports = gobble;
