// Asynchronicity
// Some things take lots of time. You have to do something that is going to run for a long time, and you want to do other stuff while that is happening.
// Uncertainty - We can't trust external sources to behave as expected.
// There are almost infinite reasons something might not work as expected.

// fetch - requesting data from some other site

// We declared that this function is asynchronous in its declaration.
// const fetchGoogle = async () => {
//     // Inside an async function, we said "wait on this thing".
//     const response = await fetch('http://www.google.com');
//
//     const html = await response.body.getReader().read();
//
//     console.log('Response Body: ', html.value.toString());
// };

// fetchGoogle();

// async function fetchGoogleDec() {
//     await fetch('http://www.google.com');
// }

const delay = (time, reject = false) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (reject) {
                rej(new Error(`The delay timed out!`));
            }
            res();
        }, time);
    });
}


const sayThingsInOrder = async () => {
    try {
        // HAPPY PATH
        console.log('Hello!');
        await delay(1000, true);
        console.log(`Its so nice to see you!`);
    } catch (e) {
        // BAD PATH
        console.error(e);
        console.log(`I'm having a bad day.`);
    } finally {
        // BUDDHIST PATH
        console.log('Goodbye!')
    }
};

sayThingsInOrder();
// NOTE: This runs before the rest of the function is over! Async Await only applies inside of the async function itself.
// console.log('Is it over yet?');
