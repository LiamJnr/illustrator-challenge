const startDate = new Date('2025-04-17');
const today = new Date();
const daysDifference = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

const challengeContainer = document.getElementById('challenge');

const CHALLENGES_URL = 'https://liamjnr.github.io/illustrator-challenge/challenges.json';

fetch(CHALLENGES_URL)
    .then(res => {
        if(!res.ok){
            throw new Error('Network response was not okay');
        }
        return res.json();
    })
    .then(challenges => {
        const challenge = challenges[daysDifference];

        if(challenge){
            challengeContainer.innerHTML = `
            <h2>${challenge.day}: ${challenge.tittle}</h2>
            `;
        }
    })