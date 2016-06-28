import {checkCriteria, numberWithCommas} from './helpers';

describe("sortingAndFiltering", () => {

	it("should format numbers correctly with commas", () => {
		expect(numberWithCommas(100)).toEqual("100");
		expect(numberWithCommas(1573)).toEqual("1,573");
		expect(numberWithCommas(23243)).toEqual("23,243");
		expect(numberWithCommas(456357)).toEqual("456,357");
		expect(numberWithCommas(87453456)).toEqual("87,453,456");
	});

});
