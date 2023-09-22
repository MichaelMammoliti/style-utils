export const toKebabCase = (str: string): string =>
	str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

export const formatCSSRule = ([key, value]: string[]): string => {
	const newK = toKebabCase(key);

	return newK && value ? `${newK}:${value};` : '';
};

export const objToCSS = (obj: Partial<CSSStyleDeclaration>): string =>
	Object.entries(obj).reduce(
		(acc, entry) => `${acc}${formatCSSRule(entry as string[])}`,
		''
	);

export const stringToCSS = (str: string): string =>
	str
		.split(';')
		.reduce((acc, entry) => `${acc}${formatCSSRule(entry.split(':'))}`, '');

export const styleToClass = (
	className: string,
	style: Partial<CSSStyleDeclaration>
): string => `.${className}{${objToCSS(style)}}`;
