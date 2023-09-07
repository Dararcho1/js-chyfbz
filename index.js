import './style.css';

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
const img = new Image();
img.src = 'yellow.png';
/*var cnv=document.getElementById("cnv")
var ctx=cnv.getContext("2d")*/
var popup=document.getElementById("popup-container")
var close=document.getElementById("close")
var up = document.getElementById('up');
var down = document.getElementById('down');
var left = document.getElementById('left');
var right = document.getElementById('right');
var slider = document.getElementById('slider');
var start = document.getElementById('start');
var counter = 0;
var pi = Math.PI;
var degree = 0;
var g = 9.81;
var height = 0;
var xa = 40;
var ya = 30;
var rot = 0;
var ytarget;
var xtarget;
var angle = document.getElementById('angle');
var heighto = document.getElementById('height');
var timer = document.getElementById('time');
var peak;
var onetime = false;
let yo = 1;
var y0;
var vy0 = int * Math.sin(Radian(angle.value));
var vx0 = int * Math.cos(Radian(angle.value));
var distance = document.getElementById('distance');
var target = document.getElementById('target');
var inc1 = document.getElementById('INC1');
var dec1 = document.getElementById('DEC1');
var inc2 = document.getElementById('INC2');
var dec2 = document.getElementById('DEC2');
var preH;
var int;
var mInterval;
var exp=0
var x0
var intialHeight
var shot=0
var shot2
var tx
var ty
var aim=document.getElementById("aim")
var idk=true
popup.style.display="none"
close.onclick= ()=>{popup.style.display="none"}
document.getElementById('reset').onclick = function () {
  shot=0
  context.beginPath()
  context.clearRect(0,0,600,400)
  Display.x=20
  Display.y=380
  xtarget = Math.floor(Math.random() * 581);
  ytarget = Math.floor(Math.random() * 381);
  t=0
  Display.draw()
  context.rect(xtarget, ytarget, 20, 20);
  context.fill();
  interval = setInterval(targetPosition, 100);

	trajectory()
  
};
var t = 0;
function Radian(rot) {
  return (rot / 180) * pi;
}

function Projectile() {
  this.x = 20;
  this.y = 380;

  this.launch = function () {};
  int = slider.value;

  slider.addEventListener('change', (e) => {
	document.getElementById('disv').innerHTML = slider.value+"m/s";
	int = slider.value;
	trajectory()
  });
  this.draw = function () {
	context.clearRect(0, 0, 600, 400);
	context.arc(this.x, this.y, 20, 0, 2 * pi);
	context.fillStyle = 'red';
	context.fill();
	if (Display.x != xtarget && Display.y != ytarget) {
	  context.rect(xtarget, ytarget, 20, 20);
	  context.fill();
	}
  };
  this.Up = function () {
	this.y -= 10;
	height += 10;
	context.clearRect(0, 0, 600, 400);
	context.beginPath();
	context.arc(this.x, this.y, 20, 0, 2 * pi);
	context.fillStyle = 'red';
	context.fill();
	heighto.innerHTML = height;
	trajectory()
	if (Display.x != xtarget && Display.y != ytarget) {
	  context.rect(xtarget, ytarget, 20, 20);
	  context.fill();
	}
  };
  this.Down = function () {
	height -= 10;

	this.y += 10;

	context.clearRect(0, 0, 600, 400);
	context.beginPath();
	context.arc(this.x, this.y, 20, 0, 2 * pi);
	context.fillStyle = 'red';
	context.fill();
	heighto.innerHTML = height;
	trajectory()
	if (Display.x != xtarget && Display.y != ytarget) {
	  context.rect(xtarget, ytarget, 20, 20);
	  context.fill();
	}
  };
  this.Right = function () {
	this.x += 10;

	context.clearRect(0, 0, 600, 400);
	context.beginPath();
	context.arc(this.x, this.y, 20, 0, 2 * pi);
	context.fillStyle = 'red';
	context.fill();
	trajectory()
	if (Display.x != xtarget && Display.y != ytarget) {
	  context.rect(xtarget, ytarget, 20, 20);
	  context.fill();
	}
  };
  this.Left = function () {
	this.x -= 10;

	context.clearRect(0, 0, 600, 400);
	context.beginPath();
	context.drawImage(img, this.x, this.y, 20, 20);
	context.fillStyle = 'red';
	context.fill();
	trajectory()
	if (Display.x != xtarget && Display.y != ytarget) {
	  context.rect(xtarget, ytarget, 20, 20);
	  context.fill();
	}
  };
}

var Display = new Projectile();

Display.draw();

/*AC.onclick=function(){Display.Ant()
}*/
this.launch = function () {
  this.y -= Math.sin(Radian(angle.value)) * int * t - 9.81 * t ** 2;
  this.x += Math.cos(Radian(angle.value)) * int * t;
  t += 0.1;
  context.clearRect(0, 0, 600, 400);
  context.beginPath();
  context.arc(this.x, this.y, 20, 0, 2 * pi);
  context.fill();
};

up.onclick = function () {
  console.log(new Date() - startdate);
  Display.Up();
};
down.onclick = function () {
  Display.Down();
};
right.onclick = function () {
  Display.Right();
};
left.onclick = function () {
  Display.Left();
};

function launch() {
  if (Display.y <= 380 && Display.x < 580) {
	t += 0.016;
	if (
	  Display.y -
		(intialHeight -
		  (Math.sin(Radian(degree)) * int * t + (-g / 2) * t ** 2)) <
		0 &&
	  !onetime
	) {
	  peak = 380 - Display.y;
	  onetime = true;
	}
	Display.y =
	  intialHeight - (Math.sin(Radian(degree)) * int * t + (-g / 2) * t ** 2);
	Display.x = x0 + Math.cos(Radian(degree)) * int * t;
	console.log(Display.y - 20);

	context.clearRect(0, 0, 600, 400);
	context.beginPath();
	context.fillStyle="red"
	context.arc(Display.x, Display.y, 20, 0, 2 * pi);
	context.fill();
	console.log(t);
	counter++;
	shot2=shot
	if (
	  xtarget + 10 - Display.x <= 30 &&
	  xtarget + 10 - Display.x >= -30 &&
	  400 - (ytarget + 10) - (400 - Display.y) <= 30 &&
	  400 - (ytarget + 10) - (400 - Display.y) >= -30
	) {
	  shot++
	}
	else if(shot2-shot==0 && shot!=0){
	  clearInterval(interval);
	  popup.style.display="block"
	  clearInterval(mInterval)
	}
  } else {
	context.clearRect(0, 0, 600, 400);
	context.beginPath();
	context.arc(Display.x, 380, 20, 0, 2 * pi);
	context.fill();
  if (
	  xtarget + 10 - Display.x <= 30 &&
	  xtarget + 10 - Display.x >= -30 &&
	  400 - (ytarget + 10) - (400 - Display.y) <= 30 &&
	  400 - (ytarget + 10) - (400 - Display.y) >= -30
	) {
	  clearInterval(interval);
	  popup.style.display="block"
	  clearInterval(mInterval)
	}
	var endTime = new Date();
	// in seconds

	timer.innerHTML = 'Time taken: ' + t.toFixed(3)+'s';
	distance.innerHTML = 'Distance: ' + (Display.x - 20).toFixed(2);
	try {
	  document.getElementById('peak').innerHTML = 'Peak: ' + peak.toFixed(2)+"m";
	} catch (err) {}

	console.log(counter);
	clearInterval(mInterval);
  }
  if (Display.x != xtarget && Display.y != ytarget) {
	context.rect(xtarget, ytarget, 20, 20);
	context.fill();
  }
  if (Display.y >= 380) {
	context.clearRect(0, 0, 600, 400);
	context.beginPath();
	context.arc(Display.x, 380, 20, 0, 2 * pi);
	context.fill();

	if (yo == 1) {
	  console.log(Display.x);
	  yo++;
	}
  }
  if (Display.x != xtarget && Display.y != ytarget) {
	context.rect(xtarget, ytarget, 20, 20);
	context.fill();
  }
}

var x = 0;
console.log(int);

console.log(Display.y);
var startTime;
start.onclick = function () {
  t=0
  startTime = new Date();
  x0 = Display.x;
  y0 = 380 - Display.y;
  intialHeight = Display.y;
  mInterval = setInterval(launch, 16);
};
angle.addEventListener('change', () => {
  document.getElementById('deg').innerHTML = 'Angle: ' + angle.value + 'º';
  console.log(angle.value);
  console.log(degree);
	
  degree = angle.value;
	trajectory()
  console.log(degree);
});
document.getElementById('deg').innerHTML = Display.y;

console.log(x);
xtarget = Math.floor(Math.random() * 581);
ytarget = Math.floor(Math.random() * 381);
xtarget = Math.floor(Math.random() * 581);
ytarget = Math.floor(Math.random() * 381);

context.rect(xtarget, ytarget, 20, 20);
context.fill();

function targetPosition() {
  target.innerHTML =
	xtarget +
	10 -
	Display.x +
	', ' +
	(400 - (ytarget + 10) - (400 - Display.y));
  
}
var startdate = new Date();

var interval = setInterval(targetPosition, 100);

var sliderLabelsContainer = document.getElementById('sliderLabels');
var ex = 0;
var labels = ['0', '15', '30', '45', '60', '75', '90']; // Define your desired labels

for (var i = 0; i < labels.length; i++) {
  var label = document.createElement('span');
  label.innerHTML = labels[i].toString();
  label.style.position = 'absolute';

  label.style.left = ex + '%';
  ex += 16.66666666667;
  sliderLabelsContainer.appendChild(label);
}
inc1.onclick = () => {  
  slider.value++
  document.getElementById('disv').innerHTML = slider.value+"m/s";
  int = slider.value;
	trajectory()
};
dec1.onclick = () => {
  slider.value--;
  document.getElementById('disv').innerHTML = slider.value+"m/s";
  int = slider.value;
	trajectory()
};

inc2.onclick = () => {
  angle.value++;
  document.getElementById('deg').innerHTML = 'Angle: ' + angle.value + 'º';
  degree = angle.value;
	trajectory()
};
dec2.onclick = () => {
  angle.value--;
  document.getElementById('deg').innerHTML = 'Angle: ' + angle.value + 'º';
  degree = angle.value;
	trajectory()
};
function trajectory(){
	if(idk==false){
  tx=Display.x
	ty=Display.y
	Display.draw()
	t=0
	for(let i=0; i<70; i++ ){

		t+=0.5
		ty =
	  (Display.y+15) - (Math.sin(Radian(degree)) * int * t + (-g / 2) * t ** 2);
	tx = (Display.x) + Math.cos(Radian(degree)) * int * t;
	context.beginPath();
	context.fillStyle="green"
	context.arc(tx, ty, 5, 0, 2 * pi);
	context.fill();
	
	}
	i=0}

		

}
aim.innerHTML="I don't like Physics"
aim.onclick=()=>{
	idk=!idk
	if(idk==false){
	aim.innerHTML="I like Physics"
	aim.style.backgroundColor="white"
	aim.style.color="black"
	aim.style.border="3px outset white"
	trajectory()
	}
	if(idk){
		aim.innerHTML="I don't like Physics"
		aim.style.backgroundColor="black"
		aim.style.color="white"
		aim.style.border="3px outset black"
		Display.draw()
	}
}
