function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

function createNewTextFile() {
  location.replace("https://qszlv2cknhlprmmfedfavw-on.drv.tw/text-editor/create_note");
}
function editTextFile() {
  location.replace("https://qszlv2cknhlprmmfedfavw-on.drv.tw/text-editor/load_note");
}