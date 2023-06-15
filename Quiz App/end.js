const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const finalScore = document.getElementById('finalScore');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const MAX_HIGH_SCORES = 5;
const history = JSON.parse(localStorage.getItem('history')) || [];

// localStorage.setItem('highScores', JSON.stringify([]));

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        name: username.value,
        score: mostRecentScore
    }
    highScores.push(score);
    highScores.sort((a,b) => b.score - a.score);
    highScores.splice(5);

    history.push(score);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    localStorage.setItem('history', JSON.stringify(history));
    
    window.location.assign('/');
};