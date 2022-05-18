function solve(speed, area) {

    speed = Number(speed);

    let motorwaySpeedLimit = 130;
    let interstateSpeedLimit = 90;
    let citySpeedLimit = 50;
    let residentialSpeedLimit = 20;

    let result = '';

    if (area === 'motorway') {
        result = getSpeedLimitMessage(speed, motorwaySpeedLimit);
    } else if (area === 'interstate') {
        result = getSpeedLimitMessage(speed, interstateSpeedLimit);
    } else if (area === 'city') {
        result = getSpeedLimitMessage(speed, citySpeedLimit);
    } else if (area === 'residential') {
        result = getSpeedLimitMessage(speed, residentialSpeedLimit);
    }

    console.log(result);

    function getSpeedLimitMessage(speed, speedLimit) {
        let speedLimitMessage = '';
        let speedDiff = speed - speedLimit;

        let speedingMsg = 'speeding';
        let excessiveSpeedingMsg = 'excessive speeding';
        let recklessDrivingMsg = 'reckless driving';

        if (speed > speedLimit &&
            speed <= speedLimit + 20) {
            speedLimitMessage = `The speed is ${speedDiff} km/h faster than the allowed speed of ${speedLimit} - ${speedingMsg}`;
        } else if (speed > speedLimit &&
            speed > speedLimit + 20 &&
            speed <= speedLimit + 40) {
            speedLimitMessage = `The speed is ${speedDiff} km/h faster than the allowed speed of ${speedLimit} - ${excessiveSpeedingMsg}`;
        } else if (speed > speedLimit) {
            speedLimitMessage = `The speed is ${speedDiff} km/h faster than the allowed speed of ${speedLimit} - ${recklessDrivingMsg}`;
        } else {
            speedLimitMessage = `Driving ${speed} km/h in a ${speedLimit} zone`;
        }

        return speedLimitMessage;
    }
}

solve([40, 'city']);
solve([21, 'residential']);
solve([120, 'interstate']);
solve([200, 'motorway']);

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');