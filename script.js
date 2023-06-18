//your JS code here. If required.
function remove() {
	const body = document.body;
	let selectColor = body.querySelector("#colorSelect");
	let selectedOption = selectColor.options[selectColor.selectedIndex];

    selectColor.removeChild(selectedOption);
}