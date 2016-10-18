var pArray = [];
var pontuacao = 0;
//variaveis para o som
var shoot = new Audio();
shoot.src = "pigeon.wav";

function Passaro(pos){
	this.gerarElemento = function(){
		var elm = document.createElement("passaro");
		elm.classList.add("passaro");	
		//Adicionando o reconhecimento de clique e deletando o passaro
		elm.onmousedown = function () {
    	console.log("User moused down");
    	elm.parentNode.removeChild( elm );
		pontuacao++;
		//adicionando som de morte aos pombos
		shoot.play();
		document.getElementById("textelement").innerHTML = "Pontuacao: "+pontuacao;
    	return true;
    	};

		document.body.appendChild(elm);
		return elm;
	}
	this.updateTamanho = function(){
		this.elemento.style.width = this.tamanho + "px";
		this.elemento.style.height = this.tamanho + "px";
	}
	this.updatePos = function(){
		this.elemento.style.left = this.pos[0] + "px";
		if(pos[1] < window.innerHeight / 1.5){
			this.elemento.style.top = this.pos[1] + "px";
		}
	}	

	this.dir = Math.random() * 360;
	this.velocidade = (Math.random() * 180 + 120) / 60;
	this.pos = pos;
	this.tamanho = ~~(Math.random() * 30) + 10;
	this.elemento = this.gerarElemento();
	this.updatePos();
	this.updateTamanho();
}

function refresh(){
	for(var i in pArray){
		pArray[i].updatePos();
	}
}

function update(){
	for(var i in pArray){
		var p = pArray[i];
		var anguloRad = p.dir * Math.PI /180;
		var dx = p.velocidade * Math.cos(anguloRad);
		var dy = p.velocidade * Math.sin(anguloRad);
		var px = p.pos[0] + dx;
		var py = p.pos[1] + dy;
		if(px>0 && py>0 && px<window.innerWidth && py<window.innerHeight){
			p.pos[0] = px;
			p.pos[1] = py;
		} else {
			p.dir = Math.random() * 360;
		}
	}
}

function gameloop(){
	update();
	refresh();
	window.requestAnimationFrame(gameloop);
}



function game(){
	for(var i=0; i < 15; i++){
		var x = ~~(Math.random() * window.innerWidth);
		var y = ~~(Math.random() * window.innerHeight / 1.5);
		var p = new Passaro([x,y]);
					pArray.push(p);
	}
	gameloop();
}

game();





