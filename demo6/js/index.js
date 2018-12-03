// index.js
var width = 0;
var height = 0;
var timer = null;
var timer2 = null;
var opacity = 0;
var win =  document.getElementById('window');
var background = document.getElementById('background');

//显示弹窗
function showWindow() 
{
	
	
	// img.style.opacity = 1;
	timer = setInterval(function() {
		changeWindow();
	}, 2);

	// timer2 = setInterval(function() {
	// 	changeBackground();
	// }, 200);

	win.style.display = 'block';
	background.style.display = 0;
}


//改变弹窗大小
function changeWindow() 
{

	width++;
	height++;

	if (width >= 300) 
	{
		clearInterval(timer);
	}

	win.style.width = width + 'px';
	win.style.height = height + 'px';

}

//背景渐变
function changeBackground() 
{
	console.log(opacity);
	opacity += 0.1;
	if (opacity > 0.5) 
	{
		clearInterval(timer2);
	}
	// img.style.opacity = opacity;
	background.style.background = 'rgb(0,0,0,' + opacity + ')';
	console.log(background);
	console.log(background.style.background);
}

