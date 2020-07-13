var body = document.querySelector("body");
var button = document.querySelector("button");
var h3Element = document.querySelector("h3");

var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");

h3Element.textContent = "linear-gradient(to right, "+color1.value+" ,"+color2.value+")";
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

function setGradient(){
    body.style.background="linear-gradient(to right, "+color1.value+" ,"+color2.value+")";
    h3CssGradient();
};

function h3CssGradient(){
    h3Element.textContent = "linear-gradient(to right, "+color2.value+" ,"+color2.value+")";
};
