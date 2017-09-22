
var pom = 25 * 60;
var shortBreak = 5 * 60;
var longBreak = 15 * 60;
var timerOn = false
var current = pom;

var popup = chrome.extension.getViews({type: "tab"})[0];console.log(popup);


var format = function(){
  return function(seconds){
    var min = Math.floor(seconds / 60);
    var secs = seconds - (min*60);
    return ('0'+min).slice(-2)+":"+('0'+secs).slice(-2);
  }
}();

var startTimer = function(){

    timerOn = true;
    console.log('start timer');
    var endDate = Date.now() + (current * 1000);
    var interval = setInterval(function(){
      console.log('tick',current);
      current = endDate - Date.now();
      popup.document.querySelector('#timer').innerHTML = format(Math.round(current/1000));
    },1000);


};
var stopTimer =  function(){
  console.log('stopTimer', timerOn);
};
var resetTimer= function(){
  console.log('resetTimer')
};
