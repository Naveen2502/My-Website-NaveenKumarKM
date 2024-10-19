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



document.addEventListener('DOMContentLoaded', function() {
    const titles = document.querySelectorAll('.section-title');
    
    function handleScroll() {
        titles.forEach(title => {
            const rect = title.getBoundingClientRect();
            
            // Check if title is in the viewport
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                title.classList.add('visible');
            } else {
                title.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on page load to check initial position
});


 



