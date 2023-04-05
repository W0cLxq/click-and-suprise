function click() {
    console.log("hello");
    var randomLib = Math.floor(Math.random() * 2);
    document.location.href = "./library/1/1.html" // + toString(randomLib) + "/" + toString(randomLib) + ".html";
}