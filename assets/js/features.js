// const list = document.getElementsByClassName('features_list_item');
// list.addEventListener("click", function(){ alert("Hello World!"); });

var text = document.getElementById("content_one"); 
text.style.display = "block";
var clicked;

function displayText() {
    text.style.display = "none";
    text = document.getElementById("content_one");
    text.style.display = "block";
}

function displayText2() {
    text.style.display = "none";
    text = document.getElementById("content_two");
    text.style.display = "block";
    text.classList.add('clicked');
}

function displayText3() {
    text.style.display = "none";
    text = document.getElementById("content_three");
    text.style.display = "block";
}

