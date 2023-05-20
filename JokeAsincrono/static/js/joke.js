let loadJokeButton = document.querySelector(".loadJokeButton");
let formButton = document.querySelector("#jokeForm");

let categories = [
	"animal",
	"career",
	"celebrity",
	"dev",
	"explicit",
	"fashion",
	"food",
	"history",
	"money",
	"movie",
	"music",
	"political",
	"religion",
	"science",
	"sport",
	"travel",
];

formButton.addEventListener("submit", function (e) {
	e.preventDefault();

	let currentCategory = document.querySelector("select[name=jokeTypes]").value;
	
	let url = "https://api.chucknorris.io/jokes/random";

	if (currentCategory != "") {
		url += `?category=${currentCategory}`;
	}

	function thenCallback(response) {
		if (response.status === 200) {
			return response.json();
		}
	}

	function catchCallback(error) {
		console.log(error);
		
	}

	function finalCallback(data) {
		console.log(data);
		document.querySelector(".jokeString").innerHTML = data.value;

		let myLink = document.querySelector("#jokeLink");

		myLink.href = data.url;
		myLink.innerHTML = data.url;
	}

	fetch(url).then(thenCallback).then(finalCallback).catch(catchCallback);
});
