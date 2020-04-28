
function ageInDays() {

var birthyear = prompt("In Which Year you Were Born? ");
var numberOfDays = (2020- birthyear)*365;
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode('You are'+ ' ' + numberOfDays + "   days old");
h1.setAttribute('id','ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
console.log(numberOfDays)


}

function reset(){
document.getElementById('ageInDays').remove();

}


function generateCat(){

    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src ="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg"
    div.appendChild(image)

}

function rpsGame(yourChoice) {

console.log(yourChoice);
var humanChoice, botChoice;
humanChoice = yourChoice.id;
botChoice = numbertochoice(randtorpsintt());
console.log(botChoice);
results = decideWinner(humanChoice, botChoice);
console.log(results);
message = finalMessage(results);
console.log(message);
rpsfrontend(yourChoice,botChoice,message)

}


function randtorpsintt(){
return Math.floor(Math.random()*3);

}
function numbertochoice(number){

    return ['rock','paper','scissor'][number];
}

function decideWinner(yourChoice, computerChoice)
{
    var rpsDatabase = {
        'rock': {'scissor':1,'rock':0.5,'paper':0},
        'paper': {'rock':1,'paper':0.5,'scissor':0},
        'scissor':{'paper':1, 'scissor':0.5, 'rock':0}
    };
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];
    return [yourScore,computerScore];
    

}
function finalMessage([yourScore, computerScore]) {
if(yourScore === 0){
return{'message' : 'You Lost!','color':'red'};
}else if (yourScore === 0.5){
    return{'message':'You Tied!','color':'yellow'};
}else{return{'message':'You Won!','color':'green'};}

}

function rpsfrontend (humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();
var Choice = humanImageChoice.id;
console.log(Choice);
var humanDiv = document.createElement('div');
var botDiv = document.createElement('div');
var messageDiv = document.createElement('div');

humanDiv.innerHTML="<img src='" + imagesDatabase[Choice] +"' height =150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
botDiv.innerHTML="<img src='" + imagesDatabase[Choice] +"' height =150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"
messageDiv.innerHTML="<h1 style='color: " + finalMessage['color'] + "; font-size:60px; padding: 30px; '>" +finalMessage['message'] +"</h1>"
document.getElementById('flex-box-rps-div').appendChild(humanDiv);
document.getElementById('flex-box-rps-div').appendChild(messageDiv);
document.getElementById('flex-box-rps-div').appendChild(botDiv);

}