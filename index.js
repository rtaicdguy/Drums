alert("Hello BC");
var arr=document.querySelectorAll("button");
var audio=new Audio("sounds/crash.mp3");
for(var i=0;i<arr.length;i++)
{
  arr[i].addEventListener("click",func);
}
document.addEventListener("keydown",f);
function f(event)
{
  switchfunc(event.key);
  buttonanimation(event.key);
}
function func()
{
  switchfunc(this.innerHTML);
  buttonanimation(this.innerHTML);
}
function switchfunc(x)
{
  switch(x)
  {
    case "w":
    var audio=new Audio("sounds/tom-1.mp3");
    audio.play();
    break;
    case "a":
    var audio=new Audio("sounds/tom-2.mp3");
    audio.play();
    break;
    case "s":
    var audio=new Audio("sounds/tom-3.mp3");
    audio.play();
    break;
    case "d":
    var audio=new Audio("sounds/tom-4.mp3");
    audio.play();
    break;
    case "j":
    var audio=new Audio("sounds/snare.mp3");
    audio.play();
    break;
    case "k":
    var audio=new Audio("sounds/kick-bass.mp3");
    audio.play();
    break;
    case "l":
    var audio=new Audio("sounds/crash.mp3");
    audio.play();
    break;
  }
}
function buttonanimation(x)
{
  document.querySelector("."+x).classList.add("pressed");
  setTimeout(
    function()
  {
    document.querySelector("."+x).classList.remove("pressed");
  }
  ,100);
}
