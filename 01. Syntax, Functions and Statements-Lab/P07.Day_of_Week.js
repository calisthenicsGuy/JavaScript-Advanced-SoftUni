function daysOfWeek(day) {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    for (i = 0; i < days.length; i++) {
        if (days[i] == day)
        {
            return i+1;
        }
    }
    return "error";
}

console.log(daysOfWeek("Monday"));