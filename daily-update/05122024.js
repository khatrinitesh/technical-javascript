// accessing dom elements 
const someid = document.getElementById('someid');
someid.style.backgroundColor = 'red'
someid.style.color = 'white'

const someclass = document.getElementsByClassName('someclass');
for(let i=0;i<someclass.length;i++){
    someclass[i].style.backgroundColor = 'blue'
    someclass[i].style.color = 'white'
}

// Returns an HTMLCollection of elements with the given tag name.
const listItems = document.getElementsByTagName('LI');
for(let i=0;i<listItems.length;i++){
    listItems[i].style.backgroundColor = 'orange'
}

const someclass1 = document.querySelector('.someclass1');
someclass1.style.backgroundColor = 'pink';

const noteAlert = document.querySelectorAll('div.note, div.alert');
noteAlert.forEach(function(element){
    element.style.backgroundColor ='red'
    element.style.color = 'white'
})


var newHeading = document.createElement('h1');
var newParagraph = document.createElement('p');

var h1text = document.createTextNode('this is a nice header text');
const ptext = document.createTextNode('this is a nice paragraph text');

newHeading.appendChild(h1text);
newParagraph.appendChild(ptext);

document.body.appendChild(newHeading);
document.body.appendChild(newParagraph)