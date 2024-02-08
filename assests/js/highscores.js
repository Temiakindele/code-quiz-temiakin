document.addEventListener('DOMContentLoaded', function () {
    const highscoresList = document.getElementById('highscores');

    // Retrieve high scores from localStorage
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

    // Display high scores in the ordered list
    highScores.forEach((scoreData, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${scoreData.initials}: ${scoreData.score}`;
        highscoresList.appendChild(listItem);
    });

    // Clear high scores
    const clearButton = document.getElementById('clear');
    clearButton.addEventListener('click', function () {
        localStorage.removeItem('highScores');
        highscoresList.innerHTML = ''; // Clear the displayed high scores
    });
});