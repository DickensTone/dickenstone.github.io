function start() {
	if (jumpDTO.time == 0)
		location.href = jumpDTO.url;
	else go();
}
var jumpDTO = {
	time : 5,
	url : "https://dickenstone.github.io",
	countId : "time"
};
function go() {
	document.getElementById(jumpDTO.countId).innerHTML = ""
			+ jumpDTO.time; // 显示倒计时
	jumpDTO.time--;
	setTimeout(start, 1000);
}