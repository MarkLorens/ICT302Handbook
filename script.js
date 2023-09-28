function readMoreFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var myButton = document.getElementById("myReadMoreButton");

    if (dots.style.display == "none") {
        dots.style.display = "inline";
        myButton.innerHTML = "Read more";
        moreText.style.display = "none";
    }
    else {
        dots.style.display = "none";
        myButton.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}