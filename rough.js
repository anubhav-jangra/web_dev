var player1 = 0;
var player2 = 0;
var max_score = 5;

var player_1_score = document.getElementById("player_1_score");
var player_2_score = document.getElementById("player_2_score");
var button_1 = document.getElementById("button_1");
var button_2 = document.getElementById("button_2");
var reset = document.getElementById("reset");
var playing_to = document.getElementById("playing_to");
var num_input = document.querySelector("input");

num_input.value = 5;

num_input.addEventListener("change", function() {
    max_score = this.value;
    playing_to.textContent = this.value;
    player1 = 0;
    player2 = 0;
    set_content();
});

player_1_score.textContent = player1;
player_2_score.textContent = player2;


button_1.addEventListener("click", function() {
    if(player1 <= max_score && player2 != max_score)
    {
        player1++;
    }
    set_content();
});
button_2.addEventListener("click", function() {
    if(player2 <= max_score && player1 != max_score)
    {
        player2++;
    }
    set_content();
});
reset.addEventListener("click", function() {
    player1 = 0;
    player2 = 0;
    set_content();
});

var set_content = function() {
    if(player1 <= max_score && player2 <= max_score)
    {
        player_1_score.textContent = player1;
        player_2_score.textContent = player2;
    }
    if(player1 >= max_score)
    {
        player_1_score.style.color = "green";
    }
    else if(player2 >= max_score)
    {
        player_2_score.style.color = "green";
    }
    else
    {
        player_2_score.style.color = "black";
        player_1_score.style.color = "black";
    }
};
