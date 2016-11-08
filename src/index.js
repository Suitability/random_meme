const fetch = require('node-fetch');
const cheerio = require('cheerio');

module.exports = async function FML() {
	const url = 'http://www.memes.com/random';
	let body;
	try {
		const res = await fetch(url);
		body = await res.text();
	} catch (err) {
		return console.error('Error Getting Meme', err);
	}
	let meme;
	try {
		const $$ = cheerio.load(body);
		meme = $$('.meme')
		.first()
		.children()
		.first()
		.children()[0].attribs.src;
	} catch (err) {
		return console.error('Error Getting Meme', err);
	}
	return meme;
};

