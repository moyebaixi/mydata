


//子弹Bullet
function Bullet(){
	//属性ele
	this.ele = document.createElement("div");
	this.id = parseInt(Math.random()*100000000);
	
	//方法init
	this.init =()=>{													//箭头函数
		
		//添加
		gameEngine.allBullet[this.id] = this;
		//console.log( gameEngine.allBullet );
		
		gameEngine.ele.appendChild(this.ele);
		this.ele.className = "bullet";
		this.ele.style.left = myPlane.ele.offsetLeft + myPlane.ele.offsetWidth/2 - this.ele.offsetWidth/2 + "px";
		this.ele.style.top = myPlane.ele.offsetTop - this.ele.offsetHeight + "px";
		return this;
	}
	
	//方法move
	this.move =()=>{
		let that = this;
		const sec = 50;														//const
		this.timer = setInterval(()=>{
			let y = that.ele.offsetTop - 10;
			if (y < -18) {
				clearInterval(that.timer); //停止移动
				gameEngine.ele.removeChild(that.ele); //移除子弹
				
				//删除
				delete gameEngine.allBullet[that.id];
			}
			else {
				that.ele.style.top = y + "px"; //移动
			}
		}, sec);
	}
	
	//爆炸
	this.boom =()=>{
		clearInterval(this.timer); //停止移动
		
		this.ele.className = "bullet-die";
		
		let that;
		var dieImgs; 
		var i;
		[that,dieImgs,i] = [ this,["images2/die1.png", "images2/die2.png"],0];        //解构赋值
		
		var dieTimer = setInterval(()=>{
			if (i >= 1){
				clearInterval(dieTimer); //停止爆炸
				gameEngine.ele.removeChild(that.ele); //移除子弹
			}else {
				that.ele.style.background = "url("+ dieImgs[++i] +") no-repeat";
			}
		}, 100);
	}
	
}

