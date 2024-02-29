document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.menu a');

    links.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
});



// typed js & skills 
var typed = new Typed(".typing-text", {
    strings: ["Frontend Development", "Backend Development", "Web Designing", "Web Development"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});

// <!-- typed js effect ends -->



async function fetchData(type = "skills") {
    try {
        const response = await fetch(type === "skills" ? "skills.json" : "./projects/projects.json");
        
        if (!response.ok) {
            // Check for a more descriptive error message in the response
            const errorText = await response.text();
            throw new Error(`Error: ${response.status} - ${errorText}`);
        }
    
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}




function showSkills(skills) {
    const skillsContainer = document.getElementById("skill-container");
    let skillHTML = "";

    skills.forEach(skill => {
        skillHTML += `
                <div class="skill-card">
                    <img src="${skill.icon}" alt="${skill.name}" />
                    <span style="color:white;">${skill.name}</span>
                </div>`;
    });

    skillsContainer.innerHTML = skillHTML;
}

// Call fetchData with the appropriate type (default is "skills")
fetchData().then(data => {
    if (data) {
        showSkills(data);
    }
});
// tilt js
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});

// scroll-reveal effect

const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .left-text p', { delay: 200 });
srtop.reveal('.home .left-text .bt', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .facebook', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .aboutme', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .skill-container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .card', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });