//#Week 6 JQuery Code Challenge

//Objects
		
//Code Challenge:
//Create an object named "Box" with 3 properties, height, width, volume.

var Box = {
height:0  ,
width: 0   ,
volume: 0  ,
}


//Create 2 buttons for Height. The first button decreases the Box Height by 1. The second button increases the Box Height by 1.
var heightDecrease = document.getElementById("HeightDecrease");
var heightIncrease = document.getElementById("HeightIncrease");

heightDecrease.onclick=function (){

Box.height -=1;

	};

heightIncrease.onclick=function (){

Box.height +=1;

	};

var weightDecrease = document.getElementById("WeightDecrease");
var weightIncrease = document.getElementById("WeightIncrease");

weightDecrease.onclick=function (){

Box.width -=1;

	};

weightIncrease.onclick=function (){

Box.width +=1;

	};

var volumeDecrease = document.getElementById("VolumeDecrease");
var volumeIncrease = document.getElementById("VolumeIncrease");

volumeDecrease.onclick=function (){

Box.volume -=1;

	};

volumeIncrease.onclick=function (){

Box.volume +=1;

	};




//Create a button that prints the object and its attributes to the page (use the span "output".
var printBox = document.getElementById("Print");

printBox.onclick=function () {
console.dir("span"+Box);

};

 
//Extra credit
//Create interactive buttons to decrease or increase the Width and Volume