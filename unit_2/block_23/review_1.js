// .map

// Array is an object

// const someArray = [];
//
// console.log(typeof someArray);

// const anObjectWithAMethod = {
//     hello: () => {
//         console.log('Hello!');
//     },
// };
//
// anObjectWithAMethod.hello();

// Map is an array method that looks at every element in an array, and gives you a chance to return a new value based on that element. Each new value you return is placed in the same index you are inspecting in a brand new array.

const someOtherArray = [1, 2, 3, 4, 5];

function mapper(elem) {
    return elem * 2;
}

const newArray = someOtherArray.map(mapper);

// console.log(newArray);

function myMap(array, cb) {
    const newArray = [];

    for (let i = 0; i < array.length; ++i) {
        const elem = array[i];

        const newElem = cb(elem);

        newArray.push(newElem);
    }

    return newArray;
}

const otherNewArray = myMap(someOtherArray, mapper);

// console.log('New 1', newArray);
// console.log('New 2', otherNewArray);

// Buttons

// const state = {
//     count: 0,
// };
//
// const app = document.getElementById('app');
//
// const button = document.createElement('button');
// button.textContent = 'Increment';
// const countText = document.createElement('h2');
// countText.textContent = state.count;

// Way 1: Event Listeners
// button.addEventListener('click', function() {
//     alert('Hello World!');
// });

// Way 2: assign a handler
// button.onclick = function() {
//     ++state.count;
//     countText.textContent = state.count;
// }
//
// app.appendChild(button);
// app.appendChild(countText);

// render

// Document That Displays Stuff -> User Interacts with the Document -> Something Changes from that Interaction -> Document Displays That Change ->

// HTML Skeleton -> User Does Something that Uses Javascript (INTERACTION) -> Javascript Changes Data Somewhere (STATE CHANGE) -> Redraw the HTML/CSS (RENDER STATE) ->

let app = document.getElementById('app');

// INITIAL STATE
const state = {
    name: '',
    names: [],
};

const clearDOM = () => {
    document.body.removeChild(app);

    const newApp = document.createElement('div');
    newApp.id = 'app';
    app = newApp;

    document.body.append(newApp);
}

const render = () => {
    clearDOM();

    const nameInput = document.createElement('input');

    nameInput.addEventListener('change', (event) => {
        state.name = event.target.value;
    });

    const submitName = document.createElement('button');
    submitName.textContent = 'Add Name';

    submitName.addEventListener('click', () => {
        state.names.push(state.name);
        state.name = '';
        nameInput.value = state.name;
        render();
    });

    const pageBreak = document.createElement('hr');

    const nameHeaders = state.names.map((name) => {
        const nameHeader = document.createElement('h3');
        nameHeader.textContent = name;

        return nameHeader;
    });

    app.append(nameInput, submitName, pageBreak, ...nameHeaders);
}

render();
