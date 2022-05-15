const url = 'https://icanhazdadjoke.com/';

const get_joke = document.getElementById('get_joke');
const joke = document.getElementById('joke');

get_joke.addEventListener('click', ()=> {
    fetchJoke();
});

const fetchJoke = async () => {
    joke.textContent = 'Loading ...';
    try {
        const response = await fetch(url, {
            headers: {
                Accept: 'application/json',
                'User-Agent': 'learning app',
            },
        });
        if(!response.ok){
            throw new Error('error');
        }
        const data = await response.json();
        joke.textContent=data.joke;
    } catch (error) {
        console.log(error.message);
        joke.textContent='There was an error...';        
    }
};

fetchJoke();