document.addEventListener("DOMContentLoaded", function () {
    const subjects = document.querySelectorAll(".subjects");

    subjects.forEach(subject => {
        subject.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.1)";
            this.style.transition = "transform 0.5s ease-in-out";
        });

        subject.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });
});
