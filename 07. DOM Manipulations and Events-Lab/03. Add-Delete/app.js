function addItem() {
    let listItemElements = document.getElementById('items');
    let newItemElement = document.querySelector('input[id="newItemText"]');
    
    let newLiElement = document.createElement('li');
    newLiElement.textContent = newItemElement.value;
    let deleteElement = document.createElement('a');
    deleteElement.href  = '#';
    deleteElement.textContent = '[Delete]';

    // first way
    deleteElement.addEventListener('click', (e) => {
        e.currentTarget.parentNode.remove();
    })

    newItemElement.value = '';
    newLiElement.appendChild(deleteElement);
    listItemElements.appendChild(newLiElement);

    // second way
    // let buttonElements = document.getElementsByTagName('a');
    // let buttonElementsArray = Array.from(buttonElements);
    // buttonElementsArray.forEach(el => {
    //     el.addEventListener('click', (e) => {
    //         let removedLiElement = e.currentTarget.parentNode;
    //         listItemElements.removeChild(removedLiElement);
    //     })
    // });
}