import {calculateDebt} from './helpers';

describe("SimpleDebtCalculator", () => {

	it("should be able to calculate the debt", () => {
		expect(calculateDebt(1000, 5, 3)).toEqual(1150);
		expect(calculateDebt(500, 6, 3)).toEqual(590);
		expect(calculateDebt(0, 0, 10)).toEqual(0);
	});

	it("should be able to handle negative numbers", () => {
		expect(calculateDebt(-3, 2, 4)).toEqual(-3.24);
		expect(calculateDebt(-3, -5, -10)).toEqual(-4.5);
		expect(calculateDebt(500, 0.5, 25)).toEqual(562.5);
	});

	it("should be able to handle non numbers", () => {
		expect(calculateDebt("three", 1, 5)).toEqual(NaN);
		expect(calculateDebt(2, [], "four")).toEqual(NaN);
		expect(calculateDebt({}, 1, 5)).toEqual(NaN);
	});

});
