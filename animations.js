function scrollToProjects() {
    const projectsSection = document.getElementById("projects");
    const offset = -120; // Adjust this value as needed for spacing

    const topPosition = projectsSection.getBoundingClientRect().top + window.scrollY + offset;

    window.scrollTo({
        top: topPosition,
        behavior: "smooth"
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, observerOptions);

    document.querySelectorAll(".project-card, .skill-item").forEach(element => {
        element.classList.add("fade-out");
        observer.observe(element);
    });
});


function animateSkills() {
    const completedSkills = document.querySelectorAll('.completed-skills span');
    const upcomingSkills = document.querySelectorAll('.upcoming-skills span');

    completedSkills.forEach((skill, index) => {
        setTimeout(() => {
            skill.style.opacity = '1';
            skill.style.transform = 'scale(1)';
        }, index * 100);
    });

    upcomingSkills.forEach((skill, index) => {
        setTimeout(() => {
            skill.style.opacity = '1';
            skill.style.transform = 'scale(1)';
        }, (index + completedSkills.length) * 100);
    });
}

window.addEventListener('scroll', () => {
    const skillsSection = document.querySelector('#skills');
    const skillsTop = skillsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (skillsTop < windowHeight - 100) {
        animateSkills();
    }
});

gsap.from(".project-card", {
    scrollTrigger: ".project-card",
    opacity: 0,
    y: 50,
    duration: 0.6,
    stagger: 0.2
});

gsap.from(".badge", {
    scrollTrigger: ".badge",
    opacity: 0,
    y: 30,
    duration: 0.5,
    stagger: 0.15
});

gsap.from(".completed-skills span", {
    scrollTrigger: {
        trigger: "#skills",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: 30,
    duration: 0.5,
    stagger: 0.1
});

gsap.from(".upcoming-skills span", {
    scrollTrigger: {
        trigger: "#skills",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: 30,
    duration: 0.5,
    stagger: 0.1
});


document.addEventListener('DOMContentLoaded', function () {
    console.log('Initializing particles'); // For debugging

    particlesJS('particles-js-hero', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
            },
            move: { enable: true, speed: 2 }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
                resize: true
            },
            modes: {
                repulse: { distance: 100, duration: 0.4 }
            }
        },
        retina_detect: true
    },
    
    particlesJS('particles-js-projects', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.2 },
            size: { value: 1.5 },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.1,
                width: 1
            },
            move: { enable: true, speed: 2 }
        }
    }));

    particlesJS('particles-js-skills', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.2 },
            size: { value: 1.5 },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.1,
                width: 1
            },
            move: { enable: true, speed: 2 }
        }
    });

    particlesJS('particles-js-about', {
        particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.2 },
            size: { value: 2 },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.1,
                width: 1
            },
            move: { enable: true, speed: 1.5 }
        }
    });
});

// Scrollify Initialization
$(document).ready(function () {
    if ($.scrollify) {
        $.scrollify({
            section: ".section",
            sectionName: false,
            scrollSpeed: 800,
            easing: "easeOutExpo",
            scrollbars: true,
            before: function (index, sections) {
                // Enable or disable scroll buttons based on index
                $('#scroll-up').prop('disabled', index === 0);
                $('#scroll-down').prop('disabled', index === sections.length - 1);
            },
        });
    }

    // Scroll Up Button Event
    $("#scroll-up").click(function () {
        $.scrollify.previous();
    });

    // Scroll Down Button Event
    $("#scroll-down").click(function () {
        $.scrollify.next();
    });
});