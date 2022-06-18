function addItem() {
    let unorderedListElement = document.getElementById('items');
    let newLiElement = document.createElement('li');
    newLiElement.textContent = document.getElementById('newItemText').value;
    document.getElementById('newItemText').value = '';

    unorderedListElement.appendChild(newLiElement);

}