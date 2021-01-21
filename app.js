const jokeEl = document.querySelector('.joke');
const getJoke = document.querySelector('.btn');

generateJoke();

getJoke.addEventListener('click', generateJoke)

async function generateJoke() {
    //call the icanhaz API
    const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });

    const jokeObj = await response.json();

    //set the new joke
    jokeEl.innerHTML = jokeObj.joke;
}