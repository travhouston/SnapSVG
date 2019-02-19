	
var s = Snap("#svg");

var circle = s.circle(50, 50, 50);
 
 
circle.attr({
  fill: 'dodgerblue',
});
 

function right() {
	s.animate({
        transform: 't500,0'
    }, 1000, down);
}

function down() {
  s.animate({
       transform: 't500,500',
 }, 1000, left);
} 

function left() {
  s.animate({
       transform: 't0,500',
 }, 1000, up);
} 

function up() {
  s.animate({
       transform: 't0,0',
 }, 1000);
} 

setInterval(right, 4075);
