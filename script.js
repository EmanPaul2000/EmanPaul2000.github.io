document.addEventListener('DOMContentLoaded', function() {
// JavaScript to calculate age
const birthDate = new Date("2000-08-01"); // Replace with your birthdate
const ageElement = document.getElementById("age");

function calculateAge(birthDate) {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
ageElement.textContent = calculateAge(birthDate);
ageElement.title = `Yes, this was updated using today's date which is - ${new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })} :)`;

// Project-specific content
const projectData = {
    1: {
        title: "Drone Registration System",
        content: 'project1.html',
        chips: ["Angular", "TypeScript", "Firebase", "HTML", "CSS", "JavaScript", "Bootstrap" ]
    },
    2: {
        title: "Fishing Dashboard",
        content: 'project2.html',
        chips: ["Power BI", "SQL", "DAX"]
    },    
    3: {
        title: "Geek Investments",
        content: 'project3.html',
        chips: ["PHP/CakePHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"]
    },
    4: {
        title: "Client Health Tracker",
        content: 'project4.html',
        chips: ["C", "Makefiles", "TCP/IP", "Sockets"]
    } 
};

window.openProjectModal = async function (projectId) {
    const modalTitle = document.getElementById("projectModalLabel");
    const modalContent = document.getElementById("modalContent");
    const modalFooter = document.getElementById("modalFooter");

    try {
        const projectPath = projectData[projectId].content;
        const response = await fetch(`/projects/${projectPath}`);
        if (!response.ok) {
            throw new Error(`Error fetching project content for ID ${projectId}.`);
        }

        const projectHTML = await response.text();

        modalTitle.textContent = projectData[projectId].title;
        modalContent.innerHTML = projectHTML;

        const chipsHTML = projectData[projectId].chips
            .map(chip => `<span class="chip">${chip}</span>`)
            .join("");
        modalFooter.innerHTML = `
            <div class="tech-chips">${chipsHTML}</div>
            <button type="button" class="btn btn-secondary" id="modalCloseBtn" data-bs-dismiss="modal">Close</button>
        `;

        const projectModal = new bootstrap.Modal(document.getElementById('projectModal'));
        projectModal.show();
    } catch (error) {
        console.error("Error loading project:", error);
        modalContent.innerHTML = `<p>Error loading project. Please try again later.</p>`;
    }
};


// ScrollMagic Controller
const controller = new ScrollMagic.Controller();

// Add ScrollMagic scenes to animate each section
document.querySelectorAll(".section").forEach((section) => {
    // Create a ScrollMagic scene for each section
    new ScrollMagic.Scene({
        triggerElement: section,  // Start the animation when the section enters the viewport
        triggerHook: 0.8,         // Trigger when the section is 80% into the viewport
        reverse: false            // Animate only once
    })
    .setClassToggle(section, "visible") // Add class to animate section when in view
    .addTo(controller);
});

document.querySelectorAll('.tech-chips').forEach(container => {
    let isDragging = false;
    let startX, scrollLeft;

    container.addEventListener('mousedown', (e) => {
        isDragging = true;
        container.classList.add('no-select');
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        container.classList.remove('no-select');
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        container.scrollLeft = scrollLeft - (x - startX) * 1.5;
    });
});

document.querySelectorAll('.tech-chips-vertical').forEach(container => {

    
    let isDragging = false;
    let startY, scrollTop;

    container.addEventListener('mousedown', (e) => {
        isDragging = true;
        container.classList.add('no-select');
        startY = e.pageY - container.offsetTop;
        scrollTop = container.scrollTop;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        container.classList.remove('no-select');
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const y = e.pageY - container.offsetTop;
        container.scrollTop = scrollTop - (y - startY) * 1.5;
    });
});

document.querySelectorAll('.completed-skills, .skills-container').forEach(container => {
    
    let isDragging = false;
    let startX, scrollLeft;

    container.addEventListener('mousedown', (e) => {
        isDragging = true;
        container.classList.add('no-select');
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        container.classList.remove('no-select');
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 1.5; // Adjust multiplier for speed
        container.scrollLeft = scrollLeft - walk;
        
        // Add buffer to ensure full scroll to the last card
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 20) {
            container.scrollLeft = container.scrollWidth - container.clientWidth;
        }
    });
});


});

function adjustSectionHeights() {
    const sections = document.querySelectorAll('.section');
    const viewportHeight = window.innerHeight;

    sections.forEach(section => {
        section.style.minHeight = `${viewportHeight}px`;
    });
}

// Set initial heights
adjustSectionHeights();

// Update heights on resize or scaling
window.addEventListener('resize', adjustSectionHeights);


document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('projectModal');

    // Disable Scrollify when the modal opens
    modal.addEventListener('show.bs.modal', () => {
        if ($.scrollify) {
            $.scrollify.disable(); // Disable Scrollify
        }
    });

    // Re-enable Scrollify when the modal closes
    modal.addEventListener('hidden.bs.modal', () => {
        if ($.scrollify) {
            $.scrollify.enable(); // Enable Scrollify
        }
    });
});

// $(document).ready(function () {
//     $('.modal-inner img').each(function () {
//         $(this).elevateZoom({
//             zoomType: "lens", // Lens zoom type
//             lensShape: "round", // Round lens
//             lensSize: 150, // Lens size
//             scrollZoom: true // Enable scroll-to-zoom
//         });
//     });
// });