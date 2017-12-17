var range = document.querySelector('#range');
var num = document.querySelector('#num');
var box = document.querySelector('.box');

var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;

var colors = ['blue', 'green', 'red', 'orange', 'purple', 'pink'];

function rand(a) {
  function rando(v) {
    var r = Math.floor((Math.random() * v - 20) + 1);
    return r;
  }
  var randi = Math.floor((Math.random() * 100) + 1);
  var sec = Math.floor((Math.random() * 4) + 1);
  var colorRand = Math.floor((Math.random() * (colors.length - 1)) + 1);
  a.setAttribute('style', 'top:'+rando(screenHeight)+'px; left:'+rando(screenWidth)+'px; background:'+colors[colorRand]+'; width:'+randi+'px; height:'+randi+'px; transition:'+sec+'s ease;');
}

function randAnimate(selector, timer) {
  setInterval(function(){
    rand(selector);
  }, timer);
}

var randomDivs = Math.floor((Math.random() * 50) + 1);

function createRun(divs) {
  for (var i = 0; i < divs; i++) {
    var div = document.createElement("div");
    div.className = 'circ';
    div.id = 'c' + i;
    rand(div);
    randAnimate(div, Math.floor((Math.random() * 1200) + 1) );
    box.appendChild(div);
  }
}
createRun(randomDivs);

range.addEventListener('input', function(){
  num.innerHTML = this.value;
  box.innerHTML = '';
  createRun(this.value);
});