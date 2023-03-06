const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'techcrunch-unofficial.p.rapidapi.com'
	}
};

fetch('https://techcrunch-unofficial.p.rapidapi.com/random', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));



console.log(options)