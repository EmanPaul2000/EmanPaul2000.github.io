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

// Project-specific content
const projectData = {
    1: {
        title: "Drone Registration System",
        content: `
            <div class="row">
                <div class="col-md-6 text-justify">
                    <!-- Description Content -->
                    <p>This Angular application is a drone registration management system designed to provide users with a secure and efficient way to handle drone registration data. It incorporates role-based access control, where each user—depending on their role (e.g., system administrator, data entry manager, data entry clerk)—has tailored access to specific functionalities. Only authorized users can add, edit, or delete records, ensuring data integrity and protecting sensitive information.</p>
                    
                    <h5>User Authentication and Role Management:</h5>
                    <p>Powered by Firebase, users authenticate to gain access to different functionalities based on assigned roles, with role-based UI adjustments for a personalized experience.</p>
                    
                    <h5>Drone Registration Management:</h5>
                    <p>Authorized users can add, view, update, or delete drone registrations, complete with input validation to maintain data consistency. Each record includes fields for serial number, brand, model, owner details, and contact information.</p>
                    
                    <h5>Data Export Options:</h5>
                    <p>The application enables users to export registration data in PDF or Excel formats, making it easy to archive or share information in accessible, professional formats.</p>
                    
                    <h5>Responsive Design and User Interface:</h5>
                    <p>Built with Bootstrap, the interface is fully responsive, ensuring usability across desktops, tablets, and mobile devices. A dynamic background carousel showcases drone images with a dark overlay, enhancing visual appeal without distracting from the main content.</p>
                    
                    <h5>Detailed Form Validation and Error Messaging:</h5>
                    <p>Form inputs have robust validation to prevent errors, with immediate feedback for required fields, format checks, and minimum lengths, improving data quality and user experience.</p>
                    
                    <p>This system provides a streamlined, visually appealing way to manage drone registrations, balancing user accessibility with secure, role-specific access control. It’s ideal for organizations that need a structured, secure platform for handling drone data efficiently.</p>
                </div>
                <div class="col-md-6">
                    <!-- Unique ID for Modal Carousel -->
                    <div id="modalProjectCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="assets/images/DroneRegistrationSystem/IndexScreen.png" class="d-block w-100" alt="Home Screen">
                            </div>
                            <div class="carousel-item">
                                <img src="assets/images/DroneRegistrationSystem/DetailsScreen.png" class="d-block w-100" alt="Details Screen">
                            </div>
                            <div class="carousel-item">
                                <img src="assets/images/DroneRegistrationSystem/AddScreen.png" class="d-block w-100" alt="Add Drone Screen">
                            </div>
                            <div class="carousel-item">
                                <img src="assets/images/DroneRegistrationSystem/UpdateScreen.png" class="d-block w-100" alt="Update Drone Screen">
                            </div>
                            <div class="carousel-item">
                                <img src="assets/images/DroneRegistrationSystem/Register-LoginScreen.png" class="d-block w-100" alt="Register/Login Screen">
                            </div>
                            <!-- YouTube Video Embed as Last Slide -->
                            <div class="carousel-item">
                                <iframe width="816.55" height="403.27" src="https://www.youtube.com/embed/5JvwzNgehKo?si=cq3hLOjuAlpPpIrq" title="Drone Registration System Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                            
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#modalProjectCarousel" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#modalProjectCarousel" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <!-- Separate Caption Container -->
                        <div id="carouselCaption" class="text-center mt-2">
                            <h5>Home Screen</h5> <!-- Default Caption -->
                        </div>
                </div>
            </div>
        `,
        chips: ["Angular", "TypeScript", "Firebase", "HTML", "CSS", "JavaScript", "Bootstrap" ]
    },
    2: {
        title: "Fishing Dashboard",
        content: `
            <div class="row">
                <div class="col-md-6 text-justify">
                    <!-- General Description, Dashboard Highlights, and Suggested Usage -->
                    <p>This Power BI dashboard analyzes global fish catch data over time, providing insights into total catch volume, species diversity, and country contributions. Users can apply interactive filters to customize their view by year, location, country, and species, making it a valuable tool for exploring trends in fishing practices and biodiversity.</p>

                    <h5>Dashboard Highlights</h5>
                    <ul>
                        <li><strong>Quick Metrics with Drill-Down:</strong> KPI cards for fast insights, with detailed visuals for deeper exploration.</li>
                        <li><strong>Trends Over Time:</strong> Line and stacked charts display temporal trends in fishing practices.</li>
                        <li><strong>Geographic and Species Distribution:</strong> Treemap and species charts highlight diversity.</li>
                        <li><strong>Interactive Analysis:</strong> Filters and tooltips allow customized data exploration.</li>
                    </ul>

                    <h5>Suggested Usage</h5>
                    <p><strong>Executives:</strong> High-level KPIs offer a quick snapshot of key metrics.</p>
                    <p><strong>Researchers:</strong> Species composition and trend charts support biodiversity studies.</p>
                    <p><strong>Analysts:</strong> Filters allow regional analysis to uncover trends in fishing practices.</p>
                </div>

                <div class="col-md-6">
                    <!-- Carousel with Individual Image Descriptions -->
                    <div id="fishingDashboardCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="carousel-content">
                                    <img src="assets/images/FishingDashboard/Screenshot1-Overview.png" class="d-block w-100" alt="Overview">
                                    <div class="carousel-caption-below">
                                        <h5>Overview</h5>
                                        <p>This screenshot shows the entire dashboard layout, featuring high-level KPI cards at the top, key visuals in the center, and slicers on the right for easy filtering.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="carousel-content">
                                    <img src="assets/images/FishingDashboard/Screenshot2-KPICards.png" class="d-block w-100" alt="KPI Cards">
                                    <div class="carousel-caption-below">
                                        <h5>KPI Cards</h5>
                                        <p>Three KPI cards at the top summarize total catch, unique species count, and countries involved, offering quick, high-level insights into the data’s scale and diversity.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="carousel-content">
                                    <img src="assets/images/FishingDashboard/Screenshot3-YearlyCatchComparisonbyCountry.png" class="d-block w-100" alt="Yearly Catch Comparison by Country">
                                    <div class="carousel-caption-below">
                                        <h5>Yearly Catch Comparison by Country</h5>
                                        <p>A stacked column chart showing each country's annual contribution to the total catch, with color-coded bars by country for easy comparison.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="carousel-content">
                                    <img src="assets/images/FishingDashboard/Screenshot4-AnnualCatchTrend.png" class="d-block w-100" alt="Annual Catch Trend">
                                    <div class="carousel-caption-below">
                                        <h5>Annual Catch Trend</h5>
                                        <p>A line chart displaying the total catch trend over years, with specific values displayed on hover. This highlights fluctuations in catch volumes, possibly reflecting environmental or economic factors.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="carousel-content">
                                    <img src="assets/images/FishingDashboard/Screenshot5-SpeciesCompositionbyYear.png" class="d-block w-100" alt="Species Composition by Year">
                                    <div class="carousel-caption-below">
                                        <h5>Species Composition by Year</h5>
                                        <p>A 100% stacked column chart illustrating the composition of the catch by species each year, helping track biodiversity changes over time.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="carousel-content">
                                    <img src="assets/images/FishingDashboard/Screenshot6-CatchbyCountry.png" class="d-block w-100" alt="Catch by Country">
                                    <div class="carousel-caption-below">
                                        <h5>Catch by Country</h5>
                                        <p>A treemap visualizing catch volume by country. Each country’s area is sized and colored according to its contribution to the total catch volume.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="carousel-content">
                                    <img src="assets/images/FishingDashboard/Screenshot7-SlicerDemostration.png" class="d-block w-100" alt="Slicer Demonstration">
                                    <div class="carousel-caption-below">
                                        <h5>Slicer Demonstration</h5>
                                        <p>Interactive filters let users refine the data view by location, country, species, and date for focused analysis.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="carousel-content">
                                    <img src="assets/images/FishingDashboard/Screenshot8-Tooltips.png" class="d-block w-100" alt="Tooltips">
                                    <div class="carousel-caption-below">
                                        <h5>Tooltips</h5>
                                        <p>Hovering over data points reveals detailed tooltips, providing additional context without cluttering visuals.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#fishingDashboardCarousel" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#fishingDashboardCarousel" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        `,
        chips: ["Power BI", "SQL", "DAX"]
    },    
    3: {
        title: "Geek Investments",
        content: `
            <div class="row">
                <div class="col-md-6 text-justify">
                    <!-- General Description -->
                    <p>Geek Investments is a dynamic and interactive project simulating a social trading platform. It allows users to record their investment trades, share insights with other users, and engage with the community through likes and selective sharing. Users can log in, add trades with detailed information, view individual trade details, and share trades with specific users via email. Visual feedback is provided through toast notifications to confirm each action, enhancing the user experience. This non-commercial application captures essential functionalities of social investing platforms, such as user authentication, trade management, and interactive social features, to create a realistic and engaging simulation.</p>
                </div>

                <div class="col-md-6">
                    <!-- Carousel for GIFs and Descriptions -->
                    <div id="geekInvestmentsCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="carousel-content">
                                    <img src="assets/images/GeekInvestments/Gifs/RegisterAndLogin.gif" class="d-block w-100" alt="User Registration and Login">
                                    <div class="carousel-caption-below">
                                        <h5>User Registration and Login</h5>
                                        <p>This GIF demonstrates how to register a new user account, including filling out the form fields and creating a secure password. After registration, it shows the login process, where the user enters their credentials to access the main dashboard.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="carousel-content">
                                    <img src="assets/images/GeekInvestments/Gifs/AddTrade.gif" class="d-block w-100" alt="Adding a New Trade">
                                    <div class="carousel-caption-below">
                                        <h5>Adding a New Trade</h5>
                                        <p>This GIF captures the process of adding a trade entry. It shows the user entering details such as ticker, price, shares, and uploading an image. Upon submission, a success toast notification confirms that the trade has been successfully saved.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="carousel-content">
                                    <img src="assets/images/GeekInvestments/Gifs/ViewTradeDetails.gif" class="d-block w-100" alt="Viewing Trade Details">
                                    <div class="carousel-caption-below">
                                        <h5>Viewing Trade Details</h5>
                                        <p>In this GIF, the user selects a specific trade to view more information, displaying detailed info such as ticker, price, shares, and purchase date, with any additional notes from the user.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="carousel-content">
                                    <img src="assets/images/GeekInvestments/Gifs/Like-Unlike.gif" class="d-block w-100" alt="Liking and Unliking a Trade">
                                    <div class="carousel-caption-below">
                                        <h5>Liking and Unliking a Trade</h5>
                                        <p>This GIF shows the user clicking to "like" a trade, which increases the like count displayed on the screen, and "unlike" it, with the count decreasing accordingly, with toast notifications confirming each action.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="carousel-content">
                                    <img src="assets/images/GeekInvestments/Gifs/ShareTrade.gif" class="d-block w-100" alt="Sharing a Trade with Another User">
                                    <div class="carousel-caption-below">
                                        <h5>Sharing a Trade with Another User</h5>
                                        <p>The GIF demonstrates the sharing functionality, where a user selects another user’s email to share the trade. After choosing the recipient, the user submits the form and receives a confirmation notification.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="carousel-content">
                                    <img src="assets/images/GeekInvestments/Gifs/UpdateProfile.gif" class="d-block w-100" alt="Sharing a Trade with Another User">
                                    <div class="carousel-caption-below">
                                        <h5>Sharing a Trade with Another User</h5>
                                        <p>The GIF demonstrates the update functionality, where a user can update their own user details including their password for whatever reasons necessary.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#geekInvestmentsCarousel" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#geekInvestmentsCarousel" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        `,
        chips: ["PHP/CakePHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"]
    },
    4: {
        title: "Client Health Tracker",
        content: `
            <div class="row">
                <div class="col-md-6 text-justify">
                    <!-- Project Description -->
                    <p>This project is a client-server application for monitoring health metrics from wearable devices. The server operates in a multi-threaded environment, allowing simultaneous connections from multiple clients over TCP, and logs all interactions for historical tracking.</p>

                    <h5>Key Features</h5>

                    <ul>
                        <li><strong>Multi-Client Support:</strong> Handles multiple client connections concurrently, with each client interaction managed in a separate thread.</li>
                        <li><strong>Health Monitoring:</strong> Clients can request metrics such as temperature, heart rate, and step count. The server responds with real-time data and logs each request.</li>
                        <li><strong>Command-Based System:</strong> Clients send commands (e.g., TEMP, RATE, STEPS), and the server responds accordingly, maintaining counters and logs.</li>
                        <li><strong>Data Analysis:</strong> The client app interprets responses, providing feedback like “Fever” for high temperatures or step goal progress.</li>
                    </ul>

                    <h5>Workflow</h5>
                    <p>Clients connect to the server, send commands, and receive responses based on their request. Each interaction is logged for analysis, offering a reliable solution for tracking health trends in IoT applications.</p>
                </div>

                <div class="col-md-6">
                    <!-- YouTube Video Embed -->
                    <div class="video-container">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/ho9mrc4Hyws?si=nYdz4S2Cad2nTD9h" title="Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                    
                    </div>
                </div>
            </div>
        `,
        chips: ["C", "Makefiles", "TCP/IP", "Sockets"]
    } 
};

// Function to open the modal and load project data based on ID
function openProjectModal(projectId) {
    const modalTitle = document.getElementById("projectModalLabel");
    const modalContent = document.getElementById("modalContent");
    const modalFooter = document.getElementById("modalFooter");

    // Set modal title and content for the selected project
    modalTitle.textContent = projectData[projectId].title;
    modalContent.innerHTML = projectData[projectId].content;

    // Populate footer with chips aligned to the left
    modalFooter.innerHTML =
        `<div class="chip-container">${projectData[projectId].chips
            .map(chip => `<span class="chip">${chip}</span>`)
            .join("")}</div>` + 
        `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>`;

    // Open the modal
    const projectModal = new bootstrap.Modal(document.getElementById('projectModal'));
    projectModal.show();
}

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