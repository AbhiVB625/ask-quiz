const historyList = document.getElementById('historyList');
const history = JSON.parse(localStorage.getItem('history'));

historyList.innerHTML =
history.map(score => {
    return `<li class="history">${score.name} - ${score.score}</li>`
}).join('');