function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');
    const moveHandler = (e) => {
        console.log(e);
        let percentage = Math.floor((e.offsetX / e.target.offsetWidth) * 100);
        resultElement.textContent = String(`${percentage}%`);
    };

    gradientElement.addEventListener('mousemove', moveHandler)
}