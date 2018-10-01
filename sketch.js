var elevation = [];

var img = [];
var imgs = 60;

var panel = [];
var panels = 10;

var timeDay = -1;
var timesOfDay = 3;

var imgSet = 0;
var imgSets = 2;

var ratio;
var notoReg;

function preload(){
  notoReg = loadFont("NotoSans-Regular.ttf");
  let num =0;
  for(i=0;i<timesOfDay;i++){
  elevation[i] = loadImage("assets/backgrounds/elevation"+[i]+".png");
  }
  for(e=0;e<timesOfDay;e++){
    num ++;
    img[e] = [];
    for(i=0;i<(floor(imgs/timesOfDay));i++){
    img[e][i] = loadImage("assets/images/image"+(i+(e*floor(imgs/timesOfDay)))+".jpg");
    }
  }
}

function setup() {
  //noCursor();
  textFont(notoReg);
  timeDay = 0;
  frameRate(30);
  createCanvas(windowWidth,windowHeight);
  ratio = width/elevation[1].width;
  imageW = width;
  imageH = elevation[1].height*ratio;
  initializePanels();
}

function draw() {
  if(timeDay===0){
 		 image(elevation[0],0,0,imageW,imageH);
	}else if(timeDay==1){
  		image(elevation[1],0,0,imageW,imageH);
	}else if(timeDay==2){
  		 image(elevation[2],0,0,imageW,imageH);
	}
   panel[7].display();
   panel[6].display();
   panel[5].display();
   panel[9].display();
   panel[8].display();
   panel[4].display();
   panel[3].display();
   panel[0].display();
   panel[1].display();
   panel[2].display();
   words();

}

function keyPressed(){
  if(keyCode==SHIFT){
     timeDay++;
     if(timeDay>=timesOfDay){
      timeDay = 0;
     }
     resize();
  }else{
      imgSet ++;
      if(imgSet>=imgSets){
      	imgSet = 0;
      }
      resize()
  }
}

window.onresize = function(){
resize();
}
