function focused() {
    let inputs = document.querySelectorAll('input');

    for (const input of inputs) {
        input.addEventListener('focus', function (event) {
            event.target.parentNode.classList.add('focused');
        });
        input.addEventListener('blur', function (event) {
            this.parentNode.classList.remove('focused');
        });
    }
}