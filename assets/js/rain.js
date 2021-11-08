
/*
*
*This javaScript code belongs to https://github.com/florinpop17. Thank you!!
*
*/
function createBall() {
    const ball = document.createElement("div");
    ball.classList.add("ball");

    ball.style.left = Math.random() * 100 + "vw";
    ball.style.animationDuration = Math.random() * 2 + 3 + "s";

    ball.innerText = "🏀";

    document.body.appendChild(ball);

    setTimeout(() => {
        ball.remove();
    }, 5000);
}

setInterval(createBall, 300);