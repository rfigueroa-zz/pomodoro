
var bg = chrome.extension.getBackgroundPage();

var timer = document.querySelector('#timer');

var start = document.querySelector('#start');
var stop = document.querySelector('#stop');
var reset = document.querySelector('#reset');


start.addEventListener('click', bg.startTimer());
stop.addEventListener('click', bg.stopTimer);
reset.addEventListener('click', bg.resetTimer);

if(!bg.timerOn){
  timer.innerHTML = bg.format(bg.pom);//dateElements[dateElements.length-2];
} else {
  timer.innerHTML = bg.format(bg.current/1000);//dateElements[dateElements.length-2];
  timer.dispatchEvent(new MouseEvent('click'));
}
//edited
