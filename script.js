/* ===========================
COPY EMAIL FUNCTION
=========================== */

function copyEmail() {

```
navigator.clipboard.writeText("Jennyfo1010@gmail.com");

alert("Email copied successfully: Jennyfo1010@gmail.com");
```

}

/* ===========================
AI JD MATCHER
=========================== */

function analyzeJD() {

```
let jd = document.getElementById("jdInput").value.toLowerCase();

if (jd.trim() === "") {
    alert("Please paste a job description first.");
    return;
}

let matchedSkills = [];
let missingSkills = [];

let score = 45;


/* YOUR SKILLS DATABASE */

const skillDatabase = {

    "operations": "Operations Management",

    "logistics": "Cross Border Logistics",

    "supply chain": "Supply Chain Operations",

    "data analysis": "Data Analysis",

    "excel": "Excel Analysis",

    "kpi": "KPI Monitoring",

    "stakeholder": "Stakeholder Management",

    "cross functional": "Cross Functional Collaboration",

    "ecommerce": "E-commerce Operations",

    "customer": "Customer Operations",

    "project management": "Project Management",

    "product": "Product Operations",

    "growth": "Growth Operations",

    "ai": "AI Workflow Integration"

};


/* SKILL CHECK */

for (let keyword in skillDatabase) {

    if (jd.includes(keyword)) {

        matchedSkills.push(skillDatabase[keyword]);

        score += 4;

    }

}


/* POSSIBLE MISSING SKILLS */

const futureSkills = [

    "SQL",

    "Python",

    "Tableau",

    "Power BI",

    "Forecasting",

    "Inventory Planning",

    "Financial Modeling"

];


futureSkills.forEach(skill => {

    if (!jd.includes(skill.toLowerCase())) {

        missingSkills.push(skill);

    }

});


/* SCORE LIMIT */

if (score > 95) {

    score = 95;

}


/* GENERATE RESULT */

let resultHTML = `

    <h3>Compatibility Score: ${score}%</h3>

    <br>

    <strong>Strong Matches</strong>

    <ul>
`;


matchedSkills.forEach(skill => {

    resultHTML += `<li>✓ ${skill}</li>`;

});


resultHTML += `

    </ul>

    <br>

    <strong>Potential Skill Gaps</strong>

    <ul>
`;


missingSkills.slice(0,4).forEach(skill => {

    resultHTML += `<li>△ ${skill}</li>`;

});


resultHTML += `

    </ul>
`;


document.getElementById("result").style.display = "block";

document.getElementById("result").innerHTML = resultHTML;
```

}
