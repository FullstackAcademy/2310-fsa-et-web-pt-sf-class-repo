const BASE_URL = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api';
const COHORT = '/2310-fsa-et-web-pt-sf';

const CLASS_URL = `${BASE_URL}${COHORT}`;

const getRecipes = async () => {
    try {
        const response = await fetch(`${CLASS_URL}/recipes`);
        const json = await response.json();

        return json;
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

const getRSVPS = async () => {
    try {
        const response = await fetch(`${CLASS_URL}/rsvps`);
        const json = await response.json();

        return json;
    } catch (e) {
        console.log('Failed to get RSVPs.');
        console.error(e);

        return {
            success: false,
            error: e,
            data: [],
        };
    }
};

const runApp = async () => {
    const rsvps = await getRSVPS();

    console.log('RSVPs', rsvps);
};

runApp();
