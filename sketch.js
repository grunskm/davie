var loadVal = 50;
var loadChange = 5;
var elevation = [];
var colour;
var time; 

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
var n = 0;
var loading = true;
var count = 0;

function preload(){
  notoReg = loadFont("NotoSans-Regular.ttf");
    for(i=0;i<timesOfDay;i++){
    elevation[i] = loadImage("assets/backgrounds/elevation"+[i]+".jpg");
  }
}

function loadingAnimation(){
    push();
  	background(255);
  	fill(100);
  	textSize(30);
  	text("Loading",windowWidth/2-50,windowHeight/2);
  	loadVal += loadChange;
  	if(loadVal>200||loadVal<50){
  		loadChange*= -1;
  	}
  	fill(loadVal);
  	text("Please Wait",windowWidth/2-50,windowHeight/2+40);
  	pop();
}

function loadFiles(){

  for(e=0;e<timesOfDay;e++){
    img[e] = [];
    for(i=0;i<(floor(imgs/timesOfDay));i++){
    img[e][i] = loadImage("assets/images/image"+(i+(e*floor(imgs/timesOfDay)))+".jpg",imageLoaded);
    }
  }
}

function imageLoaded(){
	count++;
	print(count);
	if(count==60){
		initializePanels()
		loading = false;
	}
}

function setup() {
   loadFiles();
   textFont(notoReg);
   timeDay = 0;
   frameRate(60);
   createCanvas(windowWidth,windowHeight);
   ratio = width/elevation[1].width;
   imageW = width;
   imageH = elevation[1].height*ratio; 
   
   time = new timeButton();
   colour = new colourButton();
}

function draw() {
  if(loading){
	loadingAnimation();
  }else{
	background(50);
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
   time.display();
   colour.display();
  }
}
function mousePressed(){
	time.hit();
	colour.hit();
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

// function mousePressed(){
// 	n++;
// 	saveCanvas("capture"+n+".png","png");
// 	return False;
// }

window.onresize = function(){
resize();
}
