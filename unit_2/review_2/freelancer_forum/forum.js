const state = {
    averagePrice: 50,
    freelancers: [
        {
            name: 'Alice',
            occupation: 'Writer',
            price: 30,
        },
        {
            name: 'Bob',
            occupation: 'Teacher',
            price: 50,
        },
        {
            name: 'Carol',
            occupation: 'Programmer',
            price: 70,
        },
    ],
}

// I update an average to display.
function updateAveragePrice() {
    let total = 0;

    for (let i = 0; i < state.freelancers.length; ++i) {
        const currentFreelancer = state.freelancers[i];

        total += currentFreelancer.price;
    }

    state.averagePrice = Math.round(total / state.freelancers.length);
}

function addFreelancerRow(freelancer) {
    state.freelancers.push(freelancer);
}

// You want functions that can create the different elements on your page.
// I only create rows in this website.
function createFreelancerTableRow(freelancer) {
    const tr = document.createElement('tr');

    const nameData = document.createElement('td');
    const occupationData = document.createElement('td');
    const priceData = document.createElement('td');

    nameData.textContent = freelancer.name;
    occupationData.textContent = freelancer.occupation;
    priceData.textContent = freelancer.price;

    tr.append(nameData, occupationData, priceData);

    return tr;
}

function createTableHeaders() {
    const tr = document.createElement('tr');

    const nameData = document.createElement('th');
    const occupationData = document.createElement('th');
    const priceData = document.createElement('th');

    nameData.textContent = 'Name';
    occupationData.textContent = 'Occupation';
    priceData.textContent = 'Starting Price';

    tr.append(nameData, occupationData, priceData);

    return tr;
}

function clearTable() {
    const table = document.getElementById('freelancer_table');

    while(table.childNodes.length) {
        table.removeChild(table.childNodes[0]);
    }
}

function render() {
    clearTable();

    const table = document.getElementById('freelancer_table');

    table.appendChild(createTableHeaders());

    for (let i = 0; i < state.freelancers.length; ++i) {
        const currentFreelancer = state.freelancers[i];

        const row = createFreelancerTableRow(currentFreelancer);

        table.appendChild(row);
    }

    updateAveragePrice();

    const priceText = document.getElementById('average_price_text');

    priceText.textContent = `The average starting price among our ${state.freelancers.length} freelancers is $${state.averagePrice}.`;
}

render();

const randomNames = ['Matt', 'Monica', 'Zi', 'Roy'];
const randomJobs = ['IT', 'Chic-Fil-A', 'Construction', 'Lumberjack'];

function createRandomFreelancer() {
    const randomName = randomNames[Math.floor(Math.random() * randomNames.length)];
    const randomJob = randomJobs[Math.floor(Math.random() * randomJobs.length)];

    const randomPrice = Math.round(Math.random() * 150);

    const freelancer = {
        name: randomName,
        occupation: randomJob,
        price: randomPrice,
    };

    return freelancer;
}

let renderCount = 0;

// Interval Logic
let intervalID = setInterval(function() {
    if (renderCount > 250) {
        clearInterval(intervalID);
    }

    const newFreelancer = createRandomFreelancer();
    addFreelancerRow(newFreelancer);

    render();

    ++renderCount;
}, 1000);
