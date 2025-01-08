/*
Exercise 1: Accessing Elements with getElementById

Description: 

Select the element with the ID 'main-title' and change its text content 
to "Welcome to the DOM Manipulation Page".
*/

let placeholder = `Delete this 
									block 
									and 
									code 
									here`;

let title = document.querySelector("#main-title");
title.textContent = "Welcome to the DOM Manipulation Page";

/*
Exercise 2: Accessing Elements with querySelector

Description: 

Use querySelector to select the first <p> element with the 
class 'intro-text' and change its color to blue.
*/

placeholder = `Delete this 
									block 
									and 
									code 
									here`;

let introText= document.querySelector("p.intro-text");
introText.style.color="blue";

/*
Exercise 3: Accessing Multiple Elements with querySelectorAll

Description: 

Use querySelectorAll to select all elements with the class 'article-text' and 
set their font size to 18px.
*/

placeholder = `Delete this 
									block 
									and 
									code 
									here`;
									
let articleTexts = document.querySelectorAll(".article-text");
articleTexts.forEach((currentEl) => {
currentEl.setAttribute("style", "font-size: 18px")});

/*
Exercise 4: Navigating the DOM Tree

Description: 

Select the element with ID 'introduction' and access its parent node. 
Log the parent node's tag name to the console.
*/

placeholder = `Delete this 
									block 
									and 
									code 
									here`;

let parent = document.querySelector("#introduction").parentNode;
console.log(parent);

/*
Exercise 5: Accessing Child Nodes

Description: 

Select the <ul> with ID 'item-list' and log the number of 
its child elements to the console.
*/

placeholder = `Delete this 
									block 
									and 
									code 
									here`;

let itemList = document.querySelector("#item-list");
console.log(itemList.childElementCount);


/*
Exercise 6: Updating Inner HTML

Description: 

Change the inner HTML of the element with ID 'introduction' to 
include a new paragraph saying "This content has been updated!".
*/

placeholder = `Delete this 
									block 
									and 
									code 
									here`;

let intro = document.querySelector("#introduction");
let p = document.createElement("p");
let text = document.createTextNode("This content has been updated!")
p.appendChild(text);
intro.appendChild(p);

// Solution uses innerHTML
// introSection.innerHTML += "<p>This content has been updated!</p>";


/*
Exercise 7: Changing Attributes with setAttribute

Description: 

Assume there's an image with ID 'main-image' in your HTML. 
Change its src attribute to point "image2.png".
*/

placeholder = `Delete this 
									block 
									and 
									code 
									here`;

let img=document.querySelector("#main-image");
img.setAttribute("src", "image2.png");

/*
Exercise 8: Adding an Event Listener

Description: 

Add an event listener to the button with ID 'alert-button' that 
shows an alert with the message "Button Clicked!" when clicked.
*/

placeholder = `Delete this 
									block 
									and 
									code 
									here`;

// let btn=document.querySelector("#alert-button");
// btn.onclick= () => {alert("Button Clicked!")};									
									
/*
Exercise 9: Removing an Event Listener

Description: 

Remove the code from Exercise 8.

In this file, add an event listener to the button with ID 'alert-button' that 
shows an alert when clicked. 

Then, remove the event listener so that clicking the button no longer 
shows the alert after 5 seconds.
*/

placeholder = `Delete this 
									block 
									and 
									code 
									here`;


let btn=document.querySelector("#alert-button");
btn.addEventListener("click", myAlert);
																		
function myAlert() {
alert("Button Clicked!");
setTimeout(() => { 
	console.log("Removed event listener")
	btn.removeEventListener(
		"click",
		myAlert
	);
	}, 5000)
};				  

/*
Exercise 10: Handling Keyboard Events

Description: 

Add an event listener to the document that logs the 
key and code of any key pressed by the user.
*/

placeholder = `Delete this 
									block 
									and 
									code 
									here`;

// document.addEventListener(
// 	"keydown",
// 	(e) => {
// 		console.log(`${e.key} has been pressed`)
// 	}
// );								

/*
Exercise 11: Event Propagation

Description: 

Add click event listeners to the <section> with ID 'interactive' and to 
the <button> with ID 'color-button'.

In each event handler, log a message indicating which element was clicked. 

Observe event bubbling.
*/

