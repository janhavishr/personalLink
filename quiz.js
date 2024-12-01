document.getElementById("quizForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let introvertScore = 0;
    let extrovertScore = 0;
    let ambivertScore = 0;

    const questions = document.querySelectorAll(".question");
    questions.forEach(function(question) {
        const selectedOption = question.querySelector('input[type="radio"]:checked');
        if (selectedOption) {
            if (selectedOption.value === "Introvert") {
                introvertScore++;
            } else if (selectedOption.value === "Extrovert") {
                extrovertScore++;
            } else if (selectedOption.value === "Ambivert") {
                ambivertScore++;
            }
        }
    });

    let result = "";
    if (introvertScore > extrovertScore && introvertScore > ambivertScore) {
        result = "Introvert";
    } else if (extrovertScore > introvertScore && extrovertScore > ambivertScore) {
        result = "Extrovert";
    } else if (ambivertScore > introvertScore && ambivertScore > extrovertScore) {
        result = "Ambivert";
    } else {
        result = "Mixed Personality";
    }

    window.location.href = `result_page.html?result=${result}`;
});
