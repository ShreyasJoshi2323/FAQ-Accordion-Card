const buttons = document.getElementsByClassName('faq-top');
const arrows = document.getElementsByClassName('arrow');

for (let i = 0; i < buttons.length; i++) {
    for (let j = 0; j < arrows.length; j++) {
        buttons[i].addEventListener('click', function() {
            arrows[i].classList.toggle('arrowactive');
            this.classList.toggle("active");
            let answers = this.nextElementSibling;
            if (answers.style.display === "block") {
                answers.style.display = "none";
            } else {
                answers.style.display = "block";
            }
        });
}
}