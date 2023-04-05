const hack_status = document.getElementById("hack-status");
const jokejump = document.getElementById("jokeJump");

function hackerApp() { 
    hack_status.innerText = "HACK ONLINE!"
    var j = new Audio('j.mp3');
    j.loop = false;
    j.play();
    setTimeout(() => {
        hack_status.innerText = "Your computer is being hacked!"
        document.body.title = "JOKE!" 
        jokejump.style.width = "100%"
        jokejump.style.height = "900px"
        jokejump.style.visibility = "visible";
    }, 1000);
}