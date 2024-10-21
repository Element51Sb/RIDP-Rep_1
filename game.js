function showGame() {
    document.getElementById('home').classList.remove('active');
    document.getElementById('game').classList.add('active');
}

function showSettings() {
    document.getElementById('home').classList.remove('active');
    document.getElementById('settings').classList.add('active');
}

function showHome() {
    document.getElementById('game').classList.remove('active');
    document.getElementById('settings').classList.remove('active');
    document.getElementById('home').classList.add('active');
}
