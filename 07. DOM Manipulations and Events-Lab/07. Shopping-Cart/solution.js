function solve() {
   let buttonElements = document.querySelectorAll('button[class="add-product"]');
   let checkoutBtnElement = document.querySelector('.checkout');
   let textAreaElement = document.querySelector('textarea');

   let card = { };
   let totalMoney = 0.0;
   buttonElements.forEach(element => {
      element.addEventListener('click', addProduct)
   });

   function addProduct(event) {
      event.preventDefault();
      
      // this - whole button (HTML element - context)
      let productName = this.parentNode.parentNode.querySelector('.product-title').textContent;
      let productPrice = Number(this.parentNode.parentNode.querySelector('.product-line-price').textContent);

      if (!card[productName]) {
         card[productName] = 0.0;
      }
      card[productName] += productPrice;
      totalMoney += productPrice;
      textAreaElement.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
   }


   checkoutBtnElement.addEventListener('click', checkout);

   function checkout() {
      let arr = [];
      Object.keys(card).forEach(
         x => arr.push(` ${x}`)
      );
      
      textAreaElement.textContent += `You bought${arr} for ${totalMoney.toFixed(2)}.\n`;
   }
}

