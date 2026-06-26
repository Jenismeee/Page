// AI JD MATCHER

function analyzeJD() {

    const jd = document.getElementById("jdInput").value.toLowerCase();

    const mySkills = [
        "business operations",
        "operations",
        "cross-functional",
        "stakeholder management",
        "analytics",
        "kpi",
        "product operations",
        "growth",
        "e-commerce",
        "merchant",
        "campaign",
        "process improvement",
        "customer operations",
        "logistics",
        "supply chain",
        "excel",
        "google sheets",
        "ai"
    ];


    const premiumSkills = [
        "sql",
        "tableau",
        "python",
        "power bi",
        "data analysis",
        "strategy",
        "product management",
        "business analyst",
        "automation"
    ];


    let matched = [];
    let missing = [];


    mySkills.forEach(skill => {
        if (jd.includes(skill)) {
            matched.push(skill);
        }
    });


    premiumSkills.forEach(skill => {
        if (jd.includes(skill) && !mySkills.includes(skill)) {
            missing.push(skill);
        }
    });


    let score = 45 + matched.length * 6;

    if (score > 95) {
        score = 95;
    }


    let transferable = "";


    if (jd.includes("strategy")) {
        transferable =
            "Strong fit for Strategy Operations positioning.";
    }

    else if (jd.includes("analyst")) {
        transferable =
            "Transferable profile for Business Analyst roles.";
    }

    else if (jd.includes("product")) {
        transferable =
            "Strong adjacent fit for Product Operations roles.";
    }

    else if (jd.includes("growth")) {
        transferable =
            "Relevant growth and merchant operations experience detected.";
    }

    else {
        transferable =
            "Broad operations experience provides strong transferable capability.";
    }



    document.getElementById("matchScore").innerHTML =
        "<h2>Match Score: " + score + "%</h2>";


    document.getElementById("strengths").innerHTML =
        "<br><strong>Strong Matches</strong><br>✓ " +
        (matched.length ? matched.join("<br>✓ ") : "General operations capability");


    document.getElementById("missingSkills").innerHTML =
        "<br><strong>Missing / Strengthen Next</strong><br>✗ " +
        (missing.length ? missing.join("<br>✗ ") : "No major gaps detected");


    document.getElementById("positioning").innerHTML =
        "<br><strong>Suggested Positioning</strong><br>" +
        transferable;

}
