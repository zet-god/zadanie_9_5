//alert('hello');

var buttons = document.getElementsByClassName('button');
console.log(buttons);

var buttonsContent = buttons.innerHTML;
console.log(buttonsContent);

// console.log(document.getElementsByClassName('button').textContent);

// console.log(buttons[0].innerHTML);
// console.log(buttons[1].innerHTML);
// console.log(buttons[2].innerHTML);
// console.log(buttons[3].innerHTML);

for (var i = 0; i < buttons.length; i++) {
	console.log(buttons[i].innerHTML);
}