var sticker;
window.onscroll = function () {
    var header = document.getElementById("1");
    var sticky = header.offsetTop;
    done = sticky - 91;
    if (done !== 0) {
        sticker = done
    }
    console.log(window.pageYOffset)
    console.log(done)
    console.log(sticker)
    if (window.pageYOffset > done || window.pageYOffset <= 400) {
        header.classList.add("sticky");
        header.classList.remove("d1p1");
        header.classList.remove("d1p2");
    }
    if (window.pageYOffset < sticker) {
        header.classList.remove("sticky");
        header.classList.add("d1p1");
    }
    console.log(window.pageYOffset)
    var q = window.pageYOffset;
    if (q >= 0 && q < 255) {
        $("#divscroll").text("hangman")
    }
    if (q >= 255 && q < 600) {
        $("#divscroll").text("gemstone")
    }
    if (q >= 600 && q < 880) {
        $("#divscroll").text("trivia game: railroads")
    }
    if (q >= 880 && q < 1100) {
        $("#divscroll").text("gif generator")
    }
    if (q > 1100) {
        $("#divscroll").text("Band-Aid music")
    }


    // else if (window.pageYOffset > 401) {
    //     header.classList.add("d1p2");
    //     header.classList.remove("sticky");
    // }
    
    // var header = document.getElementById("2");
    // var sticky = header.offsetTop;
    // done = sticky - 91;
    // if (done !== 0) {
    //     sticker = done
    // }
    // console.log(window.pageYOffset)
    // console.log(done)
    // console.log(sticker)
    // if (window.pageYOffset > done || window.pageYOffset <= 500) {
    //     header.classList.add("sticky");
    //     header.classList.remove("d2p1");
    //     header.classList.remove("d2p2");
    // }
    // if (window.pageYOffset < sticker) {
    //     header.classList.remove("sticky");
    //     header.classList.add("d2p1");
    // }
    // else if (window.pageYOffset > 500) {
    //     header.classList.add("d2p2");
    //     header.classList.remove("sticky");
    // }
    return sticker;
}