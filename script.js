/* ===========================
   EXPERIENCE MAP INTERACTION
=========================== */

function showExperience(location){

    const detail = document.getElementById("experienceDetail");

    const experiences = {

        singapore: `
        <h4>Singapore 🇸🇬</h4>
        <br>
        <strong>COMONE INT'L LOGISTICS PTE. LTD.</strong>
        <br><br>

        Role: Operations Executive
        <br><br>

        Duration: Jan 2025 – Present
        <br><br>

        Scope:
        <br>
        • Cross-border logistics execution
        <br>
        • Customs clearance coordination
        <br>
        • Shipment operations management
        <br>
        • Warehouse and transportation coordination
        <br>
        • KPI monitoring and operational reporting
        `,



        beijing: `
        <h4>Beijing 🇨🇳</h4>
        <br>

        <strong>Kuaishou Technology</strong>
        <br>
        E-Commerce Operations Intern
        <br>
        Oct 2023 – Jan 2024
        <br><br>

        Scope:
        <br>
        • Double 11 campaign operations
        <br>
        • Merchant acquisition and reactivation
        <br>
        • Livestream KPI monitoring
        <br>
        • 29M+ daily GMV support
        <br><br>

        <strong>Mafengwo</strong>
        <br>
        Growth Marketing Intern
        <br>
        Apr 2023 – Jul 2023
        <br><br>

        Scope:
        <br>
        • Community operations (3300+ users)
        <br>
        • KOL collaboration
        <br>
        • Conversion optimization (+86%)
        `,



        haikou: `
        <h4>Haikou 🇨🇳</h4>
        <br>

        <strong>Digital Hainan</strong>
        <br>
        Product Operations Intern
        <br>
        Jul 2023 – Aug 2023
        <br><br>

        Scope:
        <br>
        • Product prototype design
        <br>
        • PRD writing
        <br>
        • DAU monitoring
        <br>
        • SOP development
        <br><br>

        <strong>UniFuture Technology</strong>
        <br>
        Creator Partnership Intern
        <br>
        Jan 2023 – Feb 2023
        <br><br>

        Scope:
        <br>
        • Overseas creator acquisition
        <br>
        • 100+ creator onboarding
        <br>
        • TikTok / Instagram outreach
        `

    };

    detail.innerHTML = experiences[location];

}



/* ===========================
   AI JD MATCHER
=========================== */

function analyzeJD(){

    const jd = document.getElementById("jdInput").value.toLowerCase();

    const mySkills = [

        "operations",
        "business operations",
        "cross-functional",
        "stakeholder",
        "analytics",
        "kpi",
        "growth",
        "e-commerce",
        "merchant",
        "product",
        "campaign",
        "logistics",
        "excel",
        "ai",
        "process improvement"

    ];

    const missingSkillsPool = [

        "sql",
        "python",
        "tableau",
        "automation",
        "strategy",
        "data analysis",
        "power bi",
        "product management"

    ];


    let matched = [];
    let missing = [];


    mySkills.forEach(skill=>{

        if(jd.includes(skill)){

            matched.push(skill);

        }

    });


    missingSkillsPool.forEach(skill=>{

        if(jd.includes(skill)){

            missing.push(skill);

        }

    });


    let score = 50 + matched.length * 5;

    if(score > 95){

        score = 95;

    }


    let positioning = "";


    if(jd.includes("strategy")){

        positioning =
        "Strong transferable fit for Strategy Operations positions.";

    }

    else if(jd.includes("product")){

        positioning =
        "Strong adjacent fit for Product Operations opportunities.";

    }

    else if(jd.includes("analyst")){

        positioning =
        "Transferable profile for Business Analyst roles.";

    }

    else if(jd.includes("growth")){

        positioning =
        "Highly aligned with Growth Operations opportunities.";

    }

    else{

        positioning =
        "Broad operational experience creates strong transferable capability.";

    }



    document.getElementById("matchScore").innerHTML =
        "<h2>Match Score: " + score + "%</h2>";



    document.getElementById("strengths").innerHTML =
        "<br><strong>Strong Matches</strong><br>✓ " +
        (matched.length ? matched.join("<br>✓ ") : "General operational fit");



    document.getElementById("missingSkills").innerHTML =
        "<br><strong>Skills To Strengthen</strong><br>✗ " +
        (missing.length ? missing.join("<br>✗ ") : "No major capability gaps detected");



    document.getElementById("positioning").innerHTML =
        "<br><strong>Suggested Positioning</strong><br>" +
        positioning;

}



/* ===========================
   FADE-IN ANIMATION
=========================== */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

});


const sections = document.querySelectorAll(".section");

sections.forEach((section)=>{

    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "all 0.8s ease";

    observer.observe(section);

});
