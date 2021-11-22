$(document).ready(function() {
var scoreCount = 0;

function updateScore(n) {
    scoreCount += n;
    scoreCountString = scoreCount.toString();
    $("#score-count").text(scoreCountString + " Points");
    console.log(scoreCountString);
}
// API Get Requests for Questions
$.get(
    "https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple",
    function(data) {
    sport = data.results;
    }
);
$.get(
    "https://opentdb.com/api.php?amount=10&category=26&difficulty=medium&type=multiple",
    function(data) {
    celebrities = data.results;
    }
);
  $.get(
    "https://opentdb.com/api.php?amount=3&category=18&type=multiple",
    function(data) {
    science = data.results;
    }
);


 // Show Questions
  // Sport
$("#q1").click(function() {
    $("#q1").html(
    "<div class='text-center'> <p>" +
        sport[0].question +
        "</p> <p>" +
        sport[0].incorrect_answers[0] +
        "</p> <p>" +
        sport[0].incorrect_answers[1] +
        "</p> <p>" +
        sport[0].correct_answer +
        "</p> <p>" +
        sport[0].incorrect_answers[2] +
        "</p></div>"
    );
});
$("#q2").click(function() {
    $("#q2").html(
    "<div class='text-center'> <p>" +
        sport[1].question +
        "</p> <p>" +
        sport[1].incorrect_answers[0] +
        "</p> <p>" +
        sport[1].correct_answer +
        "</p> <p>" +
        sport[1].incorrect_answers[1] +
        "</p> <p>" +
        sport[1].incorrect_answers[2] +
        "</p></div>"
    );
});
$("#q3").click(function() {
    $("#q3").html(
        "<div class='text-center'> <p>" +
        sport[2].question +
        "</p> <p>" +
        sport[2].correct_answer +
        "</p> <p>" +
        sport[2].incorrect_answers[0] +
        "</p> <p>" +
        sport[2].incorrect_answers[1] +
        "</p> <p>" +
        sport[2].incorrect_answers[2] +
        "</p></div>"
    );
});
  // Celebrities
$("#q4").click(function() {
    $("#q4").html(
    "<div class='text-center'> <p>" +
        celebrities[0].question +
        "</p> <p>" +
        celebrities[0].incorrect_answers[0] +
        "</p> <p>" +
        celebrities[0].incorrect_answers[1] +
        "</p> <p>" +
        celebrities[0].correct_answer +
        "</p> <p>" +
        celebrities[0].incorrect_answers[2] +
        "</p></div>"
    );
});
$("#q5").click(function() {
    $("#q5").html(
    "<div class='text-center'> <p>" +
        celebrities[1].question +
        "</p> <p>" +
        celebrities[1].incorrect_answers[0] +
        "</p> <p>" +
        celebrities[1].correct_answer +
        "</p> <p>" +
        celebrities[1].incorrect_answers[1] +
        "</p> <p>" +
        celebrities[1].incorrect_answers[2] +
        "</p></div>"
    );
    });
    $("#q6").click(function() {
        $("#q6").html(
        "<div class='text-center'> <p>" +
        celebrities[2].question +
        "</p> <p>" +
        celebrities[2].correct_answer +
        "</p> <p>" +
        celebrities[2].incorrect_answers[0] +
        "</p> <p>" +
        celebrities[2].incorrect_answers[1] +
        "</p> <p>" +
        celebrities[2].incorrect_answers[2] +
        "</p></div>"
    );
});
  // Science
$("#q7").click(function() {
    $("#q7").html(
        "<div class='text-center'> <p>" +
        science[0].question +
        "</p> <p>" +
        science[0].incorrect_answers[0] +
        "</p> <p>" +
        science[0].incorrect_answers[1] +
        "</p> <p>" +
        science[0].correct_answer +
        "</p> <p>" +
        science[0].incorrect_answers[2] +
        "</p></div>"
    );
});
    $("#q8").click(function() {
        $("#q8").html(
        "<div class='text-center'> <p>" +
            science[1].question +
            "</p> <p>" +
            science[1].incorrect_answers[0] +
            "</p> <p>" +
            science[1].correct_answer +
            "</p> <p>" +
            science[1].incorrect_answers[1] +
            "</p> <p>" +
            science[1].incorrect_answers[2] +
            "</p></div>"
        );
});
    $("#q9").click(function() {
        $("#q9").html(
        "<div class='text-center'> <p>" +
            science[2].question +
            "</p> <p>" +
            science[2].correct_answer +
            "</p> <p>" +
            science[2].incorrect_answers[0] +
            "</p> <p>" +
            science[2].incorrect_answers[1] +
            "</p> <p>" +
            science[2].incorrect_answers[2] +
            "</p></div>"
        );
    });
});