function validate() {
    let emailInput = document.querySelector('#email');
    emailInput.addEventListener('change', validateEmail);

    function validateEmail(event) {
        event.preventDefault();

        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let isEmailValid = regex.test(String(this.value).toLowerCase());
        if (!isEmailValid) {
            this.classList.add('error');
        } else {
            this.classList.remove('error');
        }
    }
}