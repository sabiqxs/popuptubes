(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1000,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: []
};



lib.ssMetadata = [];


// symbols:



(lib.btnB_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("ApeD/IAAn+IS9AAIAAH+g");
	this.shape.setTransform(116.6,24.3,1.919,0.951);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,233.3,48.7);


(lib.btnB_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("ApeD/IAAn+IS9AAIAAH+g");
	this.shape.setTransform(116.6,24.3,1.919,0.951);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,233.3,48.7);


(lib.btnB_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("ApeD/IAAn+IS9AAIAAH+g");
	this.shape.setTransform(116.6,24.3,1.919,0.951);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,233.3,48.7);


(lib.btnB_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("ApeD/IAAn+IS9AAIAAH+g");
	this.shape.setTransform(116.6,24.3,1.919,0.951);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,233.3,48.7);


(lib.btnA_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("ApeD/IAAn+IS9AAIAAH+g");
	this.shape.setTransform(116.6,24.3,1.919,0.951);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,233.3,48.7);


(lib.btnA_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("ApeD/IAAn+IS9AAIAAH+g");
	this.shape.setTransform(116.6,24.3,1.919,0.951);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,233.3,48.7);


(lib.btnA_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("ApeD/IAAn+IS9AAIAAH+g");
	this.shape.setTransform(116.6,24.3,1.919,0.951);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,233.3,48.7);


(lib.btnA_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("ApeD/IAAn+IS9AAIAAH+g");
	this.shape.setTransform(116.6,24.3,1.919,0.951);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,233.3,48.7);


