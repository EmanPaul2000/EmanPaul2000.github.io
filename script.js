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
            .map(chip => `<span class="badge text-light fw-normal fs-7 me-1 mb-1">${chip}</span>`)
            .join("");

            modalFooter.innerHTML = `
            <div class="row w-100 align-items-start">
                <div class="col-12 tech-chips-container">
                    <div class="tech-chips d-flex flex-wrap justify-content-start">
                        ${chipsHTML}
                    </div>
                </div>
                <div class="col-12 text-end mt-2">
                    <button type="button" class="btn btn-secondary" id="modalCloseBtn" data-bs-dismiss="modal">Close</button>
                </div>
            </div>`;
                
        const projectModal = new bootstrap.Modal(document.getElementById('projectModal'));
        projectModal.show();
    } catch (error) {
        console.error("Error loading project:", error);
        modalContent.innerHTML = `<p>Error loading project. Please try again later.</p>`;
    }
};


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

let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player; 

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-video', {
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerStateChange(event) {
    const carousel = document.querySelector('#modalProjectCarousel');
    if (event.data === YT.PlayerState.PLAYING) {
        bootstrap.Carousel.getInstance(carousel).pause();
    } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
        bootstrap.Carousel.getInstance(carousel).cycle();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Select all carousels
    const carousels = document.querySelectorAll(".carousel-container");

    carousels.forEach((carousel, index) => {
        const track = carousel.querySelector(".carousel-track");
        const items = Array.from(track.children);
        const prevBtn = carousel.querySelector(".carousel-control-prev");
        const nextBtn = carousel.querySelector(".carousel-control-next");

        //let activeIndex = Math.floor(items.length / 2);
        let activeIndex = 0;
        
        const updateCarousel = () => {
            const trackWidth = track.offsetWidth;
            const itemWidth = items[0].offsetWidth;
            const screenWidth = window.innerWidth; // Get the screen width
            const offset = (screenWidth / 2) - (itemWidth / 2) - (activeIndex * itemWidth);
            
            // Move the track
            track.style.transform = `translateX(${offset}px)`;

            // Update active state
            items.forEach((item, itemIndex) => {
                item.classList.toggle("active", itemIndex === activeIndex);
            });
        };

        const moveNext = () => {
            activeIndex = (activeIndex + 1) % items.length;
            updateCarousel();
        };

        const movePrev = () => {
            activeIndex = (activeIndex - 1 + items.length) % items.length;
            updateCarousel();
        };

        // Add event listeners
        nextBtn.addEventListener("click", moveNext);
        prevBtn.addEventListener("click", movePrev);
        console.log("Carousel Initialised");
        // Initialize the carousel
        updateCarousel();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById('projectModal');

    // Variable to hold the current Scrollify index
    let savedIndex = 0;

    // Function to save the current Scrollify index
    function saveScrollifyIndex() {
        if ($.scrollify && $.scrollify.currentIndex() !== undefined) {
            savedIndex = $.scrollify.currentIndex();
        }
    }

    // Event Listener: Save Scrollify index and manage scroll behavior when modal opens
    modal.addEventListener('show.bs.modal', () => {
        if ($.scrollify) {
            saveScrollifyIndex(); // Save the current index
            $.scrollify.disable(); // Disable Scrollify
        }
        // Prevent background scrolling and hide scrollbar
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${getScrollbarWidth()}px`; // Adjust for scrollbar width
    });

    // Event Listener: Restore Scrollify index and reset scroll behavior when modal closes
    modal.addEventListener('hidden.bs.modal', () => {
        if ($.scrollify) {
            $.scrollify.enable(); // Enable Scrollify
            $.scrollify.instantMove(savedIndex); // Move back to the saved position
        }
        // Restore body scrolling and scrollbar
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
    });

    // Utility to calculate scrollbar width
    function getScrollbarWidth() {
        const scrollDiv = document.createElement('div');
        scrollDiv.style.visibility = 'hidden';
        scrollDiv.style.overflow = 'scroll'; // Force scrollbar
        scrollDiv.style.width = '50px';
        scrollDiv.style.height = '50px';
        document.body.appendChild(scrollDiv);

        const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        return scrollbarWidth;
    }
});
