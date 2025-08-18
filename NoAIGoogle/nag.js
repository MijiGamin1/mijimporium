function search() {
	text = document.getElementById("searchbox").value.replaceAll(" ", "+");
    text = text + " -no_ai";
 	window.open("https://www.google.com/search?q=" + text);
}