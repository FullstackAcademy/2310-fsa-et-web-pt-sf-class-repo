const state = {
    dogs: []
}

function card(imgSrc, header, subHeader) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    const cardImg = document.createElement('img');
    cardImg.setAttribute('src', imgSrc);
    cardImg.classList.add('card-img');

    const cardHeader = document.createElement('p');
    cardHeader.innerText = header;

    const cardSubheader = document.createElement('p');
    cardSubheader.innerText = subHeader;

    cardDiv.append(cardImg);
    cardDiv.append(cardHeader);
    cardDiv.append(cardSubheader);
    return cardDiv;
}

async function getPuppyData() {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const result = await response.json();
        state.dogs.push(await result.message);
    } catch (error) {
        console.error("Error:", error);
    }
}

async function displayCards(){
    for (let i = 0; i < 10; i++) {
        const dogCard = card(state.dogs[i], `dog: ${i + 1}`, 'aduioahsodiasoidhasoidhoasid');
        document.getElementById('content-container').append(dogCard);
    }
}

function clearCards(){
    document.getElementById('content-container').innerText = "<h1>Cleared</h1>";
    // document.getElementById('content-container').classList.add('hide')
}

displayCards();

setTimeout(function () {
    clearCards();
}, 10000);

