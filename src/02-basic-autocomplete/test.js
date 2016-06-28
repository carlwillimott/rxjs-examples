import {searchNotEmpty, patternMatch} from './helpers';

describe("basicAutoComplete", () => {

	it("should return true if the search is not an empty string", () => {
		expect(searchNotEmpty("test")).toBe(true);
		expect(searchNotEmpty(100)).toBe(false);
		expect(searchNotEmpty("")).toBe(false);
	});

	it("should return true if the search criteria matches the target", () => {
		expect(patternMatch("needle", {value: "haystack"})).toBe(false);
		expect(patternMatch("az", {value: "amazing"})).toBe(true);
		expect(patternMatch("abba", {value: "ccabbacc"})).toBe(true);
	});

});
