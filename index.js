document.querySelector(".round").addEventListener("click", function () {
    if (document.querySelector(".left h1").innerHTML === "$19.99") {
        document.querySelector(".left h1").innerHTML = "&dollar;199.99";
        document.querySelector(".mid h1").innerHTML = "&dollar;249.99";
        document.querySelector(".right h1").innerHTML = "&dollar;399.99";
    } else {
        document.querySelector(".left h1").innerHTML = "&dollar;19.99";
        document.querySelector(".mid h1").innerHTML = "&dollar;24.99";
        document.querySelector(".right h1").innerHTML = "&dollar;39.99";
    }
});