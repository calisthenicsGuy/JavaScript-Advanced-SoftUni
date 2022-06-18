function deleteByEmail() {
   let emailInputElement = document.querySelector('input[name="email"]');
   let email = emailInputElement.value;

   let emailElements = document.querySelectorAll('tr td:nth-of-type(2)');
   let emailElementsArray = Array.from(emailElements);

   let targetEmail = emailElementsArray.find(x => x.textContent == email);

   targetEmail.parentNode.remove();
}