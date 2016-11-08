const fetch = require('node-fetch');
const cheerio = require('cheerio');

module.exports = async function Meme() {
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
		meme = meme.split('/');
		meme = meme[5];
		meme = `http://images.memes.com/meme/${meme}`;
	} catch (err) {
		return console.error('Error Getting Meme', err);
	}
	return meme;
};

