class EmployeeCard {
    #parent = null;
    #el = null;

    // TODO: encapsulation

    constructor(parentSelector, firstName, lastName, occupation) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.occupation = occupation;

        this.#el = document.createElement('div');
        this.#parent = document.querySelector(parentSelector);

        this.#parent.appendChild(this.#el);

        this.render();
    }

    getContent() {
        return `
            <div class="card">
                <img src="img_avatar.png" alt="Avatar" style="width:100%">
                <div class="container">
                    <h4><b>${this.firstName} ${this.lastName}</b></h4>
                    <p>${this.occupation}</p>
                </div>
            </div>`;
    }

    render() {
        // Warning XSS attack
        this.#el.innerHTML = this.getContent();
    }
}