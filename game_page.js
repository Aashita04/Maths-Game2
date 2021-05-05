player1n= localStorage.getItem("name1");
player2n= localStorage.getItem("name2");

player1score=0;
player2score=0;

document.getElementById("player1n").innerHTML=player1n + " : " ;
document.getElementById("player2n").innerHTML=player2n + " : " ;

document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;

document.getElementById("player_q").innerHTML= "Question Turn : " + player1n ;
document.getElementById("player_a").innerHTML= "Answer Turn : " + player2n ;

function send(){
    number1= document.getElementById("number1").value;
    number2= document.getElementById("number2").value;
    actual_answer= parseInt(number1) * parseInt(number2);

    question_number= "<h4>" + number1 + "X" +number2 + "</h4>";
    input_box = "<br> Answer : <input type='text' id='input_check_box'>";
    check_button = "<br> <br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button ;
    document.getElementById("output").innerHTML = row;

    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";

}


question_turn="player1";
answer_turn="player2";

function check(){
    get_answer=document.getElementById("input_check_box").value;

    if (get_answer==actual_answer){

        document.getElementById("msg").innerHTML="Correct Answer!!";

        if (answer_turn=="player1"){
            player1score= player1score+1;
            document.getElementById("player1score").innerHTML=player1score;
        }

        else{
            player2score=player2score+1;
            document.getElementById("player2score").innerHTML=player2score;
        }
    }

    else{
        document.getElementById("msg").innerHTML="Wrong Answer, Correct Answer = " + actual_answer;
    }

    if (question_turn=="player1"){

        question_turn="player2";
        document.getElementById("player_q").innerHTML="Question Turn = " + player2n;
    }

    else{
        question_turn="player1";
        document.getElementById("player_q").innerHTML="Question Turn = " + player1n;
    }

    if (answer_turn=="player1"){

        answer_turn="player2";
        document.getElementById("player_a").innerHTML="Answer Turn = " + player2n;
    }

    else{
        answer_turn="player1";
        document.getElementById("player_a").innerHTML="Answer Turn = " + player1n;
    }

    document.getElementById("output").innerHTML="";
}