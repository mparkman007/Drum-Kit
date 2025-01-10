
var buttonArray = document.querySelectorAll(".drum");

// var audio = new Audio("./sounds/tom-1.mp3");
// var clicked = "empty";

document.addEventListener("keydown", function(event){
    audioSwitch(event.key);

    buttonAnimation(event.key);
})


for( var i = 0; i < buttonArray.length; i++){


    buttonArray[i].addEventListener("click", function(){

        var buttonInnerHTML = this.innerHTML;
        audioSwitch(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });

}




// document.querySelector("button").addEventListener("click", handleClick);
// document.querySelectorAll("button")

function audioSwitch(keyType){

    switch(keyType){
        case "w":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "a":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        case "j":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "k":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "l":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        default: console.log(buttonInnerHTML);
    }

}
function buttonAnimation(currentKey){

   var activeButton = document.querySelector("." + currentKey);
   activeButton.classList.add('pressed');

   setTimeout(function(){
    activeButton.classList.remove("pressed");
   }, 100);

}