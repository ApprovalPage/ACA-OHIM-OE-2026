(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.SUBHEAD = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#181E48").s().p("AgEAEQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQABgBAAgBQACgBACgBQABAAAAABQABAAAAAAQABAAAAABQABAAABAAQAAABAAABQABAAAAABQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape.setTransform(97.25,26.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#181E48").s().p("AgOAbQgHgEgEgHQgEgHAAgJQAAgFADgGQACgGAEgFQAEgEAGgCQAFgDAFAAQAHAAAGADQAGADAEAFQAEAFACAHQACAGgBAGIgtAAIADAIIAGAFQADACADAAQAFAAAEgCQADgDADgEIAMADQgDAJgHAFQgIAEgJAAQgHAAgHgEgAARgEQAAgEgDgEQgCgDgEgCQgDgCgFAAQgDAAgEACQgDACgDADIgDAIIAhAAIAAAAg");
	this.shape_1.setTransform(92.7417,23.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#181E48").s().p("AgSAfIAAg7IANAAIAAAGQAEgEADgCQAEgCAFAAIAHABIgEANIgGgBQgDAAgEACQgCACgCADQgCADAAAEIAAAig");
	this.shape_2.setTransform(87.45,23.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#181E48").s().p("AgKArQgFgDgDgFIAAAJIgNAAIAAhZIANAAIAAAnQADgFAFgDQAFgCAFAAQAJAAAHAEQAHAEAEAHQAFAGgBAJQAAAHgCAFQgDAGgEAFQgEAEgGACQgGADgGAAQgFAAgFgDgAgIgCQgEACgDAEQgCAFAAAFQAAAGACAEQADAEAEADQADADAFAAQAFAAAEgDQAEgDADgEQACgEAAgGQAAgFgCgFQgDgEgEgCQgEgCgFAAQgFAAgDACg");
	this.shape_3.setTransform(81.4,22.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#181E48").s().p("AAjAfIAAgiQAAgEgCgDQgCgDgDgCQgDgCgEAAQgFAAgCACQgEACgCADQgBADgBAEIAAAiIgLAAIAAgiQAAgEgCgDQgCgDgDgCQgEgCgEAAQgDAAgEACQgDACgCADQgCADAAAEIAAAiIgNAAIAAg7IANAAIAAAGQAEgEAEgCQAEgCAFAAQAHAAAGADQAEADADAFQADgFAGgDQAFgDAGAAQAHAAAFADQAGAEADAFQAEAFAAAHIAAAlg");
	this.shape_4.setTransform(72.35,23.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#181E48").s().p("AgOAbQgHgEgEgHQgEgHAAgJQAAgFADgGQACgGAEgFQAEgEAGgCQAFgDAFAAQAHAAAGADQAGADAEAFQAEAFACAHQACAGgBAGIgtAAIADAIIAGAFQADACADAAQAFAAAEgCQADgDADgEIAMADQgDAJgHAFQgIAEgJAAQgHAAgHgEgAARgEQAAgEgDgEQgCgDgEgCQgDgCgFAAQgDAAgEACQgDACgDADIgDAIIAhAAIAAAAg");
	this.shape_5.setTransform(63.5417,23.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#181E48").s().p("AgGApIAAg7IAMAAIAAA7gAgEgdQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgDACgCQABAAAAgBQABAAAAAAQABgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQADACAAADQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBAAQAAABgBAAQAAAAAAgBQgBAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_6.setTransform(58.9,22.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#181E48").s().p("AgHAeIgWg7IANAAIAQAtIAQgtIAOAAIgWA7g");
	this.shape_7.setTransform(54.25,23.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#181E48").s().p("AgOAbQgHgEgEgHQgEgHAAgJQAAgFADgGQACgGAEgFQAEgEAGgCQAFgDAFAAQAJABAGAEQAHAEAEAHQAEAIAAAHQAAAGgCAGQgCAGgFAEQgEAEgFADQgGACgGAAQgHAAgHgEgAgIgQQgEADgCAFQgDAEABAEQgBAGADAEQADAEAEADQADACAEAAQAFAAAEgCQAEgDADgEQACgFAAgFQAAgEgCgEQgDgFgEgDQgEgCgFAAQgEAAgEACg");
	this.shape_8.setTransform(47.55,23.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#181E48").s().p("AAPAfIAAgiQAAgEgCgDQgCgDgDgCQgDgCgFAAQgDAAgDACQgDACgCADQgCADgBAEIAAAiIgMAAIAAg7IAMAAIAAAGQAEgEAEgCQAFgCAEAAQAHAAAGADQAFAEADAFQADAFAAAHIAAAlg");
	this.shape_9.setTransform(41,23.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#181E48").s().p("AgOAbQgHgEgEgHQgEgHAAgJQAAgFADgGQACgGAEgFQAEgEAGgCQAFgDAFAAQAHAAAGADQAGADAEAFQAEAFACAHQACAGgBAGIgtAAIADAIIAGAFQADACADAAQAFAAAEgCQADgDADgEIAMADQgDAJgHAFQgIAEgJAAQgHAAgHgEgAARgEQAAgEgDgEQgCgDgEgCQgDgCgFAAQgDAAgEACQgDACgDADIgDAIIAhAAIAAAAg");
	this.shape_10.setTransform(31.3917,23.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#181E48").s().p("AgLArQgGgCgEgEQgEgFgDgGQgDgFABgHQgBgGADgGQADgFAEgEQAEgEAGgDQAFgCAGAAQAGAAAGACQAEADADAFIAAgnIANAAIAABZIgNAAIAAgJQgDAFgEADQgGADgGAAQgGAAgFgDgAgIgCQgEACgDAEQgDAFAAAFQAAAGADAEQADAFAEACQAEADAEAAQAGAAADgDQAFgCABgFQADgEAAgGQAAgFgDgFQgBgEgFgCQgDgCgGAAQgEAAgEACg");
	this.shape_11.setTransform(24.2,22.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#181E48").s().p("AAAAqIAAhHIgKAAIADgMIASAAIAABTg");
	this.shape_12.setTransform(15.825,22.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#181E48").s().p("AgFAtIAAhZIALAAIAABZg");
	this.shape_13.setTransform(10.025,22.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#181E48").s().p("AgOAbQgHgEgEgHQgEgHAAgJQAAgFADgGQACgGAEgFQAEgEAGgCQAFgDAFAAQAHAAAGADQAGADAEAFQAEAFACAHQACAGgBAGIgtAAIADAIIAGAFQADACADAAQAFAAAEgCQADgDADgEIAMADQgDAJgHAFQgIAEgJAAQgHAAgHgEgAARgEQAAgEgDgEQgCgDgEgCQgDgCgFAAQgDAAgEACQgDACgDADIgDAIIAhAAIAAAAg");
	this.shape_14.setTransform(5.3417,23.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#181E48").s().p("AgLAdQgFgDgFgEQgEgEgDgGQgCgGAAgGQAAgGACgFQADgHAEgDQAEgFAGgCQAFgCAGAAQAGAAAFADQAFADADAEIAAgJIANAAIAAA7IgNAAIgBgJQgDAFgEACQgEADgHABQgFAAgGgDgAgJgQQgDADgDAEQgCAFgBAEQABAFACAFQACAEAFADQAEADAEgBQAGABADgDQAFgDACgEQACgFAAgFQAAgEgCgFQgCgEgFgDQgDgDgGABQgEgBgFADg");
	this.shape_15.setTransform(275.55,10.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#181E48").s().p("AgZAeIAAgNIAhgiIghAAIAAgMIAzAAIAAAMIghAiIAhAAIAAANg");
	this.shape_16.setTransform(269.05,10.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#181E48").s().p("AAOAfIAAgiQABgEgCgDQgCgDgEgCQgDgCgEAAQgDAAgDACQgEACgCADQgBADAAAEIAAAiIgNAAIAAg7IANAAIAAAGQADgEAFgCQAEgCAEAAQAHAAAFADQAGAEADAFQADAFAAAHIAAAlg");
	this.shape_17.setTransform(262.8,10.325);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#181E48").s().p("AgOAbQgHgEgEgHQgEgIAAgIQAAgGADgFQACgGAEgEQAEgFAGgCQAFgCAFAAQAHAAAGACQAGADAEAFQAEAFACAGQACAHgBAHIgtAAIADAHIAGAFQADACADAAQAFAAAEgCQADgCADgFIAMAEQgDAIgHAFQgIAEgJABQgHgBgHgEgAARgEQAAgEgDgEQgCgDgEgCQgDgCgFAAQgDAAgEACQgDACgDADIgDAIIAhAAIAAAAg");
	this.shape_18.setTransform(256.0417,10.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#181E48").s().p("AgGApIAAg7IAMAAIAAA7gAgEgcQAAgBAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgDACgCQABAAAAgBQABAAAAAAQABgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQACACABADQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBABQAAAAAAAAQgBABAAAAQgBAAgBAAQAAABgBAAQAAAAAAgBQgBAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_19.setTransform(251.4,9.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#181E48").s().p("AAjAfIAAgiQAAgEgCgDQgCgDgDgCQgEgCgEAAQgDAAgDACQgEACgCADQgCADABAEIAAAiIgMAAIAAgiQAAgEgCgDQgCgDgDgCQgEgCgDAAQgFAAgDACQgDACgCADQgCADAAAEIAAAiIgMAAIAAg7IAMAAIAAAGQADgEAFgCQAFgCAEAAQAHAAAFADQAFADADAFQADgFAFgDQAGgDAHAAQAGAAAFADQAGAEADAFQAEAFgBAHIAAAlg");
	this.shape_20.setTransform(244.85,10.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#181E48").s().p("AgOAbQgHgEgEgHQgEgIAAgIQAAgGACgFQADgGAEgEQAEgFAFgCQAGgCAFAAQAIAAAHAEQAHAEAEAHQAEAHAAAIQAAAGgCAGQgCAGgEAFQgFAEgFACQgGADgGAAQgHgBgHgEgAgIgQQgEADgCAEQgDAFAAAEQAAAGADADQACAFAEADQAEACAEAAQAFAAAEgCQAEgDACgFQACgEAAgFQAAgEgCgFQgCgEgEgDQgEgCgFAAQgEAAgEACg");
	this.shape_21.setTransform(236.05,10.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#181E48").s().p("AgLAbQgHgEgEgHQgEgIAAgIQAAgGACgFQADgGAEgEQAEgFAFgCQAGgCAFAAQAIAAAGADQAGADAEAGIgLAGQgDgDgDgCIgHgBQgEAAgEACQgEADgCAEQgCAFAAAEQAAAFACAEQACAFAEADQAEACAEAAQAEAAADgCIAGgEIALAGQgEAFgGAEQgGAEgIAAQgHgBgHgEg");
	this.shape_22.setTransform(229.65,10.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#181E48").s().p("AgOAbQgHgEgEgHQgEgIAAgIQAAgGADgFQACgGAEgEQAEgFAGgCQAFgCAFAAQAHAAAGACQAGADAEAFQAEAFACAGQACAHgBAHIgtAAIADAHIAGAFQADACADAAQAFAAAEgCQADgCADgFIAMAEQgDAIgHAFQgIAEgJABQgHgBgHgEgAARgEQAAgEgDgEQgCgDgEgCQgDgCgFAAQgDAAgEACQgDACgDADIgDAIIAhAAIAAAAg");
	this.shape_23.setTransform(220.3917,10.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#181E48").s().p("AgOAcQgFgEgEgFQgDgGAAgGIAAglIANAAIAAAiQAAAEACADQABADADACQAEACADAAQAEAAADgCQADgCADgDQACgDAAgEIAAgiIALAAIABA7IgMAAIAAgGIgIAGQgFACgEAAQgHAAgFgDg");
	this.shape_24.setTransform(213.9,10.475);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#181E48").s().p("AATAuIAAgnQgDAFgFADQgFACgGAAQgHAAgIgEQgHgEgEgHQgFgGAAgJQAAgHADgFQADgGAEgFQAEgEAGgCQAFgDAGAAQAGAAAFADQAFADADAFIAAgJIAMAAIAABZgAgIgeQgFADgCAEQgDAEABAGQgBAFADAFQADADAEADQAEACAFAAQAFAAAEgCQADgDADgDQACgFAAgFQAAgGgCgEQgDgEgDgDQgEgDgFAAQgFAAgEADg");
	this.shape_25.setTransform(206.85,11.825);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#181E48").s().p("AgLAdQgFgDgFgEQgEgEgDgGQgDgGABgGQgBgGADgFQACgHAFgDQAEgFAGgCQAFgCAGAAQAGAAAFADQAFADADAEIAAgJIANAAIAAA7IgNAAIgBgJQgDAFgEACQgEADgHABQgFAAgGgDgAgJgQQgEADgCAEQgCAFgBAEQABAFACAFQACAEAFADQAEADAEgBQAGABADgDQAFgDABgEQADgFAAgFQAAgEgDgFQgBgEgFgDQgDgDgGABQgEgBgFADg");
	this.shape_26.setTransform(196.9,10.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#181E48").s().p("AgHAoIAAgvIgJAAIAAgNIAJAAIAAgTIALAAIABATIAMAAIAAANIgMAAIgBAvg");
	this.shape_27.setTransform(191.375,9.45);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#181E48").s().p("AgSAfIAAg7IANAAIAAAGQADgEAEgCQAEgCAFAAIAHABIgEANIgGgBQgEAAgDACQgCACgCADQgCADAAAEIAAAig");
	this.shape_28.setTransform(187.25,10.325);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#181E48").s().p("AgOAbQgHgEgEgHQgEgIAAgIQAAgGADgFQACgGAEgEQAEgFAGgCQAFgCAFAAQAHAAAGACQAGADAEAFQAEAFACAGQACAHgBAHIgtAAIADAHIAGAFQADACADAAQAFAAAEgCQADgCADgFIAMAEQgDAIgHAFQgIAEgJABQgHgBgHgEgAARgEQAAgEgDgEQgCgDgEgCQgDgCgFAAQgDAAgEACQgDACgDADIgDAIIAhAAIAAAAg");
	this.shape_29.setTransform(181.3417,10.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#181E48").s().p("AgGApIAAg7IAMAAIAAA7gAgEgcQAAgBAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgDACgCQABAAAAgBQABAAAAAAQABgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQACACABADQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBABQAAAAAAAAQgBABAAAAQgBAAgBAAQAAABgBAAQAAAAAAgBQgBAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_30.setTransform(176.7,9.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#181E48").s().p("AgKArQgFgDgDgFIAAAJIgNAAIAAhZIANAAIAAAnQADgFAFgDQAFgCAFAAQAJAAAHAEQAHAEAEAHQAFAGgBAJQAAAHgCAFQgDAGgEAFQgEAEgGACQgGADgGAAQgFAAgFgDgAgIgCQgEACgDAEQgCAFAAAFQAAAGACAEQADAEAEADQADADAFAAQAFAAAFgDQADgDADgEQACgEAAgGQAAgFgCgFQgDgEgDgCQgFgCgFAAQgFAAgDACg");
	this.shape_31.setTransform(171.85,8.975);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#181E48").s().p("AgLAdQgFgDgFgEQgEgEgDgGQgCgGAAgGQAAgGACgFQADgHAEgDQAEgFAGgCQAFgCAGAAQAGAAAFADQAFADADAEIAAgJIANAAIAAA7IgNAAIgBgJQgDAFgEACQgEADgHABQgFAAgGgDgAgJgQQgDADgDAEQgCAFgBAEQABAFACAFQACAEAFADQAEADAEgBQAGABADgDQAFgDACgEQACgFAAgFQAAgEgCgFQgCgEgFgDQgDgDgGABQgEgBgFADg");
	this.shape_32.setTransform(164.4,10.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#181E48").s().p("AAPAfIAAgiQAAgEgCgDQgCgDgDgCQgDgCgFAAQgDAAgDACQgDACgCADQgCADgBAEIAAAiIgMAAIAAg7IAMAAIAAAGQAEgEAEgCQAFgCAEAAQAHAAAGADQAFAEADAFQADAFAAAHIAAAlg");
	this.shape_33.setTransform(154.85,10.325);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#181E48").s().p("AgOAnQgHgFgEgHQgEgHAAgJQAAgGACgFQADgGAEgEQAEgFAGgCQAFgCAFAAQAIAAAHAEQAHAEAEAHQAEAHAAAIQAAAHgCAFQgDAGgEAFQgEAEgFACQgGADgGAAQgHAAgHgEgAgIgEQgEACgCAEQgCAEgBAFQABAGACAEQADAEADADQAEACAEAAQAFAAAEgCQAEgDADgEQABgFAAgFQAAgFgBgEQgDgEgEgCQgEgDgFAAQgEAAgEADgAgCgYIADgSIANAAIgIASg");
	this.shape_34.setTransform(148.1,9.275);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#181E48").s().p("AgFApIAAg7IALAAIAAA7gAgDgcQgBgBAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgDACgCQAAAAAAgBQABAAAAAAQABgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABABAAQABACAAADQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAABgBAAQAAAAAAgBQgBAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape_35.setTransform(143.45,9.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#181E48").s().p("AgLAbQgHgEgEgHQgEgIAAgIQAAgGADgFQACgGAEgEQAEgFAGgCQAFgCAFAAQAIAAAFADQAHADAEAGIgLAGQgDgDgDgCIgHgBQgEAAgEACQgEADgCAEQgDAFABAEQgBAFADAEQACAFAEADQAEACAEAAQAEAAADgCIAGgEIALAGQgEAFgHAEQgFAEgIAAQgHgBgHgEg");
	this.shape_36.setTransform(139.05,10.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#181E48").s().p("AgfAuIAAhZIANAAIAAAJQADgFAFgDQAEgDAGAAQAHAAAFADQAGACAEAEQAEAFADAGQADAFgBAHQABAGgDAGQgDAFgEAEQgEAFgGACQgFACgHAAQgGAAgEgCQgFgDgDgFIAAAngAgIgeQgFADgCAEQgCAEAAAGQAAAFACAFQACADAFADQAEACAEAAQAFAAAFgCQAEgDACgDQACgFABgFQgBgGgCgEQgCgEgEgDQgFgDgFAAQgEAAgEADg");
	this.shape_37.setTransform(132.5,11.825);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#181E48").s().p("AgFApIAAg7IALAAIAAA7gAgDgcQgBgBAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgDACgCQAAAAAAgBQABAAAAAAQABgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABABAAQABACAAADQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAABgBAAQAAAAAAgBQgBAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape_38.setTransform(127.35,9.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#181E48").s().p("AgRAfIAAg7IAMAAIAAAGQADgEAEgCQAFgCAEAAIAIABIgGANIgEgBQgFAAgDACQgCACgCADQgCADAAAEIAAAig");
	this.shape_39.setTransform(124.05,10.325);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#181E48").s().p("AgLAbQgHgEgEgHQgEgIAAgIQAAgGADgFQACgGAEgEQAEgFAGgCQAFgCAFAAQAIAAAFADQAHADAEAGIgLAGQgDgDgDgCIgHgBQgEAAgEACQgEADgCAEQgCAFgBAEQABAFACAEQACAFAEADQAEACAEAAQAEAAADgCIAGgEIALAGQgEAFgHAEQgFAEgIAAQgHgBgHgEg");
	this.shape_40.setTransform(118.45,10.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#181E48").s().p("AAAAfQgFAAgEgCIgIgEQgEgDgBgEIAKgEIADADIAFADIAEABIAGgBQAAAAABAAQAAgBABAAQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAQABgBAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBgBIgEgCIgFgCQgFgBgFgCQgFgCgDgDQgDgEAAgFQAAgGADgEQAEgEAEgDQAGgCAEAAQAHAAAHADQAFADAEAGIgKAGIgCgEIgFgCIgEgBQgCAAgDABIgFACQAAABAAAAQAAABgBAAQAAABAAABQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAFACIAFABIAKAFQAEABADAEQADADAAAFQAAAGgDAEQgEAEgFADQgFACgFAAIgBgBg");
	this.shape_41.setTransform(112.85,10.355);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#181E48").s().p("AAPAfIAAgiQAAgEgCgDQgCgDgDgCQgDgCgFAAQgDAAgDACQgEACgBADQgDADAAAEIAAAiIgMAAIAAg7IAMAAIAAAGQAEgEAEgCQAFgCAEAAQAHAAAGADQAFAEADAFQADAFAAAHIAAAlg");
	this.shape_42.setTransform(107.05,10.325);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#181E48").s().p("AgGApIAAg7IAMAAIAAA7gAgEgcQAAgBAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQABgDABgCQABAAAAgBQABAAAAAAQABgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQACACAAADQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBABQAAAAAAAAQgBABAAAAQgBAAgBAAQAAABgBAAQAAAAAAgBQgBAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_43.setTransform(102.35,9.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#181E48").s().p("AgLAdQgGgDgEgEQgEgEgDgGQgCgGAAgGQAAgGACgFQADgHAEgDQAEgFAGgCQAFgCAGAAQAGAAAFADQAFADADAEIAAgJIANAAIAAA7IgNAAIgBgJQgDAFgEACQgFADgGABQgFAAgGgDgAgJgQQgDADgDAEQgCAFgBAEQABAFACAFQACAEAFADQAEADAEgBQAFABAEgDQAEgDADgEQACgFAAgFQAAgEgCgFQgDgEgEgDQgEgDgFABQgEgBgFADg");
	this.shape_44.setTransform(94.55,10.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#181E48").s().p("AgFAtIAAhZIALAAIAABZg");
	this.shape_45.setTransform(89.725,8.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#181E48").s().p("AgLAdQgGgDgEgEQgEgEgDgGQgCgGAAgGQAAgGACgFQADgHAEgDQAEgFAGgCQAFgCAGAAQAGAAAFADQAFADADAEIAAgJIANAAIAAA7IgNAAIgBgJQgDAFgEACQgFADgGABQgFAAgGgDgAgIgQQgEADgDAEQgCAFgBAEQABAFACAFQACAEAFADQAEADAEgBQAFABAEgDQAEgDADgEQACgFAAgFQAAgEgCgFQgDgEgEgDQgEgDgFABQgEgBgEADg");
	this.shape_46.setTransform(81.95,10.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#181E48").s().p("AgSAfIAAg7IANAAIAAAGQAEgEADgCQAFgCAFAAIAHABIgGANIgFgBQgEAAgCACQgDACgCADQgCADAAAEIAAAig");
	this.shape_47.setTransform(76.5,10.325);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#181E48").s().p("AgLAdQgFgDgFgEQgEgEgDgGQgCgGAAgGQAAgGACgFQADgHAEgDQAEgFAGgCQAFgCAGAAQAGAAAFADQAFADADAEIAAgJIANAAIAAA7IgNAAIgBgJQgDAFgEACQgEADgHABQgFAAgGgDgAgJgQQgDADgDAEQgCAFgBAEQABAFACAFQACAEAFADQAEADAEgBQAGABADgDQAFgDACgEQACgFAAgFQAAgEgCgFQgCgEgFgDQgDgDgGABQgEgBgFADg");
	this.shape_48.setTransform(70.35,10.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#181E48").s().p("AgeAuIAAhZIAMAAIAAAJQADgFAFgDQAEgDAGAAQAGAAAGADQAGACAEAEQAFAFACAGQACAFABAHQgBAGgCAGQgCAFgFAEQgEAFgGACQgGACgGAAQgGAAgEgCQgFgDgDgFIAAAngAgJgeQgDADgCAEQgDAEAAAGQAAAFADAFQACADADADQAEACAFAAQAFAAAEgCQAEgDADgDQACgFAAgFQAAgGgCgEQgDgEgEgDQgEgDgFAAQgFAAgEADg");
	this.shape_49.setTransform(63.35,11.825);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#181E48").s().p("AgOAbQgHgEgEgHQgEgIAAgIQAAgGADgFQACgGAEgEQAEgFAGgCQAFgCAFAAQAHAAAGACQAGADAEAFQAEAFACAGQACAHgBAHIgtAAIADAHIAGAFQADACADAAQAFAAAEgCQADgCADgFIAMAEQgDAIgHAFQgIAEgJABQgHgBgHgEgAARgEQAAgEgDgEQgCgDgEgCQgDgCgFAAQgDAAgEACQgDACgDADIgDAIIAhAAIAAAAg");
	this.shape_50.setTransform(53.2917,10.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#181E48").s().p("AgHAoIAAgvIgJAAIAAgNIAJAAIAAgTIALAAIABATIAMAAIAAANIgMAAIgBAvg");
	this.shape_51.setTransform(47.925,9.45);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#181E48").s().p("AgLAdQgFgDgFgEQgEgEgDgGQgDgGAAgGQAAgGADgFQACgHAEgDQAFgFAFgCQAGgCAGAAQAGAAAFADQAFADADAEIAAgJIAMAAIAAA7IgMAAIAAgJQgDAFgFACQgFADgFABQgGAAgGgDgAgIgQQgFADgCAEQgDAFABAEQgBAFADAFQADAEAEADQAEADAFgBQAFABAEgDQADgDADgEQACgFAAgFQAAgEgCgFQgDgEgDgDQgEgDgFABQgFgBgEADg");
	this.shape_52.setTransform(42.15,10.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#181E48").s().p("AgSAfIAAg7IANAAIAAAGQAEgEADgCQAEgCAGAAIAGABIgEANIgGgBQgDAAgEACQgCACgCADQgCADAAAEIAAAig");
	this.shape_53.setTransform(36.7,10.325);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#181E48").s().p("AgLAoQgFgCgFgFQgEgEgDgGQgDgGAAgGQAAgHADgEQACgGAEgEQAFgFAGgCQAFgCAGAAQAGAAAFADQAFADADAEIAAgJIAMAAIAAA7IgMAAIgBgIQgCAEgFADQgFADgFAAQgGAAgGgDgAgIgFQgEADgDADQgDAFABAFQgBAGADAEQADAFAEACQAEADAFAAQAEAAAEgDQAFgCACgFQACgEAAgGQAAgFgCgFQgCgDgFgDQgEgCgEAAQgFAAgEACgAgBgYIAEgSIANAAIgJASg");
	this.shape_54.setTransform(30.55,9.275);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#181E48").s().p("AgeAuIAAhZIAMAAIAAAJQADgFAFgDQAFgDAFAAQAHAAAFADQAGACAEAEQAEAFADAGQADAFAAAHQAAAGgDAGQgDAFgEAEQgEAFgGACQgFACgHAAQgFAAgFgCQgFgDgDgFIAAAngAgJgeQgDADgDAEQgCAEAAAGQAAAFACAFQADADADADQAEACAFAAQAFAAAEgCQAFgDACgDQADgFgBgFQABgGgDgEQgCgEgFgDQgEgDgFAAQgFAAgEADg");
	this.shape_55.setTransform(23.55,11.825);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#181E48").s().p("AgOAbQgHgEgEgHQgEgIAAgIQAAgGADgFQACgGAEgEQAEgFAGgCQAFgCAFAAQAHAAAGACQAGADAEAFQAEAFACAGQACAHgBAHIgtAAIADAHIAGAFQADACADAAQAFAAAEgCQADgCADgFIAMAEQgDAIgHAFQgIAEgJABQgHgBgHgEgAARgEQAAgEgDgEQgCgDgEgCQgDgCgFAAQgDAAgEACQgDACgDADIgDAIIAhAAIAAAAg");
	this.shape_56.setTransform(16.3417,10.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#181E48").s().p("AgSAfIAAg7IANAAIAAAGQADgEAEgCQAEgCAGAAIAGABIgEANIgGgBQgDAAgEACQgCACgCADQgCADAAAEIAAAig");
	this.shape_57.setTransform(11.05,10.325);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#181E48").s().p("AgaAqIAAhTIAcAAQAHAAAGADQAFAEADAFQAEAGAAAHQAAAHgEAFQgDAGgGACQgFAEgHAAIgPAAIAAAigAgNgEIAOAAQAEABADgCQADgCABgDQACgDAAgEQAAgEgCgCQgBgDgDgDQgDgBgEAAIgOAAg");
	this.shape_58.setTransform(5.375,9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SUBHEAD, new cjs.Rectangle(0,0,287.1,31.8), null);


(lib.OHIM_Spanish_Logosvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// OHIM_Spanish_Logo.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVA/QgbgzgIhIIACgCIAlAAQAEA4ARAuIABAAQAPgsAEg6IAfAAIACACQgHBHgbA0g");
	this.shape.setTransform(319.5,52.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtAwQgQgRAAgfQAAgeAQgRQAQgRAdAAQAeAAAQARQAQARAAAeQAAAfgQARQgRARgdAAQgdAAgQgRgAgXAAQAAAWAGAMQAHALAKAAQALAAAHgLQAGgMAAgWQAAgsgYAAQgXAAAAAsg");
	this.shape_1.setTransform(305.975,52.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiAzQgUgRAAghQAAgeATgSQATgRAfAAQAYAAAMAGIAAAZIgDAAQgJgLgUAAQgiAAgBAtQABAWAIALQAIALAPAAIACAAIAAgiIgLAAIAAgSIAwAAIAAA+IgDAEQgUAGgVAAQgbAAgSgOg");
	this.shape_2.setTransform(292.1,52.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNAQIgEgDIAAgZIAEgDIAcAAIACADIAAAZIgCADg");
	this.shape_3.setTransform(282.75,57.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAUB2Ig+iDQgLgXgFgaIgCAAQADAZAAAYIAACDIgvAAIAAjqIBUAAIA+CCQAKAUAGAeIABAAQgCgVAAgdIAAiCIAvAAIAADqg");
	this.shape_4.setTransform(266.7,47.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhVBaQgeghAAg5QAAg5AegfQAeggA3AAQA5AAAeAgQAdAfAAA5QAAA5geAhQgfAfg3AAQg2AAgfgfgAggg+QgMAWAAAoQAAApAMAWQAMAWAUgBQAVAAAMgUQAMgXAAgpQAAgogMgWQgMgVgVAAQgVAAgLAVg");
	this.shape_5.setTransform(239.725,47.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag/BeQgngeAAg/QAAg4AjghQAjggA7AAQArAAAZALIAAAuIgGAAQgIgJgPgGQgPgFgPAAQhCAAAABVQAAAoARAWQAPAUAbAAIAGAAIAAg/IgXAAIAAgkIBbAAIAAB3IgGAGQgkALgnAAQg0AAghgbg");
	this.shape_6.setTransform(213.075,47.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhOB2IAAjqICbAAIAAAlIhXAAIAAA3IBGAAIAAAkIhGAAIAABFIBZAAIAAAlg");
	this.shape_7.setTransform(191.475,47.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAeB2IgRg+QgGgTgKgHQgKgFgWAAIAABdIhEAAIAAjqIBJAAQAlAAAQACQAdAEAQAMQAXARAAAeQAAAXgNAPQgMAPgWAHIAAACQAaAIAMAfIAWA+IAAAGgAgigIIANABIAAAAQAoAAABglQgBgWgPgIQgKgFgcAAg");
	this.shape_8.setTransform(168.5,47.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhVBaQgfghABg5QAAg5AdgfQAeggA4AAQA4AAAeAgQAfAfAAA5QAAA5gfAhQgeAfg4AAQg2AAgfgfgAghg+QgLAWAAAoQAAApAMAWQAMAWAUgBQAVAAAMgUQAMgXAAgpQAAgogMgWQgLgVgWAAQgUAAgNAVg");
	this.shape_9.setTransform(141.95,47.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRAUIgEgEIAAgfIAEgEIAkAAIADAEIAAAfIgDAEg");
	this.shape_10.setTransform(352.55,25.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhHBQIAAifIA/AAQBRAAAABPQgBAngUAUQgVAVgnAAgAgZA3IAHAAQAWAAAJgMQALgNAAgeQAAgdgLgMQgJgMgWAAIgHAAg");
	this.shape_11.setTransform(341.4,19.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgvBDQgUgQAAgfIAAhkIAuAAIAABtQAAAMAIAIQAGAHALAAQALAAAHgHQAHgIAAgMIAAhtIAnAAIAABkQAAAegTAQQgTAPgeAAQgeAAgRgOg");
	this.shape_12.setTransform(323.45,19.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgzBQIAAifIAvAAIAACGIA4AAIAAAZg");
	this.shape_13.setTransform(309.75,19.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAXBQQgCgTgDgTIgtAAIgEAmIgnAAIgCgDQAEgpAMgqQAMgqAQgfIA5AAQAQAfAMAqQAMAqAEApIgCADgAgXARIAlAAQgGgggMgiIgCAAQgLAigGAgg");
	this.shape_14.setTransform(294.175,19.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag1BHIAAgjIAFAAQAQAVAXAAQAJAAAEgFQAGgEAAgIQAAgKgIgGIgRgJQgTgKgIgGQgNgMAAgSQAAgaATgNQAPgLAYAAQAeAAARAKIAAAfIgFAAQgNgQgWAAQgSAAAAAQQAAAIAHAGQADADANAGQATAJAIAIQAOALAAATQAAAbgUAOQgQALgZAAQgcAAgUgLg");
	this.shape_15.setTransform(279.125,19.575);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag0BQIAAifIBpAAIAAAaIg7AAIAAAlIAuAAIAAAYIguAAIAAAvIA8AAIAAAZg");
	this.shape_16.setTransform(265.25,19.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhIBQIAAifIA/AAQBSAAAABPQAAAngWAUQgUAVgoAAgAgZA3IAGAAQAWAAAKgMQALgNAAgeQAAgdgLgMQgJgMgXAAIgGAAg");
	this.shape_17.setTransform(249.3,19.55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag5A9QgVgWAAgnQAAgnAUgVQAUgVAmAAQAmAAAVAVQAUAVAAAnQAAAngVAWQgVAVglAAQglAAgUgVgAgWgqQgIAPAAAbQAAAcAJAPQAIAOANAAQAOAAAIgOQAJgPAAgcQAAg4gfAAQgOAAgIAOg");
	this.shape_18.setTransform(230.825,19.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhIBQIAAifIA/AAQBSAAAABPQAAAngWAUQgVAVgnAAgAgZA3IAHAAQAWAAAKgMQAKgNAAgeQAAgdgKgMQgKgMgWAAIgHAAg");
	this.shape_19.setTransform(213.025,19.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAXBQQgBgNgEgZIgtAAIgDAmIgoAAIgCgDQAEgqAMgpQAMgqAQgfIA5AAQARAfALAqQAMAqAEApIgCADgAgXARIAmAAQgIgigLggIgCAAQgLAjgGAfg");
	this.shape_20.setTransform(195.35,19.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhIBQIAAifIA/AAQBSAAAABPQAAAngWAUQgVAVgnAAgAgZA3IAGAAQAWAAALgMQAKgNAAgeQAAgdgKgMQgKgMgXAAIgGAAg");
	this.shape_21.setTransform(178.625,19.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgWBQIAAifIAtAAIAACfg");
	this.shape_22.setTransform(165.025,19.55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgwBDQgTgQAAgfIAAhkIAuAAIAABtQAAAMAIAIQAGAHALAAQALAAAHgHQAHgIAAgMIAAhtIAnAAIAABkQAAAegTAQQgSAPgeAAQgfAAgSgOg");
	this.shape_23.setTransform(152,19.675);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgoA9QgVgWAAgnQAAgnAVgVQAVgVAnAAQAZAAARAHIAAAfIgEAAQgMgNgUAAQgmAAAAA4QAAAcALAPQAIAOATAAQATAAANgOIAEAAIAAAfQgRAIgZAAQgmAAgWgVg");
	this.shape_24.setTransform(135.85,19.575);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#005695").s().p("AlDEbIAAgBQgKgQgKgYQgQgrAAgpQABgmARgpQATgqAAgUIAHjTQgJg+ACgSQADgNAuAIQAxAIAJAhQAKAgAOALQAHAFAQABQAIABAfgIQAjgJAPgBQAMgBArABQAkACAKgEQAKgDAYgLQAagLAagDIBVgHQA8gFAsADQAPAEAZAcQAVAYACAGQAAAIgmBdIgJAYQgDAOAGAJQAEAIAMAOQAKAOgHAWQgKAkAKDgg");
	this.shape_25.setTransform(35.9746,37.3012);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#005695").s().p("AgVG2QgvgvhAgfQgmgShKgYIgngNQhKgZgigjIB7AAIAFADIAmAMQBIAXAmARQBCAeAxAtQA0gvBEgfQAngSBJgXQAygQATgIIAJgEQAlgRAQgZQATgfAAg3IAAnxIr7AAIAAA3Ig9AAIAAh1IN1AAIAAIvQAABFgaAsQgZArg3AbIgMAFQgYAKgzARQhKAWgnAUQhCAfgxAyIgWAVg");
	this.shape_26.setTransform(63.975,45.95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFF8A5").s().p("AhzE4QgmgRhIgXIgmgMIgFgDQgzgUgXgeQgcgmAAhAIgLlaIAAiQIL7AAIAAHxQAAA3gTAfQgQAZglARIgJAEQgUAJgyAPQhJAYgnARQhDAfg0AvQgxgthCgeg");
	this.shape_27.setTransform(63.975,44.75);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#191D48").s().p("A0MFgQAjgqAAhNIAApJMAl/AAAQAxAAAjAkQAjAiAAAxIAAAAIAAHTQAAAxgjAjQgjAjgxgBg");
	this.shape_28.setTransform(240.7,35.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,370,91.9);


(lib.HEAD2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#181E49").s().p("AgKALQgEgFgBgGQABgFAEgFQAFgEAFAAQAGAAAFAEQAFAFAAAFQAAAGgFAFQgFAEgGAAQgFAAgFgEg");
	this.shape.setTransform(241.6,27.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#181E49").s().p("AgiBAQgQgKgJgRQgKgRAAgUQAAgOAGgNQAFgOAKgKQAJgKANgGQANgGANAAQAQAAAOAHQANAHAKALQAJAMAFAPQAEAPgCARIhrAAQACAJAGAIQAFAIAIAEQAIAFAJAAQALAAAJgGQAIgFAGgJIAdAHQgIASgRAMQgRAMgVAAQgSAAgQgKgAAogLQgBgKgGgIQgGgIgIgFQgJgFgKAAQgJAAgIAFQgJAFgFAIQgGAIgCAKIBPAAIAAAAg");
	this.shape_1.setTransform(232.1308,21.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#181E49").s().p("AgSBcIABhuIgXAAIAAgdIAXAAIgBgsIAdAAIAAAsIAeAAIAAAdIgeAAIAABug");
	this.shape_2.setTransform(220.5,19.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#181E49").s().p("AgqBIIAAiLIAdAAIAAAPQAHgJAKgFQALgFAMAAQAIAAAIACIgMAeQgFgCgGAAQgJgBgIAFQgHAEgEAIQgFAIAAAJIAABQg");
	this.shape_3.setTransform(211.925,21.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#181E49").s().p("AgbBEQgNgGgLgKQgKgKgGgOQgFgOAAgOQAAgPAFgNQAGgNAKgKQAKgKANgGQANgGAPAAQAOAAAMAHQALAHAIALIgBgVIAdAAIAACLIgdAAIgBgUQgGALgLAGQgKAHgPAAQgOAAgOgGgAgVgmQgKAGgGAKQgFALAAALQAAANAGAKQAGALAKAGQAKAGALAAQAMAAAJgGQAJgGAGgLQAFgKAAgNQAAgLgGgLQgFgKgJgGQgJgGgMAAQgMAAgKAGg");
	this.shape_4.setTransform(198.525,21.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#181E49").s().p("AgqBIIAAiLIAdAAIAAAPQAHgJAKgFQALgFAMAAQAIAAAIACIgMAeQgFgCgGAAQgJgBgIAFQgHAEgEAIQgFAIAAAJIAABQg");
	this.shape_5.setTransform(186.825,21.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#181E49").s().p("AgiBAQgNgHgIgNQgHgNAAgPIAAhXIAdAAIAABQQAAAJAFAIQAEAHAIAFQAIAFAIAAQAJAAAIgFQAIgFAEgHQAFgIAAgJIAAhQIAdAAIAACLIgdAAIAAgPQgHAJgLAFQgLAFgLAAQgPAAgNgIg");
	this.shape_6.setTransform(174.475,21.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#181E49").s().p("AgeBkQgNgFgLgLQgJgLgFgNIAagMQADAJAGAGQAHAHAHAEQAJADAIABQAIgBAIgCQAJgCAGgFQAHgGADgHQAEgGAAgIIAAgYQgHAKgLAHQgLAHgOAAQgNAAgOgGQgNgGgKgKQgKgKgFgMQgGgNAAgQQAAgQAGgNQAFgNAKgKQAKgLANgFQAOgGANAAQAOAAALAGQALAIAHAKIAAgUIAdAAIAACPQAAAOgGAMQgGAMgKAKQgLAIgOAFQgNAFgOAAQgOAAgOgHgAgUhIQgJAHgHAKQgFAKAAANQAAANAFAKQAHAJAJAHQAKAFAKABQANAAAJgHQAJgGAFgJQAFgLAAgMQAAgNgGgKQgFgKgIgHQgKgFgMgBQgKABgKAFg");
	this.shape_7.setTransform(159.2,24.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#181E49").s().p("AgiBAQgQgKgJgRQgKgRAAgUQAAgOAGgNQAFgOAKgKQAJgKANgGQANgGANAAQAQAAAOAHQANAHAKALQAJAMAFAPQAEAPgCARIhrAAQACAJAGAIQAFAIAIAEQAIAFAJAAQALAAAJgGQAIgFAGgJIAdAHQgIASgRAMQgRAMgVAAQgSAAgQgKgAAogLQgBgKgGgIQgGgIgIgFQgJgFgKAAQgJAAgIAFQgJAFgFAIQgGAIgCAKIBPAAIAAAAg");
	this.shape_8.setTransform(144.3308,21.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#181E49").s().p("AgBBKQgLgBgLgEQgKgDgIgHQgIgGgEgJIAZgLQACAEAEAEQAFADAGADQAGACAGAAQAHAAAFgCQAGgCAEgEQADgEAAgFQAAgGgEgEQgEgDgGgCIgMgEQgNgDgMgFQgLgFgHgIQgGgIAAgNQAAgNAHgKQAHgKAMgFQAMgGAMAAQARAAAOAIQAOAHAHAMIgXAOQgCgEgEgEQgEgDgGgCIgLgCQgGgBgGACQgGACgEAEQgDAEAAAHQAAAGAEADQAEADAHACIANAEQAMAEALAFQALAFAHAIQAHAIgBAMQAAANgIAKQgIAKgMAGQgKAEgMAAIgEAAg");
	this.shape_9.setTransform(131.4517,21.4833);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#181E49").s().p("AgbBEQgNgGgLgKQgKgKgGgOQgFgOAAgOQAAgPAFgNQAGgNAKgKQAKgKANgGQANgGAPAAQAOAAAMAHQALAHAIALIgBgVIAdAAIAACLIgdAAIgBgUQgGALgLAGQgKAHgPAAQgOAAgOgGgAgVgmQgKAGgGAKQgFALAAALQAAANAGAKQAGALAKAGQAKAGALAAQAMAAAJgGQAJgGAGgLQAFgKAAgNQAAgLgGgLQgFgKgJgGQgJgGgMAAQgMAAgKAGg");
	this.shape_10.setTransform(117.975,21.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#181E49").s().p("AgbBEQgNgGgLgKQgKgKgGgOQgFgOAAgOQAAgPAFgNQAGgNAKgKQAKgKANgGQANgGAPAAQAOAAAMAHQALAHAIALIgBgVIAdAAIAACLIgdAAIgBgUQgGALgLAGQgKAHgPAAQgOAAgOgGgAgVgmQgKAGgGAKQgFALAAALQAAANAGAKQAGALAKAGQAKAGALAAQAMAAAJgGQAJgGAGgLQAFgKAAgNQAAgLgGgLQgFgKgJgGQgJgGgMAAQgMAAgKAGg");
	this.shape_11.setTransform(96.675,21.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#181E49").s().p("AgBBKQgLgBgLgEQgKgDgIgHQgIgGgEgJIAZgLQACAEAEAEQAFADAGADQAGACAGAAQAHAAAFgCQAGgCAEgEQADgEAAgFQAAgGgEgEQgEgDgGgCIgMgEQgNgDgMgFQgLgFgHgIQgGgIAAgNQAAgNAHgKQAHgKAMgFQAMgGAMAAQARAAAOAIQAOAHAHAMIgXAOQgCgEgEgEQgEgDgGgCIgLgCQgGgBgGACQgGACgEAEQgDAEAAAHQAAAGAEADQAEADAHACIANAEQAMAEALAFQALAFAHAIQAHAIgBAMQAAANgIAKQgIAKgMAGQgKAEgMAAIgEAAg");
	this.shape_12.setTransform(77.7517,21.4833);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#181E49").s().p("AgiBAQgQgKgJgRQgKgRAAgUQAAgOAFgNQAGgOAJgKQAKgKANgGQANgGANAAQAUAAAPAKQAQAKAJARQAKARAAATQAAAQgFANQgGANgKAKQgJAKgNAGQgNAGgOAAQgSAAgQgKgAgUglQgJAGgFAKQgGAKAAALQAAANAGAKQAFAKAJAGQAKAGAKAAQAMAAAJgGQAJgGAGgLQAEgKAAgMQAAgLgEgKQgGgKgJgGQgKgHgLAAQgLAAgJAHg");
	this.shape_13.setTransform(64.9,21.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#181E49").s().p("ABRBIIAAhQQAAgIgEgJQgFgHgHgFQgIgFgJABQgJgBgIAFQgHAEgFAIQgEAIAAAJIAABQIgdAAIAAhQQAAgJgEgIQgEgIgIgEQgIgFgJABQgJgBgIAFQgHAFgFAHQgEAJAAAIIAABQIgdAAIAAiLIAdAAIAAAPQAHgJAKgFQALgFAMAAQAPAAANAHQAMAIAHALQAHgLANgIQAMgHAPAAQAQAAAMAHQANAIAIANQAHANAAAPIAABXg");
	this.shape_14.setTransform(45.925,21.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#181E49").s().p("AgbBEQgNgGgLgKQgKgKgGgOQgFgOAAgOQAAgPAFgNQAGgNAKgKQAKgKANgGQANgGAPAAQAOAAAMAHQALAHAIALIgBgVIAdAAIAACLIgdAAIgBgUQgGALgLAGQgKAHgPAAQgOAAgOgGgAgVgmQgKAGgGAKQgFALAAALQAAANAGAKQAGALAKAGQAKAGALAAQAMAAAJgGQAJgGAGgLQAFgKAAgNQAAgLgGgLQgFgKgJgGQgJgGgMAAQgMAAgKAGg");
	this.shape_15.setTransform(25.775,21.575);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#181E49").s().p("AgRBiIhHjDIAeAAIA6CgIA7igIAeAAIhHDDg");
	this.shape_16.setTransform(11.925,18.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2, new cjs.Rectangle(0,0,272.1,37.6), null);


(lib.HEAD1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#181E49").s().p("AgKALQgFgFABgGQgBgFAFgFQAEgEAGAAQAGAAAFAEQAEAFABAFQgBAGgEAFQgFAEgGAAQgGAAgEgEg");
	this.shape.setTransform(180.25,27.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#181E49").s().p("AgiBAQgQgKgJgRQgKgRAAgUQAAgOAGgNQAFgOAKgKQAJgKANgGQANgGANAAQAQAAAOAHQANAHAKALQAJAMAFAPQAEAPgCARIhrAAQACAJAGAIQAFAIAIAEQAIAFAJAAQALAAAJgGQAIgFAGgJIAdAHQgIASgRAMQgRAMgVAAQgSAAgQgKgAAogLQgBgKgGgIQgGgIgIgFQgJgFgKAAQgJAAgIAFQgJAFgFAIQgGAIgCAKIBPAAIAAAAg");
	this.shape_1.setTransform(170.7808,21.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#181E49").s().p("AgbBlQgOgGgKgKQgKgKgGgNQgFgNAAgQQAAgPAFgNQAGgNAKgKQAKgKAOgGQANgGAOAAQAPAAALAHQALAHAHAKIAAhaIAdAAIAADRIgdAAIAAgUQgHALgLAGQgLAHgPAAQgOAAgNgGgAgVgFQgKAFgGAKQgFALAAAMQAAANAGAKQAGALAKAGQAKAGALAAQAMAAAJgGQAJgGAGgLQAFgKAAgNQAAgMgGgLQgFgKgJgFQgJgGgMAAQgMAAgKAGg");
	this.shape_2.setTransform(154.975,18.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#181E49").s().p("AgiBAQgQgKgJgRQgKgRAAgUQAAgOAGgNQAFgOAKgKQAJgKANgGQANgGANAAQAQAAAOAHQANAHAKALQAJAMAFAPQAEAPgCARIhrAAQACAJAGAIQAFAIAIAEQAIAFAJAAQALAAAJgGQAIgFAGgJIAdAHQgIASgRAMQgRAMgVAAQgSAAgQgKgAAogLQgBgKgGgIQgGgIgIgFQgJgFgKAAQgJAAgIAFQgJAFgFAIQgGAIgCAKIBPAAIAAAAg");
	this.shape_3.setTransform(139.9808,21.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#181E49").s().p("AgbBAQgQgKgKgRQgJgRAAgUQAAgOAGgNQAFgOAJgKQAKgKANgGQAMgGAOAAQARAAAOAIQAPAIAKAOIgaAOQgGgHgIgEQgIgEgIAAQgLAAgJAHQgJAGgFAKQgGAKAAALQAAAMAGAKQAFALAJAGQAJAGALAAQAIAAAJgEQAHgEAGgHIAaAPQgKANgPAIQgOAIgRAAQgSAAgQgKg");
	this.shape_4.setTransform(126.05,21.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#181E49").s().p("AgiBAQgNgHgIgNQgHgNAAgPIAAhXIAdAAIAABQQAAAJAFAIQAEAHAIAFQAIAFAIAAQAJAAAIgFQAIgFAEgHQAFgIAAgJIAAhQIAdAAIAACLIgdAAIAAgPQgHAJgLAFQgLAFgLAAQgPAAgNgIg");
	this.shape_5.setTransform(112.525,21.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#181E49").s().p("AgBBKQgLgBgLgEQgKgDgIgHQgIgGgEgJIAZgLQACAEAEAEQAFADAGADQAGACAGAAQAHAAAFgCQAGgCAEgEQADgEAAgFQAAgGgEgEQgEgDgGgCIgMgEQgNgDgMgFQgLgFgHgIQgGgIAAgNQAAgNAHgKQAHgKAMgFQAMgGAMAAQARAAAOAIQAOAHAHAMIgXAOQgCgEgEgEQgEgDgGgCIgLgCQgGgBgGACQgGACgEAEQgDAEAAAHQAAAGAEADQAEADAHACIANAEQAMAEALAFQALAFAHAIQAHAIgBAMQAAANgIAKQgIAKgMAGQgKAEgMAAIgEAAg");
	this.shape_6.setTransform(100.0517,21.4833);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#181E49").s().p("AgbBEQgNgGgLgKQgKgKgGgOQgFgOAAgOQAAgPAFgNQAGgNAKgKQAKgKANgGQANgGAPAAQAOAAAMAHQALAHAIALIgBgVIAdAAIAACLIgdAAIgBgUQgGALgLAGQgKAHgPAAQgOAAgOgGgAgVgmQgKAGgGAKQgFALAAALQAAANAGAKQAGALAKAGQAKAGALAAQAMAAAJgGQAJgGAGgLQAFgKAAgNQAAgLgGgLQgFgKgJgGQgJgGgMAAQgMAAgKAGg");
	this.shape_7.setTransform(80.875,21.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#181E49").s().p("AgbBlQgOgGgKgKQgKgKgGgNQgFgNAAgQQAAgPAFgNQAGgNAKgKQAKgKAOgGQANgGAOAAQAPAAALAHQALAHAHAKIAAhaIAdAAIAADRIgdAAIAAgUQgHALgLAGQgLAHgPAAQgOAAgNgGgAgVgFQgKAFgGAKQgFALAAAMQAAANAGAKQAGALAKAGQAKAGALAAQAMAAAJgGQAJgGAGgLQAFgKAAgNQAAgMgGgLQgFgKgJgFQgJgGgMAAQgMAAgKAGg");
	this.shape_8.setTransform(64.725,18.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#181E49").s().p("AgNBgIAAiMIAbAAIAACMgAgKhEQgFgEABgHQgBgHAFgEQAFgFAFABQAGgBAFAFQAFAEgBAHQABAHgFAEQgFAEgGAAQgFAAgFgEg");
	this.shape_9.setTransform(54.45,19.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#181E49").s().p("AgSBGIgziLIAfAAIAmBqIAnhqIAfAAIgzCLg");
	this.shape_10.setTransform(44.525,21.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#181E49").s().p("AgbBEQgNgGgLgKQgKgKgGgOQgFgOAAgOQAAgPAFgNQAGgNAKgKQAKgKANgGQANgGAPAAQAOAAAMAHQALAHAIALIgBgVIAdAAIAACLIgdAAIgBgUQgGALgLAGQgKAHgPAAQgOAAgOgGgAgVgmQgKAGgGAKQgFALAAALQAAANAGAKQAGALAKAGQAKAGALAAQAMAAAJgGQAJgGAGgLQAFgKAAgNQAAgLgGgLQgFgKgJgGQgJgGgMAAQgMAAgKAGg");
	this.shape_11.setTransform(23.575,21.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#181E49").s().p("Ag4BiIAAjDIAdAAIAACmIBUAAIAAAdg");
	this.shape_12.setTransform(9.375,18.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1, new cjs.Rectangle(0,0,272.1,37.6), null);


(lib.CTASPNsvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// CTA-SPN.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiBAQgRgLgJgQQgJgQAAgVQAAgPAGgNQAFgNAKgKQAJgLANgFQANgGANAAQAQAAANAHQANAGALAMQAKAOADANQAFAPgCARIhrAAQADALAEAGQAFAIAJAEQAIAFAJAAQALAAAJgFQAJgGAFgJIAdAHQgIASgRAMQgQAMgWAAQgTAAgPgKgAgRgqQgJAFgFAIQgGAIgCAKIBPAAQgCgKgFgIQgGgIgIgFQgJgFgKAAQgJAAgIAFg");
	this.shape.setTransform(148.4688,23.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSBcIAAhuIgVAAIAAgdIAWAAIAAgsIAcAAIAAAsIAeAAIAAAdIgeAAIAABug");
	this.shape_1.setTransform(136.25,20.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbBEQgNgGgLgKQgKgKgGgOQgFgMAAgQQAAgQAFgMQAFgNALgKQAJgKAOgGQANgGAPAAQANAAANAHQALAHAIALIgBgVIAdAAIAACLIgdAAIgBgUQgGAKgLAHQgKAHgPAAQgPAAgNgGgAgVgmQgKAGgGAKQgGALAAALQAAANAHAKQAFAKALAHQAKAGALAAQAMAAAJgGQAKgGAFgLQAFgKAAgNQAAgMgFgKQgFgKgKgGQgJgHgMAAQgKAAgMAHg");
	this.shape_2.setTransform(122.925,23.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABRBIIAAhQQAAgIgEgIQgEgIgIgFQgIgFgJABQgJgBgIAFQgHAEgFAIQgEAIAAAJIAABQIgcAAIAAhQQAAgJgFgIQgEgIgIgEQgIgFgJABQgIgBgJAFQgHAFgFAIQgEAIAAAIIAABQIgdAAIAAiLIAdAAIAAAPQAHgJALgFQALgFALAAQAPAAANAHQAMAIAHALQAIgMAMgHQANgHAOAAQAQAAANAHQAMAIAIANQAHANAAAPIAABXg");
	this.shape_3.setTransform(103.025,22.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgqBIIAAiLIAdAAIAAAPQAHgJAKgFQAMgFALAAIAQACIgMAeQgEgCgHAAQgIgBgJAFQgGAEgFAIQgEAJAAAIIAABQg");
	this.shape_4.setTransform(86.125,22.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiBaQgRgLgJgQQgJgQAAgVQAAgQAGgMQAFgNAJgKQAKgLANgFQANgGANAAQATAAAQAKQAPAKALAQQAJASAAATQAAAPgGAOQgFAMgKALQgJAKgNAGQgOAFgNABQgTAAgPgKgAgUgMQgJAGgGAJQgFALAAAMQAAANAGAJQAFAKAKAHQAIAFALABIAAAAQAMAAAIgHQAKgGAFgKQAGgKgBgMQABgNgGgKQgEgIgLgHQgJgGgLAAQgLAAgJAGgAgHg7IAKgnIAdAAIgUAng");
	this.shape_5.setTransform(72.75,20.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbBrIAAhuIgRAAIAAgdIARAAIAAggQAAgLAGgKQAFgJAKgGQAIgGAMAAQAJAAAHAEQAJAEAFAGIgUAVQgCgDgDgBIgFgBQgFAAgEADQgEAEAAAFIAAAgIAoAAIAAAdIgoAAIAABug");
	this.shape_6.setTransform(60.65,19.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAhBIIAAhQQABgJgFgHQgEgJgIgEQgIgFgJABQgIgBgIAFQgIAEgFAJQgEAHAAAJIAABQIgdAAIAAiLIAdAAIAAAPQAIgJAKgFQALgFALAAQAPAAANAHQANAKAIALQAHANAAAQIAAgBIAABXg");
	this.shape_7.setTransform(48.25,22.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNBiIAAjDIAcAAIAADDg");
	this.shape_8.setTransform(36.8,20.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C60778").s().p("ArjDRQhWAAg9g9Qg9g8AAhXIAAgBQAAhWA9g9QA9g9BWAAIXHAAQBWAAA9A9QA9A9AABWIAAABQAABWg9A9Qg9A9hWAAg");
	this.shape_9.setTransform(94.8,20.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,189.6,41.9);


(lib.BKGDDkBlue300x250svg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// BKGD-DkBlue-300x250.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#181E49").s().p("A0uviMApdAAAIAAAAQnOAFmwCYQmiCSlhENQlfELj8FoQkAFtiBGpg");
	this.shape.setTransform(132.725,399.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#181E49").s().p("ATKFyQjjoZmgmgQmfmfoZjjQoLjdo5gOMAtrgABMgABAtrQgOo5jdoLg");
	this.shape_1.setTransform(453.8,146.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#181E49").s().p("AgKAAIAVAAIgVAAg");
	this.shape_2.setTransform(297.2,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#96E6EB").s().p("Egu3AXcMAAAgu3MAuRAAAIAAABIAmgBQJiAAIuDsQIaDjGfGfQGgGgDjIZQDsItAAJjg");
	this.shape_3.setTransform(300,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,499.1);


(lib.LOGO = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.OHIM_Spanish_Logosvg("synched",0);
	this.instance.setTransform(116.1,28.8,0.6272,0.6272,0,0,0,185.1,45.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LOGO, new cjs.Rectangle(0,0,232.1,57.7), null);


(lib.CTA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.CTASPNsvg("synched",0);
	this.instance.setTransform(0,-0.05,0.5,0.5,0,0,0,94.8,20.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-47.4,-10.5,94.8,21), null);


(lib.BKGD = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.BKGDDkBlue300x250svg("synched",0);
	this.instance.setTransform(300,249.5,1,1,0,0,0,300,249.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BKGD, new cjs.Rectangle(0,0,600,499.1), null);


// stage content:
(lib.OHIM_Life_SPN_320x50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [166,178];
	// timeline functions:
	this.frame_166 = function() {
		if(!this.alreadyExecuted){
		this.alreadyExecuted=true;
		this.loopNum=1;
		} else {
		this.loopNum++;
		if(this.loopNum==2){
		this.stop();
		}
		}
	}
	this.frame_178 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(166).call(this.frame_166).wait(12).call(this.frame_178).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,2,0,3).p("A46j0MAx1AAAIAAHpMgx1AAAg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(179));

	// LOGO
	this.instance = new lib.LOGO();
	this.instance.setTransform(229.3,30.05,0.39,0.39,0,0,0,49.5,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(179));

	// HEAD1
	this.instance_1 = new lib.HEAD1();
	this.instance_1.setTransform(64.9,36.6,0.7713,0.7713,0,0,0,78.7,50.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},66).wait(113));

	// HEAD2
	this.instance_2 = new lib.HEAD2();
	this.instance_2.setTransform(-135.6,58.2,0.7713,0.7713,0,0,0,78.7,50.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({x:64.9},14,cjs.Ease.quintOut).to({_off:true},33).wait(113));

	// SUBHEAD
	this.instance_3 = new lib.SUBHEAD();
	this.instance_3.setTransform(-96.3,29,1,1,0,0,0,78.7,26);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(66).to({_off:false},0).to({x:83.7},14,cjs.Ease.quintOut).wait(99));

	// CTA
	this.instance_4 = new lib.CTA();
	this.instance_4.setTransform(158.55,35.05,0.78,0.78);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(80).to({_off:false},0).wait(26).to({regX:0.1,regY:0.1,scaleX:0.897,scaleY:0.897,x:158.6,y:35.15},2).to({regX:0,regY:0,scaleX:0.78,scaleY:0.78,x:158.55,y:35.05},8).wait(63));

	// BKGD
	this.instance_5 = new lib.BKGD();
	this.instance_5.setTransform(245.95,17.4,0.1755,0.1755,0,0,0,178.1,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(179));

	// BKGD2
	this.instance_6 = new lib.BKGD();
	this.instance_6.setTransform(218.5,158,1,1,0,0,0,300,249.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(179));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-36.3,-66.5,554.8,474.1);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 320,
	height: 50,
	fps: 24,
	color: "#999999",
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
an.compositions['0957C5EC3B874C629166840920B09671'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;