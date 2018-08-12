var css = document.querySelector("h3");
var body = document.querySelector("body");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

function colorChanged(){
    body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
    css.textContent =  body.style.background + ";";
}
colorChanged();
color1.addEventListener("input", colorChanged);
color2.addEventListener("input", colorChanged);