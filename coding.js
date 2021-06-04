player_1_name = localStorage.getItem("Player1");
player_2_name = localStorage.getItem("Player2");
player_1_score = 0;
player_2_score = 0;
question_turn = "Player 1";
answer_turn = "Player 2";
word="";
function names(){
    document.getElementById("question_turn").innerHTML = localStorage.getItem("Player1");
    document.getElementById("answer_turn").innerHTML = localStorage.getItem("Player2");
    document.getElementById("player_1_name_game").innerHTML = localStorage.getItem("Player1")+" : ";
    document.getElementById("player_2_name_game").innerHTML = localStorage.getItem("Player2")+" : ";
}
function send(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    question = "<h4 id='num_display'> Question. "+num1+" x "+num2+" = </h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    word = num1 * num2;
    
}
function check(){
    answer = document.getElementById("input_check_box").value;
    console.log(word);
    if(answer == word){
        if(answer_turn == "Player 1"){
            player_1_score = player_1_score + 1;
            document.getElementById("score_player_1_game").innerHTML = player_1_score;
        }else{
            player_2_score = player_2_score + 1;
            document.getElementById("score_player_2_game").innerHTML = player_2_score;
        }
    }
    if(question_turn == "Player 1"){
        question_turn = "Player 2";
        document.getElementById("question_turn").innerHTML = player_2_name;
    }else{
        question_turn = "Player 1";
        document.getElementById("question_turn").innerHTML = player_1_name;
    }

    if(answer_turn == "Player 1"){
        answer_turn = "Player 2";
        document.getElementById("answer_turn").innerHTML = player_2_name;
    }else{
        answer_turn = "Player 1";
        document.getElementById("answer_turn").innerHTML = player_1_name;
    }
    document.getElementById("output").innerHTML = "";
}