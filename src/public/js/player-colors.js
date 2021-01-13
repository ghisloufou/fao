import palette from 'google-palette';

const paletteTypes = ['tol-sq', 'tol', 'tol-dv', 'tol-rainbow', 'mpn65', 'rainbow'];
const paletteType = paletteTypes[Math.floor(Math.random() * paletteTypes.length)];
const randomPalette = palette(paletteType, 12);

const ORDER = randomPalette.map((_, i) => i.toString());
const HEX = {};
randomPalette.forEach((c, i) => {
	HEX[ORDER[i]] = '#' + c;
});

const oldHEX = {
	MAGENTA: '#bb0077',
	RED: '#e50000',
	ORANGE: '#f28900',
	YELLOW: '#ddbb00',
	GREEN: '#77bb00',
	TEAL: '#00aaaa',
	BLUE: '#0044cc',
	PURPLE: '#9900ee',
	PINK: '#ee77ff',
	BROWN: '#a56729',
};

const oldORDER = [
	'RED',
	'YELLOW',
	'GREEN',
	'BLUE',
	'PURPLE',
	'ORANGE',
	'TEAL',
	'PINK',
	'MAGENTA',
	'BROWN',
];

export { HEX, ORDER };
