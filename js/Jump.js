function refer(){
	if(t==0){
		location="https://dickenstone.github.io"; // #设定跳转的链接地址
	}
	document.getElementById('count').innerHTML=""+t+"秒后跳转到主页"; // 显示倒计时
	t--; // 计数器递减
}
function jump(){
	window.alert("404 shold show");
	var t=5;// 设定跳转的时间
	setInterval("refer()",1000); // 启动1秒定时
}
