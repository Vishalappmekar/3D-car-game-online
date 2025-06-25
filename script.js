document.addEventListener('DOMContentLoaded', function() {
    // --- Mobile Menu Toggle ---
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const headerContainer = document.querySelector('#main-header .container'); // For nav-active class

    if (mobileMenuToggle && mainNav && headerContainer) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            headerContainer.classList.toggle('nav-active'); // Used to potentially hide search when nav is open
            // Toggle icon
            const icon = mobileMenuToggle.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // --- Fullscreen Button for Game ---
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', function() {
            const gameEmbedContainer = document.getElementById('game-embed-container');
            const gameIframe = gameEmbedContainer ? gameEmbedContainer.querySelector('iframe') : null;
            
            const elementToFullscreen = gameIframe || gameEmbedContainer; // Prefer iframe, fallback to container

            if (elementToFullscreen) {
                if (elementToFullscreen.requestFullscreen) {
                    elementToFullscreen.requestFullscreen();
                } else if (elementToFullscreen.mozRequestFullScreen) { /* Firefox */
                    elementToFullscreen.mozRequestFullScreen();
                } else if (elementToFullscreen.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                    elementToFullscreen.webkitRequestFullscreen();
                } else if (elementToFullscreen.msRequestFullscreen) { /* IE/Edge */
                    elementToFullscreen.msRequestFullscreen();
                }
            }
        });
    }

    // --- Tabs for Game Details Page ---
    // Get all tab links and tab content
    const tabLinks = document.querySelectorAll(".tabs .tab-link");
    const tabContents = document.querySelectorAll(".game-details .tab-content");

    // Add click event listener to each tab link
    tabLinks.forEach(link => {
        link.addEventListener("click", function() {
            const tabId = this.textContent.toLowerCase().replace(/\s+/g, ''); // e.g., "description", "howtoplay"

            // Remove active class from all tab links and contents
            tabLinks.forEach(item => item.classList.remove("active"));
            tabContents.forEach(item => item.classList.remove("active"));

            // Add active class to the clicked tab link and corresponding content
            this.classList.add("active");
            const activeContent = document.getElementById(tabId);
            if (activeContent) {
                activeContent.classList.add("active");
            }
        });
    });

    // Function to open a specific tab (can be called by buttons)
    window.openTab = function(evt, tabName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tab-content");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
            tabcontent[i].classList.remove("active");
        }
        tablinks = document.getElementsByClassName("tab-link");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove("active");
        }
        const activeContent = document.getElementById(tabName);
        if (activeContent) {
            activeContent.style.display = "block";
            activeContent.classList.add("active");
        }
        if (evt) { // Check if evt is passed (from button click)
            evt.currentTarget.classList.add("active");
        }
    }
    
    // Activate the first tab by default if it exists
    const firstTabLink = document.querySelector(".tabs .tab-link");
    if (firstTabLink) {
        firstTabLink.click(); // Simulate a click to set up the first tab
    }

});
