function printTimeToWalk(numberOfSteps, lengthOfStepInMeters, kmH) {
    let stepsCount = Number(numberOfSteps);
    let stepSize = Number(lengthOfStepInMeters);
    let speedInKmH = Number(kmH);

    let distanceInMeters = (stepsCount * stepSize);
    let speedInMeterInSecond = speedInKmH / 60 / 60 * 1000;
    let breakTime = Math.floor(distanceInMeters / 500) * 60;

    let totalTimeInSeconds = distanceInMeters / speedInMeterInSecond + breakTime;

    let hours = Math.floor(totalTimeInSeconds / 60 / 60);
    let minutes = Math.floor(totalTimeInSeconds / 60);
    let seconds = Math.round(totalTimeInSeconds % 60);

    function formatOutput(hours, minutes, seconds) {
        if (hours < 10) {
            hours = '0' + hours.toString();
        }
        if (minutes < 10) {
            minutes = '0' + minutes.toString();
        }
        if (seconds < 10) {
            seconds = '0' + seconds.toString();
        }

        return `${hours}:${minutes}:${seconds}`;
    };

    let result = formatOutput(hours, minutes, seconds);

    console.log(result);
}

printTimeToWalk(4000, 0.60, 5);
printTimeToWalk(2564, 0.70, 5.5);