"use strict";function Bullet(){var e=this;this.ele=document.createElement("div"),this.id=parseInt(1e8*Math.random()),this.init=function(){return gameEngine.allBullet[e.id]=e,gameEngine.ele.appendChild(e.ele),e.ele.className="bullet",e.ele.style.left=myPlane.ele.offsetLeft+myPlane.ele.offsetWidth/2-e.ele.offsetWidth/2+"px",e.ele.style.top=myPlane.ele.offsetTop-e.ele.offsetHeight+"px",e},this.move=function(){var l=e;e.timer=setInterval(function(){var e=l.ele.offsetTop-10;e<-18?(clearInterval(l.timer),gameEngine.ele.removeChild(l.ele),delete gameEngine.allBullet[l.id]):l.ele.style.top=e+"px"},50)},this.boom=function(){clearInterval(e.timer),e.ele.className="bullet-die";var l,t,n=void 0;n=e,l=["images2/die1.png","images2/die2.png"],t=0;var i=setInterval(function(){t>=1?(clearInterval(i),gameEngine.ele.removeChild(n.ele)):n.ele.style.background="url("+l[++t]+") no-repeat"},100)}}