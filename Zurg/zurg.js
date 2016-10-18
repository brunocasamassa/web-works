var posX = 0;
var posY = 0;
var curX = 0;
var curY = 0;
var zurg = document.querySelector("#boneco");

function pudim(e){
	/*console.log(e);
	posY = e.y;
	posX = e.x;*/
	gameloop();
}

function gameloop(){
	curX = curX+1;
	curY = curY+1;
	zurg.style.top = curY+"px";
	zurg.style.left = curX+"px";
	requestAnimationFrame(gameloop);
}

window.addEventListener("click",pudim);