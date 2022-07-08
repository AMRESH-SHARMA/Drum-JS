// Using "this.innerHTML" get every clicked button value or innerHTML like d,j,s then apply switch and case statement to play specific sound

//console.log in line 11 output clicked button

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Button press triggers fn

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
//console
    console.log(this);
    console.log(this.innerHTML);

    makeSound(buttonInnerHTML);        //fn makesound

    buttonAnimation(buttonInnerHTML);   // fn button animation

  });

}

// Key press from keybooard triggers fn
// When any key is pressed keypress event listner detect it
document.addEventListener("keypress", function(event) {

  //Console
  console.log(event)

  makeSound(event.key);         //fn makesound

  buttonAnimation(event.key);   // fn button animation

});


//fn makesound

function makeSound(key) {

    switch (key) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
  
      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
  
      case "s":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
  
      case "d":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;
  
      case "j":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
  
      case "k":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
  
      case "l":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;
  
  
      default: console.log(key);
  
    }
  }

  function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
  
    // activate "pressed" css class, shadow and transparency
    activeButton.classList.add("pressed");
    
    // deactivate "pressed" css class after 1 sec
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
  }