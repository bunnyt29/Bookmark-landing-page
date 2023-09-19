// const list = document.getElementsByClassName('features_list_item');
// list.addEventListener("click", function(){ alert("Hello World!"); });

var text = document.getElementById("content_one"); 
text.style.display = "flex";
var element = document.getElementById("list_item_one");
element.classList.add("clicked");

function displayText() {
    element.classList.remove("clicked");
    element = document.getElementById("list_item_one");
    element.classList.add("clicked");
    text.style.display = "none";
    text = document.getElementById("content_one");
    text.style.display = "flex";
    text.classList.add("clicked");
}

function displayText2() {
    element.classList.remove("clicked");
    element = document.getElementById("list_item_two");
    element.classList.add("clicked");
    text.style.display = "none";
    text = document.getElementById("content_two");
    text.style.display = "flex";
    text.classList.add('clicked');
}

function displayText3() {
    element.classList.remove("clicked");
    element = document.getElementById("list_item_three");
    element.classList.add("clicked");
    text.style.display = "none";
    text = document.getElementById("content_three");
    text.style.display = "flex";
}

