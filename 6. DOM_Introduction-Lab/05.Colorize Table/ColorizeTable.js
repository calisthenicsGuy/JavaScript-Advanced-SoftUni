function colorize() {
    // let tableElements = document.querySelectorAll('tr:nth-of-type(2n) td');
    
    // tableElements.forEach(element => {
    //     element.style.backgroundColor = 'teal';
    // });

    let tableElements = document.getElementsByTagName('tr');
    let tableElementsArr = Array.from(tableElements);

    tableElementsArr.forEach((x, i) => {
        if (i % 2 == 1) {
            x.style.backgroundColor = 'teal';
        }
    });
}