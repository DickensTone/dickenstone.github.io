function jump(){
	var site;
	var name;
	document.getElementById(name).innerHTML = count;
	setTimeout("jump()", 1000);
	count--;
}
function jump() {
    this.site = "https://dickenstone.github.io/";
}