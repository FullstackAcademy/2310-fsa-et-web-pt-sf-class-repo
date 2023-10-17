// I want to select the div with id "colors"
const colorsDiv = document.getElementById('colors');
// I need to describe my favorite colors
const favoriteColors = ['purple', 'green', 'gold', 'black', 'gray', 'yellow', 'orange'];
// for every color
for (let i = 0; i < favoriteColors.length; ++i) {
    // I then want to create a new div
    const colorDiv = document.createElement('div');
    // I am then going to apply some styling to have that div show a color that i really like
    colorDiv.className = 'color_div';
    colorDiv.style['background-color'] = favoriteColors[i];
    // I am then going to attach that div to the colors div from earlier
    colorsDiv.appendChild(colorDiv);
}
