// Project-specific content (GLOBAL)
const projectData = {
  1: {
    title: "Drone Registration System",
    content: "project1.html",
    chips: ["Angular", "TypeScript", "Firebase", "HTML", "CSS", "JavaScript", "Bootstrap"],
    links: { demo: null, github: null }
  },
  2: {
    title: "Fishing Dashboard",
    content: "project2.html",
    chips: ["Power BI", "SQL", "DAX"],
    links: { demo: null, github: null }
  },
  3: {
    title: "Geek Investments",
    content: "project3.html",
    chips: ["PHP/CakePHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    links: { demo: null, github: null }
  },
  4: {
    title: "Client Health Tracker",
    content: "project4.html",
    chips: ["C", "Makefiles", "TCP/IP", "Sockets"],
    links: { demo: null, github: null }
  }
};

// GLOBAL function so inline onclick can find it
async function openProjectModal(projectId) {
  const modalTitle = document.getElementById("projectModalLabel");
  const modalContent = document.getElementById("modalContent");
  const modalFooter = document.getElementById("modalFooter");

  try {
    const project = projectData[projectId];
    if (!project) throw new Error(`Unknown projectId: ${projectId}`);

    // IMPORTANT: GitHub Pages-safe path (no leading "/")
    const response = await fetch(`projects/${project.content}`);
    if (!response.ok) throw new Error(`Failed to fetch: projects/${project.content}`);

    const projectHTML = await response.text();

    modalTitle.textContent = project.title;
    modalContent.innerHTML = projectHTML;

    const chipsHTML = (project.chips || [])
      .map(chip => `<span class="badge text-light fw-normal fs-7 me-1 mb-1">${chip}</span>`)
      .join("");

    const links = project.links || {};
    const linkButtons = [
      links.demo
        ? `<a class="btn btn-primary me-2 mb-2" href="${links.demo}" target="_blank" rel="noopener">
             <i class="fa-solid fa-arrow-up-right-from-square"></i> Live / Demo
           </a>`
        : ""
    //   ,links.github
    //     ? `<a class="btn btn-outline-light me-2 mb-2" href="${links.github}" target="_blank" rel="noopener">
    //          <i class="fab fa-github"></i> GitHub
    //        </a>`
    //     : "",
    //   `<a class="btn btn-outline-light me-2 mb-2" href="https://github.com/EmanPaul2000" target="_blank" rel="noopener">
    //      <i class="fab fa-github"></i> More on GitHub
    //    </a>`
    ].filter(Boolean).join("");

    modalFooter.innerHTML = `
      <div class="row w-100 align-items-start">
        <div class="col-12 tech-chips-container">
          <div class="tech-chips d-flex flex-wrap justify-content-start">
            ${chipsHTML}
          </div>
        </div>
        <div class="col-12 mt-3 d-flex flex-wrap justify-content-end">
          ${linkButtons}
          <button type="button" class="btn btn-secondary mb-2" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    `;

    const projectModal = new bootstrap.Modal(document.getElementById("projectModal"));
    projectModal.show();
  } catch (error) {
    console.error("Error loading project:", error);
    if (modalContent) modalContent.innerHTML = `<p>Error loading project. Please try again later.</p>`;
  }
}

// expose explicitly for inline onclick
window.openProjectModal = openProjectModal;

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

// Simple filter buttons (works for any container)
(function initFilters(){
  document.querySelectorAll('.filter-bar').forEach(bar => {
    const buttons = bar.querySelectorAll('.filter-btn');
    const section = bar.closest('.section') || document;
    const grid = section.querySelector('.grid-cards');
    if(!grid) return;

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        grid.querySelectorAll('.grid-card').forEach(card => {
          const tags = (card.getAttribute('data-tags') || '').split(' ');
          const show = filter === 'all' || tags.includes(filter);
          card.classList.toggle('is-hidden', !show);
        });
      });
    });
  });
})();

// Disable Scrollify on mobile/tablet screens (<= 768px) and enable normal scrolling
(function handleScrollifyResponsive() {
  const MOBILE_MAX = 768;
  const mq = window.matchMedia(`(max-width: ${MOBILE_MAX}px)`);

  function setScrollMode() {
    const isMobile = mq.matches;

    // If Scrollify isn't loaded, just ensure normal scroll
    if (!window.jQuery || !jQuery.scrollify) {
      document.documentElement.style.overflowY = "auto";
      document.body.style.overflowY = "auto";
      return;
    }

    if (isMobile) {
      // Turn OFF scrollify and restore normal scrolling
      jQuery.scrollify.disable();
      document.documentElement.style.overflowY = "auto";
      document.body.style.overflowY = "auto";
    } else {
      // Turn ON scrollify (if you already init it elsewhere, this just re-enables)
      jQuery.scrollify.enable();
      document.documentElement.style.overflowY = "hidden";
      document.body.style.overflowY = "hidden";
    }
  }

  // Run once on load + update on resize/orientation change
  window.addEventListener("load", setScrollMode);
  window.addEventListener("resize", setScrollMode);
  window.addEventListener("orientationchange", setScrollMode);

  // Also listen to media query changes (best for mobile rotation)
  if (mq.addEventListener) mq.addEventListener("change", setScrollMode);
  else mq.addListener(setScrollMode); // Safari fallback
})();
