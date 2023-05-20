let copyButton = document.querySelector(".copyButton");

copyButton.addEventListener("click", function (e) {
	e.preventDefault();
	let paragraph = document.querySelector("p");
	let el = document.createElement("textarea");
	el.value = paragraph.textContent;
	el.style.position = "absolute";
	el.style.left = "-9999px";
	document.body.appendChild(el);
	el.select();
	document.execCommand("copy");
	document.body.removeChild(el);
});
