function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

function createNewTextFile() {
  location.href = "create_note";
}
function editTextFile() {
  location.href = "load_note";
}
