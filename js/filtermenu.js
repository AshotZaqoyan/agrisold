var checkbox = document.querySelector('#check');

checkbox.addEventListener('change', function () {
	if (this.checked) {
		document.getElementById("leftMenu").classList.add("showfmenu");
		document.getElementById("leftmenuicon").classList.add("klor");
	} else {
		document.getElementById("leftMenu").classList.remove("showfmenu");
		document.getElementById("leftmenuicon").classList.remove("klor");
	}
});