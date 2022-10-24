var timeLeft=75;
var submitButton=document.getElementById("submit");
var formElement=document.getElementById("name");
var form=document.getElementById("initials");
var infoElement=document.getElementsByClassName("info-box");
var buttonElement=document.getElementById("btn");
var infoBox=document.getElementById("info");
var questionElement = document.getElementById("questionDisplay");
var currentIndex = 0;
 var questions=["What does HTML stand for?","What does CSS stand for?","Where should a CSS be referenced in a HTML file?","Which of these is a genuine tag keyword?"];
 var options = [
    ["Hyper Tag Markup language","Hyper Text Markup Language","Hyperlinks Text Mark Language", "Hyperlinking Text Marking Language"],
    ["Computing Style Sheet","Creative Stly System","Cascadian Styling Sheet", "Creative Styling Sheet"],
    ["Before any HTML code","After all HTML code","Inside the head section", "Inside the body section"],
    ["Header","Bold","Body","Image"],
    ]
 var answers=["Hyper Text Markup Language","Cascadian Styling Sheet","Inside the head section","Body"]
var clockMedia;
function timeDown(){
    if(timeLeft<=0){
        clearInterval(clockMedia);
        endGame();
    }
    else { 
        timeLeft--;

    }
    var time=document.getElementById("time");
    time.textContent=timeLeft;
}

function startTimer(){
//forEach//
    infoBox.remove(), 
    clockMedia=setInterval(timeDown, 1000)
    makeQuestion();
}

function checkOption(userSelected){
    console.log("Running for", userSelected)
    if ( userSelected != answers[currentIndex]){
        timeLeft-=15,
        alert("wrong!");
        
        
    }
    if (userSelected == answers[currentIndex]){
        alert("right!");
    }
    
    if (currentIndex < answers.length - 1){
        currentIndex++;
        makeQuestion();
    } else {
        endGame();
       
    }
}

function makeQuestion(){
    questionElement.innerHTML = `
    <div>
        <h3>${questions[currentIndex]}</h3>
        <ol>
            <li onclick="checkOption('${options[currentIndex][0]}')">${options[currentIndex][0]}</li>
            <li onclick="checkOption('${options[currentIndex][1]}')">${options[currentIndex][1]}</li>
            <li onclick="checkOption('${options[currentIndex][2]}')">${options[currentIndex][2]}</li>
            <li onclick="checkOption('${options[currentIndex][3]}')">${options[currentIndex][3]}</li>
        </ol>
    </div>
    `
   
    
}

// function submitEl(){
//     document.getElementById("name").submit();
//     console.log("name");

// }

function endGame(){
    clearInterval(clockMedia);
    questionElement.innerHTML = "End Game"
   form.style.display="block"; 
}


// submitButton.addEventListener("click",submitEl);

buttonElement.addEventListener("click", startTimer);

