document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let workCompatibility = 0;
    let partnerCompatibility = 0;

    // Work Compatibility Calculation
    const workQ1 = document.querySelector('input[name="work_q1"]:checked');
    const workQ2 = document.querySelector('input[name="work_q2"]:checked');

    if (workQ1 && workQ1.value === "Team") workCompatibility++;
    if (workQ2 && workQ2.value === "Yes") workCompatibility++;

    // Partner Compatibility Calculation
    const partnerQ1 = document.querySelector('input[name="partner_q1"]:checked');
    const partnerQ2 = document.querySelector('input[name="partner_q2"]:checked');

    if (partnerQ1 && partnerQ1.value === "Long-term") partnerCompatibility++;
    if (partnerQ2 && partnerQ2.value === "Very Important") partnerCompatibility++;

    // Determine the compatibility results
    let resultText = "";

    if (workCompatibility > partnerCompatibility) {
        resultText = "You are more compatible with work environments!";
    } else if (partnerCompatibility > workCompatibility) {
        resultText = "You are more compatible with personal relationships!";
    } else {
        resultText = "You are well-balanced between work and personal relationships!";
    }

    // Redirect to the result page with the result text
    window.location.href = `result_page.html?result=${encodeURIComponent(resultText)}`;
});
