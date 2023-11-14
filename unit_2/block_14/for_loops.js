// arrays are index
// ex:  roy is index 0, andrew is index 5;
let names = ['Roy', "Jennie", "Alexis", "Ryan", "Matt", "Andrew" ];

console.log(names.length)

for(let i = 0; i < names.length; i++){
    if (names[i] === "Ryan"){
        names.splice(i,1);
    }
}

for (let i = names.length - 1; i >= 0; i = i - 2) {
    console.log(names[i]);
}

