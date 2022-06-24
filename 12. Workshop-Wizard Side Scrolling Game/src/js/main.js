let state = initState();
let game = initGameObjects();

game.startScreen.addEventListener('click', (e) => {
    game.startScreen.classList.add('hidden');
    game.gameScreen.classList.remove('hidden');

    // Start Game
    start();
});