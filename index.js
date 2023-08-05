// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);


// Changing title

// console.log(document.title);
// document.title = "hola";


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

// let header = document.getElementById('main-header');
// header.style.borderBottom = '3px solid #000';


// Making Add items to bold and its color green

// let addItem = document.querySelector('.title');
// addItem.style.fontWeight = "bold";
// addItem.style.color = "green";



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
// let even = document.querySelectorAll('li:nth-child(even)');
// even.forEach(function(item){
//     item.style.backgroundColor = "yellow";
// });


// Making 3rd list item to green background
// let items = document.getElementsByClassName('list-group-item');
// items[2].style.backgroundColor = "green";
// console.log(items);


// Making all list items font bold
// for(let i=0;i<items.length;i++){
//     items[i].style.fontWeight = "bold";
// }


// Editing li by getElementsByTagName
// let li = document.getElementsByTagName("li");
// for(let i=0;i<li.length;i++){
//     li[i].style.color = "blue";
// }
// console.log(li);

// Making 2nd list item background color to green
// let item2 = document.querySelector('li:nth-child(2)');
// item2.style.backgroundColor = "green";
// Making 3rd list item invisible
// let item3 = document.querySelector('li:nth-child(3)');
// item3.style.display = "none";
// item3.style.visibility = "hidden";

// Using querySelectorAll changing font color green of 2nd list item
// let listItem = document.querySelectorAll("li");
// listItem[1].style.color = "green";


// Making odd list's background color green
// let odd = document.querySelectorAll('li:nth-child(odd)');
// odd.forEach(function(item){
//     item.style.backgroundColor = "green";
// });



// Traversing the DOM
let node = document.querySelector('#items');
//parentNode
// console.log(node.parentNode);
node.parentNode.style.backgroundColor="cyan";
// console.log(node.parentNode.parentNode);

//parentElement
// console.log(node.parentElement);
// node.parentElement.style.backgroundColor="cyan";
// console.log(node.parentElement.parentElement);

//childNodes
// console.log(node.childNodes);
 
//children
// console.log(node.children);
// console.log(node.children[2]);
// node.children[2].style.backgroundColor = "pink";

//firstChild
// console.log(node.firstChild);

//firstElementChild
// console.log(node.firstElementChild);

//lastChild
// console.log(node.lastChild);

//lastElementChild
// console.log(node.lastElementChild);
// node.lastElementChild.textContent = "Hello";

//nextSibling
// console.log(node.nextSibling);

//nextElementSibling
// console.log(node.nextElementSibling);

//previousSibling
// console.log(node.previousSibling);

//previousElementSibling
// console.log(node.previousElementSibling);
node.previousElementSibling.style.color = "green";



//Adding Hello World before Item Lister

//createElement -> creating div here
// let newDiv = document.createElement('div');
// //Adding class
// newDiv.className = 'hello';
// //Adding id
// newDiv.id = 'myDiv';
// //Adding attribute
// newDiv.setAttribute('title','This is my div');
// newDiv.setAttribute('value','Another div');

// //creating text node
// let newDivText = document.createTextNode('Hello World');

// //Add text to div
// newDiv.appendChild(newDivText);
// console.log(newDiv);


// //Adding element to DOM
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// container.insertBefore(newDiv, h1);



// //Adding Hello World before Item 1
// let listItem1 = document.createElement('li');
// listItem1.className = 'list-group-item';
// let listItem1Text = document.createTextNode('Hello World');
// listItem1.appendChild(listItem1Text);
// let ul = document.querySelector('.list-group');
// let item1 = document.querySelector('.list-group-item');
// ul.insertBefore(listItem1,item1);


// Working Item Lister code
let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

//Form submit event
form.addEventListener('submit',addItem);

//Delete event 
itemList.addEventListener('click',removeItem);


function addItem(e){
    e.preventDefault();
    let newItem = document.getElementById('item').value;
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));

    //Adding edit button to li
    let editBtn = document.createElement('button');
    editBtn.className = 'btn btn-success btn-sm float-right edit';
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);

    //Adding delete button to li
    let delBtn = document.createElement('button');
    delBtn.className = 'btn btn-danger btn-sm float-right delete';
    delBtn.appendChild(document.createTextNode('X'));
    li.appendChild(delBtn);

    itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
