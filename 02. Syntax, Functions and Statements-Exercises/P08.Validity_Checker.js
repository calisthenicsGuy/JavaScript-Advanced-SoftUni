function solve (x1, y1, x2, y2) {

    if (Number.isInteger(subSolve(x1, y1, 0, 0))) {
        validMessage(x1, y1, 0, 0);
    } else {
        invalidMessage(x1, y1, 0, 0);
    }

    if (Number.isInteger(subSolve(x2, y2, 0 ,0))) {
        validMessage(x2, y2, 0, 0);
    } else {
        invalidMessage(x2, y2, 0, 0);
    }

    if (Number.isInteger(subSolve(x1, y1, x2, y2))) {
        validMessage(x1, y1, x2, y2);
    } else {
        invalidMessage(x1, y1, x2, y2);
    }


    function subSolve (x1, y1, x2, y2) {
        let result = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        return result;
    }

    function validMessage (x1, y1, x2, y2) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } function invalidMessage (x1, y1, x2, y2) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

solve(3, 0, 0, 4);
