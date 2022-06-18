let counter = document.getElementById('value');
let btns = document.querySelectorAll('button');

let count = 0;

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;

        if (styles.contains('increase')) {
            count++;
        } else if (styles.contains('reset')) {
            count = 0;
        } else if (styles.contains('decrease')) {
            count--;
        }

        if (count > 0) {
            counter.style.color = 'green';
        } else if (count < 0) {
            counter.style.color = 'red';
        } else if (count == 0) {
            counter.style.color = 'gray';
        }

        counter.textContent = count;
    })
});