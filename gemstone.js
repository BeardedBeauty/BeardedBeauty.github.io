window.onload = function () {
    $(".1").on("click", button[0]);
    $(".2").on("click", button[1]);
    $(".3").on("click", button[3]);
    $(".4").on("click", button[4]);
    return
};

var p1 = $("<p>");
var p2 = $("<p>");
var pw = $("<p>");
var pl = $("<p>");
var match = $("#match");
var numb = $("#maker");
var w = $("#wins");
var l = $("#loss");
var matchInt;
var whatsg;
var gems = [0, 0, 0, 0];
var score;
var wins = 0;
var losses = 0;


function reset() {
    matchInt = Math.floor(Math.random() * (121 - 19)) + 19;
    console.log(matchInt)
    p2.text(matchInt)
    match.append(p2);

    score = 0;
    p1.text(score)
    numb.append(p1);

    for (var q = 0; q < gems.length; q++) {
        gems[q] = random();
    }
    console.log(gems)

    pw.text(wins)
    w.append(pw);
    pl.text(losses)
    l.append(pl);
}

function random() {
    whatsg = Math.floor(Math.random() * (13 - 1)) + 1;
    return whatsg;
}

function dance() {
    if (score === matchInt) {
        wins++;
        score = 0;
        p1.text(score)
        numb.append(p1);
        alert("whoa dude, you won!")
        reset();
    }
    else if (score > matchInt) {
        losses++;
        score = 0;
        p1.text(score)
        numb.append(p1);
        alert("now now, coulda done better, sad.")
        reset();
    }
}

function button() {
    console.log(gems)
    score = score + gems();
    p1.text(score)
    numb.append(p1);
    dance();
}

function org() {
    console.log(gems[0])
    score = score + gems[0]
    p1.text(score)
    numb.append(p1);
    dance();
}

function prl() {
    console.log(gems[1])
    score = score + gems[1]
    p1.text(score)
    numb.append(p1);
    dance();
}

function blu() {
    console.log(gems[2])
    score = score + gems[2]
    p1.text(score)
    numb.append(p1);
    dance();
}

function grn() {
    console.log(gems[3])
    score = score + gems[3]
    p1.text(score)
    numb.append(p1);
    dance();
}

reset();