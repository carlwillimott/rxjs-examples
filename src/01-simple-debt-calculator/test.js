'use strict';

require('./index.js');

describe("SimpleDebtCalculator", function() {

	it("should be able to calculate the debt", function() {
		expect(calculateDebt(1000, 5, 3)).toEqual(1150);
	});

});
