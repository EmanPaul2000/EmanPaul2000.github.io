document.addEventListener("DOMContentLoaded", function () {

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
            after: updateScrollifyIndex
        });

        // Restore saved scroll position on page load if it exists
        const savedIndex = parseInt(localStorage.getItem('scrollifyIndex'), 10);
        if (!isNaN(savedIndex)) {
            $.scrollify.instantMove(savedIndex);
        }
    }

    // Save position periodically
    setInterval(updateScrollifyIndex, 1000); // Save every 1 second

    // Save position on page unload
    window.addEventListener("beforeunload", updateScrollifyIndex);

    // Save position when tab becomes inactive
    document.addEventListener("visibilitychange", function() {
        if (document.visibilityState === 'hidden') {
            updateScrollifyIndex();
        }
    });

    // Handle window resizing
    window.addEventListener("resize", debounce(() => {
        $.scrollify.instantMove(savedIndex);
    }, 500));
    
    // Scroll Up Button Event
    $("#scroll-up").click(function () {
        $.scrollify.previous();
    });

    // Scroll Down Button Event
    $("#scroll-down").click(function () {
        $.scrollify.next();
    });
});

// Debounce function for resize
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Variable to hold the current Scrollify index
let savedIndex = 0;

// Function to update and save the current Scrollify index
function updateScrollifyIndex() {
    savedIndex = $.scrollify.currentIndex();
    localStorage.setItem('scrollifyIndex', savedIndex);
}