(lib.mc_bawahRight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _root = this;
		this.numbuts = 2;
		this.btnB = [];
		var i;
		var butman = [];
		imgContainer = new createjs.Container();
		stage.addChild(imgContainer);
		
		var imgMc1, imgMc2;
		var imgCtx1, imgCtx2;
		
		for (i = 1; i <= this.numbuts; i++) {
			butman.push({
				id: "bawah" + i,
				src: "images/bawahTumb/bawahTumbKanan_"+ i + ".png"
			});
			this.btnB[i] = this["btnB" + i];
		}
		var imgQ = new createjs.LoadQueue();
		imgQ.addEventListener("complete", completeHandler);
		imgQ.loadManifest(butman);
		
		function completeHandler() {
			var i, bp;
			for (i = 1; i <= _root.numbuts; i++) {
				bp = new createjs.Bitmap(imgQ.getResult("bawah" + i));
				bp.x = 0;
				bp.y = 0;
				_root.btnB[i].addChild(bp);
				_root.btnB[i].cursor = 'pointer';
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.btnB2 = new lib.btnB_4();
	this.btnB2.setTransform(124.3,87.1,1,1,0,0,0,116.7,24.3);
	new cjs.ButtonHelper(this.btnB2, 0, 1, 1);

	this.btnB1 = new lib.btnB_3();
	this.btnB1.setTransform(124.3,31.4,1,1,0,0,0,116.7,24.3);
	new cjs.ButtonHelper(this.btnB1, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvPIhIAAxBIefAAIAARBg");
	this.shape.setTransform(123.6,-0.1,1.266,1.079,0,0,0,0,-54.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.btnB1},{t:this.btnB2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,247.2,117.7);


(lib.mc_bawahLeft = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _root = this;
		this.numbuts = 2;
		this.btnB = [];
		var i;
		var butman = [];
		imgContainer = new createjs.Container();
		stage.addChild(imgContainer);
		
		var imgMc1, imgMc2;
		var imgCtx1, imgCtx2;
		
		for (i = 1; i <= this.numbuts; i++) {
			butman.push({
				id: "bawah" + i,
				src: "images/bawahTumb/bawahTumbKiri_"+ i + ".png"
			});
			this.btnB[i] = this["btnB" + i];
		}
		var imgQ = new createjs.LoadQueue();
		imgQ.addEventListener("complete", completeHandler);
		imgQ.loadManifest(butman);
		
		function completeHandler() {
			var i, bp;
			for (i = 1; i <= _root.numbuts; i++) {
				bp = new createjs.Bitmap(imgQ.getResult("bawah" + i));
				bp.x = 0;
				bp.y = 0;
				_root.btnB[i].addChild(bp);
				_root.btnB[i].cursor = 'pointer';
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.btnB2 = new lib.btnB_2();
	this.btnB2.setTransform(124.3,87.1,1,1,0,0,0,116.7,24.3);
	new cjs.ButtonHelper(this.btnB2, 0, 1, 1);

	this.btnB1 = new lib.btnB_1();
	this.btnB1.setTransform(124.3,31.4,1,1,0,0,0,116.7,24.3);
	new cjs.ButtonHelper(this.btnB1, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvPIhIAAxBIefAAIAARBg");
	this.shape.setTransform(123.6,-0.1,1.266,1.079,0,0,0,0,-54.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.btnB1},{t:this.btnB2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,247.2,117.7);


(lib.mc_atasRight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _root = this;
		this.numbuts = 2;
		this.btnA = [];
		var i;
		var butman = [];
		imgContainer = new createjs.Container();
		stage.addChild(imgContainer);
		
		var imgMc1, imgMc2;
		var imgCtx1, imgCtx2;
		
		for (i = 1; i <= this.numbuts; i++) {
			butman.push({
				id: "atas" + i,
				src: "images/atasTumb/atasTumbKanan_"+ i + ".png"
			});
			this.btnA[i] = this["btnA" + i];
		}
		var imgQ = new createjs.LoadQueue();
		imgQ.addEventListener("complete", completeHandler);
		imgQ.loadManifest(butman);
		
		function completeHandler() {
			var i, bp;
			for (i = 1; i <= _root.numbuts; i++) {
				bp = new createjs.Bitmap(imgQ.getResult("atas" + i));
				bp.x = 0;
				bp.y = 0;
				_root.btnA[i].addChild(bp);
				_root.btnA[i].cursor = 'pointer';
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.btnA2 = new lib.btnA_4();
	this.btnA2.setTransform(124.3,87.1,1,1,0,0,0,116.7,24.3);
	new cjs.ButtonHelper(this.btnA2, 0, 1, 1);

	this.btnA1 = new lib.btnA_3();
	this.btnA1.setTransform(124.3,31.4,1,1,0,0,0,116.7,24.3);
	new cjs.ButtonHelper(this.btnA1, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvPIhIAAxBIefAAIAARBg");
	this.shape.setTransform(123.6,-0.1,1.266,1.079,0,0,0,0,-54.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.btnA1},{t:this.btnA2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,247.2,117.7);


(lib.mc_atasLeft = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _root = this;
		this.numbuts = 2;
		this.btnA = [];
		var i;
		var butman = [];
		imgContainer = new createjs.Container();
		stage.addChild(imgContainer);
		
		var imgMc1, imgMc2;
		var imgCtx1, imgCtx2;
		
		for (i = 1; i <= this.numbuts; i++) {
			butman.push({
				id: "atas" + i,
				src: "images/atasTumb/atasTumbKiri_"+ i + ".png"
			});
			this.btnA[i] = this["btnA" + i];
		}
		var imgQ = new createjs.LoadQueue();
		imgQ.addEventListener("complete", completeHandler);
		imgQ.loadManifest(butman);
		
		function completeHandler() {
			var i, bp;
			for (i = 1; i <= _root.numbuts; i++) {
				bp = new createjs.Bitmap(imgQ.getResult("atas" + i));
				bp.x = 0;
				bp.y = 0;
				_root.btnA[i].addChild(bp);
				_root.btnA[i].cursor = 'pointer';
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.btnA1 = new lib.btnA_1();
	this.btnA1.setTransform(124.3,31.4,1,1,0,0,0,116.7,24.3);
	new cjs.ButtonHelper(this.btnA1, 0, 1, 1);

	this.btnA2 = new lib.btnA_2();
	this.btnA2.setTransform(124.3,87.1,1,1,0,0,0,116.7,24.3);
	new cjs.ButtonHelper(this.btnA2, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvPIhIAAxBIefAAIAARBg");
	this.shape.setTransform(123.6,-0.1,1.266,1.079,0,0,0,0,-54.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.btnA2},{t:this.btnA1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,247.2,117.7);


// stage content:
(lib.popuptube = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mc_bawahRight();
	this.instance.setTransform(863.8,649.5,1,1,0,0,0,123.6,58.8);

	this.instance_1 = new lib.mc_bawahLeft();
	this.instance_1.setTransform(135.8,649.5,1,1,0,0,0,123.6,58.8);

	this.instance_2 = new lib.mc_atasRight();
	this.instance_2.setTransform(863.8,71.5,1,1,0,0,0,123.6,58.8);

	this.instance_3 = new lib.mc_atasLeft();
	this.instance_3.setTransform(135.8,71.5,1,1,0,0,0,123.6,58.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("ApeD/IAAn+IS9AAIAAH+g");
	this.shape.setTransform(139,92.9,1.919,0.87);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4343B").s().p("AgBAAIACAAIAAAAIgCABg");
	this.shape_1.setTransform(514,629.1,2.579,2.577);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A55589").s().p("AgBgBIADABIgCACg");
	this.shape_2.setTransform(515.8,607.3,2.579,2.577);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DA3749").s().p("AABgBQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAAAABIgDABQABgCABgBg");
	this.shape_3.setTransform(476.2,622.7,2.579,2.577);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EA323A").s().p("AgCAAIAGgCIAAACIgBAAIgDAEIgCgEg");
	this.shape_4.setTransform(487.3,633.4,2.579,2.577);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EA323A").s().p("AAAACIgEAAIAJgEIAAAGg");
	this.shape_5.setTransform(480.4,621.8,2.579,2.577);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FDFBFE").s().p("AgCgCQADgCACABIgCAEIgDADg");
	this.shape_6.setTransform(520.6,633.3,2.579,2.577);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FDFBFE").s().p("AgCgBQADgDACABQABACgDACIgDAEg");
	this.shape_7.setTransform(483.3,639.5,2.579,2.577);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FDFBFE").s().p("AgCgCIACgBIADAAQABABgDACIgDAEg");
	this.shape_8.setTransform(499.3,636.8,2.579,2.577);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EA323A").s().p("AAAAAIAFgFIAAAHIgJAEg");
	this.shape_9.setTransform(480.3,633.7,2.579,2.577);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EA323A").s().p("AgFAAIAMgDIAAADIgNADQAAAAAAgBQAAgBAAAAQABgBAAAAQAAAAAAAAg");
	this.shape_10.setTransform(512.7,615,2.579,2.577);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EA323A").s().p("AgCgFIAFAKIgFABg");
	this.shape_11.setTransform(521.5,625.8,2.579,2.577);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EA323A").s().p("AACAHIgCgDQgDgHABgCIADgEIACAEIAAAPIgBgDg");
	this.shape_12.setTransform(477.8,638.5,2.579,2.577);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EB3238").s().p("AgEAMIAAgMQAGgIADgEIAAABIgBADIAAACIgBACIgDAJIgEAIg");
	this.shape_13.setTransform(522.1,638.3,2.579,2.577);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EB3238").s().p("AgCAGQgBgEADgEQAAgHACAAIACAIQAAAEgDAEIgBADIAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAgBAAgBg");
	this.shape_14.setTransform(491.1,641.2,2.579,2.577);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FAF9FA").s().p("AgDgDIAAgCIADgBQACgCADABQABACgFAGQgCAGgDACg");
	this.shape_15.setTransform(521.1,614.5,2.579,2.577);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A9518B").s().p("AgHgLIAHgEQAAACAFAKIABADIACAAIAAAQQgIgLgHgQg");
	this.shape_16.setTransform(476.6,641,2.579,2.577);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FDFBFE").s().p("AgEADIgGgDIAIgDIACgHIAAABIADAGIAIABIgFADIABAEIAAAFQgGgDgBAAIgEAEg");
	this.shape_17.setTransform(499.6,616.9,2.579,2.577);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FDFBFE").s().p("AgGAJQgBgGADgGQADgJACgBQAEAAACAGQABAFAAADQgCALgGACIgBAAQgEAAgBgFgAAAgCQgDAFABAEQAAABAAAAQAAABAAABQABAAAAAAQABAAAAAAIABgDQADgEAAgDIgCgJQgCABAAAGg");
	this.shape_18.setTransform(491.1,641.1,2.579,2.577);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A8508C").s().p("AgLgBIAVgGIABAJIgTAGg");
	this.shape_19.setTransform(505.1,639.2,2.579,2.577);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A8508C").s().p("AgHBAQgEgIABgMQABgOAIgMIADgFIABgBIgDACIAAgMIgXAQIAAhMIASgHIgCA1IAHgHIABgsIACgBIAQgFIgDBLIgLAGQAHgCADACQADABADAEQAEAJgBAMQgBAJgEAIQgFAKgHAEIgGABQgEAAgEgGgAAJAdQgFAAgDAJQgBAIAAAGQABAGAGgBQAHgCABgLQABgEgCgGQgBgGgEAAIAAABg");
	this.shape_20.setTransform(489.1,629.9,2.579,2.577);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A8508C").s().p("AgMgVIAEgCQAGgDAEgBQANgDgBAMQgBAJgMALIgDAFIAAAQIgLAFQACgkgBgNgAAAgNIgBACIgBAIIADgFQAEgDgCgCIgBAAIgCAAg");
	this.shape_21.setTransform(499.2,639.3,2.579,2.577);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgQgWIgBgDIAEgBIADgBIALgFQAJgCAEAEQAFAEgBAIQgBAKgNALIgEAFIAAARIgRAJg");
	this.shape_22.setTransform(499.2,639.6,2.579,2.577);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A8508C").s().p("AgMADIAAgYIAJgEQAPgGABAJQACAMgPANIgBADQgCACABADIAAANIgLAFIABgagAgCgLIAAAIIADgEIACgFIgCgBQgBAAgCACg");
	this.shape_23.setTransform(520.6,635.7,2.579,2.577);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#A8508C").s().p("AgMgVIAHgDQAFgDAGAAQAHgBABAHQAAAEgCAGQgEAIgIAGIgCAEIAAARIgLAFgAgCgLIAAAIIADgEQADgDgBgDIgBAAIgEACg");
	this.shape_24.setTransform(483.3,641.9,2.579,2.577);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgQgZIADAAIAGgDIAKgEIACAAQAHgBADAFQAFAHgFALQgDAHgJAHIgDAEIAAARIgRAIg");
	this.shape_25.setTransform(483.3,642.2,2.579,2.577);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EC3237").s().p("AAAAbIAAgIIgJgKIgGABIgBgSIAAgEIAEgEIAOgSIAAAyIAPgHIAAATIgTAHg");
	this.shape_26.setTransform(503.7,628.3,2.579,2.577);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A8508C").s().p("AgMgVIALgEIgBAgIAEgDIAAgbIAMgFIgCAxIgKAFIAAgIIgPALg");
	this.shape_27.setTransform(512.9,637,2.579,2.577);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EC3237").s().p("Ag7APQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAABgBIAFgHIAQgKIAPgHIAMgEQAIgDAIAAQAKgBAKACQAHAAAKAEIACAAIANAHIgBAAIgCABIgWAHIgEAAIgEgBQgGgBgLACIgNAEIAAgDIgZAKIAAgFIgaAJIAAAGIgFgGg");
	this.shape_28.setTransform(496.2,609.8,2.579,2.577);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#A9518B").s().p("AgeA5QgQgCgPgHQgLgGgHgFIgGgFIAEgCIgBgPIABAJIAFAEQAKAKARAFIAFACIADAAIABABIATADIAHAAIAQgDIASgGIATgLIAOgOIADgDIACgDIABgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAIAAgEIABAAIAEgFIAFgMIABgCIAAgBIABgEIgBAAIAEgFQAFgLgDgHIgBgDIAIgKQADAkgRAaIgIAMQgBADgDACIgBABIgBACIgNALQgcAWggAAIgOgBg");
	this.shape_29.setTransform(504.7,640.7,2.579,2.577);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#A8508C").s().p("AgQAqIAFgVQAHACAEgBIAGgFQACgCAAgDQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAIgNAFQgKADgEgGQgEgHAGgMQAEgKAIgKQAIgMAGgDQAGgCADAEIAGAUIgPAJIgBgEQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgBABgDAEQgCAFAAADQABADAHgDQAKgEAFABQAEACABADQAGANgSAVQgGAFgFADQgEACgDAAg");
	this.shape_30.setTransform(476.1,625.3,2.579,2.577);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgHAvIgOgCIAHgZQgIAAgDgGQgGgIAHgOQAFgLAIgLQAJgMAHgEQAIgCAFAFIABABIAHAZIgEABIgLAGQAEgBAEABQAFACADAGQAGAQgUAVQgGAHgGADQgDACgFAAgAAAgIIgBACIAEgCIgBgCIAAgBIgCADg");
	this.shape_31.setTransform(476.1,625.3,2.579,2.577);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#A8508C").s().p("AgVghIATgIQAPgEAEAFQADADAAAHQAAAGgDAFQgEAKgHAHIARAVIgOASIgPgcIAAAbIgQAHgAgBgUIgDACIgBABIgBAOQAEgCACgFQAFgIgCgCIgCgBIgCABg");
	this.shape_32.setTransform(521.5,617.9,2.579,2.577);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgZgjIABgBIAUgIQAQgGAHAHQAEAEAAAIQAAAHgDAGIgHAMIgDADIARAWIgTAYIgLgWIAAAQIgFADIgSAIgAgCgQIAAAEIABgBIABgFg");
	this.shape_33.setTransform(521.6,618.1,2.579,2.577);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EC3237").s().p("AgJAaIgTgDIgBgBIgDAAIgFgCQgRgFgKgJIgFgFIgBgIIAFgFIACgCQAAAJAEAFQAFAKAJgBQAJAAAGgIIAEgDIAAAIIATgGIgBgQQAAgCADgDIAEgEIAAAAIABAAIAAAMIAZgIIAAAVIAQgKIAAAGIAOgFIAAADIAQgHIgBABIgCADIgDADIgOAMIgTALIgSAHIgQACg");
	this.shape_34.setTransform(501.6,646.6,2.579,2.577);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A8508C").s().p("AgngcIAXgJQAIgCAFABQADABACAHIAAgGIAjgLIACAUIgTAGIAAAMIAQgHIABAQIgJABIgJADIAAAJIAUgGIABAUIgKADIgYAJIgEACIAAg/IgBAGQgEAOgQAOIgEAEIABAZIgRAHgAgVgQIgIADIAGAFIAAAIIAGgEQABAAAGADIAAgFIgBgEIAFgFIgIgBIgEgGIAAgBg");
	this.shape_35.setTransform(504.5,620.2,2.579,2.577);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A9518B").s().p("Ag+AVIgCgBIgGAAQAJgLAKgJIAPgIIAIgEQAcgOAjAHQARADAPAKIAEACIgMAEIAAAAIgNgHIgCAAQgKgEgHAAQgKgCgKABQgHAAgJADIgMAEIgPAFIgQAMIgFAHQgBAAgBABQAAABAAAAQgBABAAAAQAAAAAAABg");
	this.shape_36.setTransform(496.5,607.8,2.579,2.577);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FEFEFE").s().p("AhLBMQggggAAgsQAAgrAgggQAgggArAAQAsAAAgAgQAgAgAAArQAAAsggAgQggAggsAAQgrAAggggg");
	this.shape_37.setTransform(499.9,628.8,2.579,2.577);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E4343B").s().p("AgBAAIACAAIAAAAIgCABg");
	this.shape_38.setTransform(514,93.9,2.579,2.577);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#A55589").s().p("AgBgBIADABIgCACg");
	this.shape_39.setTransform(515.8,72.1,2.579,2.577);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#DA3749").s().p("AABgBQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAAAABIgDABQABgCABgBg");
	this.shape_40.setTransform(476.2,87.5,2.579,2.577);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EA323A").s().p("AgCAAIAGgCIAAACIgBAAIgDADIgCgDg");
	this.shape_41.setTransform(487.3,98.2,2.579,2.577);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EA323A").s().p("AAAACIgEAAIAJgEIAAAFg");
	this.shape_42.setTransform(480.4,86.6,2.579,2.577);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FDFBFE").s().p("AgCgCQADgDACACIgCAEIgDADg");
	this.shape_43.setTransform(520.6,98.1,2.579,2.577);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FDFBFE").s().p("AgCgBQADgDACABQABACgDACIgDAEg");
	this.shape_44.setTransform(483.3,104.3,2.579,2.577);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FDFBFE").s().p("AgCgCIACgBIADAAQABABgDACIgDAEg");
	this.shape_45.setTransform(499.3,101.6,2.579,2.577);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EA323A").s().p("AAAAAIAFgFIAAAGIgJAFg");
	this.shape_46.setTransform(480.3,98.5,2.579,2.577);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EA323A").s().p("AgFAAIAMgDIAAACIgNAEQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAAAg");
	this.shape_47.setTransform(512.7,79.8,2.579,2.577);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EA323A").s().p("AgCgFIAFAKIgFABg");
	this.shape_48.setTransform(521.5,90.6,2.579,2.577);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#EA323A").s().p("AACAHIgCgDQgDgHABgCIADgEIACAEIAAAPIgBgDg");
	this.shape_49.setTransform(477.8,103.3,2.579,2.577);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EB3238").s().p("AgEAMIAAgMQAGgIADgEIAAABIgBADIAAACIgBACIgCAEIAAABIgBAEIgEAIg");
	this.shape_50.setTransform(522.1,103,2.579,2.577);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EB3238").s().p("AgCAGQgBgEADgEQAAgHACAAIACAIQAAAEgDAEIgBADIAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAgBAAgBg");
	this.shape_51.setTransform(491.1,106,2.579,2.577);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FAF9FA").s().p("AgDgDIAAgCIADgBQACgCADABQABACgCAEIgDACQgBAFgEADg");
	this.shape_52.setTransform(521.1,79.3,2.579,2.577);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#A9518B").s().p("AgHgMIAFgBIACgCQAAACAFAJIABADIACABIAAAQQgIgKgHgSg");
	this.shape_53.setTransform(476.6,105.9,2.579,2.577);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FDFBFE").s().p("AgEADIgGgDIAIgDIACgHIAAABIADAGIAIABQAAABgFADIABAEIAAAEQgGgDgBAAIgEAEg");
	this.shape_54.setTransform(499.6,81.7,2.579,2.577);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FDFBFE").s().p("AgGAJQgBgGADgGQADgJACgBQAEAAACAGQABAFAAADQgCALgGACIgBAAQgEAAgBgFgAAAgCQgDAFABAEQAAABAAAAQAAABAAAAQABABAAAAQABAAAAAAIABgDQADgEAAgDIgCgJQgCABAAAGg");
	this.shape_55.setTransform(491.1,105.9,2.579,2.577);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#A8508C").s().p("AgLAAIAVgHIABAIIgTAHg");
	this.shape_56.setTransform(505.1,104,2.579,2.577);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#A8508C").s().p("AgHBAQgEgHABgNQABgOAIgMIADgFIABgBIgDACIAAgNIgXARIAAhNIASgGIgCA1IAHgGIABgtIACAAIAQgGIgDBMIgLAEQAHgBADABQADACADAEQAEAJgBALQgBAKgEAIQgFAKgHAEIgGABQgEAAgEgGgAAJAcQgFABgDAJQgBAIAAAGQABAHAGgCQAHgCABgLQABgFgCgFQgBgGgEAAIAAAAg");
	this.shape_57.setTransform(489.1,94.7,2.579,2.577);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#A8508C").s().p("AgMgVIAEgCQAGgDAEgBQANgDgBANQgBAIgMALIgDAFIAAARIgLAEQACgkgBgNgAAAgNIgBACIgBAIIADgFQAEgDgCgCIgBAAIgCAAg");
	this.shape_58.setTransform(499.2,104.1,2.579,2.577);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgQgWIgBgDIAEgBIADgBIALgFQAJgCAEAEQAFAEgBAIQgBAKgNALIgEAFIAAARIgRAJg");
	this.shape_59.setTransform(499.2,104.4,2.579,2.577);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#A8508C").s().p("AgMADIAAgYIAJgEQAPgGABAJQACAMgPANIgBADQgCACABADIAAANIgLAFIABgagAgCgLIAAAIIADgEIACgFIgCgBQgBAAgCACg");
	this.shape_60.setTransform(520.6,100.5,2.579,2.577);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#A8508C").s().p("AgMgVIAHgDQAFgDAGAAQAHgBABAHQAAAEgCAGQgEAIgIAGIgCAEIAAARIgLAFgAgCgLIAAAIIADgEQADgDgBgDIgBAAIgEACg");
	this.shape_61.setTransform(483.3,106.7,2.579,2.577);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgQgZIADAAIAGgDIAKgEIACAAQAHgBADAFQAFAHgFALQgDAGgJAIIgDAEIAAARIgRAIg");
	this.shape_62.setTransform(483.3,107,2.579,2.577);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EC3237").s().p("AAAAcIAAgJIgJgKIgGABIgBgRIAAgFIAEgEIAOgSIAAAyIAPgHIAAATQgBACgSAFg");
	this.shape_63.setTransform(503.7,93.1,2.579,2.577);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#A8508C").s().p("AgMgVIALgEIgBAgIAEgDIAAgbIAMgFIgCAxIgKAFIAAgIIgPALg");
	this.shape_64.setTransform(512.9,101.8,2.579,2.577);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EC3237").s().p("Ag7APQAAgBAAAAQAAAAABgBQAAAAAAgBQABgBABAAIAFgHIAQgKIAPgHIAMgEQAIgDAIAAQAKgBAKACIARAEIACABIACAAIALAGIgBAAIgCABIgWAHQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAIgEgBQgGgBgLACIgKADIgDABIAAgCIgZAJIAAgFIgaAJIAAAHIgFgHg");
	this.shape_65.setTransform(496.2,74.6,2.579,2.577);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#A9518B").s().p("AgeA5QgQgCgPgHQgLgGgHgFIgGgFIAEgBIgBgQIABAJIAFAEQAKAJARAGIAFACIADAAIABABQAMADAHAAIAHAAIAYgFIAPgGIAOgJIAOgOIADgDIACgDIABgBIACgBIAAgEIABAAIAEgFIACgFIABgCIACgFIABgBIAAgCIABgEIgBAAIAEgFQAFgLgDgHIgBgDIAIgJQADAjgRAaIgIAMQgBADgDACIgBACIgJAIIgFAEQgcAVggAAIgOAAg");
	this.shape_66.setTransform(504.7,105.5,2.579,2.577);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#A8508C").s().p("AgQAqIAFgVQAHACAEgBIAGgFQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIgNAFQgKADgEgGQgEgHAGgMQAEgKAIgKQAIgMAGgDQAGgCADAEIAGAUIgPAJIgBgEQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBABQgBAAgDAEQgCAFAAADQABADAHgDQAKgEAFABQAEACABADQAGANgSAVQgGAFgFADQgCACgFAAg");
	this.shape_67.setTransform(476.1,90.1,2.579,2.577);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgHAvIgOgCIAHgZQgIAAgDgGQgGgIAHgOQAFgLAIgLQAJgMAHgDQAHgDAGAFIABABIAHAZIgEABIgDACIgIAEQAEgBAEABQAFACADAGQAGAQgUAVQgGAHgGADQgCACgGAAgAAAgIIgBACIABAAIADgCIgBgCIAAgBIgCADg");
	this.shape_68.setTransform(476.1,90.1,2.579,2.577);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#A8508C").s().p("AgVghQAGgEANgDQAOgFAFAFQAHAHgHAOQgEAKgHAHIARAVIgOASIgPgbIAAAaIgQAIgAgBgUIgDACIgBABIgBAOQAFgDABgEIADgFQACgEgCgBIgCgBIgCABg");
	this.shape_69.setTransform(521.5,82.7,2.579,2.577);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgZgkIABgBIAUgIQARgFAGAHQAEAEAAAIQAAAHgDAGQgDAHgEAEIgDAEIARAVIgTAYIgLgVIAAAQIgBABIgWAKgAgCgRIAAAFIABgBIABgFg");
	this.shape_70.setTransform(521.6,82.9,2.579,2.577);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EC3237").s().p("AgJAaQgHAAgMgDIgBgBIgDAAIgFgCQgRgGgKgJIgFgEIgBgIIAFgFIACgCQAAAJAEAFQAFAJAJAAQAJAAAGgIIAEgDIAAAIIATgHIgBgPIADgFIAEgEIABAAIAAAMIAZgIIAAAVIAQgKIAAAHIAOgHIAAAEIAQgHIgBABIgCADIgDADIgOAMIgOAJIgPAGIgYAFg");
	this.shape_71.setTransform(501.6,111.4,2.579,2.577);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#A8508C").s().p("AgngcIAXgJQAIgCAFABQADABABADIABAEIAAgGIAjgLIACAUIgTAGIAAAMIAQgGIABAPIgSAFIAAAIIAUgGIABAUIgmAOIAAg/IgBAGQgEAOgQAOIgCACIgCACIABAZIgRAHgAgVgQIgIADIAGAFIAAAIIAGgEQABAAAGADIAAgEIgBgEQAFgFAAgBIgIgBIgEgGIAAgBg");
	this.shape_72.setTransform(504.5,85,2.579,2.577);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#A9518B").s().p("Ag+AVIgCgBIgGAAQAJgLAKgJIAPgIIAIgEQAcgOAjAHQAPADARAKIAEACIgPAEIACAAIABAAIgLgGIgCAAIgCgBIgRgEQgKgCgKABQgHAAgJADIgMAEIgPAFIgQAMIgFAHQgBAAgBABQAAABAAAAQgBABAAAAQAAAAAAABg");
	this.shape_73.setTransform(496.5,72.6,2.579,2.577);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FEFEFE").s().p("AhLBMQggggAAgsQAAgsAggfQAgggArAAQAsAAAgAgQAgAfAAAsQAAAsggAgQggAggsAAQgrAAggggg");
	this.shape_74.setTransform(499.9,93.6,2.579,2.577);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(0.6,0,0,22.9).p("AmWCrIMtAAIAAlVIstAAg");
	this.shape_75.setTransform(498.2,486.1,2.578,2.577);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#CCCCCC").s().p("AmWCrIAAlVIMtAAIAAFVg");
	this.shape_76.setTransform(498.2,486.1,2.578,2.577);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(0.6,0,0,22.9).p("AmWCrIMtAAIAAlVIstAAg");
	this.shape_77.setTransform(498.2,233.2,2.578,2.577);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#CCCCCC").s().p("AmWCrIAAlVIMtAAIAAFVg");
	this.shape_78.setTransform(498.2,233.2,2.578,2.577);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(0.6,0,0,22.9).p("AjcCNIG5AAIAAkZIm5AAg");
	this.shape_79.setTransform(616.1,432.5,2.579,2.577);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#CCCCCC").s().p("AjcCNIAAkZIG5AAIAAEZg");
	this.shape_80.setTransform(616.1,432.5,2.579,2.577);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(0.6,0,0,22.9).p("AjcCNIG5AAIAAkZIm5AAg");
	this.shape_81.setTransform(616.1,359.6,2.579,2.577);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#CCCCCC").s().p("AjcCNIAAkZIG5AAIAAEZg");
	this.shape_82.setTransform(616.1,359.6,2.579,2.577);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(0.6,0,0,22.9).p("AjcCNIG5AAIAAkZIm5AAg");
	this.shape_83.setTransform(616.1,286.6,2.579,2.577);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#CCCCCC").s().p("AjcCNIAAkZIG5AAIAAEZg");
	this.shape_84.setTransform(616.1,286.6,2.579,2.577);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(0.6,0,0,22.9).p("AjcCNIG5AAIAAkZIm5AAg");
	this.shape_85.setTransform(382.6,432.5,2.579,2.577);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#CCCCCC").s().p("AjcCNIAAkZIG5AAIAAEZg");
	this.shape_86.setTransform(382.6,432.5,2.579,2.577);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(0.6,0,0,22.9).p("AjcCNIG5AAIAAkZIm5AAg");
	this.shape_87.setTransform(382.6,359.6,2.579,2.577);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#CCCCCC").s().p("AjcCNIAAkZIG5AAIAAEZg");
	this.shape_88.setTransform(382.6,359.6,2.579,2.577);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(0.6,0,0,22.9).p("AjcCNIG5AAIAAkZIm5AAg");
	this.shape_89.setTransform(382.6,286.6,2.579,2.577);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#CCCCCC").s().p("AjcCNIAAkZIG5AAIAAEZg");
	this.shape_90.setTransform(382.6,286.6,2.579,2.577);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(0.6,0,0,22.9).p("AiUEVIEpAAIAAopIkpAAg");
	this.shape_91.setTransform(498.2,527.5,2.578,2.577);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#CCCCCC").s().p("AiUEVIAAopIEpAAIAAIpg");
	this.shape_92.setTransform(498.2,527.5,2.578,2.577);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgoBIQgPgOAAgXQAAgSAJgKQAIgKAPgEQgMgEgHgJQgHgKAAgMQAAgSAOgNQAOgNAVAAQAVAAAOANQAOANAAATQAAAMgGAJQgHAJgMAEQAPAFAJAKQAIANAAAOQAAAXgQAOQgPAPgZAAQgXAAgRgPgAgYAKQgKAKAAAPQABAJAEAIQAEAIAIAFQAJAFAIAAQAPAAAKgKQAJgKABgOQgBgQgJgKQgMgKgNAAQgOAAgKAKgAgTg9QgHAIAAAKQAAANAHAHQAIAIALAAQAMAAAHgIQAJgIgBgKQABgMgJgIQgHgIgMAAQgKAAgJAIg");
	this.shape_93.setTransform(502.1,487.2,2.578,2.577);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgnBEQgQgUAAgsQAAgxASgWQAQgTAZAAQAVAAANALQAMALADAUIgVACQgDgNgFgFQgJgJgMAAQgIAAgIAGQgJAGgGAPQgGAOAAAaQAHgLALgHQAMgFAJAAQAWAAAOAPQAPAOAAAYQAAAQgHAOQgGAOgNAIQgMAHgQAAQgYAAgRgTgAgVACQgKAKAAAQQAAAKAFALQAEAKAJAGQAJAFAGAAQAOAAAJgLQAKgLAAgSQAAgSgKgKQgJgJgPAAQgMAAgKAJg");
	this.shape_94.setTransform(637,434.5,2.578,2.577);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgmBJQgPgNgCgWIAVgCQADAQAJAIQAKAJAMgBQANAAALgLQAKgMAAgSQAAgSgKgJQgLgLgNAAQgLAAgIAFQgJAFgEAFIgUgCIARhXIBUAAIAAAUIhDAAIgJAuQAPgKAPAAQAXAAAPAPQAPAOAAAYQAAAYgNARQgRAUgaAAQgYAAgOgMg");
	this.shape_95.setTransform(636.9,359.9,2.578,2.577);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AAOBWIAAgqIhIAAIAAgTIBMhtIARAAIAABtIAYAAIAAATIgYAAIAAAqgAglAZIAzAAIAAhMg");
	this.shape_96.setTransform(636.3,287,2.578,2.577);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgmBKQgOgOgDgVIAVgDQAEATAJAHQAIAIANAAQAMAAALgKQAKgKAAgQQAAgPgJgJQgJgJgPAAQgFAAgIACIACgRIAEABQALAAALgHQALgIAAgOQAAgMgIgHQgIgIgKAAQgMAAgJAIQgIAIgCAPIgWgEQAFgWANgLQAOgLAUAAQAMAAAMAGQAMAGAGAKQAGALAAALQAAAMgGAJQgGAJgLAFQAQAEAHAJQAJAKAAASQAAAWgRAQQgPAPgYAAQgXAAgPgNg");
	this.shape_97.setTransform(366.7,429.3,2.578,2.577);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("Ag3BWQgBgGADgJQAEgLAKgMQAJgLASgPQAagWAKgMQAKgOAAgLQAAgNgJgIQgJgJgOAAQgNAAgKAJQgJAJAAAQIgWgCQACgXAPgOQAPgNAWAAQAYAAAPAOQAPANAAAVQAAAKgEAKQgFALgJAIQgIAKgZAVQgRAPgFAGIgJAMIBSAAIAAAUg");
	this.shape_98.setTransform(366.2,359.8,2.578,2.577);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AAKBWIAAiEQgHAGgLAIQgQAJgGACIAAgUQASgIAMgNQALgKAHgNIANAAIAACrg");
	this.shape_99.setTransform(364.5,287.8,2.578,2.577);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgeBUQABgVAHgcQAHgbAPgaQAMgbAQgSIhSAAIAAgUIBtAAIAAAQQgRASgPAdQgQAYgHAhQgHAUgBAbg");
	this.shape_100.setTransform(502.3,234.3,2.578,2.577);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#CCCCCC").s().p("AktDVIgBgjQgBh6AuhmQArhkBLg3QA3AzBIAAQAnAAAlgRQAjgQAagdQBRA0AwBoQAxBpAACBIgBAjg");
	this.shape_101.setTransform(502.9,406.5,2.579,2.578);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#CCCCCC").s().p("AhyB4QgxgyAAhGQAAhFAxgyQAwgyBCAAQBDAAAwAyQAxAyAABFQAABGgxAyQgwAyhDAAQhCAAgwgyg");
	this.shape_102.setTransform(499.6,315.8,2.579,2.578);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(0.6,0,0,22.9).p("AlLGtIKXAAIAAtYIqXAAg");
	this.shape_103.setTransform(498.3,359.9,2.579,2.578);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(0.6,0,0,22.9).p("AhMgQIEbAEIASABQAFAAALABIA0ADIABAAIAPACIADAAIAOABIACAAIAPABIACABIANABIADAAIANABIACAAIARAAIAMABIADABIANABIACAAIANACIACAAIAMACIADAAIAMACQCHASBMAaQBPAbAAAdIAAjDIAAAAIAAgEQAAg1jdgmQjdglk5AAQk4AAjdAlQjdAmAAA1IAAAEIAAAAIAADDQAAgdBPgbQBMgaCGgSIANgCIADAAIAbgEIACAAIAtgDIACAAIANgBIACAAIAOgBIACgBIAPgBIACAAIAOgBIACAAIAQgCIAAAAIAzgDIACAAQAKgBAGAAg");
	this.shape_104.setTransform(498.4,121.8,2.579,2.578);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFCC99").s().p("AKkBsQhMgaiHgSIgMgCIgDAAIgMgCIgCAAIgNgCIgCAAIgNgBIgDgBIgMgBIgRgCIgCAAIgNgBIgDAAIgNgBIgCgBIgPgBIgCAAIgOgBIgDAAIgPgCIgBAAIg0gDIgQgBIgSgBIkbgEIiUAFIgQABIgCAAIgzADIAAAAIgQACIgCAAIgOABIgCAAIgPABIgCABIgOABIgCAAIgNABIgCAAIgtAFIgCAAIgbAEIgDAAIgNACQiGAShMAaQhPAbAAAdIAAjDIAAAAIAAgEQAAg1DdgmQDdglE4AAQE5AADdAlQDdAmAAA1IAAAEIAAAAIAADDQAAgdhPgbg");
	this.shape_105.setTransform(498.4,107.7,2.579,2.578);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(0.6,0,0,22.9).p("AAAB/QE4AADeglQDdgmAAg0QAAgzjdgmQjeglk4AAQk2AAjeAlQjeAmAAAzQAAA0DeAmQDeAlE2AAg");
	this.shape_106.setTransform(499.8,98.2,2.579,2.578);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#E6E6E6").s().p("AoUBaQjeglAAg1QAAg0DeglQDdglE3AAQE4AADdAlQDeAlAAA0QAAA1jeAlQjdAlk4AAQk3AAjdglg");
	this.shape_107.setTransform(499.8,98.2,2.579,2.578);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(0.6,0,0,22.9).p("AAACAQE4AADdgmQDeglAAg1QAAgzjegmQjdgmk4AAQk3AAjdAmQjeAmAAAzQAAA1DeAlQDdAmE3AAg");
	this.shape_108.setTransform(498.4,150.2,2.579,2.578);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#CCCCCC").s().p("AoUBaQjeglAAg1QAAgzDegmQDdgmE3AAQE4AADdAmQDeAmAAAzQAAA1jeAlQjdAmk4AAQk3AAjdgmg");
	this.shape_109.setTransform(498.4,150.2,2.579,2.578);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(0.6,0,0,22.9).p("AoVgPQDdAjE4AAQE4AADegjQDcgmABg1IAADCIAAAAQgBA1jdAmQjeAlk3AAQk2AAjeglQjdgmgBg1IAAjCQABA1DcAmg");
	this.shape_110.setTransform(498.4,595.9,2.579,2.578);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFCC99").s().p("AoUB8QjdgmgBg1IAAjBQABA1DcAlQDdAlE4AAQE4AADeglQDcglABg1IAADBIAAAAQgBA1jdAmQjeAlk3AAQk2AAjeglg");
	this.shape_111.setTransform(498.4,610.1,2.579,2.578);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(0.6,0,0,22.9).p("AAACAQE3AADegmQDegmAAg0QAAg0jeglQjdgmk4AAQk3AAjdAmQjeAlAAA0QAAA0DeAmQDeAmE2AAg");
	this.shape_112.setTransform(498.4,568.2,2.579,2.578);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#CCCCCC").s().p("AoUBaQjegmAAg0QAAg0DeglQDdgmE3AAQE4AADdAmQDeAlAAA0QAAA0jeAmQjeAmk3AAQk2AAjegmg");
	this.shape_113.setTransform(498.4,568.2,2.579,2.578);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(0.6,0,0,22.9).p("AAARxQE3AADeglQDdgmABg1IAAAAIAA/dIAAAAIAAgEQAAg1jdgmQjdglk5AAQk4AAjdAlQjdAmAAA1IAAAEIAAAAIAAfdQABA1DdAmQDeAlE2AAgAnRuLQDMAbEFAAQEGAADLgbQjPgckCAAQkBAAjQAcg");
	this.shape_114.setTransform(498.4,358.5,2.579,2.578);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AoURMQjdgmgBg1IAA/dIAAAAIAAgEQAAg1DdgmQDdglE4AAQE5AADdAlQDdAmAAA1IAAAEIAAAAIAAfdIAAAAQgBA1jdAmQjeAlk3AAQk2AAjeglgAAAtwQEGAADLgbQjPgckCAAQkBAAjQAcQDMAbEFAAIAAAAgAAAtwQkFAAjMgbQDQgcEBAAQECAADPAcQjLAbkGAAIAAAAgAnRuLIAAAAg");
	this.shape_115.setTransform(498.4,358.5,2.579,2.578);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#CCCCCC").s().p("ApeD/IAAn+IS9AAIAAH+g");
	this.shape_116.setTransform(139,42,1.919,0.87);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#CCCCCC").s().p("AklC8IAAl3IJLAAIAAF3g");
	this.shape_117.setTransform(924.5,540.4,1.864,1.863);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#CCCCCC").s().p("AklC8IAAl3IJLAAIAAF3g");
	this.shape_118.setTransform(804.1,540.4,1.864,1.863);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#CCCCCC").s().p("AklC8IAAl3IJLAAIAAF3g");
	this.shape_119.setTransform(924.5,382.3,1.864,1.863);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#CCCCCC").s().p("AklC8IAAl3IJLAAIAAF3g");
	this.shape_120.setTransform(804.1,382.3,1.864,1.863);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#CCCCCC").s().p("AklC8IAAl3IJLAAIAAF3g");
	this.shape_121.setTransform(924.5,461.3,1.864,1.863);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#CCCCCC").s().p("AklC8IAAl3IJLAAIAAF3g");
	this.shape_122.setTransform(804.1,461.3,1.864,1.863);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#CCCCCC").s().p("AklC8IAAl3IJLAAIAAF3g");
	this.shape_123.setTransform(924.5,303.2,1.864,1.863);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#CCCCCC").s().p("AklC8IAAl3IJLAAIAAF3g");
	this.shape_124.setTransform(804.1,303.2,1.864,1.863);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#CCCCCC").s().p("AklC8IAAl3IJLAAIAAF3g");
	this.shape_125.setTransform(924.5,224.2,1.864,1.863);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#CCCCCC").s().p("AklC8IAAl3IJLAAIAAF3g");
	this.shape_126.setTransform(804.1,224.2,1.864,1.863);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#CCCCCC").s().p("AklC8IAAl3IJLAAIAAF3g");
	this.shape_127.setTransform(195.9,540.4,1.864,1.863);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#CCCCCC").s().p("AklC8IAAl3IJLAAIAAF3g");
	this.shape_128.setTransform(75.5,540.4,1.864,1.863);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#CCCCCC").s().p("AklC8IAAl3IJLAAIAAF3g");
	this.shape_129.setTransform(195.9,382.3,1.864,1.863);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#CCCCCC").s().p("AklC8IAAl3IJLAAIAAF3g");
	this.shape_130.setTransform(75.5,382.3,1.864,1.863);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#CCCCCC").s().p("AklC8IAAl3IJLAAIAAF3g");
	this.shape_131.setTransform(195.9,461.3,1.864,1.863);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#CCCCCC").s().p("AklC8IAAl3IJLAAIAAF3g");
	this.shape_132.setTransform(75.5,461.3,1.864,1.863);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#CCCCCC").s().p("AklC8IAAl3IJLAAIAAF3g");
	this.shape_133.setTransform(195.9,303.2,1.864,1.863);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#CCCCCC").s().p("AklC8IAAl3IJLAAIAAF3g");
	this.shape_134.setTransform(75.5,303.2,1.864,1.863);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#CCCCCC").s().p("AklC8IAAl3IJLAAIAAF3g");
	this.shape_135.setTransform(195.9,224.2,1.864,1.863);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#CCCCCC").s().p("AklC8IAAl3IJLAAIAAF3g");
	this.shape_136.setTransform(75.5,224.2,1.864,1.863);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#A8508C").s().p("AjcCjIAAj2QAAggAYgYQAXgXAgAAIEbAAQAgAAAYAXQAWAYAAAgIAADwIAAAGg");
	this.shape_137.setTransform(946.7,160.6,1.864,1.323);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#A8508C").s().p("AjbCjIgBgGIAAjwQAAggAYgYQAXgXAgAAIEaAAQAhAAAYAXQAWAYAAAgIAADwIAAAGg");
	this.shape_138.setTransform(864.3,160.6,1.864,1.323);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#A8508C").s().p("AjbCjIgBgGIAAjwQABggAWgYQAYgXAhAAIEZAAQAhAAAXAXQAXAYAAAgIAADwIAAAGg");
	this.shape_139.setTransform(782,160.6,1.864,1.323);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#A8508C").s().p("AjbCjIAAgGIAAjwQgBggAXgYQAYgXAgAAIEaAAQAhAAAXAXQAYAYgBAgIAAD2g");
	this.shape_140.setTransform(218,160.6,1.864,1.323);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#A8508C").s().p("AjbCjIAAgGIAAjwQAAggAXgYQAXgXAgAAIEaAAQAhAAAXAXQAYAYAAAgIAAD2g");
	this.shape_141.setTransform(135.7,160.6,1.864,1.323);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#A8508C").s().p("AjbCjIAAgGIAAjwQAAggAXgYQAXgXAhAAIEaAAQAgAAAXAXQAYAYAAAgIAAD2g");
	this.shape_142.setTransform(53.3,160.6,1.864,1.323);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AqVQnMAAAghNIAAAGIG6AAIAAgGIAAAGIG4AAIAAgGIAAAGIG5AAMAAAAhHg");
	this.shape_143.setTransform(141.9,187.4,1.864,1.875,0,0,0,3.3,-103.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(0.6,0,0,22.9).p("EgjJAjVMBGTAAAMAAAhGpMhGTAAAg");
	this.shape_144.setTransform(500,360.8,1,1.536);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFE7CF").s().p("EgjJAjVMAAAhGpMBGTAAAMAAABGpg");
	this.shape_145.setTransform(500,360.8,1,1.536);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AqWQnMAAAghNIABAGIG5AAIAAgGIABAGIG3AAIAAgGIAAAGIG6AAIAAgGMAAAAhNg");
	this.shape_146.setTransform(880.7,183,1.864,1.879,0,0,0,9.1,-105.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(0.6,0,0,22.9).p("Egp5AeNMBT0AAAMAAAg8ZMhT0AAAg");
	this.shape_147.setTransform(500,360.3,1.864,1.863);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#333333").s().p("Egp6AeNMAAAg8ZMBT0AAAMAAAA8Zg");
	this.shape_148.setTransform(500,360.3,1.864,1.863);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(499,359,1002,722.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;