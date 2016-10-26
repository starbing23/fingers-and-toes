//self-defined tool
//use this tool in small projects 
var bin = {
	$ : function(id){return document.getElementById(id);},
	addEvent : function(obj,eventType,func){
		if(window.addEventListener){
			obj.addEventListener(eventType,func,false);
		}else{
			obj.attachEvent("on" + eventType, func); 
		}
	},
	delEvent : function(obj,eventType,func){obj.removeEventListener(eventType,func,false)},
	viewData : function(){
		var W=0, H=0, SL=0, ST=0, SW=0, SH=0;
		var w=window, d=document, dd=d.documentElement;	
		W=w.innerWidth||dd.clientWidth||d.body.clientWidth||0;
		H=w.innerHeight||dd.clientHeight||d.body.clientHeight||0;
		ST=d.body.scrollTop||dd.scrollTop||w.pageYOffset;
		SL=d.body.scrollLeft||dd.scrollLeft||w.pageXOffset;
		SW=Math.max(d.body.scrollWidth, dd.scrollWidth ||0);
		SH=Math.max(d.body.scrollHeight,dd.scrollHeight||0, H);
		return {
			"scrollTop":ST,
			"scrollLeft":SL,
			"documentWidth":SW,
			"documentHeight":SH,
			"viewWidth":W,
			"viewHeight":H
		};
	},
	delNode : function(nid){
		if(nid && nid.nodeName){
			nid.parentNode.removeChild(nid);
		}
	},
	hasClass : function(ele,cls){
		return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
	},
}

//self-defined tool
//use this tool in small projects 
var bin = {
	$ : function(id){return document.getElementById(id);},
	addEvent : function(obj,eventType,func){
		if(window.addEventListener){
			obj.addEventListener(eventType,func,false);
		}else{
			obj.attachEvent("on" + eventType, func); 
		}
	},
	delEvent : function(obj,eventType,func){obj.removeEventListener(eventType,func,false)},
	viewData : function(){
		var W=0, H=0, SL=0, ST=0, SW=0, SH=0;
		var w=window, d=document, dd=d.documentElement;	
		W=w.innerWidth||dd.clientWidth||d.body.clientWidth||0;
		H=w.innerHeight||dd.clientHeight||d.body.clientHeight||0;
		ST=d.body.scrollTop||dd.scrollTop||w.pageYOffset;
		SL=d.body.scrollLeft||dd.scrollLeft||w.pageXOffset;
		SW=Math.max(d.body.scrollWidth, dd.scrollWidth ||0);
		SH=Math.max(d.body.scrollHeight,dd.scrollHeight||0, H);
		return {
			"scrollTop":ST,
			"scrollLeft":SL,
			"documentWidth":SW,
			"documentHeight":SH,
			"viewWidth":W,
			"viewHeight":H
		};
	},
	delNode : function(nid){
		if(nid && nid.nodeName){
			nid.parentNode.removeChild(nid);
		}
	},
	hasClass : function(ele,cls){
		return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
	},
}

//main body
var App=function(obj){
	this.author="Bin Wu";
	this.email="starbing23@gmail.com";
	this.init(obj);
};
App.prototype={
	count:0,
	init:function(obj){
		var tmpThis=this;
		this.counter=bin.$(obj.counter);
		this.fingers=bin.$(obj.fingers);
		this.toes=bin.$(obj.toes);
		this.countInput=bin.$(obj.countInput);
		this.restartBtn=bin.$(obj.restartBtn);
		this.resetBtn=bin.$(obj.resetBtn);
		this.erroMessage=bin.$(obj.erroMessage);
		bin.addEvent(this.restartBtn,"click",function(){tmpThis.Restart()});
		bin.addEvent(this.resetBtn,"click",function(){tmpThis.Reset()});
	},
	Reset:function(){
		this.countInput.value="";
		this.counter.innerHTML="0";
		this.fingers.className="word";
		this.toes.className="word";
		clearInterval(this.timer);
		this.count=0;
	},
	Restart:function(){
		this.maxCount=this.countInput.value;
		var tmpThis=this;
		if(!this.maxCount || isNaN(this.maxCount) || this.maxCount<=0 || Math.ceil(this.maxCount)!=this.maxCount){
			this.erroMessage.className="show";
			console.log('Please insert a positive integer into input place before click this button!');
			return;
		};
		if(this.timer){
			clearInterval(this.timer);
			this.counter.innerHTML="0";
			this.fingers.className="word";
			this.toes.className="word";
		};
		this.erroMessage.className="hidden";
		this.count=0;
		this.counter.innerHTML=this.count;
		this.timer=setInterval(function(){tmpThis.Timer()},1000);
	},
	Timer:function(){
		if(this.count>=this.maxCount){
			clearInterval(this.timer);
		}else{
			this.count++;
			this.counter.innerHTML=this.count;
			this.Highlight();
		};
	},
	Highlight:function(){
		if(this.count%3 ==0){
			//We can use JQuery addClass method, but I don't want to inject JQuery in this project
			this.fingers.className="word hightlight";
		}else{
			this.fingers.className="word";
		};
		if(this.count%5 ==0){
			this.toes.className="word hightlight";
		}else{
			this.toes.className="word";
		};
	},
};
var obj={
	counter:"counter",
	fingers:"fingers",
	toes:"toes",
	countInput:"countInput",
	resetBtn:"resetBtn",
	restartBtn:"restartBtn",
	erroMessage:"erroMessage",
};
var app=new App(obj);



