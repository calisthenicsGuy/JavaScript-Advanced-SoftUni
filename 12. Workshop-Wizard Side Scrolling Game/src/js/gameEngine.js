function start() {
    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}

function gameLoop(state, game) {
    window.requestAnimationFrame(gameLoop);
}