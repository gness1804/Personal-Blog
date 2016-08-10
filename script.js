function searchPage() {
	var x = document.getElementById("searchbox1").value;
	window.find(x);
}

function Clear() {
	document.getElementById("searchbox1").value = "";
}

function toTop() {
  window.scrollTo(0, 0);
}

function toMostRecent() {
	window.location.replace("#most-recent-entry");
};