placeholder = `Delete this 
									block 
									and 
									code 
									here`;

// let colorBtn = document.querySelector("#color-button");
// colorBtn.addEventListener(
// 	"click",
// 	(e) => {console.log(`Color button clicked, origin: ${e.target}`)}
// );

// let interactiveSection= document.querySelector("#interactive")
// interactiveSection.addEventListener(
// 	"click",
// 	(e) => {console.log(`Interactive section clicked, origin: ${e.target}`)}
// );


/*
Exercise 12: Stopping Event Propagation

Description: 

Modify the previous exercise to prevent the click event on 
the button from bubbling up to the section.
*/

placeholder = `Delete this 
									block 
									and 
									code 
									here`;

// let colorBtn = document.querySelector("#color-button");
// colorBtn.addEventListener(
// 	"click",
// 	(e) => {
// 		console.log(`Color button clicked, origin: ${e.target}`),
// 		e.stopPropagation()},
// );

// let interactiveSection= document.querySelector("#interactive")
// interactiveSection.addEventListener(
// 	"click",
// 	(e) => {console.log(`Interactive section clicked, origin: ${e.target}`)} //Not logged
// );	

/*
Exercise 13: Using console.log for Debugging

Description: 

Inside the event listener for the color-button, 
log the current background color of the button before changing 
it to light green.
*/

placeholder = `Delete this 
									block 
									and 
									code 
									here`;
									
// let colorBtn = document.querySelector("#color-button");
// colorBtn.addEventListener(
// 	"click",
// 	(e) => {
// 		console.log(`Background color of button ${colorBtn.style.backgroundColor}`),
// 		colorBtn.setAttribute("style", "background-color: lightgreen")},
// );
									

/*
Exercise 14: Creating and Appending New Elements

Description: 

Create a new <li> element with the text "Item 4" and append it to 
the <ul> with ID 'item-list'.
*/

placeholder = `Delete this 
									block 
									and 
									code 
									here`;

let listItem = document.createElement("li");
listItem.innerHTML="Item 4";
let unorderedList = document.querySelector("#item-list");
unorderedList.appendChild(listItem);

/*
Exercise 15: Removing Elements from the DOM

Description: 

Remove the first <li> element from the <ul> with ID 'item-list'.
*/

placeholder = `Delete this 
									block 
									and 
									code 
									here`;

let el = document.querySelector("#item-list").firstElementChild;

el.remove();

/*
Exercise 16: Using classList.add

Description: 

Add a class 'highlight' to all <p> elements inside the 
section with ID 'content'.
*/

placeholder = `Delete this 
									block 
									and 
									code 
									here`;

let contentP = document.querySelector("#content p");
contentP.classList.add("highlight");

/*
Exercise 17: Using classList.toggle

Description: 

Add a click event listener to the button with ID 'color-button' that 
toggles the class 'active' on itself.
*/

placeholder = `Delete this 
									block 
									and 
									code 
									here`;

let colorBtn = document.querySelector("#color-button");
colorBtn.addEventListener(
	"click",
	(e) => {
		console.log(`Class Active`),
		colorBtn.classList.toggle("active")},
	);								

/*
Exercise 18: Preventing Default Behavior

Description: 

Add a submit event listener to the form with ID 'input-form' that 
prevents the form from submitting and logs the input value to the console.
*/

placeholder = `Delete this 
									block 
									and 
									code 
									here`;

let form = document.querySelector("#input-form");
form.addEventListener(
	"submit",
	(e) => {
	e.preventDefault();
	let input = document.querySelector("#input-text").value;
	console.log(`Form input submitted: ${input}`);
	}
);

/*
Exercise 19: Simple Drag and Drop

Description: 

Make the element with ID 'drag-source' draggable and implement 
drag and drop functionality to move it to the element with ID 'drop-target'.
*/

placeholder = `Delete this 
									block 
									and 
									code 
									here`;
// let dragSource = document.querySelector("#drag-source");
// let dropTarget = document.querySelector("#drop-target")
									
// dragSource.setAttribute("draggable", "true");
									
