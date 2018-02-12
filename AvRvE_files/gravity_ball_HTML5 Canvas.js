(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.ball_white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{start:0,move_ball:1,return_ball:2});

	// timeline functions:
	this.frame_0 = function() {
		/* 
		import flash.display.MovieClip;
		import flash.events.MouseEvent;
		
		var stage_x:Number=640;
		var stage_y:Number=480;
		var radius:Number=30;
		var stage_limitX:Number=stage_x-radius;
		var stage_limitY:Number=stage_y-radius;
		
		var i:uint=0;
		
		var resistance:Number=0.005;
		var gravity:Number=0.5;
		var v_x:Number=0;
		var v_y:Number=5;
		
		var old_x:Number=0;
		var old_y:Number=0;
		
		var v_limited:Number=80;
		
		var ball_distance:Number=0;
		var ball_distance_last:Number=0;
		
		var condition_drag:Boolean=false;
		var condition_static:Boolean=false;
		var condition_crashBall:Boolean=false;
		
		var crash_check:Array=new Array();
		var vectorRevolution:VectorResolution=new VectorResolution();
		
		
		
		for( var j:uint=this.parent.getChildIndex(this)+1 ; j<this.parent.numChildren ; ++j ){
			crash_check.push(1);
		}
		
		
		function start_drag(evt:MouseEvent){
			this.startDrag(false);
			condition_drag=true;
			condition_static=false;
		}
		
		function stop_drag(evt:MouseEvent){
			this.stopDrag();
			condition_drag=false;
			condition_static=false;
		}
		
		function stop_drag_crash(){
			this.stopDrag();
			condition_drag=false;
			condition_static=false;
		}
		
		
		
		//trace("ball parent : " + this["parent"]);
		//this["parent"].test_1();
		//(this.parent.getChildAt(1) as MovieClip).y=80;
		//var test_ball:MovieClip=this.parent.getChildAt(1) as MovieClip;
		//test_ball.y=40;
		
		this.addEventListener(MouseEvent.MOUSE_DOWN,start_drag);
		stage.addEventListener(MouseEvent.MOUSE_UP,stop_drag);//this?
		
		
		
		
		
		
		
		
		
		
		
		*/
	}
	this.frame_1 = function() {
		//
		//
		//
		//if(condition_drag){
		//	v_x=this.x-old_x;
		//	v_y=this.y-old_y;
		//	old_x=this.x;
		//	old_y=this.y;
		//}
		//else{
		//	if(v_x>v_limited){
		//		v_x=v_limited;
		//	}
		//	if(v_x<-v_limited){
		//		v_x=-v_limited;
		//	}
		//	if(v_y>v_limited){
		//		v_y=v_limited;
		//	}
		//	if(v_y<-v_limited){
		//		v_y<-v_limited;
		//	}
		//	if(v_x==NaN || v_y==NaN){
		//		trace("error in v");
		//	}
		//	else{
		//		v_x=v_x*(1-resistance);
		//		this.x+=v_x;
		//		if(!condition_static){
		//			v_y=(v_y+gravity)*(1-resistance);
		//			this.y+=v_y;
		//		}
		//	}
		//	
		//}//test_1
		//
		////控制判断
		//
		//
		//for( i=this.parent.getChildIndex(this)+1 ; i<this.parent.numChildren ; ++i ){
		//	var ball_aim:MovieClip=this.parent.getChildAt(i) as MovieClip;
		//	var ball_answer:Array=new Array();
		//	//trace(" This is v_y of " + this.parent.getChildAt(i) + "  :  " + ( this.parent.getChildAt(i) as MovieClip ).v_y );
		//	
		//	if( (ball_distance=(this.x-ball_aim.x)*(this.x-ball_aim.x)+(this.y-ball_aim.y)*(this.y-ball_aim.y)) < 4*radius*radius ){
		//		ball_distance_last=ball_distance_last;
		//		if(crash_check[i]==1){
		//			if(!condition_drag && !ball_aim.condition_drag){
		//				vectorRevolution.setData(this.v_x,this.v_y,ball_aim.v_x,ball_aim.v_y,ball_aim.x-this.x,ball_aim.y-this.y);
		//				ball_answer=vectorRevolution.vectorSort();
		//				//trace("ball_answer : " +ball_answer[0]);
		//				this.v_x=ball_answer[0];
		//				this.v_y=ball_answer[1];
		//				ball_aim.v_x=ball_answer[2];
		//				ball_aim.v_y=ball_answer[3];
		//				crash_check[i]=0;
		//				condition_static=false;
		//				ball_aim.condition_static=false;
		//				//condition_crashBall=true;
		//				//自由碰撞
		//			}
		//			else if(condition_drag){
		//				vectorRevolution.setSlope(ball_aim.x-this.x,ball_aim.y-this.y);
		//				ball_answer=vectorRevolution.vectorSortDrag(ball_aim.v_x,ball_aim.v_y);
		//				ball_aim.v_x=ball_answer[0]+this.v_x;
		//				ball_aim.v_y=ball_answer[1]+this.v_y;
		//				crash_check[i]=0;
		//				condition_static=false;
		//				ball_aim.condition_static=false;
		//			}
		//			else if(ball_aim.condition_drag){
		//				vectorRevolution.setSlope(ball_aim.x-this.x,ball_aim.y-this.y);
		//				ball_answer=vectorRevolution.vectorSortDrag(this.v_x,this.v_y);
		//				this.v_x=ball_answer[0]+ball_aim.v_x;
		//				this.v_y=ball_answer[1]+ball_aim.v_y;
		//				crash_check[i]=0;
		//				condition_static=false;
		//				ball_aim.condition_static=false;
		//			}
		//			//强制碰撞
		//		}
		//		else if(crash_check[i]==0){
		//			if(ball_distance_last<ball_distance){
		//				//trace("this is a collision");
		//				vectorRevolution.setData(this.v_x,this.v_y,ball_aim.v_x,ball_aim.v_y,ball_aim.x-this.x,ball_aim.y-this.y);
		//				ball_answer=vectorRevolution.vectorToSeparation(this.x,this.y,ball_aim.x,ball_aim.y,0.5);
		//				this.v_x+=ball_answer[0];
		//				this.v_y+=ball_answer[1];
		//				ball_aim.v_x+=ball_answer[2];
		//				ball_aim.v_y+=ball_answer[3];
		//				/*简单自由碰撞
		//				vectorRevolution.setData(v_x,v_y,ball_aim.v_x,ball_aim.v_y,ball_aim.x-this.x,ball_aim.y-this.y);
		//				ball_answer=vectorRevolution.vectorSort();
		//				//trace("ball_answer : " +ball_answer[0]);
		//				this.v_x=ball_answer[0];
		//				this.v_y=ball_answer[1];
		//				ball_aim.v_x=ball_answer[2];
		//				ball_aim.v_y=ball_answer[3];
		//				crash_check[i]=0;
		//				condition_static=false;
		//				ball_aim.condition_static=false;
		//				*/
		//				
		//			}
		//			//重叠解决方案
		//		}
		//	}
		//	else{
		//		//if(
		//		crash_check[i]=1;
		//	}
		//}
		//
		////球遍历碰撞检测
		//
		//
		//
		//if(this.x<radius){
		//	if(condition_drag){
		//		stop_drag_crash();
		//	}
		//	this.x+=0.1;
		//	if(v_x<0){
		//		v_x=-v_x;
		//	}
		//}
		//else if(this.x>stage_limitX){
		//	if(condition_drag){
		//		stop_drag_crash();
		//	}
		//	this.x-=0.1;
		//	if(v_x>0){
		//		v_x=-v_x;
		//	}
		//}
		//if(this.y<radius){
		//	if(condition_drag){
		//		stop_drag_crash();
		//	}
		//	this.y+=0.1;
		//	if(v_y<0){
		//		v_y=-v_y;
		//	}
		//}
		//else if(this.y>stage_limitY){
		//	if(condition_drag && !condition_static){
		//		this.y-=1;
		//		stop_drag_crash();
		//	}
		//	if(v_y>1.5){ //防止因为重力效应卡底墙
		//		this.y-=0.5;
		//		v_y=-v_y;
		//	}
		//	else{
		//		v_y=0;
		//		this.y=stage_limitY;
		//		condition_static=true;
		//		//trace("this is static");
		//	}
		//}
		////墙检测
		//
		//
		//
		////trace(stage.test);
		////trace("this parent : " + this.parent);
		////trace("stage : " + stage);
		////trace("Child : " + this.parent.getChildAt(1).name);
		//
		//
	}
	this.frame_2 = function() {
		/* 
		gotoAndPlay("move_ball");
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// action
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.8)").s().p("AjiDiQhdhdAAiFQAAiEBdheQBehdCEAAQCEAABeBdQBeBeAACEQAACFheBdQheBeiEAAQiEAAheheg");
	this.shape.setTransform(0,0,0.938,0.938);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.ball_center = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":0,"move_ball":1,"return_ball":2});

	// timeline functions:
	this.frame_0 = function() {
		/* 
		import flash.display.MovieClip;
		import flash.events.MouseEvent;
		
		var stage_x:Number=640;
		var stage_y:Number=480;
		var radius:Number=30;
		var stage_limitX:Number=stage_x-radius;
		var stage_limitY:Number=stage_y-radius;
		
		var i:uint=0;
		
		var resistance:Number=0.005;
		var gravity:Number=0.5;
		var v_x:Number=0;
		var v_y:Number=5;
		
		var old_x:Number=0;
		var old_y:Number=0;
		
		var v_limited:Number=80;
		
		var ball_distance:Number=0;
		var ball_distance_last:Number=0;
		
		var condition_drag:Boolean=false;
		var condition_static:Boolean=false;
		var condition_crashBall:Boolean=false;
		
		var crash_check:Array=new Array();
		var vectorRevolution:VectorResolution=new VectorResolution();
		
		
		
		for( var j:uint=this.parent.getChildIndex(this)+1 ; j<this.parent.numChildren ; ++j ){
			crash_check.push(1);
		}
		
		
		function start_drag(evt:MouseEvent){
			this.startDrag(false);
			condition_drag=true;
			condition_static=false;
		}
		
		function stop_drag(evt:MouseEvent){
			this.stopDrag();
			condition_drag=false;
			condition_static=false;
		}
		
		function stop_drag_crash(){
			this.stopDrag();
			condition_drag=false;
			condition_static=false;
		}
		
		
		
		//trace("ball parent : " + this["parent"]);
		//this["parent"].test_1();
		//(this.parent.getChildAt(1) as MovieClip).y=80;
		//var test_ball:MovieClip=this.parent.getChildAt(1) as MovieClip;
		//test_ball.y=40;
		
		this.addEventListener(MouseEvent.MOUSE_DOWN,start_drag);
		stage.addEventListener(MouseEvent.MOUSE_UP,stop_drag);//this?
		
		
		
		
		
		
		
		
		
		
		
		*/
	}
	this.frame_1 = function() {
		//
		//
		//
		//if(condition_drag){
		//	v_x=this.x-old_x;
		//	v_y=this.y-old_y;
		//	old_x=this.x;
		//	old_y=this.y;
		//}
		//else{
		//	if(v_x>v_limited){
		//		v_x=v_limited;
		//	}
		//	if(v_x<-v_limited){
		//		v_x=-v_limited;
		//	}
		//	if(v_y>v_limited){
		//		v_y=v_limited;
		//	}
		//	if(v_y<-v_limited){
		//		v_y<-v_limited;
		//	}
		//	if(v_x==NaN || v_y==NaN){
		//		trace("error in v");
		//	}
		//	else{
		//		v_x=v_x*(1-resistance);
		//		this.x+=v_x;
		//		if(!condition_static){
		//			v_y=(v_y+gravity)*(1-resistance);
		//			this.y+=v_y;
		//		}
		//	}
		//	
		//}//test_1
		//
		////控制判断
		//
		//
		//for( i=this.parent.getChildIndex(this)+1 ; i<this.parent.numChildren ; ++i ){
		//	var ball_aim:MovieClip=this.parent.getChildAt(i) as MovieClip;
		//	var ball_answer:Array=new Array();
		//	//trace(" This is v_y of " + this.parent.getChildAt(i) + "  :  " + ( this.parent.getChildAt(i) as MovieClip ).v_y );
		//	
		//	if( (ball_distance=(this.x-ball_aim.x)*(this.x-ball_aim.x)+(this.y-ball_aim.y)*(this.y-ball_aim.y)) < 4*radius*radius ){
		//		ball_distance_last=ball_distance_last;
		//		if(crash_check[i]==1){
		//			if(!condition_drag && !ball_aim.condition_drag){
		//				vectorRevolution.setData(this.v_x,this.v_y,ball_aim.v_x,ball_aim.v_y,ball_aim.x-this.x,ball_aim.y-this.y);
		//				ball_answer=vectorRevolution.vectorSort();
		//				//trace("ball_answer : " +ball_answer[0]);
		//				this.v_x=ball_answer[0];
		//				this.v_y=ball_answer[1];
		//				ball_aim.v_x=ball_answer[2];
		//				ball_aim.v_y=ball_answer[3];
		//				crash_check[i]=0;
		//				condition_static=false;
		//				ball_aim.condition_static=false;
		//				//condition_crashBall=true;
		//				//自由碰撞
		//			}
		//			else if(condition_drag){
		//				vectorRevolution.setSlope(ball_aim.x-this.x,ball_aim.y-this.y);
		//				ball_answer=vectorRevolution.vectorSortDrag(ball_aim.v_x,ball_aim.v_y);
		//				ball_aim.v_x=ball_answer[0]+this.v_x;
		//				ball_aim.v_y=ball_answer[1]+this.v_y;
		//				crash_check[i]=0;
		//				condition_static=false;
		//				ball_aim.condition_static=false;
		//			}
		//			else if(ball_aim.condition_drag){
		//				vectorRevolution.setSlope(ball_aim.x-this.x,ball_aim.y-this.y);
		//				ball_answer=vectorRevolution.vectorSortDrag(this.v_x,this.v_y);
		//				this.v_x=ball_answer[0]+ball_aim.v_x;
		//				this.v_y=ball_answer[1]+ball_aim.v_y;
		//				crash_check[i]=0;
		//				condition_static=false;
		//				ball_aim.condition_static=false;
		//			}
		//			//强制碰撞
		//		}
		//		else if(crash_check[i]==0){
		//			if(ball_distance_last<ball_distance){
		//				//trace("this is a collision");
		//				vectorRevolution.setData(this.v_x,this.v_y,ball_aim.v_x,ball_aim.v_y,ball_aim.x-this.x,ball_aim.y-this.y);
		//				ball_answer=vectorRevolution.vectorToSeparation(this.x,this.y,ball_aim.x,ball_aim.y,0.5);
		//				this.v_x+=ball_answer[0];
		//				this.v_y+=ball_answer[1];
		//				ball_aim.v_x+=ball_answer[2];
		//				ball_aim.v_y+=ball_answer[3];
		//				/*简单自由碰撞
		//				vectorRevolution.setData(v_x,v_y,ball_aim.v_x,ball_aim.v_y,ball_aim.x-this.x,ball_aim.y-this.y);
		//				ball_answer=vectorRevolution.vectorSort();
		//				//trace("ball_answer : " +ball_answer[0]);
		//				this.v_x=ball_answer[0];
		//				this.v_y=ball_answer[1];
		//				ball_aim.v_x=ball_answer[2];
		//				ball_aim.v_y=ball_answer[3];
		//				crash_check[i]=0;
		//				condition_static=false;
		//				ball_aim.condition_static=false;
		//				*/
		//				
		//			}
		//			//重叠解决方案
		//		}
		//	}
		//	else{
		//		//if(
		//		crash_check[i]=1;
		//	}
		//}
		//
		////球遍历碰撞检测
		//
		//
		//
		//if(this.x<radius){
		//	if(condition_drag){
		//		stop_drag_crash();
		//	}
		//	this.x+=0.1;
		//	if(v_x<0){
		//		v_x=-v_x;
		//	}
		//}
		//else if(this.x>stage_limitX){
		//	if(condition_drag){
		//		stop_drag_crash();
		//	}
		//	this.x-=0.1;
		//	if(v_x>0){
		//		v_x=-v_x;
		//	}
		//}
		//if(this.y<radius){
		//	if(condition_drag){
		//		stop_drag_crash();
		//	}
		//	this.y+=0.1;
		//	if(v_y<0){
		//		v_y=-v_y;
		//	}
		//}
		//else if(this.y>stage_limitY){
		//	if(condition_drag && !condition_static){
		//		this.y-=1;
		//		stop_drag_crash();
		//	}
		//	if(v_y>1.5){ //防止因为重力效应卡底墙
		//		this.y-=0.5;
		//		v_y=-v_y;
		//	}
		//	else{
		//		v_y=0;
		//		this.y=stage_limitY;
		//		condition_static=true;
		//		//trace("this is static");
		//	}
		//}
		////墙检测
		//
		//
		//
		////trace(stage.test);
		////trace("this parent : " + this.parent);
		////trace("stage : " + stage);
		////trace("Child : " + this.parent.getChildAt(1).name);
		//
		//
	}
	this.frame_2 = function() {
		/* 
		gotoAndPlay("move_ball");
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// action
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFCFA","#1F1F1F","#FFFFFF","#000417"],[0.027,0.333,0.655,1],0,0,0,0,0,32.6).s().p("AjiDiQhdhdAAiFQAAiEBdheQBehdCEAAQCEAABeBdQBeBeAACEQAACFheBdQheBeiEAAQiEAAheheg");
	this.shape.setTransform(0.5,-0.1,0.938,0.938);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.ball_black = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":0,"move_ball":1,"return_ball":2});

	// timeline functions:
	this.frame_0 = function() {
		/* 
		import flash.display.MovieClip;
		import flash.events.MouseEvent;
		
		var stage_x:Number=640;
		var stage_y:Number=480;
		var radius:Number=30;
		var stage_limitX:Number=stage_x-radius;
		var stage_limitY:Number=stage_y-radius;
		
		var i:uint=0;
		
		var resistance:Number=0.005;
		var gravity:Number=0.5;
		var v_x:Number=0;
		var v_y:Number=5;
		
		var old_x:Number=0;
		var old_y:Number=0;
		
		var v_limited:Number=80;
		
		var ball_distance:Number=0;
		var ball_distance_last:Number=0;
		
		var condition_drag:Boolean=false;
		var condition_static:Boolean=false;
		var condition_crashBall:Boolean=false;
		
		var crash_check:Array=new Array();
		var vectorRevolution:VectorResolution=new VectorResolution();
		
		
		
		for( var j:uint=this.parent.getChildIndex(this)+1 ; j<this.parent.numChildren ; ++j ){
			crash_check.push(1);
		}
		
		
		function start_drag(evt:MouseEvent){
			this.startDrag(false);
			condition_drag=true;
			condition_static=false;
		}
		
		function stop_drag(evt:MouseEvent){
			this.stopDrag();
			condition_drag=false;
			condition_static=false;
		}
		
		function stop_drag_crash(){
			this.stopDrag();
			condition_drag=false;
			condition_static=false;
		}
		
		
		
		//trace("ball parent : " + this["parent"]);
		//this["parent"].test_1();
		//(this.parent.getChildAt(1) as MovieClip).y=80;
		//var test_ball:MovieClip=this.parent.getChildAt(1) as MovieClip;
		//test_ball.y=40;
		
		this.addEventListener(MouseEvent.MOUSE_DOWN,start_drag);
		stage.addEventListener(MouseEvent.MOUSE_UP,stop_drag);//this?
		
		
		
		
		
		
		
		
		
		
		
		*/
	}
	this.frame_1 = function() {
		//
		//
		//
		//if(condition_drag){
		//	v_x=this.x-old_x;
		//	v_y=this.y-old_y;
		//	old_x=this.x;
		//	old_y=this.y;
		//}
		//else{
		//	if(v_x>v_limited){
		//		v_x=v_limited;
		//	}
		//	if(v_x<-v_limited){
		//		v_x=-v_limited;
		//	}
		//	if(v_y>v_limited){
		//		v_y=v_limited;
		//	}
		//	if(v_y<-v_limited){
		//		v_y<-v_limited;
		//	}
		//	if(v_x==NaN || v_y==NaN){
		//		trace("error in v");
		//	}
		//	else{
		//		v_x=v_x*(1-resistance);
		//		this.x+=v_x;
		//		if(!condition_static){
		//			v_y=(v_y+gravity)*(1-resistance);
		//			this.y+=v_y;
		//		}
		//	}
		//	
		//}//test_1
		//
		////控制判断
		//
		//
		//for( i=this.parent.getChildIndex(this)+1 ; i<this.parent.numChildren ; ++i ){
		//	var ball_aim:MovieClip=this.parent.getChildAt(i) as MovieClip;
		//	var ball_answer:Array=new Array();
		//	//trace(" This is v_y of " + this.parent.getChildAt(i) + "  :  " + ( this.parent.getChildAt(i) as MovieClip ).v_y );
		//	
		//	if( (ball_distance=(this.x-ball_aim.x)*(this.x-ball_aim.x)+(this.y-ball_aim.y)*(this.y-ball_aim.y)) < 4*radius*radius ){
		//		ball_distance_last=ball_distance_last;
		//		if(crash_check[i]==1){
		//			if(!condition_drag && !ball_aim.condition_drag){
		//				vectorRevolution.setData(this.v_x,this.v_y,ball_aim.v_x,ball_aim.v_y,ball_aim.x-this.x,ball_aim.y-this.y);
		//				ball_answer=vectorRevolution.vectorSort();
		//				//trace("ball_answer : " +ball_answer[0]);
		//				this.v_x=ball_answer[0];
		//				this.v_y=ball_answer[1];
		//				ball_aim.v_x=ball_answer[2];
		//				ball_aim.v_y=ball_answer[3];
		//				crash_check[i]=0;
		//				condition_static=false;
		//				ball_aim.condition_static=false;
		//				//condition_crashBall=true;
		//				//自由碰撞
		//			}
		//			else if(condition_drag){
		//				vectorRevolution.setSlope(ball_aim.x-this.x,ball_aim.y-this.y);
		//				ball_answer=vectorRevolution.vectorSortDrag(ball_aim.v_x,ball_aim.v_y);
		//				ball_aim.v_x=ball_answer[0]+this.v_x;
		//				ball_aim.v_y=ball_answer[1]+this.v_y;
		//				crash_check[i]=0;
		//				condition_static=false;
		//				ball_aim.condition_static=false;
		//			}
		//			else if(ball_aim.condition_drag){
		//				vectorRevolution.setSlope(ball_aim.x-this.x,ball_aim.y-this.y);
		//				ball_answer=vectorRevolution.vectorSortDrag(this.v_x,this.v_y);
		//				this.v_x=ball_answer[0]+ball_aim.v_x;
		//				this.v_y=ball_answer[1]+ball_aim.v_y;
		//				crash_check[i]=0;
		//				condition_static=false;
		//				ball_aim.condition_static=false;
		//			}
		//			//强制碰撞
		//		}
		//		else if(crash_check[i]==0){
		//			if(ball_distance_last<ball_distance){
		//				//trace("this is a collision");
		//				vectorRevolution.setData(this.v_x,this.v_y,ball_aim.v_x,ball_aim.v_y,ball_aim.x-this.x,ball_aim.y-this.y);
		//				ball_answer=vectorRevolution.vectorToSeparation(this.x,this.y,ball_aim.x,ball_aim.y,0.5);
		//				this.v_x+=ball_answer[0];
		//				this.v_y+=ball_answer[1];
		//				ball_aim.v_x+=ball_answer[2];
		//				ball_aim.v_y+=ball_answer[3];
		//				/*简单自由碰撞
		//				vectorRevolution.setData(v_x,v_y,ball_aim.v_x,ball_aim.v_y,ball_aim.x-this.x,ball_aim.y-this.y);
		//				ball_answer=vectorRevolution.vectorSort();
		//				//trace("ball_answer : " +ball_answer[0]);
		//				this.v_x=ball_answer[0];
		//				this.v_y=ball_answer[1];
		//				ball_aim.v_x=ball_answer[2];
		//				ball_aim.v_y=ball_answer[3];
		//				crash_check[i]=0;
		//				condition_static=false;
		//				ball_aim.condition_static=false;
		//				*/
		//				
		//			}
		//			//重叠解决方案
		//		}
		//	}
		//	else{
		//		//if(
		//		crash_check[i]=1;
		//	}
		//}
		//
		////球遍历碰撞检测
		//
		//
		//
		//if(this.x<radius){
		//	if(condition_drag){
		//		stop_drag_crash();
		//	}
		//	this.x+=0.1;
		//	if(v_x<0){
		//		v_x=-v_x;
		//	}
		//}
		//else if(this.x>stage_limitX){
		//	if(condition_drag){
		//		stop_drag_crash();
		//	}
		//	this.x-=0.1;
		//	if(v_x>0){
		//		v_x=-v_x;
		//	}
		//}
		//if(this.y<radius){
		//	if(condition_drag){
		//		stop_drag_crash();
		//	}
		//	this.y+=0.1;
		//	if(v_y<0){
		//		v_y=-v_y;
		//	}
		//}
		//else if(this.y>stage_limitY){
		//	if(condition_drag && !condition_static){
		//		this.y-=1;
		//		stop_drag_crash();
		//	}
		//	if(v_y>1.5){ //防止因为重力效应卡底墙
		//		this.y-=0.5;
		//		v_y=-v_y;
		//	}
		//	else{
		//		v_y=0;
		//		this.y=stage_limitY;
		//		condition_static=true;
		//		//trace("this is static");
		//	}
		//}
		////墙检测
		//
		//
		//
		////trace(stage.test);
		////trace("this parent : " + this.parent);
		////trace("stage : " + stage);
		////trace("Child : " + this.parent.getChildAt(1).name);
		//
		//
	}
	this.frame_2 = function() {
		/* 
		gotoAndPlay("move_ball");
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// action
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.8)").s().p("AjiDiQhdhdAAiFQAAiEBdheQBehdCEAAQCEAABeBdQBeBeAACEQAACFheBdQheBeiEAAQiEAAheheg");
	this.shape.setTransform(0,0,0.938,0.938);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.gravity_ball_HTML5Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// content
	this.instance = new lib.ball_black();
	this.instance.parent = this;
	this.instance.setTransform(492,247);

	this.instance_1 = new lib.ball_white();
	this.instance_1.parent = this;
	this.instance_1.setTransform(541,136);

	this.instance_2 = new lib.ball_white();
	this.instance_2.parent = this;
	this.instance_2.setTransform(153,325);

	this.instance_3 = new lib.ball_black();
	this.instance_3.parent = this;
	this.instance_3.setTransform(112,103);

	this.instance_4 = new lib.ball_center();
	this.instance_4.parent = this;
	this.instance_4.setTransform(349,212);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EAm9AdHMhN5AAAMAAAg6NMBN5AAAg");
	this.shape.setTransform(320,240,0.963,1.718,-90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","#000000","#FFFFFF","#FFFFFF"],[0,0.188,0.827,1],-249.3,0,249.4,0).s().p("Egm8AdHMAAAg6MMBN5AAAMAAAA6Mg");
	this.shape_1.setTransform(320,240,0.963,1.718,-90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(1,1,1).p("AIDoHIAAQPIwFAAIAAwPg");
	this.shape_2.setTransform(320,240,6.214,4.618);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(319,239,642.1,482);
// library properties:
lib.properties = {
	id: 'A7315CCFBE7B0442AD087D78E6121C03',
	width: 640,
	height: 480,
	fps: 40,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A7315CCFBE7B0442AD087D78E6121C03'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;