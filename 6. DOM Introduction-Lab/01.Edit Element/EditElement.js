function editElement() {
    while(element.textContent.includes(match)) {
        element.textContent = element.textContent.replace(match, replacer);
    }
}