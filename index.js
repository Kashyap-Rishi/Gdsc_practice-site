var heading = document.getElementById("myHeading");
var paragraphs = document.getElementsByClassName("myClass");
var listItems = document.getElementsByTagName("li");
var button = document.querySelector("#myButton");
var allParagraphs = document.querySelectorAll("p.myClass");
var elementsByName = document.getElementsByName("myName");
var link = document.getElementById("myLink");





// Modifying Elements

// heading.innerHTML = "Hello, DOM!";
// paragraphs[0].textContent = "Updated paragraph text";
// button.style.backgroundColor = "blue";




// Creating and Appending Elements

// var newParagraph = document.createElement("p");
// newParagraph.textContent = "New paragraph added!";
// document.body.appendChild(newParagraph);




// Removing Elements

// var list = document.querySelector("ul");
// var itemToRemove = listItems[1];
// list.removeChild(itemToRemove);




// Traversal and Relationships

// var firstChild = document.querySelector("ul").firstElementChild;
// var lastChild = document.querySelector("ul").lastElementChild;
// var parentElement = document.getElementById("myButton").parentNode;
// var nextSibling = document.querySelector("h1").nextElementSibling;
// var prevSibling = document.querySelector("p").previousElementSibling;



// Attributes


// var hasDataAttribute = heading.hasAttribute("data-id");
// heading.setAttribute("data-id", "12345");
// var getDataAttribute = heading.getAttribute("data-id");
// heading.removeAttribute("data-id");




// Appending a new child element


// var list = document.querySelector("ul");
// var newItem = document.createElement("li");
// newItem.textContent = "New Item";
// list.appendChild(newItem);




// Replacing an element with another node


// var oldItem = document.querySelector("ul li");
// var newItem = document.createElement("li");
// newItem.textContent = "Replaced Item";
// oldItem.replaceWith(newItem);





// Event Listeners


button.addEventListener("click", function() {
    alert("Button clicked!");
});

link.addEventListener("mouseenter", function() {
    link.style.color = "red";
});

link.addEventListener("mouseleave", function() {
    link.style.color = "blue";
});

// listItems[0].addEventListener("click", function() {
//     alert("List item clicked!");
// });

