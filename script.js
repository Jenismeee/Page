/* =========================
   EMAIL COPY
========================= */

function copyEmail() {

    navigator.clipboard.writeText("Jennyfo1010@gmail.com");

    alert("Email copied: Jennyfo1010@gmail.com");

}



/* =========================
   JD MATCHER ENGINE
========================= */

function analyzeJD() {

    const input = document
        .getElementById("jdInput")
        .value
        .toLowerCase();

    const resultBox =
        document.getElementById("resultBox");


    let score = 35;

    let strengths = [];

    let missing = [];



    /* OPERATIONS */

    if (
        input.includes("operations") ||
        input.includes("execution") ||
        input.includes("coordination")
    ) {

        score += 20;

        strengths.push(
            "Strong operations execution experience"
        );

    } else {

        missing.push(
            "Direct operational execution requirements"
        );
    }



    /* DATA */

    if (

        input.includes("excel") ||

        input.includes("analytics") ||

        input.includes("data") ||

        input.includes("sql") ||

        input.includes("kpi")

    ) {

        score += 15;

        strengths.push(
            "KPI monitoring and analytical thinking"
        );

    } else {

        missing.push(
            "Advanced data analytics background"
        );
    }



    /* BUSINESS */

    if (

        input.includes("business") ||

        input.includes("strategy") ||

        input.includes("growth")

    ) {

        score += 15;

        strengths.push(
            "Business growth and strategy exposure"
        );

    } else {

        missing.push(
            "Business strategy experience"
        );
    }



    /* CROSS FUNCTIONAL */

    if (

        input.includes("stakeholder") ||

        input.includes("cross-functional") ||

        input.includes("project management")

    ) {

        score += 10;

        strengths.push(
            "Cross-functional collaboration ability"
        );

    } else {

        missing.push(
            "Stakeholder/project management exposure"
        );
    }



    /* AI */

    if (

        input.includes("ai") ||

        input.includes("automation") ||

        input.includes("technology")

    ) {

        score += 10;

        strengths.push(
            "Strong interest in AI workflow adoption"
        );

    }



    if (score > 95) {

        score = 95;
    }



    resultBox.innerHTML = `

        <br>

        <h3>Match Score: ${score}%</h3>

        <br>

        <strong>Strong Matches:</strong>

        <br><br>

        ${strengths.map(item =>
            "✓ " + item
        ).join("<br>")}

        <br><br>

        <strong>Potential Gaps:</strong>

        <br><br>

        ${missing.map(item =>
            "• " + item
        ).join("<br>")}

    `;

}



/* =========================
   SCROLL ANIMATION
========================= */

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");
            }

        });

    },

    {
        threshold:0.15
    }

);



document.querySelectorAll(".section").forEach(

    section => {

        section.classList.add("hidden");

        observer.observe(section);

    }

);
