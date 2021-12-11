window.addEventListener('load', (event) => {
    var startButton = document.getElementsByClassName("start-button");
    var quizFooter = document.querySelector(".quiz-footer");

    startButton[0].addEventListener("mouseenter", function () {
        quizFooter.style.backgroundColor = "#1FD9FF";
    });

    startButton[0].addEventListener("mouseleave", () => {
        quizFooter.removeAttribute("style");
    });
});
