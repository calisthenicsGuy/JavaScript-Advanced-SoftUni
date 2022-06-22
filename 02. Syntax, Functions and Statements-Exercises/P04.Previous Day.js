function previousDay (year, day, month) {
    let date = `${year}-${day}-${month}`;
    let newDate  = new Date(date);
    newDate.setDate(newDate.getDate()-1);
    console.log(`${newDate.getFullYear()}-${newDate.getMonth()+1}-${newDate.getDate()}`);
}

previousDay(2016, 9, 30);