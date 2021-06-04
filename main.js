function nextPage(){
    var player1 = document.getElementById("player_1_name").value;
    var player2 = document.getElementById("player_2_name").value;

    localStorage.setItem("Player1", player1);
    localStorage.setItem("Player2", player2);
    window.location = "play_game.html";
}