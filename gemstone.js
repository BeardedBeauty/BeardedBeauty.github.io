window.onload = function () {
    $(".1").on("click", org);
    $(".2").on("click", prl);
    $(".3").on("click", blu);
    $(".4").on("click", grn);
};

var p1 = $("<p>");
var match = $("#match")
var numb = $("#maker")
var matchInt = Math.floor(Math.random() * (121 - 19)) + 19;
var whatsg;
var gems = [0, 0, 0, 0];
var score = 0;

function reset() {
    console.log(matchInt)
    p1.text(matchInt)
    match.append(p1);

    p1.text(score)
    numb.append(p1);

    for (var q = 0; q < gems.length; q++) {
        gems[q] = random();
    }
    console.log(gems)
}

function random() {
    whatsg = Math.floor(Math.random() * (13 - 1)) + 1;
    return whatsg;
}

function org() {
    console.log(gems[0])
    score = score + gems[0]
    p1.text(score)
    numb.append(p1);
}

function prl() {
    console.log(gems[1])
    score = score + gems[1]
    p1.text(score)
    numb.append(p1);
}

function blu() {
    console.log(gems[2])
    score = score + gems[2]
    p1.text(score)
    numb.append(p1);
}

function grn() {
    console.log(gems[3])
    score = score + gems[3]
    p1.text(score)
    numb.append(p1);
}

reset();