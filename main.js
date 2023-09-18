// DOM and DOM Events

// jgrab elements from the DOM
// attach event listeners

// const body = document.querySelector('body');
// body.style.backgroundColor = '#C00C00';

// you can also do this & its the same thing:
// document.body.style.backgroundColor = '#C00C00';

// option 1 for event listeners

// function goCooCoo() {
//     document.body.style.backgroundColor = '#C00C00';
// }

// Option 2 for event listeners - use events directly on the element

// If you have multiple coffeButtons, the query selector will only grab the first one. You would need to use querySelectorAll. When you do this, you get a node list, which is similar to an array. You can use the forEach method to loop through the node list and add the event listener to each button.

// const coffeeButton = document.querySelector('.coffee-btn');
// coffeeButton.onclick = function() {
//     document.body.style.backgroundColor = '#C0FFEE';
// }
// coffeeButton.onmouseenter  = goCooCoo;

// using the forEach method:

// function getCoffee() {
//     document.body.style.backgroundColor = '#C0FFEE';
// }

// coffeeButtons.forEach(function(button) {
//     button.onclick = getCoffee;
// });

// Option 3 for event listeners (preferred)

const lalaButton = document.querySelector('.lala-btn');

function notListening() {
    document.body.style.backgroundColor = '#1A1A1A';
}

lalaButton.addEventListener('click', notListening);
lalaButton.addEventListener('mouseenter', goCooCoo);

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('mouseleave', notListening));