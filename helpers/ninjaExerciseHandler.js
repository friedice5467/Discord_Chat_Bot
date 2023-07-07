const fetch = require('node-fetch');

async function getExercise() {
    const response = await fetch('https://api.api-ninjas.com/v1/exercises', {
        headers: { 'X-Api-Key': process.env['ninjaAPIToken'] }
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    } else {
        const exerciseData = await response.json();
        return exerciseData; 
    }
}

module.exports = getExercise;
