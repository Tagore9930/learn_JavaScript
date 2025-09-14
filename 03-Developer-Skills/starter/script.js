// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const testData_1 = [17, 21, 23];
const testData_2 = [12, 5, -5, 0, 4];

function printForecast(temperaturesArr = []) {
    let result = "";
    for (let i = 0; i < temperaturesArr.length; i++) {
        result += `${(i == 0) ? '...' : ''} ${temperaturesArr[i]}°C in ${i + 1} days${(i == temperaturesArr.length - 1) ? ' ...' : ''}`
    }

    console.log(result);
}

printForecast(testData_1);
printForecast(testData_2);

/**
    1) Understand the problem.
    Ans: We need to add a string with degrees based on testDataArr.

    2) If it is big problem, convert to sub-problems.
        1. create basic string with degrees and days.
        2. Added dots( ... ) between 2 different degrees/days.
 */