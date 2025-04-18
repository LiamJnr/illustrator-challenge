const startDate = new Date('2025-04-18');
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
            <h2>${challenge.day}: ${challenge.title}</h2>
            <p>${challenge.prompt}</p>
            `;
        }else if(daysDifference < 0){
            challengeContainer.innerHTML = `<p>Your challenge hasn't started yet. Come back on Day 1!</p>`
        }else{
            challengeContainer.innerHTML = `<p>You've completed all 30 days. Congarts!</p>`
        }
    })
    .catch(error => {
        challengeContainer.innerHTML = `<p>Failed to load challenge. Please try again later -_-</p>`;
        console.error('Fetch error:', error)
    })