import {getMonth} from ".././index.js"

describe("Function getMonth", () => {
    it("returns names of months for one- and two-digit numbers from 1 to 12", () => {
        const [oneDigitNum, oneDigitMonth] = [5, "май"];
        const [twoDigitNum, twoDigitMonth] = [10, "октябрь"];
        const [firstNum, firstMonth] = [1, "январь"];
        const [lastNum, lastMonth] = [12, "декабрь"];
        expect(getMonth(oneDigitNum)).toBe(oneDigitMonth);
        expect(getMonth(twoDigitNum)).toBe(twoDigitMonth);
        expect(getMonth(firstNum)).toBe(firstMonth);
        expect(getMonth(lastNum)).toBe(lastMonth);
    });
    it("returns error message if number is out of valid range", () => {
        const lessNum = -100;
        const biggerNum = 200;
        const lowerBoundaryNum = 0;
        const higherBoundaryNum = 13;
        const errorMsg = "Номер месяца должен быть в диапазоне от 1 до 12"
        expect(getMonth(lessNum)).toBe(errorMsg);
        expect(getMonth(biggerNum)).toBe(errorMsg);
        expect(getMonth(lowerBoundaryNum)).toBe(errorMsg);
        expect(getMonth(higherBoundaryNum)).toBe(errorMsg);
    });
    it("returns error message if argument is empty or not an integer number", () => {
        const emptyValue = "";
        const floatNum = 10.5;
        const word = "Hey!";
        const arrayNums = [1, 3];
        const errorMsg = "Номер месяца должен быть целым числом";
        expect(getMonth(emptyValue)).toBe(errorMsg);
        expect(getMonth(floatNum)).toBe(errorMsg);
        expect(getMonth(word)).toBe(errorMsg);
        expect(getMonth(arrayNums)).toBe(errorMsg);
    });
})

