/*
Exercise 23: Debouncing Function Calls

Description: 

Implement a debounced resize event handler that logs the 
new window size after the user stops resizing the browser window for 
500 milliseconds.
*/

// Exercise 23
let resizeTimeout;

window.addEventListener("resize", function () {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(function () {
    console.log("Window size:", window.innerWidth, "x", window.innerHeight);
  }, 500);
});

window.addEventListener(
	"resize",
	debounce(logWidth)
);

function debounce (callback) {
	let timer;
	return function() {
	clearTimeout(timer);
	timer = setTimeout(() => {
		callback()
	}, 500);
}
};

debounce = debounce(logWidth)

function logWidth () {
	console.log(`End of resizing: ${window.innerWidth} x ${window.innerHeight}`)
};