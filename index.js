// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);


// Changing title

console.log(document.title);
document.title = "hola";


// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.head.lang);
// console.log(document.body.innerHTML);
// console.log(document.body.textContent);
// console.log(document.all);
// console.log(document.all[8]);

// console.log(document.all[10]);
// document.all[10].textContent = "Hola";
// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);



// getElementById and difference between textContent and innerText

// var headerTitle = document.getElementById("header-title");
// console.log(headerTitle);
// headerTitle.textContent = "Fine";
// headerTitle.innerText = "Hey";
// headerTitle.innerHTML = "<em>Hey</em>";
// console.log(headerTitle.innerText);  //It pays attention to styling
// console.log(headerTitle.textContent);  // It doesn't pays attention to styling
// console.log(headerTitle.innerHTML);  



// Setting border bottom color to black of header

let header = document.getElementById('main-header');
header.style.borderBottom = '3px solid #000';


// Making Add items to bold and its color green

let addItem = document.querySelector('.title');
addItem.style.fontWeight = "bold";
addItem.style.color = "green";



// getElementsByClassName

// let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[2]);
// items[2].textContent = 'Hello';
// items[2].style.fontWeight = 'bold';
// items[2].style.backgroundColor = 'yellow';


// Grabbing first list item
// let firstItem = document.querySelector('.list-group-item:first-child');
// or
// let firstItem = document.querySelector('.list-group-item');
// firstItem.style.color = "purple";

// Grabbing last list item
// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = "purple";


// Grabbing second list item
// let secondItem = document.querySelector('.list-group-item:nth-child(2)'); // css pseudo selector
// secondItem.style.color = "pink";

// Making odd list's background color gray
// let odd = document.querySelectorAll('li:nth-child(odd)');
// for(let i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor = "gray";
// }


// Making even list's background color yellow
let even = document.querySelectorAll('li:nth-child(even)');
even.forEach(function(item){
    item.style.backgroundColor = "yellow";
});


// Making 3rd list item to green background
let items = document.getElementsByClassName('list-group-item');
// items[2].style.backgroundColor = "green";
// console.log(items);


// Making all list items font bold
for(let i=0;i<items.length;i++){
    items[i].style.fontWeight = "bold";
}


// Editing li by getElementsByTagName
let li = document.getElementsByTagName("li");
for(let i=0;i<li.length;i++){
    li[i].style.color = "blue";
}
// console.log(li);

// Making 2nd list item background color to green
// let item2 = document.querySelector('li:nth-child(2)');
// item2.style.backgroundColor = "green";
// Making 3rd list item invisible
let item3 = document.querySelector('li:nth-child(3)');
// item3.style.display = "none";
item3.style.visibility = "hidden";

// Using querySelectorAll changing font color green of 2nd list item
let listItem2 = document.querySelectorAll("li");
listItem2[1].style.color = "green";


// Making odd list's background color green
let odd = document.querySelectorAll('li:nth-child(odd)');
odd.forEach(function(item){
    item.style.backgroundColor = "green";
});