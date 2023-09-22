import {
	formatCSSRule,
	objToCSS,
	stringToCSS,
	styleToClass,
	toKebabCase
} from './index';

describe('toKebabCase', () => {
	it('should convert camelCase to kebab-case', () => {
		const payload = 'camelCaseHere';

		const received = toKebabCase(payload);
		const expected = 'camel-case-here';

		expect(received).toBe(expected);
	});
});

describe('formatCSSRule', () => {
	it('should format a CSS rule', () => {
		const payload = ['color', 'red'];

		const received = formatCSSRule(payload);
		const expected = 'color:red;';

		expect(received).toBe(expected);
	});
});

describe('objToCSS', () => {
	it('should convert an object to CSS', () => {
		const payload = { color: 'red', backgroundColor: 'blue' };

		const received = objToCSS(payload);
		const expected = 'color:red;background-color:blue;';

		expect(received).toBe(expected);
	});
});

describe('stringToCSS', () => {
	it('should convert a string to CSS', () => {
		const payload = 'color:red;background-color-here:blue;';

		const received = stringToCSS(payload);
		const expected = 'color:red;background-color-here:blue;';

		expect(received).toBe(expected);
	});
});

describe('styleToClass', () => {
	it('should convert a style object to a CSS class', () => {
		const payload = { color: 'red', backgroundColor: 'blue' };

		const received = styleToClass('test', payload);
		const expected = '.test{color:red;background-color:blue;}';

		expect(received).toBe(expected);
	});
});
