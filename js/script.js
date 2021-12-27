function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

function createNewTextFile() {
  location.href = "create_note.html";
}
function editTextFile() {
  location.href = "https://qszlv2cknhlprmmfedfavw-on.drv.tw/text-editor/load_note";
}
