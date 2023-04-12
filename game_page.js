player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player2_score=0;
player1_score=0;
document.getElementById("player1_name").innerHTML=player1_name;
document.getElementById("player2_name").innerHTML=player2_name;
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_Question").innerHTML="Question Turn"+player1_name;
document.getElementById("player_answer").innerHTML="Answer_turn"+ player2_name;

function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    char1=word.charAt(1)
    console.log(char1);

    lenght_divide2=Math.floor(word.length/2);
    char2=word.charAt(lenght_divide2);
    console.log(char2);

    length_1=word.length-1;
    char3=word.charAt(length_1);
    console.log(char3)

    remove_1=word.replace(char1,"_");
    remove_2=remove_1.replace(char2,"_");
    remove_3=remove_2.replace(char3,"_");
console.log(remove_3);

qustion_name="<h4 id='word2'>Q:"+remove_3+"</h4>";
Input_box="<br> answer:<input type='text' id='input6'>";
checkbutton="<br> <button class='btn btn-info'onclick='check()'>Check</button>";
row=qustion_name+Input_box+checkbutton;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";

}
qustion_turn="player1";
answer_turn="player2";

function check(){
    get_answer=document.getElementById("input6").value;
    answer=get_answer.toLowerCase();
    console.log("answer in LOWERCASE"+answer);
    if(answer==word){
        if(answer_turn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
if(qustion_turn=="player1"){
    qustion_turn="player2";
    document.getElementById("player_Question").innerHTML="Question Turn:"+player2_name;
}
else{
    qustion_turn="player1"
    document.getElementById("player_Question").innerHTML="Question Turn:"+player1_name;
}
if(answer_turn=="player1"){
    answer_turn="player2"
    document.getElementById("player_answer").innerHTML="Answer turn:"+player2_name;
}
else{
    answer_turn="player1"
    document.getElementById("player_answer").innerHTML="Answer turn:"+player1_name;
}
document.getElementById("output").innerHTML="";
}
