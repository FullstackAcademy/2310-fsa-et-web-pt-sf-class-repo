let app = document.getElementById('app');

const state = {
    resource: '',
    resourceId: null,
    allRecipes: [],
};

const BASE_URL = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api';
const COHORT = '/2310-fsa-et-web-pt-sf';

const CLASS_URL = `${BASE_URL}${COHORT}`;

const getAllRecipes = async () => {
    try {
        const response = await fetch(`${CLASS_URL}/recipes`);
        const json = await response.json();

        return json.data;
    } catch (e) {
        console.log('Failed to get recipes.');
        console.error(e);

        return {
            success: false,
            error: e,
            data: [],
        };
    }
};

const clearDOM = () => {
    // NOTE: Wipe the application clean.
    document.body.removeChild(app);

    const newApp = document.createElement('div');
    newApp.id = 'app';

    document.body.appendChild(newApp);

    app = newApp;
};

const createHeader = (text, size = 1) => {
    const header = document.createElement(`h${size}`);

    header.innerText = text;

    return header;
}

const createRecipeList = (recipes) => {
    const list = document.createElement('div');
    list.classList.add('card_list');

    const cards = recipes.map((recipe) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardTitle = createHeader(recipe.name, 4);

        card.appendChild(cardTitle);

        const cardImage = document.createElement('img');
        cardImage.src = recipe.imageUrl;
        cardImage.classList.add('card_image');

        card.appendChild(cardImage);

        const cardDescription = document.createElement('p');
        cardDescription.innerText = recipe.description;

        card.appendChild(cardDescription);

        const cardButton = document.createElement('button');
        cardButton.innerText = `Go To ${recipe.name} Recipe!`;
        cardButton.onclick = () => {
            window.location.hash = `/recipes/${recipe.id}`;
        };

        card.appendChild(cardButton);

        return card;
    });

    list.append(...cards);

    return list;
};

const fetchResource = async () => {
    try {
        const response = await fetch(`${CLASS_URL}/${state.resource}/${state.resourceId}`);
        const json = await response.json();

        return json.data;
    } catch (e) {
        console.log(`Failed to get ${state.resource} ${state.resourceId}.`);
        console.error(e);

        return null;
    }
}

const createCodeBlock = (text) => {
    const code = document.createElement('code');

    code.innerText = text;

    return code;
}

const render = () => {
    clearDOM();

    app.appendChild(createHeader(`Resource: ${state.resource}`));
    app.appendChild(createHeader(`Resource ID: ${state.resourceId}`, 2));

    const selectedResourceContainer = document.createElement('div');

    app.appendChild(selectedResourceContainer);

    if (state.resource && state.resourceId) {
        fetchResource()
            .then((data) => {
                selectedResourceContainer.appendChild(createCodeBlock(JSON.stringify(data, null, 2)));
            });
    }

    app.appendChild(document.createElement('hr'));

    app.appendChild(createHeader('All Recipes'));
    app.appendChild(createRecipeList(state.allRecipes));
};

window.addEventListener('hashchange', () => {
    const path = decodeURIComponent(window.location.hash.slice(1));

    const parts = path.split('/');

    // /recipes/123
    const resource = parts[1];

    state.resource = resource;

    const resourceId = parts[2];

    state.resourceId = resourceId;

    render();
});

const startApp = async () => {
    const recipes = await getAllRecipes();

    state.allRecipes = recipes;

    const path = decodeURIComponent(window.location.hash.slice(1));

    const parts = path.split('/');

    // /recipes/123
    const resource = parts[1];

    state.resource = resource;

    const resourceId = parts[2];

    state.resourceId = resourceId;

    render();
};

startApp();
