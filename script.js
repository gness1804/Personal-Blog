$(document).ready(function () {
  $(document).on("keydown", function(key) {
	  if (key.which === 66) {
			$(".testing").toggleClass("border-test");
	  }
	  });
		// $(document).on("load", function () {
		// 	alert("Hi!");
		// });
}); //end of jQuery body



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
