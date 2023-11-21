function sayName() {
    alert('Hi Michell');
}

// event lister using js
document.getElementById('hoverBtn').addEventListener('mouseover', sayName)

const sayNameBtn = document.createElement('button');
sayNameBtn.innerText = "Click Me";
sayNameBtn.addEventListener('click', sayName);
sayNameBtn.setAttribute('class', 'btn');
sayNameBtn.setAttribute('id', 'clickBtn');

document.querySelector('body').append(sayNameBtn)

document.querySelector('#form').addEventListener('submit', function (e) {
    e.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    console.log(firstName, lastName)
});