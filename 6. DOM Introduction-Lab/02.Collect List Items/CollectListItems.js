function extractText() {
    let ulElements = document.getElementsByTagName('li');
    let text = document.getElementById('result');

    let finalText = '';
    for (const element of ulElements) {
        text.textContent += element.textContent;
        text.textContent += '\n';
    }

    // let ulElements = document.getElementById('items');
    // let text = document.getElementById('result');

    // text.textContent = ulElements.textContent;
}