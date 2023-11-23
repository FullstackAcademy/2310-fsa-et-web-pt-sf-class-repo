/**
 * @jest-environment jsdom
 */
const { getByText } = require('@testing-library/dom');
const sum = require('./sum.js');

function domReset() {
    document.body.innerHTML = `
        <div id="app"></div>
    `;
}

describe('Document Testing', () => {
    beforeEach(domReset);

    test('Sum correctly adds numbers for insertion on page.', () => {
        document.getElementById('app');

        app.textContent = sum(4, 4);

        expect(getByText(document, '6')).toBeTruthy();
    });
});
