var red = document.querySelector(".red");
var cyan = document.querySelector(".cyan");
var violet = document.querySelector(".violet");
var orange = document.querySelector(".orange");
var pink = document.querySelector(".pink");
var brown = document.querySelector(".brown");
var green = document.querySelector(".green");
var yellow = document.querySelector(".yellow");

var center = document.querySelector(".center");

const getBgColor = (x) => {
    return window.getComputedStyle(x).backgroundColor;
}

var BgColor = getBgColor(orange);

var magic = (element,BgColor) =>{
    element.addEventListener('mouseenter',() => {
        center.style.backgroundColor = BgColor;
    });
    element.addEventListener('mouseleave',() =>{
        center.style.backgroundColor = "#141414";
    });  
};

magic(red, getBgColor(red));
magic(violet, getBgColor(violet));
magic(cyan, getBgColor(cyan));
magic(orange, getBgColor(orange));
magic(pink, getBgColor(pink));
magic(brown, getBgColor(brown));
magic(green, getBgColor(green));
magic(yellow, getBgColor(yellow));