// dragSource.addEventListener(
// 	"dragstart",
// 	(e) => e.dataTransfer.setData("text/plain", e.target.id)
// );
									
// dropTarget.addEventListener(
// 	"dragover",
// 	(e) => e.preventDefault()
// );

// dropTarget.addEventListener(
// 	"drageneter",
// 	(e) => e.preventDefault()
// );

// dropTarget.addEventListener(
// 	"drop",
// 	(e) => { e.preventDefault()
// 		let droppedData = e.dataTransfer.getData("text/plain");
// 		let itemDropped = document.getElementById(droppedData);
// 		dropTarget.appendChild(itemDropped);
// 	}
// );								

/*
Exercise 20: Using dataTransfer in Drag and Drop

Description: 

Use event.dataTransfer to pass custom data during the drag and drop operation 
in the previous exercise. 

For example, pass a message and log it when the drop occurs.
*/

placeholder = `Delete this 
									block 
									and 
									code 
									here`;

let dragSource = document.querySelector("#drag-source");
let dropTarget = document.querySelector("#drop-target")
let firstName = "Hannah"
									
dragSource.setAttribute("draggable", "true");
									
dragSource.addEventListener(
	"dragstart",
	(e) => e.dataTransfer.setData("text/plain", firstName)
);
									
dropTarget.addEventListener(
	"dragover",
	(e) => e.preventDefault()
);

dropTarget.addEventListener(
	"drageneter",
	(e) => e.preventDefault()
);

dropTarget.addEventListener(
	"drop",
	(e) => { e.preventDefault()
		let data = e.dataTransfer.getData("text/plain");
		let p = document.createElement("p");
		p.innerHTML=data;
		dropTarget.appendChild(p);
		console.log(dropTarget);
	}
);												

/*
Exercise 21: Cloning Nodes

Description: 

Clone the element with ID 'main-title' and 
append the clone to the <footer> element.
*/

placeholder = `Delete this 
									block 
									and 
									code 
									here`;

let mainTitle = document.querySelector("#main-title");
let clone = mainTitle.cloneNode(true);
document.querySelector("footer").appendChild(clone);document.querySelector("footer").appendChild(clone)

/*
Exercise 22: Modifying Styles with JavaScript

Description: 

Change the background color of the <body> when the 
user moves the mouse over the <header> element.
*/

placeholder = `Delete this 
									block 
									and 
									code 
									here`;

let header = document.querySelector("header");
let body = document.querySelector("body");
header.addEventListener(
	"mouseenter",
	(e) => body.setAttribute("style","background-color: lightblue")
);
header.addEventListener(
	"mouseleave",
	(e) => body.setAttribute("style","background-color: null")
);

/*
Exercise 23: Debouncing Function Calls

Description: 

Implement a debounced resize event handler that logs the 
new window size after the user stops resizing the browser window for 
500 milliseconds.
*/

placeholder = `Delete this 
									block 
									and 
									code 
									here`;

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

function logWidth () {
	console.log(`End of resizing: ${window.innerWidth} x ${window.innerHeight}`)
};


/*
Exercise 24: Optimizing DOM Manipulations

Description: 

Add 100 new list items to ID 'item-list' efficiently by 
using a DocumentFragment. You can create one by using:

`document.createDocumentFragment()`
*/

placeholder = `Delete this 
									block 
									and 
									code 
									here`;

									let docFrag = document.createDocumentFragment()
									function addtoDocFrag (i) {
										if (i > 100) {
											return;
										} else {
										let item = document.createElement("li");
										item.innerHTML=`Item ${i}`;
										item.setAttribute("id", `item${i}`);
										docFrag.appendChild(item);
										i++;
										addtoDocFrag(i);
									}
									};
									
									addtoDocFrag(5);
									document.querySelector("#item-list").appendChild(docFrag);
									

/*
Exercise 25: Using Event Delegation

Description: 

Instead of adding event listeners to each <li> in 'item-list', 
add a single event listener to 'item-list' that logs the 
text of the clicked list item.
*/

placeholder = `Delete this 
									block 
									and 
									code 
									here`;

let list = document.querySelector("#item-list");
list.addEventListener(
	"click",
	(e) => console.log(e.target.textContent)
)