import { useState, useEffect } from 'react';

export default () => {
    const [joke, setJoke] = useState('');
    let fetchedJoke = '';

    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    const loadJoke = () => {
        fetch("https://icanhazdadjoke.com/", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result.joke);
                setJoke(result.joke);
            })
            .catch(error => console.log('error', error));
    };

    return (
        <div>
            <h1>Jokes, jokes and more jokes...</h1>
            <div className="jokes-box">
                <button id="btn" onClick={() => loadJoke()}><span>Next joke </span></button>
                <p id="jokes">{ joke }</p>
            </div>
        </div>
    );
};
