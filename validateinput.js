class polygon{
    constructor (sides){
        this.sides = sides;
    }
    
    alertSides(){
        alert ("This polygon has " + this.sides);
    }

areaFormula() {
    alert ("This area of this object is ...");
    }
}

class square extends polygon {
    constructor (lenght){
    super(4);
    this.lenght = lenght;
    }

area () {
    alert(this.lenght * this.lenght);
    }

areaFormula(){
    super.areaFormula();
    alert("... lenght squared.");
    }
}

function validateInput(event){
    event.preventDefault();
    let firstName = document.getElementById("fname"). value;
    console.log(firstName);
    let lastName = document.getElementById("lname"). value;
    console.log(lastName);
    let zip = document.getElementById("zip"). value;
    console.log(zip);
    // Concatenate first and last name variables
    let firstLast  = firstName + " " + lastName;
    console.log(firstName);
    //Check if firstLast has fewer than 2 characters. Exit if that is the case
    if(firstLast.length < 2){
        alert("Not enough characters. First and last name must have at least 2 characters.");
        return false;
    }
    // check if zip has 5 characters and is a number.
    const zipRegExp = /\b\d{5}\b/;
    
   if(!zipRegExp.test(zip)) {
        alert("Invalid zip code. Zip must be a number of 5 digits.");
        console.log(typeof zip)
        return false;
   }
    console.log("Validated!");
}

    window.addEventListener("DOMContentLoaded", (event) =>{
    const form = document.getElementById("myForm")
    if (form) {
        form,addEventListener("submit", validateInput)
    }
 
});




function playCheer() {
    // Replace 'cheer-audio.mp3' with the actual path to your audio file
    var audio = new Audio("CHEER.wav");
    audio.play();
}

function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    var cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    // Compare with its reverse
    return cleanStr === cleanStr.split('').reverse().join('');
}

function playCheer() {
    // Replace 'cheer-audio.mp3' with the actual path to your audio file
    var audio = new Audio('CHEER.wav');
    audio.play();
}

function checkPalindrome() {
    // Get the input value
    var input = document.getElementById('inputField').value;

    // Check if it's a palindrome
    if (isPalindrome(input)) {
        // Show a congratulation message
        alert('Congratulations! You entered a palindrome!');
        // Play the cheer sound effect
        playCheer();
    } else {
        alert('Sorry, try again. This is not a palindrome.');
    }
}

/* playEven and odds() is a function used to simulate a evan and odds game.
    //use for the week 3 assignment
    */
    function playEvenandodds() {
        console.log("playEvensandodds() started");
         //roll the dice
         var die1= 1 + Math.floor(20* Math.random());
         console.log(die1);
         document.getElementById("die1Res").innerHTML = die1
         var die2= Math.ceil(20* Math.random());
         console.log(die2);
         document.getElementById("die2Res").innerHTML = die2
        
         //find sum of the two dice
         var sum = die1 + die2;
         console.log(sum);
         document.getElementById("sumRes").innerHTML = sum
     
         //if sum = 7 or 11 they lose
     if (sum == 7|| sum == 11){
         document.getElementById("FinRes").innerHTML = "You lose! Please try again."
     }
         //if sum doubles and even, then they win
         else if (die1 == die2 && die1%2 == 0){
             document.getElementById("FinRes").innerHTML = "You Win! Great Job."
         } else{  
         //otherwise, they draw
         document.getElementById("FinRes").innerHTML = "You did not win or lose. Try your luck again.";
         }
     }
     /*
     While loop Examples
     */
     function whileLoopExample(){
       
       /*while(true){
         console.log("Looping");
       }*/
     
       let i = 0;
     
       while(i < 10){
         console.log(i);
         i++;
       }
     
       let j = 0
       
       while(j != 2){
         console.log("Not 2: "  + j);
         j = 1 + Math.floor(6 * Math.random());
     }
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
         //Infinte Loop
        /*while(true){
         console.log("Infinte loop");
        }*/
        // Loop that counts up 10 times.
        /*let i = 0;
        while(i < 10){
         console.log(i);
         i++;
     }*/
     // Loop that exits using sentinel
     /*let j = 0;
     while(j != 2){
         console.log("Not 2: "  + j);
         j = 1 + Math.floor(6 * Math.random());
     }
     document.getElementById("whileRes").innerHTML = "Got 2!";*/
     
     }
     
     /*
     Do-While Loop Examples
     */
     function doWhileLoopExample(){
         let i = 0;
         
         do{
             console.log(i);
             i++;
         } while(i < 0)
         
         document.getElementById("doWhileRes").innerHTML = i;
     }
     
     /*
     For Loop Example
     */
     function ForLoopExample(){
         // i += 2, i = 1 + (2 * i)
         // for (;;)
         for(let i = 0; i < 100; i = 1 + (2 * i)){
             console.log(i);
         }
         document.getElementById("forLoopRes").innerHTML = "For Loop Terminated!";
         /*for(let i = 0; i < 10; i++){
             console.log("Outer Loop: " + i);
             for(let j = 0; j < 10; j++){
                 console.log(Inner Loop: " + i);
             }
         }*/
     }

     function isPalindrome(str){
        str = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // Convert to lowercase and remove non-alphanumeric characters//
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
    }
    function checkPalindrome() {
  const inputElement = document.getElementById("input-string");
  const resultElement = document.getElementById("result");
  const inputString = inputElement.value;

  if (isPalindrome(inputString)) {
    resultElement.textContent = `"${inputString}" is a palindrome!`;
  } else {
    resultElement.textContent = `"${inputString}" is not a palindrome.`;
  }
}


/*function sayLol(timestamp) {
    document.write("<input type='Button' value='lol'>");
    //requestAnimationFrame(sayLol);
}*/

/*function addButton() {
    var inputElement = document.createElement("input");
    inputElement.setAttribute("type", "Button");
    inputElement.setAttribute("value","New Button");

    var parent = document.getElementById("memeParagraph");
    parent.appendChild(inputElement);

    var newParagraph = document.createElement("p");

    var paragraphText = document.createTextNode("New Paragraph");

    newParagraph.appendChild(paragraphText);

    parent.appendChild(newParagraph);
}*/

function addButtons() {
    console.log("Adding Buttons!");

     let inputElementStart = document.createElement("input");
     inputElementStart.setAttribute("type", "button");
     inputElementStart.setAttribute("value", "Start");
     inputElementStart.setAttribute("id", "startButton");
     inputElementStart.setAttribute("onclick", "startButton()");

    let inputElementStop = document.createElement("input");
    inputElementStop.setAttribute("type", "button");
    inputElementStop.setAttribute("value", "Stop");
    inputElementStop.setAttribute("id", "stopButton");
    inputElementStop.setAttribute("onclick","stopButton()");
    inputElementStop.setAttribute("disabled", "true");

    let parent = document.getElementById("memeParagraph");
    parent.appendChild(inputElementStart);
    parent.appendChild(inputElementStop);
}

function startButton() {
    console.log("Pressed Start!");
    let inputElementStart = document.getElementById("startButton");
    inputElementStart.setAttribute("disabled", "true");

    let inputElementStop = document.getElementById("stopButton");
    inputElementStop.removeAttribute("disabled");

   let memeImage = document.getElementById("memeImage")
   memeImage.style.animationDuration = "3s";
}

function stopButton() {
    let inputElementStart = document.getElementById("startButton");
    inputElementStart.removeAttribute("disabled");

    let inputElementStop = document.getElementById("stopButton");
    inputElementStop.setAttribute("disabled", "true");

    let memeImage = document.getElementById("memeImage")
    memeImage.style.animationDuration = "3||1s";
}