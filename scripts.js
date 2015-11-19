/*  Ask no less than 5 questions.
    Keep track of number of correct answers.
    Provide feedback after quiz.
    Give them a rank (Gold, Silver, Bronze, None).
*/

//Score variable.
score = 0;

//ask Objects that contain all the information needed for the question.
function ask(category, number, text, answer){
    this.qCategory = category;
    this.qNumber = number;
    this.qText = text;
    this.qAnswer = answer;
}

//Function to ask the question and check answer.
function askQuestion(obj){
    var qAvar = prompt("Category: "+obj.qCategory+"\n"+"Question "+obj.qNumber+": \n"+obj.qText);
    
    if (obj.qAnswer === qAvar.toUpperCase()){
        score+=1;
        console.log("CORRECT!");
    }
    else{
        console.log("WRONG!");
    }
}

//A function to rank the player.
function ranking(){
    if (score > 9){
        document.write("Congratulations! You answered "+score+" questions correctly! You won a Gold Medal!");
    }
    else if (score <= 9 && score >= 5){
        document.write("Congratulations! You answered "+score+" questions correctly! You won a Silver Medal!");
    }
    else if (score < 5 && score > 0){
        document.write("Congratulations! You answered "+score+" questions correctly! You won a Bronze Medal!");
    }
    else if (score === 0){
        document.write("Aw man, you didn't get any prizes this time. Better luck next time. :)");
    }
}

//Array to hold all the questions.
qArray = [];

qArray[0] = new ask("History",1,"When were the United States of America formed?","1776")
qArray[1] = new ask("History",2,"How many states are there in the USA?","50")
qArray[2] = new ask("History",3,"Who was the first President of the USA?","GEORGE WASHINGTON")
qArray[3] = new ask("History",4,"What's the capital of the USA?","WASHINGTON DC")
qArray[4] = new ask("History",5,"In what year did the American Civil War end?","1865")
qArray[5] = new ask("Gaming",1,"In what year did the Nintendo 64 release in North America?","1996")
qArray[6] = new ask("Gaming",2,"What is the popular game series Grand Theft Auto commonly refered to as?","GTA")
qArray[7] = new ask("Gaming",3,"Finish the title of this popular game series: The Legend of","ZELDA")
qArray[8] = new ask("Gaming",4,"What does the DS in Nintendo DS stand for?","DUAL SCREEN")
qArray[9] = new ask("Gaming",5,"What handheld gaming console was released in the US in 2005?","GAME BOY MICRO")

//for loop to ask all the questions in the array.
for (var i = 0; i < qArray.length; i++){
    askQuestion(qArray[i]);
}

ranking();