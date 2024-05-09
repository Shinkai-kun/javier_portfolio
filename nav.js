// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector("nav").style.height = "75px";
        document.querySelector("#logoimg").style.width = "80px";
    } else {
        document.querySelector("nav").style.height = "100px";
        document.querySelector("#logoimg").style.width = "100px";
    }
}