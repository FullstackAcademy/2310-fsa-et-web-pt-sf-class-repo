async function getRecipies() {
    try {
        const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF/recipes');
        const recipes = await response.json();
        for (let i = 0; i < recipes.data.length; i++) {
            console.log(recipes)
            const recipeElm = document.createElement('p');
            recipeElm.innerText = recipes.data[i].name;
            document.querySelector('body').append(recipeElm);
        }
    } catch (err) {
        console.log(err);
        document.querySelector('body').append('error please try again later');
    }
}

async function addRecipie() {
    try {
        const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF/recipes', {
            method: 'POST',
            body: JSON.stringify({
                name: "michell cheese burger",
                imageUrl: "https://contenthub.kraftheinz.com/api/public/content/91c0242dbc2e479886547f52f0cb0812?v=04b07367",
                description: "michell famous cheese burger"
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (err) {
        console.log(err);
    }
}

async function deleteBurger(id) {
    try {
        await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF/recipes/${id}`, {
            method: 'DELETE',
        });
    } catch (err) {
        console.log(err);
    }
}

async function updateRecipie(id) {
    try {
        const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF/recipes/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                name: "Fresh cheese",
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (err) {
        console.log(err);
    }
}

document.getElementById('dataBtn').addEventListener('click', getRecipies);
document.getElementById('postBtn').addEventListener('click', addRecipie);
document.getElementById('deleteBtn').addEventListener('click', async function(){
    await deleteBurger(570);
});
document.getElementById('updateBtn').addEventListener('click', async function(){
    await updateRecipie(571);
});


// apis
// get, post, update, delete