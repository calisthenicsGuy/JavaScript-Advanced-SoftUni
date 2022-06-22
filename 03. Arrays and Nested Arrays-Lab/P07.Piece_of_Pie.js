let output = function (mainArray, parameter1, parameter2) {
    let parameterArray = [parameter1, parameter2];

    let startIndex = mainArray.indexOf(parameterArray[0]);
    let endIndex = mainArray.indexOf(parameterArray[1]);

    return mainArray.splice(startIndex, endIndex);
}

console.log(output(['Pumpkin Pie',
 'Key Lime Pie',
 'Cherry Pie',
 'Lemon Meringue Pie',
 'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'));

console.log(output(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'));