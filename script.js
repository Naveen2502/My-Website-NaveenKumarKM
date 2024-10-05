// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById("bg-toggle").addEventListener("click", function() {
    document.body.classList.toggle("no-background");
    
    const portfolioSection = document.querySelector('.portfolio');
    if (portfolioSection) {
    portfolioSection.classList.toggle("no-background");
    } 

    const contactSection = document.querySelector('.contact');
    if (contactSection) {
        contactSection.classList.toggle("no-background");
    } 

});


 
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.section-title');

    const observerOptions = {
        root: null, // Use the viewport as the container
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add class when in view
            } else {
                entry.target.classList.remove('visible'); // Remove class when out of view
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section); // Observe each section
    });
    });



       const profilePhoto = document.querySelector('.profile-photo');
    
        // Function to update the profile photo rotation based on cursor/touch position
        function updateRotation(event) {
            // Prevent default behavior for touch events
            event.preventDefault();
    
            const clientX = event.touches ? event.touches[0].clientX : event.clientX;
            const clientY = event.touches ? event.touches[0].clientY : event.clientY;
    
            // Get the center of the image
            const { left, top, width, height } = profilePhoto.getBoundingClientRect();
            const centerX = left + width / 2;
            const centerY = top + height / 2;
    
            // Calculate the distance from the touch/cursor to the center
            const deltaX = (clientX - centerX) / 15; // Adjust for sensitivity
            const deltaY = (clientY - centerY) / 15; // Adjust for sensitivity
    
            // Apply the 3D transformation
            profilePhoto.style.transform = `rotateY(${deltaX}deg) rotateX(${-deltaY}deg)`;
        }
    
        // Mouse movement event
        document.addEventListener('mousemove', updateRotation);
    
        // Touch movement event
        document.addEventListener('touchmove', updateRotation);
    
        // Reset rotation on mouse/touch leave
        profilePhoto.addEventListener('mouseleave', () => {
            profilePhoto.style.transform = 'rotateY(0deg) rotateX(0deg)';
        });
        profilePhoto.addEventListener('touchend', () => {
            profilePhoto.style.transform = 'rotateY(0deg) rotateX(0deg)';
        });
